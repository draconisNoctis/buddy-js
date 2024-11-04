@buddy-js/cli
=================

A IaC tool to create your [Buddy CI] pipelines programmatically via JS/TS.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@buddy-js/cli.svg)](https://npmjs.org/package/@buddy-js/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@buddy-js/cli.svg)](https://npmjs.org/package/@buddy-js/cli)
[![License](https://img.shields.io/npm/l/@buddy-js/cli.svg)](https://github.com/draconisNoctis/buddy-js/blob/main/packages/cli/package.json)


<!-- toc -->
* [Installation](#installation)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Installation
```sh-session
$ npm install @buddy-js/cli @buddy-js/core
$ yarn add @buddy-js/cli @buddy-js/core
$ pnpm add @buddy-js/cli @buddy-js/core
```

# Usage
Create the index file, e.g. `.buddy/buddy.mjs` with the following content:
```javascript
import { pipeline, action } from '@buddy-js/core';

pipeline('Production', {
  on: 'CLICK',
  refs: ['refs/heads/main'],
  actions: [
    action('Execute: pnpm test', 'BUILD', {
      docker_image_name: 'node',
      docker_image_tag: '22',
      execute_commands: [
        'pnpm install',
        'pnpm test'
      ]
    })
  ]
})
```

# Commands
<!-- commands -->
* [`buddyjs generate [INPUT]`](#buddyjs-generate-input)
* [`buddyjs help [COMMAND]`](#buddyjs-help-command)

## `buddyjs generate [INPUT]`

Generates YAML files for Buddy CI pipeline definitions

```
USAGE
  $ buddyjs generate [INPUT] [--json] [-o <value>] [--clear] [--cwd <value>] [--indent <value>] [--lineWidth
    <value>]

ARGUMENTS
  INPUT  [default: .buddy/buddy.{ts,mts,cts,js,mjs,cjs}] input file

FLAGS
  -o, --output=<value>  [default: .buddy] output directory
      --[no-]clear      [default: true] Remove all YAML files from output directory before generating
      --cwd=<value>     [default: .]

YAML FORMAT FLAGS
  --indent=<value>     [default: 2] Indentation depth for generated YAML files
  --lineWidth=<value>  [default: 80] Max line width for generated YAML files

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Generates YAML files for Buddy CI pipeline definitions

ALIASES
  $ buddyjs gen
  $ buddyjs g

EXAMPLES
  $ buddyjs generate
```

_See code: [src/commands/generate.ts](https://github.com/draconisNoctis/buddy-js/tree/main/packages/cli/src/commands/generate.tsx)_

## `buddyjs help [COMMAND]`

Display help for buddyjs.

```
USAGE
  $ buddyjs help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for buddyjs.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/tree/main/packages/cli/src/commands/help.tsx)_
<!-- commandsstop -->
