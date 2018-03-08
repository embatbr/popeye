/**
* Handles data fetched by collectors.
*/


const Handler = (exchange) => {
    return {
        handle_message: (data) => {
            console.log(`Handling ${exchange.name}'s data.`);
            console.log(data);
        }
    };
};


module.exports = {
    Handler: Handler
};
