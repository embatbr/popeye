/**
* Handles data fetched by collectors.
*/


// TODO add reference to some PubSub object or endpoint
const ConsoleHandler = (exchange) => {
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


module.exports = {
    handlers: {
        'console': ConsoleHandler
    }
};
