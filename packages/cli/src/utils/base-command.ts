import { Command, type Interfaces } from '@oclif/core';
import chalk from 'chalk';
import type { Instance } from 'ink';
import type { FunctionComponent } from 'react';
import React from 'react';
import { create } from 'zustand';

export type Flags<T extends typeof Command> = Interfaces.InferredFlags<(typeof BaseCommand)['baseFlags'] & T['flags']>;
export type Args<T extends typeof Command> = Interfaces.InferredArgs<T['args']>;

export type View<T> = FunctionComponent<T>;

export abstract class BaseCommand<T extends typeof Command, V extends {}> extends Command {
    protected flags!: Flags<T>;
    protected args!: Args<T>;

    protected abstract view: View<V>;
    protected abstract initialState: V;

    protected viewInstance?: Instance;

    public override async init(): Promise<void> {
        await super.init();
        const { args, flags } = await this.parse({
            baseFlags: this.ctor.baseFlags,
            flags: this.ctor.flags,
            args: this.ctor.args,
            enableJsonFlag: this.ctor.enableJsonFlag,
            strict: this.ctor.strict
        });
        this.args = args as Args<T>;
        this.flags = flags as Flags<T>;
    }

    // biome-ignore lint/suspicious/useAwait: required by interface
    protected override async catch(err: Interfaces.CommandError): Promise<void> {
        this.logToStderr(chalk.red`❌ ${err.message}`);
    }

    public async run(): Promise<void | unknown> {
        const { render } = await import('ink');

        const useStore = create(() => this.initialState);
        this.viewInstance = this.jsonEnabled()
            ? undefined
            : render(
                  React.createElement(() => {
                      const store = useStore();

                      return React.createElement(this.view, store);
                  })
              );

        const iter = this.handle();

        while (true) {
            const result = await iter.next();

            if (!result.done) {
                useStore.setState(result.value);
            } else {
                return result.value;
            }
        }
    }

    abstract handle():
        | AsyncIterator<V | Partial<V> | ((state: V) => V | Partial<V>), unknown, never>
        | Iterator<V | Partial<V> | ((state: V) => V | Partial<V>), unknown, never>;
}
