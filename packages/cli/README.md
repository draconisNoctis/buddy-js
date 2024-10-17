@buddy-js/cli
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@buddy-js/cli.svg)](https://npmjs.org/package/@buddy-js/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@buddy-js/cli.svg)](https://npmjs.org/package/@buddy-js/cli)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @buddy-js/cli
$ buddyjs COMMAND
running command...
$ buddyjs (--version)
@buddy-js/cli/0.0.3 linux-arm64 node-v22.9.0
$ buddyjs --help [COMMAND]
USAGE
  $ buddyjs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`buddyjs g [INPUT]`](#buddyjs-g-input)
* [`buddyjs gen [INPUT]`](#buddyjs-gen-input)
* [`buddyjs generate [INPUT]`](#buddyjs-generate-input)
* [`buddyjs hello PERSON`](#buddyjs-hello-person)
* [`buddyjs hello world`](#buddyjs-hello-world)
* [`buddyjs help [COMMAND]`](#buddyjs-help-command)

## `buddyjs g [INPUT]`

Generates YAML files for Buddy CI pipeline definitions

```
USAGE
  $ buddyjs g [INPUT] [--json] [-o <value>] [--clear] [--cwd <value>] [--indent <value>] [--lineWidth
    <value>]

ARGUMENTS
  INPUT  [default: .buddy/buddy.{ts,js,mjs,cjs}] input file

FLAGS
  -o, --output=<value>  [default: .buddy] output directory
      --[no-]clear      [default: true] Remove all YAML files from output directory before generating
      --cwd=<value>     [default: /home/dracon/projects/neoskop/buddy-js/packages/cli]

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
  $ buddyjs g
```

## `buddyjs gen [INPUT]`

Generates YAML files for Buddy CI pipeline definitions

```
USAGE
  $ buddyjs gen [INPUT] [--json] [-o <value>] [--clear] [--cwd <value>] [--indent <value>] [--lineWidth
    <value>]

ARGUMENTS
  INPUT  [default: .buddy/buddy.{ts,js,mjs,cjs}] input file

FLAGS
  -o, --output=<value>  [default: .buddy] output directory
      --[no-]clear      [default: true] Remove all YAML files from output directory before generating
      --cwd=<value>     [default: /home/dracon/projects/neoskop/buddy-js/packages/cli]

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
  $ buddyjs gen
```

## `buddyjs generate [INPUT]`

Generates YAML files for Buddy CI pipeline definitions

```
USAGE
  $ buddyjs generate [INPUT] [--json] [-o <value>] [--clear] [--cwd <value>] [--indent <value>] [--lineWidth
    <value>]

ARGUMENTS
  INPUT  [default: .buddy/buddy.{ts,js,mjs,cjs}] input file

FLAGS
  -o, --output=<value>  [default: .buddy] output directory
      --[no-]clear      [default: true] Remove all YAML files from output directory before generating
      --cwd=<value>     [default: /home/dracon/projects/neoskop/buddy-js/packages/cli]

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

_See code: [src/commands/generate.ts](https://github.com/draconisNoctis/buddy-js/blob/v0.0.3/src/commands/generate.ts)_

## `buddyjs hello PERSON`

Say hello

```
USAGE
  $ buddyjs hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ buddyjs hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/draconisNoctis/buddy-js/blob/v0.0.3/src/commands/hello/index.ts)_

## `buddyjs hello world`

Say hello world

```
USAGE
  $ buddyjs hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ buddyjs hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/draconisNoctis/buddy-js/blob/v0.0.3/src/commands/hello/world.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.15/src/commands/help.ts)_
<!-- commandsstop -->
