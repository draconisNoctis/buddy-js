import { pipeline } from '@buddy-js/core';

pipeline.fixed('Pipeline', {
    on: 'CLICK',
    refs: ['master']
});
