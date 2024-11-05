import fs from 'node:fs';
import path from 'node:path';
import { before, describe, it } from 'node:test';
import { expect } from 'chai';
import { glob } from 'glob';
import { runCommand } from '../../utils/run-command.js';

describe('generate', () => {
    before(() => {
        for (const file of glob.sync('__fixtures__/**/*.yml', { cwd: import.meta.dirname, absolute: true, dot: true })) {
            fs.unlinkSync(file);
        }
    });
    for (const type of ['cjs', 'mjs', 'cts', 'mts']) {
        it(`handle ${type}`, async () => {
            const { stdout, stderr } = await runCommand([
                'generate',
                `--cwd=${path.resolve(import.meta.dirname, `__fixtures__/${type}`)}`,
                '--no-clear',
                '--json'
            ]);

            expect(stderr).to.be.empty;
            const file = path.resolve(import.meta.dirname, `__fixtures__/${type}/.buddy/Pipeline.fixed.yml`);
            expect(fs.existsSync(file), `File ${file} should exists`).to.be.true;

            expect(stdout).to.include('Created 1 Pipeline(s)');
        });
    }
});
