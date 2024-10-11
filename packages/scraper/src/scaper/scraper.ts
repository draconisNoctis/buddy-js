import EventEmitter, {} from 'node:events';
import * as cheerio from 'cheerio';

export type EventMap<T> = Record<keyof T, unknown>;
export type ParserMap<T> = { [K in keyof T]: ($: cheerio.CheerioAPI, html: string, url: string) => T[K] | Promise<T[K]> };

export type ProgressEvent = {
    done: number;
    total: number;
};

export class Scraper<T extends EventMap<T>> extends EventEmitter<
    { [K in keyof T]: [T[K]] } | { error: [err: Error]; done: never[]; progress: [ProgressEvent] }
> {
    #queue: [type: keyof T, url: string][] = [];
    #index = 0;
    #parsers: ParserMap<T>;

    constructor(parsers: ParserMap<T>) {
        super();
        this.#parsers = parsers;
    }

    private async next() {
        if (this.#index >= this.#queue.length) return this.emit('done');
        const [type, url] = this.#queue[this.#index++]!;
        const done = this.#index;

        try {
            const response = await fetch(url);
            const html = await response.text();
            const $ = cheerio.load(html);

            const result = await this.#parsers[type]($, html, url);
            // biome-ignore lint/suspicious/noExplicitAny: required
            this.emit(type, ...([result] as any));
            this.emit('progress', { done, total: this.#queue.length });
            this.next();
        } catch (e) {
            if (e instanceof Error) {
                this.emit('error', e);
            } else {
                this.emit('error', new Error(String(e)));
            }
        }
    }

    queue(type: keyof T, url: string): void {
        this.#queue.push([type, url]);
    }

    start(type: keyof T, url: string): Promise<void> {
        this.queue(type, url);
        this.next();

        return new Promise<void>((resolve, reject) => {
            this.once('error', reject);
            this.once('done', resolve);
        });
    }
}
