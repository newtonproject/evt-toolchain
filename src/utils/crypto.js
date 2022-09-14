const crypto = require('crypto');

const PRIME_LENGTH = 512; // 素数p的长度
const GENERATOR = 2; // 素数a

module.exports = {
    DHClient: function(){
        const client = crypto.createDiffieHellman(PRIME_LENGTH, GENERATOR);
        client.generateKeys();
        return client;
    },
    cySHA256: function(str) {
        return crypto.createHash('sha256').update(str).digest('hex')
    },
    cyAes: function(privateKey, text){
        const cipher = crypto.createCipheriv('aes-256-ecb', privateKey, null);
        var cipherChunks = [];
        cipherChunks.push(cipher.update(text, 'utf-8', 'base64'));
        cipherChunks.push(cipher.final('base64'));
        return cipherChunks.join('')
    }
}
