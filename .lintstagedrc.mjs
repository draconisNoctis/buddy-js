/** @type {import('lint-staged').Config} **/
export default {
    '*.{ts,tsx}': () => 'pnpm lint:staged',
    '*.json': ['prettier --write', 'biome format --write '],
    '*.css': 'prettier --write'
};
