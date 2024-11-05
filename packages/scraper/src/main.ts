import fs from 'node:fs/promises';
import type { JSONSchema4 } from 'json-schema';
import { compile } from 'json-schema-to-typescript';
import { BuddyScraper } from './scaper/buddy-scraper';

const scraper = new BuddyScraper();

const mainDefinition: JSONSchema4 = {
    $schema: 'http://json-schema.org/draft-04/schema#',
    type: 'array',
    items: {
        $ref: '#/definitions/Pipeline'
    },
    definitions: {
        Tag: {
            type: 'object',
            properties: {
                key: { type: 'string' },
                value: { type: 'string' }
            },
            required: ['key', 'value'],
            additionalProperties: false
        },
        SyncPath: {
            type: 'object',
            properties: {
                pipeline_path: { type: 'string' },
                vm_path: { type: 'string' },
                direction: { type: 'string', enum: ['PIPELINE_TO_VM', 'VM_TO_PIPELINE'] },
                excludes: { type: 'string' }
            },
            required: ['pipeline_path', 'vm_path', 'direction', 'excludes'],
            additionalProperties: false
        },
        Service: {
            type: 'object',
            properties: {
                type: {
                    type: 'string',
                    enum: ['MYSQL', 'MONGO_DB', 'MARIADB', 'POSTGRE_SQL', 'REDIS', 'MEMCACHED', 'ELASTICSEARCH', 'CUSTOM']
                },
                version: { type: 'string' },
                connection: {}
            },
            required: ['type']
        },
        SandboxPlaybook: {
            type: 'object',
            properties: {
                type: { type: 'string' }
            },
            required: ['type'],
            additionalProperties: true
        },
        Mapping: {
            type: 'object',
            properties: {
                application_port: { type: 'integer' },
                subdomain: { type: 'string' },
                username: { type: 'string' },
                password: { type: 'string' }
            },
            required: ['application_port', 'subdomain'],
            additionalProperties: false
        },
        Asset: {
            type: 'object',
            properties: {
                source_path: { type: 'string' },
                label: { type: 'string' }
            },
            required: ['source_path', 'label'],
            additionalProperties: false
        },
        Header: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                value: { type: 'string' }
            },
            required: ['name', 'value'],
            additionalProperties: false
        },
        Cookie: {
            type: 'object',
            properties: {
                name: { type: 'string' },
                value: { type: 'string' }
            },
            required: ['name', 'value'],
            additionalProperties: false
        },
        APKs: {
            type: 'object',
            properties: {
                apk_path: { type: 'string' },
                main_expansion_path: { type: 'string' },
                patch_expansion_path: { type: 'string' }
            },
            required: ['apk_path'],
            additionalProperties: false
        },
        Replacement: {
            type: 'object',
            properties: {
                replace_from: { type: 'string' },
                replace_to: { type: 'string' }
            },
            required: ['replace_from', 'replace_to'],
            additionalProperties: false
        },
        Screenshot: {
            type: 'object',
            properties: {
                url: { type: 'string' },
                baseline: { type: 'string' },
                headers: { type: 'array', items: { $ref: '#/definitions/Header' } },
                excluded_area: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            url: { type: 'string' },
                            min_x: { type: 'number' },
                            min_y: { type: 'number' },
                            max_x: { type: 'number' },
                            max_y: { type: 'number' }
                        },
                        required: ['url', 'min_x', 'min_y', 'max_x', 'max_y'],
                        additionalProperties: false
                    }
                }
            },
            required: ['url', 'baseline', 'headers', 'excluded_area'],
            additionalProperties: false
        },
        ExecutionPriority: {
            type: 'string',
            enum: ['LOW', 'NORMAL', 'HIGH'],
            default: 'NORMAL'
        }
    }
};

const actionNames: string[] = [];
let commonAction: JSONSchema4 | undefined;

scraper.on('base', definitions => {
    for (const { name, definition } of definitions) {
        if (name === 'ActionCommon') {
            commonAction = definition;
        } else {
            mainDefinition.definitions![name] = definition;
        }
    }
});

scraper.on('action', ({ name, definition, additionalDefinitions }) => {
    actionNames.push(name);
    mainDefinition.definitions![name] = {
        ...commonAction,
        ...definition,
        properties: {
            ...commonAction?.properties,
            ...definition.properties
        },
        required: [...new Set([...(commonAction?.required as string[]), ...(definition.required as string[])])]
    };
    for (const { name, definition } of additionalDefinitions) {
        mainDefinition.definitions![name] = definition;
    }
});

let first = true;

const PROGRESS_LENGTH = 50;
const PROGRESS_DONE_SYMBOL = '█';
const PROGRESS_TODO_SYMBOL = '░';

scraper.on('progress', ({ done, total }) => {
    const prefix = first ? '' : '\x1b[1A\r';

    const doneLength = ((done / total) * PROGRESS_LENGTH) | 0;

    const progress = PROGRESS_DONE_SYMBOL.repeat(doneLength) + PROGRESS_TODO_SYMBOL.repeat(PROGRESS_LENGTH - doneLength);

    console.info(`${prefix}${progress} ${done} of ${total} done`);
    first = false;
});

scraper
    .start()
    .then(() => {
        mainDefinition.definitions!.TriggerPipeline./* allOf![1]. */ required = (
            mainDefinition.definitions!.TriggerPipeline./* allOf![1]. */ required as string[]
        ).filter(property => !['next_pipeline_id', 'next_project_name', 'next_pipeline_name'].includes(property));
        mainDefinition.definitions!.Action = {
            oneOf: actionNames.toSorted((a, b) => a.localeCompare(b)).map(name => ({ $ref: `#/definitions/${name}` }))
        };

        mainDefinition.definitions = Object.fromEntries(
            Object.entries(mainDefinition.definitions!).toSorted(([a], [b]) => a.localeCompare(b))
        );
    })
    .then(() => fs.writeFile('../types/schema.json', JSON.stringify(mainDefinition, null, 2)))
    .then(() =>
        fs.writeFile(
            '../types/schema.js',
            `Object.defineProperty(exports, "__esModule", { value: true });
module.exports.default = ${JSON.stringify(mainDefinition, null, 2)};`
        )
    )
    .then(() =>
        fs.writeFile(
            '../types/schema.mjs',
            `const Schema = ${JSON.stringify(mainDefinition, null, 2)};
    
export default Schema;`
        )
    )
    .then(() => compile(mainDefinition, 'Buddy YAML'))
    .then(types =>
        fs.writeFile(
            '../types/schema.d.ts',
            `${types}

declare const Schema: typeof import('./schema.json');
export default Schema;`
        )
    )
    .then(
        () => console.log('Done'),
        err => console.error(err)
    );
