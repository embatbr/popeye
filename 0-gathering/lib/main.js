/*
* General confs.
*/


var WebSocket = require('ws')

const confs = require('./confs.js');
const collectors = require('./collectors.js');
const handlers = require('./handlers.js');


confs.exchanges.forEach((exchange) => {
    const handler = handlers.Handler(exchange);

    const collector = collectors.WebSocketCollector(exchange, WebSocket, handler);
    collector.start();
});
