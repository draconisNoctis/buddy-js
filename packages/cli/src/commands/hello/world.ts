import { Command } from '@oclif/core';

export default class World extends Command {
    static override args = {};

    static override description = 'Say hello world';

    static override examples = [
        `<%= config.bin %> <%= command.id %>
hello world! (./src/commands/hello/world.ts)
`
    ];

    static override flags = {};

    // biome-ignore lint/suspicious/useAwait: <explanation>
    async run(): Promise<void> {
        this.log('hello world! (./src/commands/hello/world.ts)');
    }
}
