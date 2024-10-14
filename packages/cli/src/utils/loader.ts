import * as tsNode from 'ts-node';

export interface Loader {
    readonly extensions: string[];
    load(file: string): Promise<void> | void;
}

const CjsLoader: Loader = {
    extensions: ['.js', '.cjs'],
    load(file) {
        require(file);
    }
};

const EsmLoader: Loader = {
    extensions: ['.mjs'],
    async load(file) {
        await new Function('file', 'return import(file)')(file);
    }
};

const TsLoader: Loader = {
    extensions: ['.ts'],
    load(file) {
        tsNode.register();
        require(file);
    }
};

const LOADERS: Loader[] = [CjsLoader, EsmLoader, TsLoader];

export function getLoader(extension: string) {
    for (const loader of LOADERS) {
        if (loader.extensions.includes(extension)) {
            return loader;
        }
    }
    throw new Error(`Cannot load file with extension "${extension}"`);
}
