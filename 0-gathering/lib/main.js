/*
* General confs.
*/


var WebSocket = require('ws')

const confs = require('./confs.js');
const collectors = require('./collectors.js');


confs.exchanges.forEach((exchange) => {
    const collector = collectors.exchange_collector(exchange, WebSocket);
    collector.start();
});
