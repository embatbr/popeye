/**
* Fetches data from exchanges' APIs.
*/


// Websocket collectors

const WebSocketCollector = (exchange, WebSocket, handler) => {
    return {
        start: () => {
            console.log(exchange.name);

            exchange.currencies.forEach((currency) => {
                exchange.streams.forEach((stream) => {
                    resource_path = exchange.compose_stream(currency, stream);
                    const url = `${exchange.base_endpoint}/${resource_path}`;

                    const ws = new WebSocket(url);

                    ws.on('message', (data) => {
                        handler.handle_message(data)
                    });

                    ws.on('error', (error) => {
                        console.log(error);
                    });
                });
            });
        }
    };
};


module.exports = {
    WebSocketCollector: WebSocketCollector
};
