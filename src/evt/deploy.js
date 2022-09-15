const { deploy } = require('../utils/contract');
const { EVTCOMMON, EVTACOMMON } = require('../utils/config');

module.exports = async function(){
    const EVTContract = await deploy(EVTCOMMON.abi, EVTCOMMON.bytecode)
    console.log("EVT_ADDRESS: " + EVTContract.address);

    const EVTAContract = await deploy(EVTACOMMON.abi, EVTACOMMON.bytecode)
    console.log("EVTA_ADDRESS: " + EVTAContract.address);
    return EVTContract.address, EVTAContract.address;
}
