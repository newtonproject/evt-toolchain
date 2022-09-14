const axios = require('axios')
const { NEWKEEPER } = require('./config');

const Request = function(options){
    return new Promise(function(resolve, reject){
        const { url, data, method } = options;
        let param = ''
        for (let it in data) {
            param += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        axios({
            url: NEWKEEPER + url,
            data: param,
            method: method || 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        .then(function(res){
            if(typeof(res.data) === 'object') {
                if(res.data.error_code == 0) {
                    reject(res.data.error_message);
                } else {
                    resolve(res.data.result);
                }
            } else {
                reject('Request Error');
            }
        })
        .catch(function(e){
            console.log("Error: " + e);
        })
    })
    .catch(function(e){
        console.log("Error: " + e);
    });
}

module.exports = Request