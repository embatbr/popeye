/**
* Fetches data from exchanges' APIs.
*/


//Websocket collectors


const _WebsocketCollector = (name) => {
    return {
        start: () => {
            console.log(name);
        }
    };
};


const BinanceCollector = () => {
    return _WebsocketCollector('Binance');
};

const KucoinCollector = () => {
    return _WebsocketCollector('Kucoin');
};


module.exports = {
    binance_collector: BinanceCollector,
    kucoin_collector: KucoinCollector
};
