const { deploy } = require('../utils/contract');
const { EVTVARIABLE } = require('../utils/config');

module.exports = async function(){
    const EVTContract = await deploy(EVTVARIABLE.abi, EVTVARIABLE.bytecode)
    console.log("VARIABLE_ADDRESS: " + EVTContract.address);
    return EVTContract.address;
}
