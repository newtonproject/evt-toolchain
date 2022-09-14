const { utils } = require('../utils/web3');
const { deploy } = require('../utils/contract');
const { NFTENCRYPTION, EVTENCRYPTION } = require('../utils/config');
const { mint_token, mint_EVT } = require('./call');

module.exports = async function(){
    const price = await utils.parseEther('1');
    const TokenContract = await deploy(NFTENCRYPTION.abi, NFTENCRYPTION.bytecode, [price.toString()])
    console.log("TokenAddress: " + TokenContract.address);
    // await mint_token()
    const EVTContract = await deploy(EVTENCRYPTION.abi, EVTENCRYPTION.bytecode, [TokenContract.address])
    console.log("CONTRACT_ADDRESS: " + EVTContract.address);
    // await mint_EVT()
    return TokenContract.address, EVTContract.address
}