import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runCommand } from '@oclif/test';

describe('hello world', () => {
    it('runs hello world cmd', async () => {
        const { stdout } = await runCommand('hello world');
        assert(stdout.includes('hello world!'));
        // expect(stdout).to.contain('hello world!');
    });
});
