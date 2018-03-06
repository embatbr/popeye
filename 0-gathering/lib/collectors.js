/**
* Fetches data from exchanges' APIs.
*/


// Websocket collectors

const ExchangeCollector = (exchange, WebSocket) => {
    return {
        start: () => {
            console.log(exchange.name);

            exchange.currencies.forEach((currency) => {
                exchange.streams.forEach((stream) => {
                    resource_path = exchange.compose_stream(currency, stream);
                    const url = `${exchange.base_endpoint}/${resource_path}`;

                    console.log(url);

                    const ws = new WebSocket(url);

                    ws.on('message', (data) => {
                        console.log(data);
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
    exchange_collector: ExchangeCollector
};
