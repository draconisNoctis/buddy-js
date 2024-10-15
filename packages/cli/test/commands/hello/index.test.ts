import { describe, it } from 'node:test';
import { runCommand } from '@oclif/test';
import { expect } from 'chai';

describe('hello', () => {
    it('runs hello', async () => {
        const { stdout } = await runCommand('hello friend --from oclif');

        expect(stdout).to.include('hello friend from oclif!');
    });
});
