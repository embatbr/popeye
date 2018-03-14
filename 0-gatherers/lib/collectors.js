/**
* Fetches data from exchanges' APIs.
*/


var WebSocket = require('ws')


// Websocket collectors

const WebSocketCollector = (exchange, handler) => {
    return {
        start: () => {
            console.log(exchange.name);

            exchange.currencies.forEach((currency) => {
                exchange.streams.forEach((stream) => {
                    resource_path = exchange.compose_stream(currency, stream);
                    const url = `${exchange.base_endpoint}/${resource_path}`;

                    const ws = new WebSocket(url);

                    ['message', 'error'].forEach((event) => {
                        ws.on(event, (data) => {
                            handler[`handle_${event}`](data);
                        });
                    });
                });
            });
        }
    };
};


module.exports = {
    WebSocketCollector: WebSocketCollector
};
