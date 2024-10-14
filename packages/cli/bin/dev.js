#!/usr/bin/env node_modules/.bin/ts-node
// eslint-disable-next-line node/shebang, unicorn/prefer-top-level-await
;(async () => {
  const oclif = await import('@oclif/core')
  await oclif.execute({development: true, dir: __dirname})
})()

// #!/usr/bin/env -S node --loader ts-node/esm --disable-warning=ExperimentalWarning

// // eslint-disable-next-line n/shebang
// import {execute} from '@oclif/core'

// await execute({development: true, dir: import.meta.url})
