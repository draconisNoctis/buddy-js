import fs from 'node:fs/promises';
import path from 'node:path';
import { getRegisteredPipelines, isFixed } from '@buddy-js/core';
import Schema from '@buddy-js/types';
import { Args, Flags } from '@oclif/core';
import Ajv from 'ajv-draft-04';
import addFormats from 'ajv-formats';
import { glob } from 'glob';
import sanitizeFilename from 'sanitize-filename';
import YAML from 'yaml';
import { getLoader } from '../utils/loader.js';

import { Text } from 'ink';
import { BaseCommand, type View } from '../utils/base-command.js';

export default class Generate extends BaseCommand<typeof Generate, { step: string }> {
    static override enableJsonFlag = true;

    static override aliases = ['gen', 'g'];

    static override description = 'Generates YAML files for Buddy CI pipeline definitions';

    static override examples = ['<%= config.bin %> <%= command.id %>'];

    static override args = {
        input: Args.string({ char: 'i', description: 'input file', default: '.buddy/buddy.{ts,js,mjs,cjs}' })
    };

    static override flags = {
        output: Flags.string({ char: 'o', description: 'output directory', default: '.buddy' }),
        clear: Flags.boolean({
            description: '[default: true] Remove all YAML files from output directory before generating',
            default: true,
            allowNo: true
        }),
        cwd: Flags.string({ default: process.cwd() }),
        indent: Flags.integer({ description: 'Indentation depth for generated YAML files', default: 2, helpGroup: 'YAML format' }),
        lineWidth: Flags.integer({ description: 'Max line width for generated YAML files', default: 80, helpGroup: 'YAML format' })
    };

    protected view: View<{ step: string }> = ({ step }) => <Text>{step}</Text>;
    protected override initialState = { step: 'init' };

    public async *handle() {
        const inputFile = await this.findInputFile();

        const extension = path.extname(inputFile);
        const loader = getLoader(extension);

        yield { step: 'load' };

        await loader.load(path.resolve(this.flags.cwd, inputFile));

        const ajv = new Ajv();
        addFormats(ajv);

        const pipelines = [...getRegisteredPipelines()];

        yield { step: 'validate' };
        if (!ajv.validate(Schema, pipelines)) {
            throw new Error(ajv.errors!.map(error => error.message).join('\n'));
        }

        if (this.flags.clear) {
            yield { step: 'clear' };
            const cwd = path.resolve(this.flags.cwd, this.flags.output);
            const files = await glob('*.yml', { cwd, absolute: true });
            await Promise.all(files.map(file => fs.unlink(file)));
        }

        yield { step: 'emit' };

        for (const pipeline of pipelines) {
            const filename = `${sanitizeFilename(pipeline.pipeline).replace(/ +/g, '-') + (isFixed(pipeline) ? '.fixed' : '')}.yml`;
            const yaml = YAML.stringify([pipeline], { indent: this.flags.indent, lineWidth: this.flags.lineWidth });
            await fs.writeFile(path.resolve(this.flags.output, filename), yaml, { flag: 'a+' });
        }

        yield { step: 'done' };

        return {
            result: `created ${pipelines.length} pipelines`
        };
    }

    private async findInputFile(): Promise<string> {
        const files = await glob(this.args.input, { cwd: this.flags.cwd, absolute: true });

        if (!files[0]) {
            throw new Error(`Cannot find input file: "${this.flags.input}"`);
        }

        return files[0]!;
    }
}
