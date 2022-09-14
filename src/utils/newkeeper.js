const Request = require('./request');

module.exports = {
    generator: async function(prime, pub){
        const result = await Request({
            url: 'api/v1/key/generator',
            data: { 
                prime: prime,
                peer_swap_key: pub
            }
        })
        if(result) {
            return result;
        }
        return false
    },
    bind: async function(sign_data){
        const result = await Request({
            url: 'api/v1/key/bind',
            data: {
                sign_data
            }
        })
        if(result) {
            return result;
        }
        return false
    },
    key: async function(sign_data){
        const result = await Request({
            url: 'api/v1/key/',
            data: {
                sign_data
            }
        })
        if(result) {
            return result;
        }
        return false
    },
}