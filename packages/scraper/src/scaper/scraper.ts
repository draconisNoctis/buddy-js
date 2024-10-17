import EventEmitter, {} from 'node:events';
import * as cheerio from 'cheerio';

export type EventMap<T> = Record<keyof T, unknown>;
export type ParserMap<T> = {
    [K in keyof T]: ($: cheerio.CheerioAPI, html: string, url: string) => T[K] | undefined | Promise<T[K] | undefined>;
};

export type ProgressEvent = {
    done: number;
    total: number;
};

export class Scraper<T extends EventMap<T>> extends EventEmitter<
    { [K in keyof T]: [T[K]] } | { error: [err: Error]; done: never[]; progress: [ProgressEvent] }
> {
    #queue: [type: keyof T, url: string][] = [];
    #index = 0;
    #done = 0;
    #running = 0;
    #parsers: ParserMap<T>;

    CONCURRENCY_LIMIT = 10;

    constructor(parsers: ParserMap<T>) {
        super();
        this.#parsers = parsers;
    }

    private async next() {
        if (this.#done >= this.#queue.length && !this.#running) return this.emit('done');
        if (this.#running >= this.CONCURRENCY_LIMIT || this.#index > this.#queue.length - 1) return;

        const [type, url] = this.#queue[this.#index++]!;

        try {
            this.#running++;
            const response = await fetch(url);
            const html = await response.text();
            const $ = cheerio.load(html);

            const result = await this.#parsers[type]($, html, url);
            if (result != null) {
                // biome-ignore lint/suspicious/noExplicitAny: required
                this.emit(type, ...([result] as any));
            }
        } catch (e) {
            if (e instanceof Error) {
                this.emit('error', e);
            } else {
                this.emit('error', new Error(String(e)));
            }
        } finally {
            this.#running--;
            this.#done++;
            this.emit('progress', { done: this.#done, total: this.#queue.length });
            this.next();
        }
    }

    queue(type: keyof T, url: string): void {
        this.#queue.push([type, url]);
        this.next();
    }

    start(type: keyof T, url: string): Promise<void> {
        this.queue(type, url);

        return new Promise<void>((resolve, reject) => {
            this.once('error', reject);
            this.once('done', resolve);
        });
    }
}
