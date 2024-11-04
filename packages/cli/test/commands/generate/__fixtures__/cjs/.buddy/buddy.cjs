const { pipeline } = require('@buddy-js/core');

pipeline.fixed('Pipeline', {
    on: 'CLICK',
    refs: ['master']
});
