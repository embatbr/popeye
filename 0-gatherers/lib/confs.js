/*
* General confs.
*/


// Exchanges

const exchanges = [
    {
        name: 'binance',
        base_endpoint: 'wss://stream.binance.com:9443',
        currencies: [
            {
                name: 'nano',
                symbol: 'nanobtc'
            }
        ],
        streams: [
            {
                name: 'trade',
                raw: true
            }
        ],
        compose_stream: (currency, stream) => {
            const stream_name = `${currency.symbol}@${stream.name}`

            if(stream.raw) {
                return `ws/${stream_name}`
            }
        }
    }
];


module.exports = {
    package_root_path: process.env.PACKAGE_ROOT_PATH,
    env: {
        name: process.env.ENV || 'dev'
    },
    exchanges: exchanges
}
