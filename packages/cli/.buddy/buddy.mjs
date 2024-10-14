import { pipeline } from 'buddy-js';

pipeline('Foobar', {
    on: 'CLICK',
    refs: ['master']
});
pipeline('Foobar/', {});
