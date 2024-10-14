if (!globalThis.REGISTERED_PIPELINES) {
    globalThis.REGISTERED_PIPELINES = new Map();
}
export const IS_FIXED = Symbol.for('buddy-js/is-fixed-pipeline');
export function getRegisteredPipelines() {
    return REGISTERED_PIPELINES.values();
}
function registerPipeline(pipeline) {
    if (REGISTERED_PIPELINES.has(pipeline.pipeline)) {
        throw new Error(`Pipeline name "${pipeline.pipeline}" must be unique.`);
    }
    REGISTERED_PIPELINES.set(pipeline.pipeline, pipeline);
}
function setFixed(pipeline) {
    Object.assign(pipeline, { [IS_FIXED]: true });
}
export function isFixed(pipeline) {
    return Reflect.has(pipeline, IS_FIXED);
}
export function pipeline(name, props) {
    const pipeline = { pipeline: name, ...props };
    registerPipeline(pipeline);
    return pipeline;
}
(function (pipeline) {
    function fixed(name, props) {
        const p = pipeline(name, props);
        setFixed(p);
        return p;
    }
    pipeline.fixed = fixed;
})(pipeline || (pipeline = {}));
export function action(action) {
    return action;
}
