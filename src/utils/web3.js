const mock = require('mock-require')
mock('@ethersproject/signing-key', './newton-signing-key')

const { ethers } = require("ethers");
const { RPC_URL, PRIVATE_KEY } = require('./config')

const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

module.exports = { 
    utils: ethers.utils, 
    wallet, 
    provider,
    ContractFactory: ethers.ContractFactory,
    Contract: ethers.Contract
}