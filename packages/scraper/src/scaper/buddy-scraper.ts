import type { Cheerio, CheerioAPI } from 'cheerio';
import type { Element } from 'domhandler';
import type { JSONSchema4 } from 'json-schema';
import { Scraper } from './scraper';

type NamedSchemaDefinition = { name: string; definition: JSONSchema4 };

export class BuddyScraper extends Scraper<{
    base: NamedSchemaDefinition[];
    action: NamedSchemaDefinition & { additionalDefinitions: NamedSchemaDefinition[] };
}> {
    constructor() {
        super({
            base: ($, _html, url) => {
                const baseUrl = new URL(url).origin;

                $('aside .accordion-wrapper > .transition-height  > a')
                    .toArray()
                    .map(h => $(h))
                    .forEach(a => {
                        this.queue('action', baseUrl + a.attr('href'));
                    });

                const headlines = $('[id$="-schema"]:is(h2, h3)');
                return headlines
                    .toArray()
                    .map(h => $(h))
                    .map(h => {
                        let name = h
                            .text()
                            .replace(/ schema$/, '')
                            .replace(/s$/, '')
                            .replace(/ (\w)/, (_, c) => c.toUpperCase());

                        if (name === 'Action') {
                            name = 'ActionCommon';
                        }

                        const table = h.nextAll('.table-responsive').first().find('table');

                        return { name, definition: this.parseTable($, table, baseUrl) };
                    });
            },
            action: ($, _html, url) => {
                const baseUrl = new URL(url).origin;

                const name = $('h1')
                    .text()
                    .replace(/ with YAML$/, '')
                    .replace(/[ -](\w)/g, (_, c) => c.toUpperCase())
                    .replace(/\W/g, '');

                return {
                    name,
                    definition: {
                        allOf: [
                            { $ref: '#/definitions/ActionCommon' },
                            this.parseTable($, $('.table-responsive').first().find('table'), baseUrl)
                        ]
                    },
                    additionalDefinitions: $('[id$="-schema"]:is(h2, h3),[id$="-properties"]:is(h2, h3)')
                        .toArray()
                        .map(h => $(h))
                        .map(h => {
                            const name = h
                                .text()
                                .replace(/ (schema|properties)$/i, '')
                                .replace(/s$/, '')
                                .replace(/ (\w)/, (_, c) => c.toUpperCase());

                            const table = h.nextAll('.table-responsive').first().find('table');

                            return { name, definition: this.parseTable($, table, baseUrl) };
                        })
                };
            }
        });
    }

    private prepareDescription($: CheerioAPI, el: Element, baseUrl: string) {
        $(el)
            .find('a[href]')
            .each((_, e) => {
                const a = $(e);
                let href = a.attr('href');
                if (href?.startsWith('/')) {
                    href = baseUrl + href;
                }
                a.text(`[${a.text()}](${href})`);
            });
        $(el)
            .find('code')
            .each((_, e) => {
                const code = $(e);
                code.text(`\`${code.text()}\``);
            });
    }

    private parseTable($: CheerioAPI, table: Cheerio<Element>, baseUrl: string) {
        const rows = table
            .first()
            .find('tr:has(> td)')
            .toArray()
            .map(e => $(e));
        const definition: JSONSchema4 = { type: 'object', properties: {}, required: [], additionalProperties: false };

        for (const row of rows) {
            const tds = $(row).find('td');
            const isRequired = $(tds[0]).text().includes('Required');
            $(tds[0]).children().remove();
            const name = $(tds[0]).text().replace(/\W/g, '');

            this.prepareDescription($, tds[2], baseUrl);
            definition.properties![name] = this.parseType(
                name,
                $(tds[1]).text().trim(),
                $(tds[2])
                    .text()
                    .trim()
                    .replace(/\u00A0/g, ' ')
            );

            if (isRequired) {
                (definition.required as string[]).push(name);
            }
        }
        return definition;
    }

    private parseType(_name: string, type: string, description: string): JSONSchema4 {
        const isArray = type.endsWith('[]');
        if (isArray) {
            type = type.substring(0, type.length - 2);
        }

        let inner: JSONSchema4 | undefined;

        if (type === 'UserPermission' || type === 'GroupPermission') {
            return {
                type: 'object',
                additionalProperties: { type: 'string' },
                description
            };
        }

        if (type === 'Integration') {
            inner = { type: 'string' };
        } else if (type === 'iso 8601 utc date' || type === 'ISO8601 UTC date') {
            inner = { type: 'string', format: 'date-time' };
        } else if (type === 'Integer' || type === 'Int') {
            inner = {
                type: 'integer'
            };
        } else if (type === 'Float') {
            inner = {
                type: 'number'
            };
        } else if (type === 'Boolean') {
            inner = { type: 'boolean' };
        } else if (type === 'String' || type === 'ExecutionPriority') {
            const exact = /(?:Should|Must) be set to\s`?([\w-]+)`?/.exec(description);
            // const oneOf = /Can be one of ([\w-]+(?: \(default\))?(?:\s?,\s?[\w-]+)* or [\w-]+(?: \(default\))?)/.exec(description);
            const oneOf =
                /Can be one of ([\w'`_-]+(?:\s?,\s?[\w'`_-]+)*(?:,?\s)?or\s[\w'`_-]+)(?:\. (?:The )?[Dd]efault \w+ is ([\w'`_-]+))?/.exec(
                    description
                );
            if (exact) {
                inner = {
                    type: 'string',
                    enum: [exact[1]]
                };
            } else if (oneOf) {
                const defaultValue: string | undefined = oneOf[2]?.replace(/^['`](.*)['`]$/, '$1');
                if (defaultValue != null) {
                    description += `\n@default ${JSON.stringify(defaultValue)}`;
                }
                const values = oneOf[1]
                    .split(/\s*(?:,|or)\s*/)
                    .map(t => {
                        if (t.startsWith("'") || t.startsWith('`')) t = t.substring(1);
                        if (t.endsWith("'") || t.endsWith('`')) t = t.substring(0, t.length - 1);
                        // if (t.endsWith(' (default)')) {
                        //     t = t.substring(0, t.length - 10);
                        //     defaultValue = t;
                        // }
                        return t;
                    })
                    .filter(Boolean);
                inner = {
                    type: 'string',
                    enum: values,
                    default: defaultValue
                };
            } else {
                inner = { type: 'string' };
            }
        }

        if (inner) {
            if (isArray) {
                return { type: 'array', items: inner, description };
            }
            inner.description = description;
            return inner;
        }

        if (type === 'PipelinePermissions') {
            type = 'Permission';
        }

        // wrap in `oneOf` to be able to set a description
        return { oneOf: [{ $ref: `#/definitions/${type}` }], description };
    }

    async start(): Promise<void> {
        await super.start('base', 'https://buddy.works/docs/yaml/yaml-schema');
    }
}
