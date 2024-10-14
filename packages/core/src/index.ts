import type { Action, Pipeline } from '@buddy-js/types';

declare global {
    var REGISTERED_PIPELINES: Map<string, Pipeline>;
}

if (!globalThis.REGISTERED_PIPELINES) {
    globalThis.REGISTERED_PIPELINES = new Map();
}

export const IS_FIXED = Symbol.for('buddy-js/is-fixed-pipeline');

export function getRegisteredPipelines(): Iterable<Pipeline> {
    return REGISTERED_PIPELINES.values();
}

function registerPipeline(pipeline: Pipeline) {
    if (REGISTERED_PIPELINES.has(pipeline.pipeline)) {
        throw new Error(`Pipeline name "${pipeline.pipeline}" must be unique.`);
    }
    REGISTERED_PIPELINES.set(pipeline.pipeline, pipeline);
}

function setFixed(pipeline: Pipeline) {
    Object.assign(pipeline, { [IS_FIXED]: true });
}

export function isFixed(pipeline: Pipeline): boolean {
    return Reflect.has(pipeline, IS_FIXED);
}

export function pipeline<P extends Pipeline>(name: string, props: Omit<P, 'pipeline'>): P {
    const pipeline = { pipeline: name, ...props } as P;
    registerPipeline(pipeline);
    return pipeline;
}

export namespace pipeline {
    export function fixed<P extends Pipeline>(name: string, props: Omit<P, 'pipeline'>): P {
        const p = pipeline(name, props);
        setFixed(p);
        return p;
    }
}

export function action<A extends Action>(action: A): A {
    return action;
}