const { wallet, utils } = require('../utils/web3')
const { 
    EVTVARIABLE, VARIABLE_ADDRESS 
} = require('../utils/config')
const { getContract } = require('../utils/contract');

async function contract() {
    const myContract = await getContract(EVTVARIABLE.abi, VARIABLE_ADDRESS);
    return myContract.connect(wallet);
}

module.exports = {
    mint: async function(){
        const contractWithSigner = await contract()
        let tx = await contractWithSigner.safeMint(wallet.address);
        await tx.wait();
        console.log(tx);
        console.log('=======Mint EVT Success=======');
    },
    addProperty: async function(name){
        const contractWithSigner = await contract()
        let tx = await contractWithSigner.addProperty(name);
        await tx.wait();
        console.log(tx);
        console.log('=======Add Property Success=======');
    },
    setProperty: async function(tokenId,name,value){
        const contractWithSigner = await contract()
        let tx = await contractWithSigner.setProperty(tokenId,name,value);
        await tx.wait();
        console.log(tx);
        console.log('=======Set Property Success=======');
    },
    getProperty: async function(tokenId,name){
        const contractWithSigner = await contract()
        let result = await contractWithSigner.getProperty(tokenId,name);
        console.log('Property Value: ' + result);
    }
}
