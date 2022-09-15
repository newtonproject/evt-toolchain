const { wallet } = require('../utils/web3')
const { 
    EVTCOMMON, EVTACOMMON,
    EVT_ADDRESS, EVTA_ADDRESS
} = require('../utils/config')
const { getContract } = require('../utils/contract');

module.exports = {
    mintEVT: async function(){
        const myContract = getContract(EVTCOMMON.abi, EVT_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        const tx = await contractWithSigner.safeMint(wallet.address);
        await tx.wait();
        console.log(tx);
        console.log('=======Mint EVT Success=======');
    },
    mintEVTA: async function(amount){
        const myContract = await getContract(EVTACOMMON.abi, EVTA_ADDRESS);
        const contractWithSigner = myContract.connect(wallet);
        const tx = await contractWithSigner.safeMint(wallet.address, amount);
        await tx.wait();
        console.log(tx);
        console.log('=======Mint EVTA Success=======');
    },

}
