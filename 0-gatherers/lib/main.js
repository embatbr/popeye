/*
* General confs.
*/


const confs = require('./confs.js');
const collectors = require('./collectors.js');
const handlers = require('./handlers.js');


confs.exchanges.forEach((exchange) => {
    const handler = handlers.handlers['http'](exchange);

    const collector = collectors.WebSocketCollector(exchange, handler);
    collector.start();
});
