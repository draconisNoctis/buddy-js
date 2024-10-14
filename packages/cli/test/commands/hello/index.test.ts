import assert from 'node:assert';
import { describe, it } from 'node:test';
import { runCommand } from '@oclif/test';

describe('hello', () => {
    it('runs hello', async () => {
        const { stdout } = await runCommand('hello friend --from oclif');

        assert(stdout.includes('hello friend from oclif!'));
        // expect(stdout).to.contain('hello friend from oclif!');
    });
});
