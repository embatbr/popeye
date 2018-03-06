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
                prefix: 'ws'
            }
        ],
        compose_stream: (currency, stream) => {
            return `${stream.prefix}/${currency.symbol}@${stream.name}`
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
