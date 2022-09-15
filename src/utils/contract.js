const fs = require('fs');
const solc = require('solc');
const { ContractFactory, wallet, Contract } = require('./web3');
const ex = {
    getCompile: function(filepath, name){
        const content = fs.readFileSync(filepath, 'utf8');
        const input = {
            language: 'Solidity',
            sources: {
                'contract': { content }
            },
            settings: {
                outputSelection: {
                    '*': {'*': ['*']}
                }
            }
        }
        const { contracts } = JSON.parse(
            solc.compile(JSON.stringify(input))
        );
        const contract = contracts['contract'][name];
        return {
            abi: contract.abi,
            bytecode: contract.evm.bytecode.object
        }
    },
    deploy: async function(abi, bytecode, arguments){
        console.log("Start Deploy Contract");
        /* 3. Send Smart Contract To Blockchain */
        let factory = await new ContractFactory(abi, bytecode, wallet)
        let c;
        if(arguments) {
            c = await factory.deploy(...arguments);
        } else {
            c = await factory.deploy()
        }
        return c;
    },
    getContract: function(abi, address){
        return new Contract(address, abi, wallet);
    }
}
module.exports = ex