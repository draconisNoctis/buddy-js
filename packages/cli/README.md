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
@buddy-js/cli/0.0.0 linux-arm64 node-v22.9.0
$ buddyjs --help [COMMAND]
USAGE
  $ buddyjs COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`buddyjs hello PERSON`](#buddyjs-hello-person)
* [`buddyjs hello world`](#buddyjs-hello-world)
* [`buddyjs help [COMMAND]`](#buddyjs-help-command)
* [`buddyjs plugins`](#buddyjs-plugins)
* [`buddyjs plugins add PLUGIN`](#buddyjs-plugins-add-plugin)
* [`buddyjs plugins:inspect PLUGIN...`](#buddyjs-pluginsinspect-plugin)
* [`buddyjs plugins install PLUGIN`](#buddyjs-plugins-install-plugin)
* [`buddyjs plugins link PATH`](#buddyjs-plugins-link-path)
* [`buddyjs plugins remove [PLUGIN]`](#buddyjs-plugins-remove-plugin)
* [`buddyjs plugins reset`](#buddyjs-plugins-reset)
* [`buddyjs plugins uninstall [PLUGIN]`](#buddyjs-plugins-uninstall-plugin)
* [`buddyjs plugins unlink [PLUGIN]`](#buddyjs-plugins-unlink-plugin)
* [`buddyjs plugins update`](#buddyjs-plugins-update)

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

_See code: [src/commands/hello/index.ts](https://github.com/packages/cli/blob/v0.0.0/src/commands/hello/index.ts)_

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

_See code: [src/commands/hello/world.ts](https://github.com/packages/cli/blob/v0.0.0/src/commands/hello/world.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.14/src/commands/help.ts)_

## `buddyjs plugins`

List installed plugins.

```
USAGE
  $ buddyjs plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ buddyjs plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/index.ts)_

## `buddyjs plugins add PLUGIN`

Installs a plugin into buddyjs.

```
USAGE
  $ buddyjs plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into buddyjs.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BUDDYJS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BUDDYJS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ buddyjs plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ buddyjs plugins add myplugin

  Install a plugin from a github url.

    $ buddyjs plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ buddyjs plugins add someuser/someplugin
```

## `buddyjs plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ buddyjs plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ buddyjs plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/inspect.ts)_

## `buddyjs plugins install PLUGIN`

Installs a plugin into buddyjs.

```
USAGE
  $ buddyjs plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into buddyjs.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BUDDYJS_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BUDDYJS_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ buddyjs plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ buddyjs plugins install myplugin

  Install a plugin from a github url.

    $ buddyjs plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ buddyjs plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/install.ts)_

## `buddyjs plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ buddyjs plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ buddyjs plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/link.ts)_

## `buddyjs plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ buddyjs plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ buddyjs plugins unlink
  $ buddyjs plugins remove

EXAMPLES
  $ buddyjs plugins remove myplugin
```

## `buddyjs plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ buddyjs plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/reset.ts)_

## `buddyjs plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ buddyjs plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ buddyjs plugins unlink
  $ buddyjs plugins remove

EXAMPLES
  $ buddyjs plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/uninstall.ts)_

## `buddyjs plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ buddyjs plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ buddyjs plugins unlink
  $ buddyjs plugins remove

EXAMPLES
  $ buddyjs plugins unlink myplugin
```

## `buddyjs plugins update`

Update installed plugins.

```
USAGE
  $ buddyjs plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.14/src/commands/plugins/update.ts)_
<!-- commandsstop -->
