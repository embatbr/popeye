/**
* Handles data fetched by collectors.
*/


var request = require('request');


const DumbHandler = (exchange) => {
    return {
        handle_message: (data) => {
            console.log(`Handling ${exchange.name}'s data.`);
            console.log(data);
        },
        handle_error: (data) => {
            console.log(`Handling ${exchange.name}'s error.`);
            console.log(data);
        }
    };
};

const HTTPHandler = (exchange) => {
    return {
        handle_message: (data) => {
            request.get('http://localhost:5000').on('response', (response) => {
                console.log(response.statusCode)
                console.log(data)
            });
        },
        handle_error: DumbHandler(exchange).handle_error
    };
};


module.exports = {
    handlers: {
        'dumb': DumbHandler,
        'http': HTTPHandler
    }
};
