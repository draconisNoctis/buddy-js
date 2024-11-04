import { execFile } from 'node:child_process';
import path from 'node:path';

const BINARY = process.env.NODE_ENV === 'production' ? 'bin/run.js' : 'bin/dev.js';

export function runCommand(args: readonly string[]): Promise<{ stdout: string; stderr: string }> {
    return new Promise((resolve, reject) => {
        const root = process.env.OCLIF_TEST_ROOT ?? process.cwd();
        execFile(path.resolve(root, BINARY), args, { cwd: root }, (err, stdout, stderr) => {
            if (err) return reject(err);
            resolve({ stdout, stderr });
        });
    });
}
