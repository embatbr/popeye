/*
* General confs.
*/


const confs = require('./confs.js');
const collectors = require('./collectors.js');


confs.exchanges.forEach((exchange) => {
    const collector = collectors[`${exchange}_collector`]();
    collector.start();
});
