import { createRequire } from 'node:module';
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';
import * as tsNode from 'ts-node';

export interface Loader {
    readonly extensions: string[];
    load(file: string): Promise<void> | void;
}

const CjsLoader: Loader = {
    extensions: ['.js', '.cjs'],
    load(file) {
        createRequire(import.meta.url)(file);
    }
};

const EsmLoader: Loader = {
    extensions: ['.mjs'],
    async load(file) {
        await import(file);
    }
};

const TsLoader: Loader = {
    extensions: ['.ts', '.cts'],
    load(file) {
        tsNode.register({ compilerOptions: { module: 'CommonJS' } });
        createRequire(import.meta.url)(file);
    }
};

const TsEsmLoader: Loader = {
    extensions: ['.mts'],
    async load(file) {
        register('ts-node/esm', pathToFileURL('./'));
        await import(file);
    }
};

const LOADERS: Loader[] = [CjsLoader, EsmLoader, TsLoader, TsEsmLoader];

export function getLoader(extension: string) {
    for (const loader of LOADERS) {
        if (loader.extensions.includes(extension)) {
            return loader;
        }
    }
    throw new Error(`Cannot load file with extension "${extension}"`);
}
