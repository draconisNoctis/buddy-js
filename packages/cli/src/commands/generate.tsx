import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { getRegisteredPipelines, isFixed } from '@buddy-js/core';
import Schema from '@buddy-js/types';
import { Spinner, StatusMessage } from '@inkjs/ui';
import { Args, Flags } from '@oclif/core';
import Ajv from 'ajv-draft-04';
import addFormats from 'ajv-formats';
import { glob } from 'glob';
import sanitizeFilename from 'sanitize-filename';
import YAML from 'yaml';
import { getLoader } from '../utils/loader.js';

import { Box, Text } from 'ink';
import type React from 'react';
import { BaseCommand, type View } from '../utils/base-command.js';

type State = Partial<Record<'load' | 'validate' | 'clear' | 'emit', 'skipped' | 'running' | 'done'>> & { result?: string };

function Switch<T extends string | undefined>(
    props: { value: T; _: (val: T) => React.ReactNode } & { [K in NonNullable<T>]?: () => React.ReactNode }
) {
    if (props.value != null && props.value in props && props[props.value]) {
        return props[props.value]!();
    }
    return props._(props.value);
}

export default class Generate extends BaseCommand<typeof Generate, State> {
    static override enableJsonFlag = true;

    static override aliases = ['gen', 'g'];

    static override description = 'Generates YAML files for Buddy CI pipeline definitions';

    static override examples = ['<%= config.bin %> <%= command.id %>'];

    static override args = {
        input: Args.string({ char: 'i', description: 'input file', default: '.buddy/buddy.{ts,mts,cts,js,mjs,cjs}' })
    };

    static override flags = {
        output: Flags.string({ char: 'o', description: 'output directory', default: '.buddy' }),
        clear: Flags.boolean({
            description: '[default: true] Remove all YAML files from output directory before generating',
            default: true,
            allowNo: true
        }),
        cwd: Flags.string({ default: '.' }),
        indent: Flags.integer({ description: 'Indentation depth for generated YAML files', default: 2, helpGroup: 'YAML format' }),
        lineWidth: Flags.integer({ description: 'Max line width for generated YAML files', default: 80, helpGroup: 'YAML format' })
    };

    protected view: View<State> = ({ load, validate, clear, emit, result }) => (
        <Box flexDirection="column">
            <Text>{JSON.stringify({ load, validate, clear, emit }, null, 2)}</Text>
            <Switch
                value={load}
                running={() => <Spinner label="Loading..." />}
                done={() => <StatusMessage variant="success">Loaded</StatusMessage>}
                _={() => <Text color="gray">Load</Text>}
            />
            <Switch
                value={validate}
                running={() => <Spinner label="Validating..." />}
                done={() => <StatusMessage variant="success">Validated</StatusMessage>}
                _={() => <Text color="gray">Validate</Text>}
            />
            <Switch
                value={clear}
                running={() => <Spinner label="Clearing..." />}
                done={() => <StatusMessage variant="success">Cleared</StatusMessage>}
                skipped={() => (
                    <Text color="gray" strikethrough={true}>
                        Clear (Skipped)
                    </Text>
                )}
                _={() => <Text color="gray">Clear</Text>}
            />
            <Switch
                value={emit}
                running={() => <Spinner label="Emitting..." />}
                done={() => <StatusMessage variant="success">Emitted</StatusMessage>}
                _={() => <Text color="gray">Emit</Text>}
            />
            {result && (
                <Box marginTop={1}>
                    <StatusMessage variant="success">{result}</StatusMessage>
                </Box>
            )}
        </Box>
    );
    protected override initialState = {};

    public async *handle(): AsyncGenerator<State> {
        if (!this.flags.clear) {
            yield { clear: 'skipped' };
        }
        const inputFile = await this.findInputFile();

        const extension = path.extname(inputFile);
        const loader = getLoader(extension);

        yield { load: 'running' };

        await loader.load(path.resolve(this.flags.cwd, inputFile));
        yield { load: 'done' };

        const ajv = new Ajv({
            loadSchema: async () => ({})
        });
        addFormats(ajv);

        const pipelines = [...getRegisteredPipelines()];

        yield { validate: 'running' };
        await sleep(16);
        const fn = await ajv.compileAsync(Schema);
        if (!fn(pipelines)) {
            throw new Error(fn.errors!.map(error => error.message).join('\n'));
        }
        yield { validate: 'done' };

        if (this.flags.clear) {
            yield { clear: 'running' };
            const cwd = path.resolve(this.flags.cwd, this.flags.output);
            const files = await glob('*.yml', { cwd, absolute: true });
            await Promise.all(files.map(file => fs.unlink(file)));
            yield { clear: 'done' };
        }

        yield { emit: 'running' };

        const schemaFile = fileURLToPath(import.meta.resolve('@buddy-js/types/schema.json'));
        for (const pipeline of pipelines) {
            const filename = `${sanitizeFilename(pipeline.pipeline).replace(/ +/g, '-') + (isFixed(pipeline) ? '.fixed' : '')}.yml`;
            const yaml = YAML.stringify([pipeline], { indent: this.flags.indent, lineWidth: this.flags.lineWidth });
            const file = path.resolve(this.flags.cwd, this.flags.output, filename);
            await fs.mkdir(path.dirname(file), { recursive: true });
            if (
                !(await fs.access(file).then(
                    () => true,
                    () => false
                ))
            ) {
                await fs.writeFile(file, `# yaml-language-server: $schema=${path.relative(path.dirname(file), schemaFile)}\n`);
            }
            await fs.appendFile(file, yaml);
        }

        yield { emit: 'done' };

        const result = `Created ${pipelines.length} Pipeline(s)`;

        yield { result };
        return {
            result
        };
    }

    private async findInputFile(): Promise<string> {
        const files = await glob(this.args.input, { cwd: this.flags.cwd, absolute: true });

        if (!files[0]) {
            throw new Error(`Cannot find input file: "${this.args.input}" in ${this.flags.cwd}`);
        }

        return files[0]!;
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
