"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_FIXED = void 0;
exports.getRegisteredPipelines = getRegisteredPipelines;
exports.isFixed = isFixed;
exports.pipeline = pipeline;
exports.action = action;
if (!globalThis.REGISTERED_PIPELINES) {
    globalThis.REGISTERED_PIPELINES = new Map();
}
exports.IS_FIXED = Symbol.for('buddy-js/is-fixed-pipeline');
function getRegisteredPipelines() {
    return REGISTERED_PIPELINES.values();
}
function registerPipeline(pipeline) {
    if (REGISTERED_PIPELINES.has(pipeline.pipeline)) {
        throw new Error(`Pipeline name "${pipeline.pipeline}" must be unique.`);
    }
    REGISTERED_PIPELINES.set(pipeline.pipeline, pipeline);
}
function setFixed(pipeline) {
    Object.assign(pipeline, { [exports.IS_FIXED]: true });
}
function isFixed(pipeline) {
    return Reflect.has(pipeline, exports.IS_FIXED);
}
function pipeline(name, props) {
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
})(pipeline || (exports.pipeline = pipeline = {}));
function action(action) {
    return action;
}
