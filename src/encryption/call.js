const RLP = require('rlp')
const { wallet, utils } = require('../utils/web3')
const { 
    CONTRACT_ADDRESS, TOKEN_ADDRESS, 
    CHAIN_ID, RPC_URL,
    EVTENCRYPTION, NFTENCRYPTION
} = require('../utils/config')
const { getContract } = require('../utils/contract');
const { DHClient, cySHA256, cyAes } = require('../utils/crypto');
const { generator, bind, key } = require('../utils/newkeeper');

const caller = {
    generator: async function(){
        let peer = DHClient();
        const prime = peer.getPrime().toString('base64');
        const pub = peer.getPublicKey().toString('base64');
        const private = peer.getPrivateKey().toString('base64');
        const genResult = await generator(prime, pub);
       
        const KeyId = cySHA256(pub);
        const privateKey = peer.computeSecret(genResult.node_swap_key, 'base64', 'hex')
        
        if(genResult) {
            console.log("Prime: " + prime);
            console.log("Peer public key: " + pub);
            console.log("Peer private key: " + private);
            console.log("Node swap key: " + genResult.node_swap_key);
            console.log("Key ID: " + KeyId);
            console.log("PrivateKey: " + privateKey);
        }
        return {
            peer_private_key: private,
            key_id: KeyId,
            private_key: privateKey,
            peer,
            prime,
            pub
        }
    },
    register: async function(tokenId, KeyId, private, privateKey){
        const message = 'newton';
        const flat = await wallet.signMessage(message)
        let signMessage = utils.splitSignature(flat);
        const key_id = Buffer.from(KeyId, "utf-8")
        const aes_key = cyAes(privateKey.substring(0,32), private);
        const private_key = Buffer.from(aes_key, 'utf-8')
        const params = {
            key_id: key_id,
            contract_address: Buffer.from(CONTRACT_ADDRESS, 'utf-8'),
            nft_contract_address: Buffer.from(TOKEN_ADDRESS, 'utf-8'),
            token_id: Number(tokenId),
            chain_id: Number(CHAIN_ID),
            rpc_url: Buffer.from(RPC_URL, 'utf-8'),
            private_key: private_key,
            v: signMessage.v,
            r: signMessage.r,
            s: signMessage.s,
            message: Buffer.from(message, 'utf-8'),
        }
        const signArr = [
            params.key_id, params.contract_address, 
            params.nft_contract_address, params.token_id, 
            params.chain_id, params.rpc_url, params.private_key, 
            params.v, params.r, params.s, params.message
        ];
        const signData = '0x' + Buffer.from(RLP.encode(signArr)).toString('hex');
        const bindResult = await bind(signData);
        if(bindResult) {
            console.log("Key Register Success");
            return true;
        }
        return;
    },
    get_key: async function(prime, peer_swap_key, KeyId){
        const message = 'newton';
        const flat = await wallet.signMessage(message)
        let signMessage = utils.splitSignature(flat);
        const key_id = Buffer.from(KeyId, "utf-8")
        
        const params = {
            key_id,
            prime: Buffer.from(prime, 'utf-8'),
            peer_swap_key: Buffer.from(peer_swap_key, 'utf-8'),
            v: signMessage.v,
            r: signMessage.r,
            s: signMessage.s,
            message: Buffer.from(message, 'utf-8'),
        }
        const signArr = [
            params.key_id, params.prime, params.peer_swap_key,
            params.v, params.r, params.s, params.message
        ];
        const signData = '0x' + Buffer.from(RLP.encode(signArr)).toString('hex');
        const keyResult = await key(signData);
        if(keyResult) {
            console.log(keyResult);
            return true;
        }
        return;
    },
    mint_token: async function(){
        const myContract = await getContract(NFTENCRYPTION.abi, TOKEN_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let tx = await contractWithSigner.safeMint(wallet.address, {value: utils.parseEther('1.0'), from: wallet.address});
        await tx.wait();
        console.log(tx);
        console.log('=======Mint Token Success=======');
    },
    mint_EVT: async function(){
        const myContract = await getContract(EVTENCRYPTION.abi, CONTRACT_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let tx = await contractWithSigner.mint(wallet.address);
        await tx.wait();
        console.log(tx);
        console.log('=======Mint EVT Success=======');
    },
    get_balance: async function(){
        const myContract = await getContract(NFTENCRYPTION.abi, TOKEN_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let result = await contractWithSigner.balanceOf(wallet.address);
        console.log("Token balance: " + result.toString());
    },
    add_permission: async function(tokenId, encryptedKeyID, licensee){
        const myContract = await getContract(EVTENCRYPTION.abi, CONTRACT_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let tx = await contractWithSigner.addPermission(tokenId, '0x'+encryptedKeyID, licensee);
        await tx.wait();
        console.log(tx);
        console.log('=======addPermission Success=======');
    },
    register_encrypted_key: async function(tokenId, encryptedKeyID){
        const myContract = await getContract(EVTENCRYPTION.abi, CONTRACT_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let tx = await contractWithSigner.registerEncryptedKey(tokenId, '0x'+encryptedKeyID);
        await tx.wait();
        console.log(tx);
        console.log('=======registerEncryptedKey Success=======');
    },
    has_permission: async function(tokenId, encryptedKeyID, licensee){
        const myContract = await getContract(EVTENCRYPTION.abi, CONTRACT_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        let result = await contractWithSigner.hasPermission(tokenId, '0x'+encryptedKeyID, licensee);
        console.log("has Permission: " + result.toString());
    }
}

module.exports = caller