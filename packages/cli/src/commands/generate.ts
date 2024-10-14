import fs from 'node:fs/promises';
import path from 'node:path';
import Schema from '@buddy-js/types';
import { Args, Command, Flags, type Interfaces } from '@oclif/core';
import Ajv from 'ajv-draft-04';
import addFormats from 'ajv-formats';
import { getRegisteredPipelines, isFixed } from 'buddy-js';
import chalk from 'chalk';
import { glob } from 'glob';
import sanitizeFilename from 'sanitize-filename';
import YAML from 'yaml';
import { getLoader } from '../utils/loader';

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<(typeof BaseCommand)['baseFlags'] & T['flags']>;
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>;

abstract class BaseCommand<T extends typeof Command> extends Command {
    protected flags!: Flags<T>;
    protected args!: Args<T>;

    public override async init(): Promise<void> {
        await super.init();
        const { args, flags } = await this.parse({
            baseFlags: this.ctor.baseFlags,
            flags: this.ctor.flags,
            args: this.ctor.args,
            enableJsonFlag: this.ctor.enableJsonFlag,
            strict: this.ctor.strict
        });
        this.args = args as Args<T>;
        this.flags = flags as Flags<T>;
    }

    // biome-ignore lint/suspicious/useAwait: required by interface
    protected override async catch(err: Interfaces.CommandError): Promise<void> {
        this.logToStderr(chalk.red`❌ ${err.message}`);
    }
}

export default class Generate extends BaseCommand<typeof Generate> {
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

    public async run(): Promise<void> {
        const { flags } = await this.parse(Generate);

        const inputFile = await this.findInputFile();

        if (!inputFile) {
            throw new Error(`Cannot find input file: "${flags.input}"`);
        }

        console.debug(this.args, this.flags);

        const extension = path.extname(inputFile);
        const loader = getLoader(extension);

        await loader.load(path.resolve(this.flags.cwd, inputFile));

        const ajv = new Ajv();
        addFormats(ajv);

        const pipelines = [...getRegisteredPipelines()];

        if (!ajv.validate(Schema, pipelines)) {
            throw new Error(ajv.errors!.map(error => error.message).join('\n'));
        }

        if (this.flags.clear) {
            const cwd = path.resolve(this.flags.cwd, this.flags.output);
            const files = await glob('*.yml', { cwd, absolute: true });
            await Promise.all(files.map(file => fs.unlink(file)));
        }

        for (const pipeline of pipelines) {
            const filename = `${sanitizeFilename(pipeline.pipeline).replace(/ +/g, '-') + (isFixed(pipeline) ? '.fixed' : '')}.yml`;
            const yaml = YAML.stringify([pipeline], { indent: this.flags.indent, lineWidth: this.flags.lineWidth });
            await fs.writeFile(path.resolve(this.flags.output, filename), yaml, { flag: 'a+' });
        }

        // console.log(Schema);
        // for (const pipeline of pipelines) {
        //     if (!ajv.validate(Schema.definitions.Pipeline, pipeline)) {
        //         throw new Error(ajv.errors!.map(error => error.message).join('\n'));
        //     }
        // }

        // console.debug({ pipelines, Schema });
    }

    private async findInputFile(): Promise<string | undefined> {
        const files = await glob(this.args.input, { cwd: this.flags.cwd, absolute: true });

        return files[0];
    }
}
