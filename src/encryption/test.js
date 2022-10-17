const RLP = require('rlp')
const { utils, wallet } = require('../utils/web3');
const { deploy } = require('../utils/contract');
const { DHClient, cySHA256, cyAes } = require('../utils/crypto');
const { generator, bind, key } = require('../utils/newkeeper');
const { NFTENCRYPTION, EVTENCRYPTION, CHAIN_ID, RPC_URL } = require('../utils/config');

module.exports = async function(){
    const price = await utils.parseEther('1');
    const TokenDeploy = await deploy(NFTENCRYPTION.abi, NFTENCRYPTION.bytecode, [price.toString()])
    console.log("TokenAddress: " + TokenDeploy.address);

    const TokenContract = await TokenDeploy.deployed()
    const TokenWithSigner = TokenContract.connect(wallet);
    let tx = await TokenWithSigner.safeMint(wallet.address, {value: utils.parseEther('1.0'), from: wallet.address});
    await tx.wait();
    console.log('=======Mint Token Success=======');
    console.log(tx);

    const EVTDeploy = await deploy(EVTENCRYPTION.abi, EVTENCRYPTION.bytecode, [TokenDeploy.address])
    console.log("CONTRACT_ADDRESS: " + EVTDeploy.address);

    const EVTContract = await EVTDeploy.deployed();
    const EVTWithSigner = EVTContract.connect(wallet);
    tx = await EVTWithSigner.mint(wallet.address);
    await tx.wait();
    console.log('=======Mint EVT Success=======');
    console.log(tx);
    const tokenId = 0;

    let peer = DHClient();
    const prime = peer.getPrime().toString('base64');
    const pub = peer.getPublicKey().toString('base64');
    const private = peer.getPrivateKey().toString('base64');

    const { node_swap_key } = await generator(prime, pub);

    const key_id = cySHA256(pub);
    const privateKey = peer.computeSecret(node_swap_key, 'base64', 'hex');

    tx = await EVTWithSigner.registerEncryptedKey(tokenId, '0x'+key_id);
    await tx.wait();
    console.log('=======registerEncryptedKey Success=======');
    console.log(tx);

    tx = await EVTWithSigner.addPermission(tokenId, '0x'+key_id, wallet.address);
    await tx.wait();
    console.log(tx);
    console.log('=======addPermission Success=======');

    const message = 'newton';
    const flat = await wallet.signMessage(message)
    let signMessage = utils.splitSignature(flat);
    const aes_key = cyAes(privateKey.substring(0,32), private);
    const params = {
        key_id: Buffer.from(key_id, "utf-8"),
        contract_address: Buffer.from(EVTDeploy.address, 'utf-8'),
        nft_contract_address: Buffer.from(TokenDeploy.address, 'utf-8'),
        token_id: tokenId,
        chain_id: Number(CHAIN_ID),
        rpc_url: Buffer.from(RPC_URL, 'utf-8'),
        private_key: Buffer.from(aes_key, 'utf-8'),
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
    } else {
        console.log("Key Register Fail");
        return false;
    }
    const paramsKey = {
        key_id: Buffer.from(key_id, "utf-8"),
        prime: Buffer.from(prime, 'utf-8'),
        peer_swap_key: Buffer.from(pub, 'utf-8'),
        v: signMessage.v,
        r: signMessage.r,
        s: signMessage.s,
        message: Buffer.from(message, 'utf-8'),
    }
    const signArrKey = [
        paramsKey.key_id, paramsKey.prime, paramsKey.peer_swap_key,
        paramsKey.v, paramsKey.r, paramsKey.s, paramsKey.message
    ];
    const signDataKey = '0x' + Buffer.from(RLP.encode(signArrKey)).toString('hex');
    const keyResult = await key(signDataKey);

    if(keyResult) {
        console.log(keyResult);
        console.log("Get Key Success");
        return true;
    }
}