const dotenv = require('dotenv').config({path: '.env'});

module.exports = {
    ...dotenv.parsed,
    EVTCOMMON: {
        path: './contracts/EVT-common.sol',
        name: 'MyEVT',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "addDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "addPermission",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "DynamicPropertyAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "DynamicPropertyUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "EncryptedKeyRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionRemoved",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "registerEncryptedKey",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "removePermission",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperties",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicProperties",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "properties",
                        "type": "bytes[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "getDynamicProperty",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "hasPermission",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "supportsProperty",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ],
        bytecode: "60806040523480156200001157600080fd5b506040518060400160405280600581526020017f4d794556540000000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f45565400000000000000000000000000000000000000000000000000000000008152508181816000908051906020019062000098929190620001aa565b508060019080519060200190620000b1929190620001aa565b5050505050620000d6620000ca620000dc60201b60201c565b620000e460201b60201c565b620002bf565b600033905090565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b8906200025a565b90600052602060002090601f016020900481019282620001dc576000855562000228565b82601f10620001f757805160ff191683800117855562000228565b8280016001018555821562000228579182015b82811115620002275782518255916020019190600101906200020a565b5b5090506200023791906200023b565b5090565b5b80821115620002565760008160009055506001016200023c565b5090565b600060028204905060018216806200027357607f821691505b602082108114156200028a576200028962000290565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b613de880620002cf6000396000f3fe60806040526004361061019c5760003560e01c80638da5cb5b116100ec578063b88d4fde1161008a578063e645460611610064578063e6454606146105a4578063e985e9c5146105e1578063f1bc54931461061e578063f2fde38b146106475761019c565b8063b88d4fde14610500578063bfda488414610529578063c87b56dd146105675761019c565b8063a22cb465116100c6578063a22cb46514610441578063a7d657641461046a578063a8a5b172146104a7578063affafce5146104c35761019c565b80638da5cb5b146103cf578063956c06cc146103fa57806395d89b41146104165761019c565b8063286633d21161015957806342842e0e1161013357806342842e0e146103155780636352211e1461033e57806370a082311461037b578063715018a6146103b85761019c565b8063286633d2146102b45780632c454f67146102d057806340d097c3146102ec5761019c565b806301ffc9a7146101a157806306fdde03146101de578063081812fc14610209578063095ea7b31461024657806321988c7b1461026f57806323b872dd1461028b575b600080fd5b3480156101ad57600080fd5b506101c860048036038101906101c39190612b00565b610670565b6040516101d591906131fc565b60405180910390f35b3480156101ea57600080fd5b506101f3610682565b6040516102009190613254565b60405180910390f35b34801561021557600080fd5b50610230600480360381019061022b9190612b52565b610714565b60405161023d919061315e565b60405180910390f35b34801561025257600080fd5b5061026d60048036038101906102689190612a9b565b61075a565b005b61028960048036038101906102849190612c06565b610872565b005b34801561029757600080fd5b506102b260048036038101906102ad9190612995565b610933565b005b6102ce60048036038101906102c99190612ad7565b610993565b005b6102ea60048036038101906102e59190612bb7565b610a36565b005b3480156102f857600080fd5b50610313600480360381019061030e9190612930565b610b2b565b005b34801561032157600080fd5b5061033c60048036038101906103379190612995565b610b59565b005b34801561034a57600080fd5b5061036560048036038101906103609190612b52565b610b79565b604051610372919061315e565b60405180910390f35b34801561038757600080fd5b506103a2600480360381019061039d9190612930565b610c2b565b6040516103af9190613496565b60405180910390f35b3480156103c457600080fd5b506103cd610ce3565b005b3480156103db57600080fd5b506103e4610cf7565b6040516103f1919061315e565b60405180910390f35b610414600480360381019061040f9190612c6d565b610d21565b005b34801561042257600080fd5b5061042b610d25565b6040516104389190613254565b60405180910390f35b34801561044d57600080fd5b5061046860048036038101906104639190612a5f565b610db7565b005b34801561047657600080fd5b50610491600480360381019061048c9190612bb7565b610dcd565b60405161049e91906131fc565b60405180910390f35b6104c160048036038101906104bc9190612b7b565b610e13565b005b3480156104cf57600080fd5b506104ea60048036038101906104e59190612ad7565b610ece565b6040516104f791906131fc565b60405180910390f35b34801561050c57600080fd5b50610527600480360381019061052291906129e4565b610eeb565b005b34801561053557600080fd5b50610550600480360381019061054b9190612b52565b610f4d565b60405161055e9291906131c5565b60405180910390f35b34801561057357600080fd5b5061058e60048036038101906105899190612b52565b6111ba565b60405161059b9190613254565b60405180910390f35b3480156105b057600080fd5b506105cb60048036038101906105c69190612b7b565b611222565b6040516105d89190613232565b60405180910390f35b3480156105ed57600080fd5b5061060860048036038101906106039190612959565b6112d9565b60405161061591906131fc565b60405180910390f35b34801561062a57600080fd5b5061064560048036038101906106409190612bb7565b61136d565b005b34801561065357600080fd5b5061066e60048036038101906106699190612930565b6113fe565b005b600061067b82611482565b9050919050565b60606000805461069190613786565b80601f01602080910402602001604051908101604052809291908181526020018280546106bd90613786565b801561070a5780601f106106df5761010080835404028352916020019161070a565b820191906000526020600020905b8154815290600101906020018083116106ed57829003601f168201915b5050505050905090565b600061071f826114fc565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061076582610b79565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156107d6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107cd90613456565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff166107f5611547565b73ffffffffffffffffffffffffffffffffffffffff16148061082457506108238161081e611547565b6112d9565b5b610863576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161085a906133b6565b60405180910390fd5b61086d838361154f565b505050565b61087b82610ece565b6108ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108b190613376565b60405180910390fd5b8060086000858152602001908152602001600020600084815260200190815260200160002090805190602001906108f29291906127a7565b507f5c35113126bc2315b8100f93663558bf245464c60d15a9b35c08e000957e51cc838383604051610926939291906134b1565b60405180910390a1505050565b61094461093e611547565b82611608565b610983576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097a90613476565b60405180910390fd5b61098e83838361169d565b505050565b6109a781600661190490919063ffffffff16565b156109e7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109de90613276565b60405180910390fd5b6109fb81600661191b90919063ffffffff16565b507f2b6a0e11889428f965bf2094c1743eef071e13a95251d803308991520e02665181604051610a2b9190613217565b60405180910390a150565b610a5b82600a600086815260200190815260200160002061190490919063ffffffff16565b610a9a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9190613416565b60405180910390fd5b60006009600085815260200190815260200160002060008481526020019081526020016000209050610ad5828261193290919063ffffffff16565b508173ffffffffffffffffffffffffffffffffffffffff16847f3a4d307811ec9b759e2a67095288aca7032cffe40cfbf58b15eb74178fd45ef685604051610b1d9190613217565b60405180910390a350505050565b610b33611962565b6000610b3f600d6119e0565b9050610b4b600d6119ee565b610b558282611a04565b5050565b610b7483838360405180602001604052806000815250610eeb565b505050565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610c22576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1990613436565b60405180910390fd5b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610c9c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c9390613396565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ceb611962565b610cf56000611a22565b565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b5050565b606060018054610d3490613786565b80601f0160208091040260200160405190810160405280929190818152602001828054610d6090613786565b8015610dad5780601f10610d8257610100808354040283529160200191610dad565b820191906000526020600020905b815481529060010190602001808311610d9057829003601f168201915b5050505050905090565b610dc9610dc2611547565b8383611ae8565b5050565b6000806009600086815260200190815260200160002060008581526020019081526020016000209050610e098382611c5590919063ffffffff16565b9150509392505050565b6000600a60008481526020019081526020016000209050610e3d828261190490919063ffffffff16565b15610e7d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e7490613356565b60405180910390fd5b610e90828261191b90919063ffffffff16565b50827f44505c31d3afd73d70508c1d2687b8974aaee5313067dc12f6a3514c89a3bef583604051610ec19190613217565b60405180910390a2505050565b6000610ee482600661190490919063ffffffff16565b9050919050565b610efc610ef6611547565b83611608565b610f3b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f3290613476565b60405180910390fd5b610f4784848484611c85565b50505050565b6060806000610f5c6006611ce1565b90508067ffffffffffffffff811115610f9e577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051908082528060200260200182016040528015610fcc5781602001602082028036833780820191505090505b5092508067ffffffffffffffff81111561100f577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60405190808252806020026020018201604052801561104257816020015b606081526020019060019003908161102d5790505b50915060005b818110156111b3576000611066826006611cf690919063ffffffff16565b9050808583815181106110a2577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101818152505060086000878152602001908152602001600020600082815260200190815260200160002080546110dd90613786565b80601f016020809104026020016040519081016040528092919081815260200182805461110990613786565b80156111565780601f1061112b57610100808354040283529160200191611156565b820191906000526020600020905b81548152906001019060200180831161113957829003601f168201915b5050505050848381518110611194577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101819052505080806111ab906137e9565b915050611048565b5050915091565b60606111c5826114fc565b60006111cf611d0d565b905060008151116111ef576040518060200160405280600081525061121a565b806111f984611d24565b60405160200161120a92919061313a565b6040516020818303038152906040525b915050919050565b6060600860008481526020019081526020016000206000838152602001908152602001600020805461125390613786565b80601f016020809104026020016040519081016040528092919081815260200182805461127f90613786565b80156112cc5780601f106112a1576101008083540402835291602001916112cc565b820191906000526020600020905b8154815290600101906020018083116112af57829003601f168201915b5050505050905092915050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600060096000858152602001908152602001600020600084815260200190815260200160002090506113a88282611ed190919063ffffffff16565b508173ffffffffffffffffffffffffffffffffffffffff16847fa1324460c0c0f0e277ca76993d05dd15f542bed836a91389e248b1c01245c506856040516113f09190613217565b60405180910390a350505050565b611406611962565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611476576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161146d906132b6565b60405180910390fd5b61147f81611a22565b50565b60007fd28afde2000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806114f557506114f482611f01565b5b9050919050565b61150581611f7b565b611544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161153b90613436565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff166115c283610b79565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008061161483610b79565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611656575061165581856112d9565b5b8061169457508373ffffffffffffffffffffffffffffffffffffffff1661167c84610714565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff166116bd82610b79565b73ffffffffffffffffffffffffffffffffffffffff1614611713576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161170a906132d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611783576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161177a90613316565b60405180910390fd5b61178e838383611fe7565b61179960008261154f565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546117e99190613692565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254611840919061360b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46118ff838383611fec565b505050565b60006119138360000183611ff1565b905092915050565b600061192a8360000183612014565b905092915050565b600061195a836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612014565b905092915050565b61196a611547565b73ffffffffffffffffffffffffffffffffffffffff16611988610cf7565b73ffffffffffffffffffffffffffffffffffffffff16146119de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016119d5906133f6565b60405180910390fd5b565b600081600001549050919050565b6001816000016000828254019250508190555050565b611a1e828260405180602001604052806000815250612084565b5050565b6000600c60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611b57576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611b4e90613336565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051611c4891906131fc565b60405180910390a3505050565b6000611c7d836000018373ffffffffffffffffffffffffffffffffffffffff1660001b611ff1565b905092915050565b611c9084848461169d565b611c9c848484846120df565b611cdb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611cd290613296565b60405180910390fd5b50505050565b6000611cef82600001612276565b9050919050565b6000611d058360000183612287565b905092915050565b606060405180602001604052806000815250905090565b60606000821415611d6c576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611ecc565b600082905060005b60008214611d9e578080611d87906137e9565b915050600a82611d979190613661565b9150611d74565b60008167ffffffffffffffff811115611de0577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611e125781602001600182028036833780820191505090505b5090505b60008514611ec557600182611e2b9190613692565b9150600a85611e3a9190613832565b6030611e46919061360b565b60f81b818381518110611e82577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a85611ebe9190613661565b9450611e16565b8093505050505b919050565b6000611ef9836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6122d8565b905092915050565b60007f6af74b02000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480611f745750611f738261245e565b5b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b505050565b505050565b600080836001016000848152602001908152602001600020541415905092915050565b60006120208383611ff1565b61207957826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061207e565b600090505b92915050565b61208e8383612540565b61209b60008484846120df565b6120da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016120d190613296565b60405180910390fd5b505050565b60006121008473ffffffffffffffffffffffffffffffffffffffff1661271a565b15612269578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02612129611547565b8786866040518563ffffffff1660e01b815260040161214b9493929190613179565b602060405180830381600087803b15801561216557600080fd5b505af192505050801561219657506040513d601f19601f820116820180604052508101906121939190612b29565b60015b612219573d80600081146121c6576040519150601f19603f3d011682016040523d82523d6000602084013e6121cb565b606091505b50600081511415612211576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161220890613296565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161491505061226e565b600190505b949350505050565b600081600001805490509050919050565b60008260000182815481106122c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9060005260206000200154905092915050565b6000808360010160008481526020019081526020016000205490506000811461245257600060018261230a9190613692565b90506000600186600001805490506123229190613692565b90508181146123dd576000866000018281548110612369577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001549050808760000184815481106123b3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90600052602060002001819055508387600101600083815260200190815260200160002081905550505b85600001805480612417577f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050612458565b60009150505b92915050565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061252957507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b8061253957506125388261273d565b5b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156125b0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125a7906133d6565b60405180910390fd5b6125b981611f7b565b156125f9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016125f0906132f6565b60405180910390fd5b61260560008383611fe7565b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254612655919061360b565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461271660008383611fec565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b8280546127b390613786565b90600052602060002090601f0160209004810192826127d5576000855561281c565b82601f106127ee57805160ff191683800117855561281c565b8280016001018555821561281c579182015b8281111561281b578251825591602001919060010190612800565b5b509050612829919061282d565b5090565b5b8082111561284657600081600090555060010161282e565b5090565b600061285d61285884613514565b6134ef565b90508281526020810184848401111561287557600080fd5b612880848285613744565b509392505050565b60008135905061289781613d3f565b92915050565b6000813590506128ac81613d56565b92915050565b6000813590506128c181613d6d565b92915050565b6000813590506128d681613d84565b92915050565b6000815190506128eb81613d84565b92915050565b600082601f83011261290257600080fd5b813561291284826020860161284a565b91505092915050565b60008135905061292a81613d9b565b92915050565b60006020828403121561294257600080fd5b600061295084828501612888565b91505092915050565b6000806040838503121561296c57600080fd5b600061297a85828601612888565b925050602061298b85828601612888565b9150509250929050565b6000806000606084860312156129aa57600080fd5b60006129b886828701612888565b93505060206129c986828701612888565b92505060406129da8682870161291b565b9150509250925092565b600080600080608085870312156129fa57600080fd5b6000612a0887828801612888565b9450506020612a1987828801612888565b9350506040612a2a8782880161291b565b925050606085013567ffffffffffffffff811115612a4757600080fd5b612a53878288016128f1565b91505092959194509250565b60008060408385031215612a7257600080fd5b6000612a8085828601612888565b9250506020612a918582860161289d565b9150509250929050565b60008060408385031215612aae57600080fd5b6000612abc85828601612888565b9250506020612acd8582860161291b565b9150509250929050565b600060208284031215612ae957600080fd5b6000612af7848285016128b2565b91505092915050565b600060208284031215612b1257600080fd5b6000612b20848285016128c7565b91505092915050565b600060208284031215612b3b57600080fd5b6000612b49848285016128dc565b91505092915050565b600060208284031215612b6457600080fd5b6000612b728482850161291b565b91505092915050565b60008060408385031215612b8e57600080fd5b6000612b9c8582860161291b565b9250506020612bad858286016128b2565b9150509250929050565b600080600060608486031215612bcc57600080fd5b6000612bda8682870161291b565b9350506020612beb868287016128b2565b9250506040612bfc86828701612888565b9150509250925092565b600080600060608486031215612c1b57600080fd5b6000612c298682870161291b565b9350506020612c3a868287016128b2565b925050604084013567ffffffffffffffff811115612c5757600080fd5b612c63868287016128f1565b9150509250925092565b60008060408385031215612c8057600080fd5b6000612c8e8582860161291b565b925050602083013567ffffffffffffffff811115612cab57600080fd5b612cb7858286016128f1565b9150509250929050565b6000612ccd8383612dde565b60208301905092915050565b6000612ce58383612dfc565b905092915050565b612cf6816136c6565b82525050565b6000612d0782613565565b612d1181856135ab565b9350612d1c83613545565b8060005b83811015612d4d578151612d348882612cc1565b9750612d3f83613591565b925050600181019050612d20565b5085935050505092915050565b6000612d6582613570565b612d6f81856135bc565b935083602082028501612d8185613555565b8060005b85811015612dbd5784840389528151612d9e8582612cd9565b9450612da98361359e565b925060208a01995050600181019050612d85565b50829750879550505050505092915050565b612dd8816136d8565b82525050565b612de7816136e4565b82525050565b612df6816136e4565b82525050565b6000612e078261357b565b612e1181856135cd565b9350612e21818560208601613753565b612e2a8161391f565b840191505092915050565b6000612e408261357b565b612e4a81856135de565b9350612e5a818560208601613753565b612e638161391f565b840191505092915050565b6000612e7982613586565b612e8381856135ef565b9350612e93818560208601613753565b612e9c8161391f565b840191505092915050565b6000612eb282613586565b612ebc8185613600565b9350612ecc818560208601613753565b80840191505092915050565b6000612ee5601d836135ef565b9150612ef082613930565b602082019050919050565b6000612f086032836135ef565b9150612f1382613959565b604082019050919050565b6000612f2b6026836135ef565b9150612f36826139a8565b604082019050919050565b6000612f4e6025836135ef565b9150612f59826139f7565b604082019050919050565b6000612f71601c836135ef565b9150612f7c82613a46565b602082019050919050565b6000612f946024836135ef565b9150612f9f82613a6f565b604082019050919050565b6000612fb76019836135ef565b9150612fc282613abe565b602082019050919050565b6000612fda6014836135ef565b9150612fe582613ae7565b602082019050919050565b6000612ffd601f836135ef565b915061300882613b10565b602082019050919050565b60006130206029836135ef565b915061302b82613b39565b604082019050919050565b6000613043603e836135ef565b915061304e82613b88565b604082019050919050565b60006130666020836135ef565b915061307182613bd7565b602082019050919050565b60006130896020836135ef565b915061309482613c00565b602082019050919050565b60006130ac6024836135ef565b91506130b782613c29565b604082019050919050565b60006130cf6018836135ef565b91506130da82613c78565b602082019050919050565b60006130f26021836135ef565b91506130fd82613ca1565b604082019050919050565b6000613115602e836135ef565b915061312082613cf0565b604082019050919050565b6131348161373a565b82525050565b60006131468285612ea7565b91506131528284612ea7565b91508190509392505050565b60006020820190506131736000830184612ced565b92915050565b600060808201905061318e6000830187612ced565b61319b6020830186612ced565b6131a8604083018561312b565b81810360608301526131ba8184612e35565b905095945050505050565b600060408201905081810360008301526131df8185612cfc565b905081810360208301526131f38184612d5a565b90509392505050565b60006020820190506132116000830184612dcf565b92915050565b600060208201905061322c6000830184612ded565b92915050565b6000602082019050818103600083015261324c8184612e35565b905092915050565b6000602082019050818103600083015261326e8184612e6e565b905092915050565b6000602082019050818103600083015261328f81612ed8565b9050919050565b600060208201905081810360008301526132af81612efb565b9050919050565b600060208201905081810360008301526132cf81612f1e565b9050919050565b600060208201905081810360008301526132ef81612f41565b9050919050565b6000602082019050818103600083015261330f81612f64565b9050919050565b6000602082019050818103600083015261332f81612f87565b9050919050565b6000602082019050818103600083015261334f81612faa565b9050919050565b6000602082019050818103600083015261336f81612fcd565b9050919050565b6000602082019050818103600083015261338f81612ff0565b9050919050565b600060208201905081810360008301526133af81613013565b9050919050565b600060208201905081810360008301526133cf81613036565b9050919050565b600060208201905081810360008301526133ef81613059565b9050919050565b6000602082019050818103600083015261340f8161307c565b9050919050565b6000602082019050818103600083015261342f8161309f565b9050919050565b6000602082019050818103600083015261344f816130c2565b9050919050565b6000602082019050818103600083015261346f816130e5565b9050919050565b6000602082019050818103600083015261348f81613108565b9050919050565b60006020820190506134ab600083018461312b565b92915050565b60006060820190506134c6600083018661312b565b6134d36020830185612ded565b81810360408301526134e58184612e35565b9050949350505050565b60006134f961350a565b905061350582826137b8565b919050565b6000604051905090565b600067ffffffffffffffff82111561352f5761352e6138f0565b5b6135388261391f565b9050602081019050919050565b6000819050602082019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b60006136168261373a565b91506136218361373a565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561365657613655613863565b5b828201905092915050565b600061366c8261373a565b91506136778361373a565b92508261368757613686613892565b5b828204905092915050565b600061369d8261373a565b91506136a88361373a565b9250828210156136bb576136ba613863565b5b828203905092915050565b60006136d18261371a565b9050919050565b60008115159050919050565b6000819050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015613771578082015181840152602081019050613756565b83811115613780576000848401525b50505050565b6000600282049050600182168061379e57607f821691505b602082108114156137b2576137b16138c1565b5b50919050565b6137c18261391f565b810181811067ffffffffffffffff821117156137e0576137df6138f0565b5b80604052505050565b60006137f48261373a565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561382757613826613863565b5b600182019050919050565b600061383d8261373a565b91506138488361373a565b92508261385857613857613892565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4556545661726961626c653a2070726f70657274794964206578697374000000600082015250565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f656e637279707465644b65794944206578697374000000000000000000000000600082015250565b7f4556545661726961626c653a20696e76616c69642070726f7065727479496400600082015250565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000602082015250565b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f455654456e63727974696f6e3a20696e76616c696420656e637279707465644b60008201527f6579494400000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206e6f7220617070726f766564000000000000000000000000000000000000602082015250565b613d48816136c6565b8114613d5357600080fd5b50565b613d5f816136d8565b8114613d6a57600080fd5b50565b613d76816136e4565b8114613d8157600080fd5b50565b613d8d816136ee565b8114613d9857600080fd5b50565b613da48161373a565b8114613daf57600080fd5b5056fea264697066735822122041ae22c62911b03ad46d40961dd788df9b3c5fcaffbe473ea42246426137bf2264736f6c63430008040033"
    },
    EVTACOMMON: {
        path: './contracts/EVTA-common.sol',
        name: 'MyEVTA',
        abi: [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "inputs": [],
                "name": "ApprovalCallerNotOwnerNorApproved",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ApprovalQueryForNonexistentToken",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "ApproveToCaller",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "BalanceQueryForZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "MintERC2309QuantityExceedsLimit",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "MintToZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "MintZeroQuantity",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OwnerQueryForNonexistentToken",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "OwnershipNotInitializedForExtraData",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferCallerNotOwnerNorApproved",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferFromIncorrectOwner",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferToNonERC721ReceiverImplementer",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "TransferToZeroAddress",
                "type": "error"
            },
            {
                "inputs": [],
                "name": "URIQueryForNonexistentToken",
                "type": "error"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "fromTokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "toTokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "ConsecutiveTransfer",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "DynamicPropertyAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "DynamicPropertyUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "EncryptedKeyRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionRemoved",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "addDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "addPermission",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicProperties",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "properties",
                        "type": "bytes[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "getDynamicProperty",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "hasPermission",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "registerEncryptedKey",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "removePermission",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "quantity",
                        "type": "uint256"
                    }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "_data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperties",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "supportsProperty",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        bytecode: "60806040523480156200001157600080fd5b50604080518082018252600a81526953696d706c654556544160b01b6020808301918252835180850190945260048452634556544160e01b9084015281519192918391839162000064916002916200008a565b5080516200007a9060039060208401906200008a565b5060008055506200016d92505050565b828054620000989062000130565b90600052602060002090601f016020900481019282620000bc576000855562000107565b82601f10620000d757805160ff191683800117855562000107565b8280016001018555821562000107579182015b8281111562000107578251825591602001919060010190620000ea565b506200011592915062000119565b5090565b5b808211156200011557600081556001016200011a565b600181811c908216806200014557607f821691505b602082108114156200016757634e487b7160e01b600052602260045260246000fd5b50919050565b611c16806200017d6000396000f3fe6080604052600436106101665760003560e01c8063956c06cc116100d1578063affafce51161008a578063c87b56dd11610064578063c87b56dd14610400578063e645460614610420578063e985e9c514610440578063f1bc54931461048957600080fd5b8063affafce514610392578063b88d4fde146103b2578063bfda4884146103d257600080fd5b8063956c06cc146102f857806395d89b411461030a578063a14481941461031f578063a22cb4651461033f578063a7d657641461035f578063a8a5b1721461037f57600080fd5b806323b872dd1161012357806323b872dd14610252578063286633d2146102725780632c454f671461028557806342842e0e146102985780636352211e146102b857806370a08231146102d857600080fd5b806301ffc9a71461016b57806306fdde03146101a0578063081812fc146101c2578063095ea7b3146101fa57806318160ddd1461021c57806321988c7b1461023f575b600080fd5b34801561017757600080fd5b5061018b610186366004611881565b6104a9565b60405190151581526020015b60405180910390f35b3480156101ac57600080fd5b506101b56104ba565b6040516101979190611ad0565b3480156101ce57600080fd5b506101e26101dd366004611869565b61054c565b6040516001600160a01b039091168152602001610197565b34801561020657600080fd5b5061021a610215366004611840565b610590565b005b34801561022857600080fd5b50600154600054035b604051908152602001610197565b61021a61024d36600461190e565b610630565b34801561025e57600080fd5b5061021a61026d366004611765565b6106f2565b61021a610280366004611869565b610883565b61021a6102933660046118da565b61091d565b3480156102a457600080fd5b5061021a6102b3366004611765565b6109fb565b3480156102c457600080fd5b506101e26102d3366004611869565b610a1b565b3480156102e457600080fd5b506102316102f3366004611719565b610a26565b61021a61030636600461195c565b5050565b34801561031657600080fd5b506101b5610a75565b34801561032b57600080fd5b5061021a61033a366004611840565b610a84565b34801561034b57600080fd5b5061021a61035a366004611806565b610a8e565b34801561036b57600080fd5b5061018b61037a3660046118da565b610b24565b61021a61038d3660046118b9565b610b50565b34801561039e57600080fd5b5061018b6103ad366004611869565b610bf6565b3480156103be57600080fd5b5061021a6103cd3660046117a0565b610c03565b3480156103de57600080fd5b506103f26103ed366004611869565b610c4d565b604051610197929190611a39565b34801561040c57600080fd5b506101b561041b366004611869565b610e3c565b34801561042c57600080fd5b506101b561043b3660046118b9565b610ece565b34801561044c57600080fd5b5061018b61045b366004611733565b6001600160a01b03918216600090815260076020908152604080832093909416825291909152205460ff1690565b34801561049557600080fd5b5061021a6104a43660046118da565b610f7c565b60006104b482610fdc565b92915050565b6060600280546104c990611b45565b80601f01602080910402602001604051908101604052809291908181526020018280546104f590611b45565b80156105425780601f1061051757610100808354040283529160200191610542565b820191906000526020600020905b81548152906001019060200180831161052557829003601f168201915b5050505050905090565b600061055782611001565b610574576040516333d1c03960e21b815260040160405180910390fd5b506000908152600660205260409020546001600160a01b031690565b600061059b82610a1b565b9050336001600160a01b038216146105d4576105b7813361045b565b6105d4576040516367d9dca160e11b815260040160405180910390fd5b60008281526006602052604080822080546001600160a01b0319166001600160a01b0387811691821790925591518593918516917f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591a4505050565b61063982610bf6565b61068a5760405162461bcd60e51b815260206004820152601f60248201527f4556545661726961626c653a20696e76616c69642070726f706572747949640060448201526064015b60405180910390fd5b6000838152600a60209081526040808320858452825290912082516106b1928401906115dd565b507f5c35113126bc2315b8100f93663558bf245464c60d15a9b35c08e000957e51cc8383836040516106e593929190611ae3565b60405180910390a1505050565b60006106fd82611028565b9050836001600160a01b0316816001600160a01b0316146107305760405162a1148160e81b815260040160405180910390fd5b60008281526006602052604090208054338082146001600160a01b0388169091141761077d57610760863361045b565b61077d57604051632ce44b5f60e11b815260040160405180910390fd5b6001600160a01b0385166107a457604051633a954ecd60e21b815260040160405180910390fd5b80156107af57600082555b6001600160a01b038681166000908152600560205260408082208054600019019055918716808252919020805460010190554260a01b17600160e11b17600085815260046020526040902055600160e11b831661083a57600184016000818152600460205260409020546108385760005481146108385760008181526004602052604090208490555b505b83856001600160a01b0316876001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050505050565b61088e600882611089565b156108db5760405162461bcd60e51b815260206004820152601d60248201527f4556545661726961626c653a2070726f706572747949642065786973740000006044820152606401610681565b6108e66008826110a1565b506040518181527f2b6a0e11889428f965bf2094c1743eef071e13a95251d803308991520e0266519060200160405180910390a150565b6000838152600c602052604090206109359083611089565b61098d5760405162461bcd60e51b8152602060048201526024808201527f455654456e63727974696f6e3a20696e76616c696420656e637279707465644b604482015263195e525160e21b6064820152608401610681565b6000838152600b6020908152604080832085845290915290206109b081836110ad565b50816001600160a01b0316847f3a4d307811ec9b759e2a67095288aca7032cffe40cfbf58b15eb74178fd45ef6856040516109ed91815260200190565b60405180910390a350505050565b610a1683838360405180602001604052806000815250610c03565b505050565b60006104b482611028565b60006001600160a01b038216610a4f576040516323d3ad8160e21b815260040160405180910390fd5b506001600160a01b031660009081526005602052604090205467ffffffffffffffff1690565b6060600380546104c990611b45565b61030682826110c2565b6001600160a01b038216331415610ab85760405163b06307db60e01b815260040160405180910390fd5b3360008181526007602090815260408083206001600160a01b03871680855290835292819020805460ff191686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b6000838152600b602090815260408083208584529091528120610b4781846110dc565b95945050505050565b6000828152600c60205260409020610b688183611089565b15610bac5760405162461bcd60e51b8152602060048201526014602482015273195b98dc9e5c1d195912d95e525108195e1a5cdd60621b6044820152606401610681565b610bb681836110a1565b50827f44505c31d3afd73d70508c1d2687b8974aaee5313067dc12f6a3514c89a3bef583604051610be991815260200190565b60405180910390a2505050565b60006104b4600883611089565b610c0e8484846106f2565b6001600160a01b0383163b15610c4757610c2a848484846110fe565b610c47576040516368d2bf6b60e11b815260040160405180910390fd5b50505050565b6060806000610c5c60086111f5565b90508067ffffffffffffffff811115610c8557634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610cae578160200160208202803683370190505b5092508067ffffffffffffffff811115610cd857634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610d0b57816020015b6060815260200190600190039081610cf65790505b50915060005b81811015610e35576000610d266008836111ff565b905080858381518110610d4957634e487b7160e01b600052603260045260246000fd5b6020908102919091018101919091526000878152600a82526040808220848352909252208054610d7890611b45565b80601f0160208091040260200160405190810160405280929190818152602001828054610da490611b45565b8015610df15780601f10610dc657610100808354040283529160200191610df1565b820191906000526020600020905b815481529060010190602001808311610dd457829003601f168201915b5050505050848381518110610e1657634e487b7160e01b600052603260045260246000fd5b6020026020010181905250508080610e2d90611b80565b915050610d11565b5050915091565b6060610e4782611001565b610e6457604051630a14c4b560e41b815260040160405180910390fd5b6000610e7b60408051602081019091526000815290565b9050805160001415610e9c5760405180602001604052806000815250610ec7565b80610ea68461120b565b604051602001610eb79291906119cd565b6040516020818303038152906040525b9392505050565b6000828152600a602090815260408083208484529091529020805460609190610ef690611b45565b80601f0160208091040260200160405190810160405280929190818152602001828054610f2290611b45565b8015610f6f5780601f10610f4457610100808354040283529160200191610f6f565b820191906000526020600020905b815481529060010190602001808311610f5257829003601f168201915b5050505050905092915050565b6000838152600b602090815260408083208584529091529020610f9f818361124d565b50816001600160a01b0316847fa1324460c0c0f0e277ca76993d05dd15f542bed836a91389e248b1c01245c506856040516109ed91815260200190565b60006001600160e01b031982166369457ef160e11b14806104b457506104b482611262565b60008054821080156104b4575050600090815260046020526040902054600160e01b161590565b60008160005481101561107057600081815260046020526040902054600160e01b811661106e575b80610ec7575060001901600081815260046020526040902054611050565b505b604051636f96cda160e11b815260040160405180910390fd5b60008181526001830160205260408120541515610ec7565b6000610ec78383611287565b6000610ec7836001600160a01b038416611287565b6103068282604051806020016040528060008152506112d6565b6001600160a01b03811660009081526001830160205260408120541515610ec7565b604051630a85bd0160e11b81526000906001600160a01b0385169063150b7a02906111339033908990889088906004016119fc565b602060405180830381600087803b15801561114d57600080fd5b505af192505050801561117d575060408051601f3d908101601f1916820190925261117a9181019061189d565b60015b6111d8573d8080156111ab576040519150601f19603f3d011682016040523d82523d6000602084013e6111b0565b606091505b5080516111d0576040516368d2bf6b60e11b815260040160405180910390fd5b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050949350505050565b60006104b4825490565b6000610ec78383611343565b604080516080019081905280825b600183039250600a81066030018353600a9004806112365761123b565b611219565b50819003601f19909101908152919050565b6000610ec7836001600160a01b03841661137b565b60006001600160e01b0319821663357ba58160e11b14806104b457506104b482611498565b60008181526001830160205260408120546112ce575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556104b4565b5060006104b4565b6112e083836114e6565b6001600160a01b0383163b15610a16576000548281035b61130a60008683806001019450866110fe565b611327576040516368d2bf6b60e11b815260040160405180910390fd5b8181106112f757816000541461133c57600080fd5b5050505050565b600082600001828154811061136857634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b6000818152600183016020526040812054801561148e57600061139f600183611b02565b85549091506000906113b390600190611b02565b90508181146114345760008660000182815481106113e157634e487b7160e01b600052603260045260246000fd5b906000526020600020015490508087600001848154811061141257634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b855486908061145357634e487b7160e01b600052603160045260246000fd5b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506104b4565b60009150506104b4565b60006301ffc9a760e01b6001600160e01b0319831614806114c957506380ac58cd60e01b6001600160e01b03198316145b806104b45750506001600160e01b031916635b5e139f60e01b1490565b600054816115075760405163b562e8dd60e01b815260040160405180910390fd5b6001600160a01b03831660008181526005602090815260408083208054680100000000000000018802019055848352600490915281206001851460e11b4260a01b178317905582840190839083907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8180a4600183015b8181146115b657808360007fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef600080a460010161157e565b50816115d457604051622e076360e81b815260040160405180910390fd5b60005550505050565b8280546115e990611b45565b90600052602060002090601f01602090048101928261160b5760008555611651565b82601f1061162457805160ff1916838001178555611651565b82800160010185558215611651579182015b82811115611651578251825591602001919060010190611636565b5061165d929150611661565b5090565b5b8082111561165d5760008155600101611662565b80356001600160a01b038116811461168d57600080fd5b919050565b600082601f8301126116a2578081fd5b813567ffffffffffffffff808211156116bd576116bd611bb1565b604051601f8301601f19908116603f011681019082821181831017156116e5576116e5611bb1565b816040528381528660208588010111156116fd578485fd5b8360208701602083013792830160200193909352509392505050565b60006020828403121561172a578081fd5b610ec782611676565b60008060408385031215611745578081fd5b61174e83611676565b915061175c60208401611676565b90509250929050565b600080600060608486031215611779578081fd5b61178284611676565b925061179060208501611676565b9150604084013590509250925092565b600080600080608085870312156117b5578081fd5b6117be85611676565b93506117cc60208601611676565b925060408501359150606085013567ffffffffffffffff8111156117ee578182fd5b6117fa87828801611692565b91505092959194509250565b60008060408385031215611818578182fd5b61182183611676565b915060208301358015158114611835578182fd5b809150509250929050565b60008060408385031215611852578182fd5b61185b83611676565b946020939093013593505050565b60006020828403121561187a578081fd5b5035919050565b600060208284031215611892578081fd5b8135610ec781611bc7565b6000602082840312156118ae578081fd5b8151610ec781611bc7565b600080604083850312156118cb578182fd5b50508035926020909101359150565b6000806000606084860312156118ee578283fd5b833592506020840135915061190560408501611676565b90509250925092565b600080600060608486031215611922578283fd5b8335925060208401359150604084013567ffffffffffffffff811115611946578182fd5b61195286828701611692565b9150509250925092565b6000806040838503121561196e578182fd5b82359150602083013567ffffffffffffffff81111561198b578182fd5b61199785828601611692565b9150509250929050565b600081518084526119b9816020860160208601611b19565b601f01601f19169290920160200192915050565b600083516119df818460208801611b19565b8351908301906119f3818360208801611b19565b01949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611a2f908301846119a1565b9695505050505050565b604080825283519082018190526000906020906060840190828701845b82811015611a7257815184529284019290840190600101611a56565b50505083810382850152845180825282820190600581901b83018401878501865b83811015611ac157601f19868403018552611aaf8383516119a1565b94870194925090860190600101611a93565b50909998505050505050505050565b602081526000610ec760208301846119a1565b838152826020820152606060408201526000610b4760608301846119a1565b600082821015611b1457611b14611b9b565b500390565b60005b83811015611b34578181015183820152602001611b1c565b83811115610c475750506000910152565b600181811c90821680611b5957607f821691505b60208210811415611b7a57634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611b9457611b94611b9b565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114611bdd57600080fd5b5056fea2646970667358221220f46da9f8d4afe5298eb0666a32cb8652f962d9e5784bcccad1c97205a90b4dc064736f6c63430008040033"
    },
    EVTENCRYPTION: {
        path: './contracts/EVT-encryption.sol',
        name: 'EVTEncryptionDemo',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_tokenContract",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "DynamicPropertyAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "DynamicPropertyUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "EncryptedKeyRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionRemoved",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "addDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "addPermission",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicProperties",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "properties",
                        "type": "bytes[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "getDynamicProperty",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes",
                        "name": "EncryptionKey",
                        "type": "bytes"
                    }
                ],
                "name": "getEncryptionKeyId",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "pure",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "getTokenCount",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "hasPermission",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "mint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "registerEncryptedKey",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "removePermission",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperties",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "supportsProperty",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "tokenContract",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        bytecode: "60806040523480156200001157600080fd5b506040516200269e3803806200269e833981016040819052620000349162000172565b604080518082018252600d81526c115b98dc9e5c1d1a5bdb915595609a1b6020808301918252835180850190945260048452631151559560e21b908401528151919291839183916200008991600091620000cc565b5080516200009f906001906020840190620000cc565b5050600d80546001600160a01b0319166001600160a01b03959095169490941790935550620001df915050565b828054620000da90620001a2565b90600052602060002090601f016020900481019282620000fe576000855562000149565b82601f106200011957805160ff191683800117855562000149565b8280016001018555821562000149579182015b82811115620001495782518255916020019190600101906200012c565b50620001579291506200015b565b5090565b5b808211156200015757600081556001016200015c565b60006020828403121562000184578081fd5b81516001600160a01b03811681146200019b578182fd5b9392505050565b600181811c90821680620001b757607f821691505b60208210811415620001d957634e487b7160e01b600052602260045260246000fd5b50919050565b6124af80620001ef6000396000f3fe60806040526004361061019c5760003560e01c806376727fa3116100ec578063b88d4fde1161008a578063c87b56dd11610064578063c87b56dd1461047a578063e64546061461049a578063e985e9c5146104ba578063f1bc54931461050357600080fd5b8063b88d4fde14610406578063bfda488414610426578063c380ed3a1461045457600080fd5b8063a22cb465116100c6578063a22cb46514610393578063a7d65764146103b3578063a8a5b172146103d3578063affafce5146103e657600080fd5b806376727fa31461034c578063956c06cc1461036c57806395d89b411461037e57600080fd5b8063286633d21161015957806355a373d61161013357806355a373d6146102cb5780636352211e146102eb5780636a6278421461030b57806370a082311461031e57600080fd5b8063286633d2146102855780632c454f671461029857806342842e0e146102ab57600080fd5b806301ffc9a7146101a157806306fdde03146101d6578063081812fc146101f8578063095ea7b31461023057806321988c7b1461025257806323b872dd14610265575b600080fd5b3480156101ad57600080fd5b506101c16101bc366004611f97565b610523565b60405190151581526020015b60405180910390f35b3480156101e257600080fd5b506101eb610534565b6040516101cd919061224d565b34801561020457600080fd5b50610218610213366004611f7f565b6105c6565b6040516001600160a01b0390911681526020016101cd565b34801561023c57600080fd5b5061025061024b366004611f56565b6105ed565b005b61025061026036600461206f565b610708565b34801561027157600080fd5b50610250610280366004611e7b565b6107c5565b610250610293366004611f7f565b6107f6565b6102506102a636600461203b565b610890565b3480156102b757600080fd5b506102506102c6366004611e7b565b6108d4565b3480156102d757600080fd5b50600d54610218906001600160a01b031681565b3480156102f757600080fd5b50610218610306366004611f7f565b6108ef565b610250610319366004611e2f565b61094f565b34801561032a57600080fd5b5061033e610339366004611e2f565b610974565b6040519081526020016101cd565b34801561035857600080fd5b5061033e610367366004611e2f565b6109fa565b61025061037a3660046120bd565b5050565b34801561038a57600080fd5b506101eb610a6f565b34801561039f57600080fd5b506102506103ae366004611f1c565b610a7e565b3480156103bf57600080fd5b506101c16103ce36600461203b565b610a89565b6102506103e136600461201a565b610ab5565b3480156103f257600080fd5b506101c1610401366004611f7f565b610b49565b34801561041257600080fd5b50610250610421366004611eb6565b610b56565b34801561043257600080fd5b50610446610441366004611f7f565b610b8e565b6040516101cd9291906121b6565b34801561046057600080fd5b5061033e61046f366004611fcf565b805160209091012090565b34801561048657600080fd5b506101eb610495366004611f7f565b610d7d565b3480156104a657600080fd5b506101eb6104b536600461201a565b610df0565b3480156104c657600080fd5b506101c16104d5366004611e49565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b34801561050f57600080fd5b5061025061051e36600461203b565b610e9e565b600061052e82610ee2565b92915050565b606060008054610543906123b7565b80601f016020809104026020016040519081016040528092919081815260200182805461056f906123b7565b80156105bc5780601f10610591576101008083540402835291602001916105bc565b820191906000526020600020905b81548152906001019060200180831161059f57829003601f168201915b5050505050905090565b60006105d182610eed565b506000908152600460205260409020546001600160a01b031690565b60006105f8826108ef565b9050806001600160a01b0316836001600160a01b0316141561066b5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b0382161480610687575061068781336104d5565b6106f95760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c00006064820152608401610662565b6107038383610f4f565b505050565b61071182610b49565b61075d5760405162461bcd60e51b815260206004820152601f60248201527f4556545661726961626c653a20696e76616c69642070726f70657274794964006044820152606401610662565b60008381526008602090815260408083208584528252909120825161078492840190611cf3565b507f5c35113126bc2315b8100f93663558bf245464c60d15a9b35c08e000957e51cc8383836040516107b893929190612329565b60405180910390a1505050565b6107cf3382610fbd565b6107eb5760405162461bcd60e51b8152600401610662906122b2565b61070383838361103c565b6108016006826111d8565b1561084e5760405162461bcd60e51b815260206004820152601d60248201527f4556545661726961626c653a2070726f706572747949642065786973740000006044820152606401610662565b6108596006826111f0565b506040518181527f2b6a0e11889428f965bf2094c1743eef071e13a95251d803308991520e0266519060200160405180910390a150565b610899836108ef565b6001600160a01b0316336001600160a01b0316146108c95760405162461bcd60e51b815260040161066290612300565b6107038383836111fc565b61070383838360405180602001604052806000815250610b56565b6000818152600260205260408120546001600160a01b03168061052e5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610662565b600061095a600c5490565b905061096a600c80546001019055565b61037a82826112da565b60006001600160a01b0382166109de5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b6064820152608401610662565b506001600160a01b031660009081526003602052604090205490565b600d54604080516001600160a01b038481166024808401919091528351808403909101815260449092019092526020810180516001600160e01b03166370a0823160e01b1790526000928392610a52929116906112f4565b905080806020019051810190610a689190612002565b9392505050565b606060018054610543906123b7565b61037a338383611336565b60008381526009602090815260408083208584529091528120610aac8184611405565b95945050505050565b6000610ac0336109fa565b11610b065760405162461bcd60e51b81526020600482015260166024820152753737903932b3b4b9ba32b9103832b936b4b9b9b4b7b760511b6044820152606401610662565b610b0f826108ef565b6001600160a01b0316336001600160a01b031614610b3f5760405162461bcd60e51b815260040161066290612300565b61037a8282611427565b600061052e6006836111d8565b610b603383610fbd565b610b7c5760405162461bcd60e51b8152600401610662906122b2565b610b88848484846114cd565b50505050565b6060806000610b9d6006611500565b90508067ffffffffffffffff811115610bc657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610bef578160200160208202803683370190505b5092508067ffffffffffffffff811115610c1957634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610c4c57816020015b6060815260200190600190039081610c375790505b50915060005b81811015610d76576000610c6760068361150a565b905080858381518110610c8a57634e487b7160e01b600052603260045260246000fd5b6020908102919091018101919091526000878152600882526040808220848352909252208054610cb9906123b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610ce5906123b7565b8015610d325780601f10610d0757610100808354040283529160200191610d32565b820191906000526020600020905b815481529060010190602001808311610d1557829003601f168201915b5050505050848381518110610d5757634e487b7160e01b600052603260045260246000fd5b6020026020010181905250508080610d6e906123f2565b915050610c52565b5050915091565b6060610d8882610eed565b6000610d9f60408051602081019091526000815290565b90506000815111610dbf5760405180602001604052806000815250610a68565b80610dc984611516565b604051602001610dda92919061214a565b6040516020818303038152906040529392505050565b60008281526008602090815260408083208484529091529020805460609190610e18906123b7565b80601f0160208091040260200160405190810160405280929190818152602001828054610e44906123b7565b8015610e915780601f10610e6657610100808354040283529160200191610e91565b820191906000526020600020905b815481529060010190602001808311610e7457829003601f168201915b5050505050905092915050565b610ea7836108ef565b6001600160a01b0316336001600160a01b031614610ed75760405162461bcd60e51b815260040161066290612300565b610703838383611630565b600061052e82611690565b6000818152600260205260409020546001600160a01b0316610f4c5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b6044820152606401610662565b50565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610f84826108ef565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610fc9836108ef565b9050806001600160a01b0316846001600160a01b0316148061101057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b806110345750836001600160a01b0316611029846105c6565b6001600160a01b0316145b949350505050565b826001600160a01b031661104f826108ef565b6001600160a01b0316146110b35760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b6064820152608401610662565b6001600160a01b0382166111155760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610662565b611120600082610f4f565b6001600160a01b0383166000908152600360205260408120805460019290611149908490612374565b90915550506001600160a01b0382166000908152600360205260408120805460019290611177908490612348565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60008181526001830160205260408120541515610a68565b6000610a6883836116b5565b6000838152600a6020526040902061121490836111d8565b61126c5760405162461bcd60e51b8152602060048201526024808201527f455654456e63727974696f6e3a20696e76616c696420656e637279707465644b604482015263195e525160e21b6064820152608401610662565b6000838152600960209081526040808320858452909152902061128f8183611704565b50816001600160a01b0316847f3a4d307811ec9b759e2a67095288aca7032cffe40cfbf58b15eb74178fd45ef6856040516112cc91815260200190565b60405180910390a350505050565b61037a828260405180602001604052806000815250611719565b6060610a6883836040518060400160405280601e81526020017f416464726573733a206c6f772d6c6576656c2063616c6c206661696c6564000081525061174c565b816001600160a01b0316836001600160a01b031614156113985760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610662565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03811660009081526001830160205260408120541515610a68565b6000828152600a6020526040902061143f81836111d8565b156114835760405162461bcd60e51b8152602060048201526014602482015273195b98dc9e5c1d195912d95e525108195e1a5cdd60621b6044820152606401610662565b61148d81836111f0565b50827f44505c31d3afd73d70508c1d2687b8974aaee5313067dc12f6a3514c89a3bef5836040516114c091815260200190565b60405180910390a2505050565b6114d884848461103c565b6114e48484848461175b565b610b885760405162461bcd60e51b815260040161066290612260565b600061052e825490565b6000610a688383611868565b60608161153a5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611564578061154e816123f2565b915061155d9050600a83612360565b915061153e565b60008167ffffffffffffffff81111561158d57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156115b7576020820181803683370190505b5090505b8415611034576115cc600183612374565b91506115d9600a8661240d565b6115e4906030612348565b60f81b81838151811061160757634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611629600a86612360565b94506115bb565b6000838152600960209081526040808320858452909152902061165381836118a0565b50816001600160a01b0316847fa1324460c0c0f0e277ca76993d05dd15f542bed836a91389e248b1c01245c506856040516112cc91815260200190565b60006001600160e01b031982166369457ef160e11b148061052e575061052e826118b5565b60008181526001830160205260408120546116fc5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561052e565b50600061052e565b6000610a68836001600160a01b0384166116b5565b61172383836118da565b611730600084848461175b565b6107035760405162461bcd60e51b815260040161066290612260565b60606110348484600085611a1c565b60006001600160a01b0384163b1561185d57604051630a85bd0160e11b81526001600160a01b0385169063150b7a029061179f903390899088908890600401612179565b602060405180830381600087803b1580156117b957600080fd5b505af19250505080156117e9575060408051601f3d908101601f191682019092526117e691810190611fb3565b60015b611843573d808015611817576040519150601f19603f3d011682016040523d82523d6000602084013e61181c565b606091505b50805161183b5760405162461bcd60e51b815260040161066290612260565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611034565b506001949350505050565b600082600001828154811061188d57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b6000610a68836001600160a01b038416611b4d565b60006001600160e01b0319821663357ba58160e11b148061052e575061052e82611c6a565b6001600160a01b0382166119305760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610662565b6000818152600260205260409020546001600160a01b0316156119955760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610662565b6001600160a01b03821660009081526003602052604081208054600192906119be908490612348565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b606082471015611a7d5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610662565b6001600160a01b0385163b611ad45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610662565b600080866001600160a01b03168587604051611af0919061212e565b60006040518083038185875af1925050503d8060008114611b2d576040519150601f19603f3d011682016040523d82523d6000602084013e611b32565b606091505b5091509150611b42828286611cba565b979650505050505050565b60008181526001830160205260408120548015611c60576000611b71600183612374565b8554909150600090611b8590600190612374565b9050818114611c06576000866000018281548110611bb357634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080876000018481548110611be457634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611c2557634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061052e565b600091505061052e565b60006001600160e01b031982166380ac58cd60e01b1480611c9b57506001600160e01b03198216635b5e139f60e01b145b8061052e57506301ffc9a760e01b6001600160e01b031983161461052e565b60608315611cc9575081610a68565b825115611cd95782518084602001fd5b8160405162461bcd60e51b8152600401610662919061224d565b828054611cff906123b7565b90600052602060002090601f016020900481019282611d215760008555611d67565b82601f10611d3a57805160ff1916838001178555611d67565b82800160010185558215611d67579182015b82811115611d67578251825591602001919060010190611d4c565b50611d73929150611d77565b5090565b5b80821115611d735760008155600101611d78565b80356001600160a01b0381168114611da357600080fd5b919050565b600082601f830112611db8578081fd5b813567ffffffffffffffff80821115611dd357611dd361244d565b604051601f8301601f19908116603f01168101908282118183101715611dfb57611dfb61244d565b81604052838152866020858801011115611e13578485fd5b8360208701602083013792830160200193909352509392505050565b600060208284031215611e40578081fd5b610a6882611d8c565b60008060408385031215611e5b578081fd5b611e6483611d8c565b9150611e7260208401611d8c565b90509250929050565b600080600060608486031215611e8f578081fd5b611e9884611d8c565b9250611ea660208501611d8c565b9150604084013590509250925092565b60008060008060808587031215611ecb578081fd5b611ed485611d8c565b9350611ee260208601611d8c565b925060408501359150606085013567ffffffffffffffff811115611f04578182fd5b611f1087828801611da8565b91505092959194509250565b60008060408385031215611f2e578182fd5b611f3783611d8c565b915060208301358015158114611f4b578182fd5b809150509250929050565b60008060408385031215611f68578182fd5b611f7183611d8c565b946020939093013593505050565b600060208284031215611f90578081fd5b5035919050565b600060208284031215611fa8578081fd5b8135610a6881612463565b600060208284031215611fc4578081fd5b8151610a6881612463565b600060208284031215611fe0578081fd5b813567ffffffffffffffff811115611ff6578182fd5b61103484828501611da8565b600060208284031215612013578081fd5b5051919050565b6000806040838503121561202c578182fd5b50508035926020909101359150565b60008060006060848603121561204f578283fd5b833592506020840135915061206660408501611d8c565b90509250925092565b600080600060608486031215612083578081fd5b8335925060208401359150604084013567ffffffffffffffff8111156120a7578182fd5b6120b386828701611da8565b9150509250925092565b600080604083850312156120cf578182fd5b82359150602083013567ffffffffffffffff8111156120ec578182fd5b6120f885828601611da8565b9150509250929050565b6000815180845261211a81602086016020860161238b565b601f01601f19169290920160200192915050565b6000825161214081846020870161238b565b9190910192915050565b6000835161215c81846020880161238b565b83519083019061217081836020880161238b565b01949350505050565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906121ac90830184612102565b9695505050505050565b604080825283519082018190526000906020906060840190828701845b828110156121ef578151845292840192908401906001016121d3565b50505083810382850152845180825282820190600581901b83018401878501865b8381101561223e57601f1986840301855261222c838351612102565b94870194925090860190600101612210565b50909998505050505050505050565b602081526000610a686020830184612102565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b6020808252600f908201526e3737ba103a37b5b2b71037bbb732b960891b604082015260600190565b838152826020820152606060408201526000610aac6060830184612102565b6000821982111561235b5761235b612421565b500190565b60008261236f5761236f612437565b500490565b60008282101561238657612386612421565b500390565b60005b838110156123a657818101518382015260200161238e565b83811115610b885750506000910152565b600181811c908216806123cb57607f821691505b602082108114156123ec57634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561240657612406612421565b5060010190565b60008261241c5761241c612437565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b031981168114610f4c57600080fdfea2646970667358221220af29ef94d211874bad2a410958347977c55e262e97f749cdf0e6f1b5c1850af464736f6c63430008040033"
    },
    NFTENCRYPTION: {
        path: './contracts/NFT-encryption.sol',
        name: 'EncryptionToken',
        abi: [
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "price_",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "price",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "price_",
                        "type": "uint256"
                    }
                ],
                "name": "updatePirce",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "withdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        bytecode: "60806040523480156200001157600080fd5b5060405162001a7238038062001a728339810160408190526200003491620001be565b604080518082018252600f81526e22b731b93cb83a34b7b72a37b5b2b760891b60208083019182528351808501909452600384526213915560ea1b908401528151919291620000869160009162000118565b5080516200009c90600190602084019062000118565b505050620000b9620000b3620000c260201b60201c565b620000c6565b60085562000214565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b8280546200012690620001d7565b90600052602060002090601f0160209004810192826200014a576000855562000195565b82601f106200016557805160ff191683800117855562000195565b8280016001018555821562000195579182015b828111156200019557825182559160200191906001019062000178565b50620001a3929150620001a7565b5090565b5b80821115620001a35760008155600101620001a8565b600060208284031215620001d0578081fd5b5051919050565b600181811c90821680620001ec57607f821691505b602082108114156200020e57634e487b7160e01b600052602260045260246000fd5b50919050565b61184e80620002246000396000f3fe60806040526004361061012a5760003560e01c80636352211e116100ab578063a035b1fe1161006f578063a035b1fe1461031e578063a22cb46514610334578063b88d4fde14610354578063c87b56dd14610374578063e985e9c514610394578063f2fde38b146103dd57600080fd5b80636352211e1461028857806370a08231146102a8578063715018a6146102d65780638da5cb5b146102eb57806395d89b411461030957600080fd5b80633ccfd60b116100f25780633ccfd60b1461020057806340d097c31461021557806342842e0e1461022857806342966c68146102485780634a67d57f1461026857600080fd5b806301ffc9a71461012f57806306fdde0314610164578063081812fc14610186578063095ea7b3146101be57806323b872dd146101e0575b600080fd5b34801561013b57600080fd5b5061014f61014a36600461154c565b6103fd565b60405190151581526020015b60405180910390f35b34801561017057600080fd5b5061017961044f565b60405161015b9190611634565b34801561019257600080fd5b506101a66101a1366004611584565b6104e1565b6040516001600160a01b03909116815260200161015b565b3480156101ca57600080fd5b506101de6101d9366004611523565b610508565b005b3480156101ec57600080fd5b506101de6101fb3660046113d9565b610623565b34801561020c57600080fd5b506101de610655565b6101de61022336600461138d565b610672565b34801561023457600080fd5b506101de6102433660046113d9565b6106e4565b34801561025457600080fd5b506101de610263366004611584565b6106ff565b34801561027457600080fd5b506101de610283366004611584565b610730565b34801561029457600080fd5b506101a66102a3366004611584565b61073d565b3480156102b457600080fd5b506102c86102c336600461138d565b61079d565b60405190815260200161015b565b3480156102e257600080fd5b506101de610823565b3480156102f757600080fd5b506006546001600160a01b03166101a6565b34801561031557600080fd5b50610179610835565b34801561032a57600080fd5b506102c860085481565b34801561034057600080fd5b506101de61034f3660046114e9565b610844565b34801561036057600080fd5b506101de61036f366004611414565b61084f565b34801561038057600080fd5b5061017961038f366004611584565b610887565b3480156103a057600080fd5b5061014f6103af3660046113a7565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156103e957600080fd5b506101de6103f836600461138d565b6108fb565b60006001600160e01b031982166380ac58cd60e01b148061042e57506001600160e01b03198216635b5e139f60e01b145b8061044957506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461045e90611756565b80601f016020809104026020016040519081016040528092919081815260200182805461048a90611756565b80156104d75780601f106104ac576101008083540402835291602001916104d7565b820191906000526020600020905b8154815290600101906020018083116104ba57829003601f168201915b5050505050905090565b60006104ec82610971565b506000908152600460205260409020546001600160a01b031690565b60006105138261073d565b9050806001600160a01b0316836001600160a01b031614156105865760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b03821614806105a257506105a281336103af565b6106145760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161057d565b61061e83836109d0565b505050565b61062e335b82610a3e565b61064a5760405162461bcd60e51b815260040161057d90611699565b61061e838383610abd565b61067061066a6006546001600160a01b031690565b47610c59565b565b6008543410156106bb5760405162461bcd60e51b8152602060048201526014602482015273383ab931b430b9b290383934b1b29032b93937b960611b604482015260640161057d565b60006106c660075490565b90506106d6600780546001019055565b6106e08282610d72565b5050565b61061e8383836040518060200160405280600081525061084f565b61070833610628565b6107245760405162461bcd60e51b815260040161057d90611699565b61072d81610d8c565b50565b610738610e27565b600855565b6000818152600260205260408120546001600160a01b0316806104495760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161057d565b60006001600160a01b0382166108075760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161057d565b506001600160a01b031660009081526003602052604090205490565b61082b610e27565b6106706000610e81565b60606001805461045e90611756565b6106e0338383610ed3565b6108593383610a3e565b6108755760405162461bcd60e51b815260040161057d90611699565b61088184848484610fa2565b50505050565b606061089282610971565b60006108a960408051602081019091526000815290565b905060008151116108c957604051806020016040528060008152506108f4565b806108d384610fd5565b6040516020016108e49291906115c8565b6040516020818303038152906040525b9392505050565b610903610e27565b6001600160a01b0381166109685760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161057d565b61072d81610e81565b6000818152600260205260409020546001600160a01b031661072d5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161057d565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a058261073d565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610a4a8361073d565b9050806001600160a01b0316846001600160a01b03161480610a9157506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b80610ab55750836001600160a01b0316610aaa846104e1565b6001600160a01b0316145b949350505050565b826001600160a01b0316610ad08261073d565b6001600160a01b031614610b345760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161057d565b6001600160a01b038216610b965760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161057d565b610ba16000826109d0565b6001600160a01b0383166000908152600360205260408120805460019290610bca908490611713565b90915550506001600160a01b0382166000908152600360205260408120805460019290610bf89084906116e7565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b80471015610ca95760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015260640161057d565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610cf6576040519150601f19603f3d011682016040523d82523d6000602084013e610cfb565b606091505b505090508061061e5760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d61792068617665207265766572746564000000000000606482015260840161057d565b6106e08282604051806020016040528060008152506110ef565b6000610d978261073d565b9050610da46000836109d0565b6001600160a01b0381166000908152600360205260408120805460019290610dcd908490611713565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6006546001600160a01b031633146106705760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161057d565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415610f355760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161057d565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610fad848484610abd565b610fb984848484611122565b6108815760405162461bcd60e51b815260040161057d90611647565b606081610ff95750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611023578061100d81611791565b915061101c9050600a836116ff565b9150610ffd565b60008167ffffffffffffffff81111561104c57634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611076576020820181803683370190505b5090505b8415610ab55761108b600183611713565b9150611098600a866117ac565b6110a39060306116e7565b60f81b8183815181106110c657634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506110e8600a866116ff565b945061107a565b6110f9838361122f565b6111066000848484611122565b61061e5760405162461bcd60e51b815260040161057d90611647565b60006001600160a01b0384163b1561122457604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906111669033908990889088906004016115f7565b602060405180830381600087803b15801561118057600080fd5b505af19250505080156111b0575060408051601f3d908101601f191682019092526111ad91810190611568565b60015b61120a573d8080156111de576040519150601f19603f3d011682016040523d82523d6000602084013e6111e3565b606091505b5080516112025760405162461bcd60e51b815260040161057d90611647565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610ab5565b506001949350505050565b6001600160a01b0382166112855760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161057d565b6000818152600260205260409020546001600160a01b0316156112ea5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161057d565b6001600160a01b03821660009081526003602052604081208054600192906113139084906116e7565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b80356001600160a01b038116811461138857600080fd5b919050565b60006020828403121561139e578081fd5b6108f482611371565b600080604083850312156113b9578081fd5b6113c283611371565b91506113d060208401611371565b90509250929050565b6000806000606084860312156113ed578081fd5b6113f684611371565b925061140460208501611371565b9150604084013590509250925092565b60008060008060808587031215611429578081fd5b61143285611371565b935061144060208601611371565b925060408501359150606085013567ffffffffffffffff80821115611463578283fd5b818701915087601f830112611476578283fd5b813581811115611488576114886117ec565b604051601f8201601f19908116603f011681019083821181831017156114b0576114b06117ec565b816040528281528a60208487010111156114c8578586fd5b82602086016020830137918201602001949094529598949750929550505050565b600080604083850312156114fb578182fd5b61150483611371565b915060208301358015158114611518578182fd5b809150509250929050565b60008060408385031215611535578182fd5b61153e83611371565b946020939093013593505050565b60006020828403121561155d578081fd5b81356108f481611802565b600060208284031215611579578081fd5b81516108f481611802565b600060208284031215611595578081fd5b5035919050565b600081518084526115b481602086016020860161172a565b601f01601f19169290920160200192915050565b600083516115da81846020880161172a565b8351908301906115ee81836020880161172a565b01949350505050565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061162a9083018461159c565b9695505050505050565b6020815260006108f4602083018461159c565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b600082198211156116fa576116fa6117c0565b500190565b60008261170e5761170e6117d6565b500490565b600082821015611725576117256117c0565b500390565b60005b8381101561174557818101518382015260200161172d565b838111156108815750506000910152565b600181811c9082168061176a57607f821691505b6020821081141561178b57634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156117a5576117a56117c0565b5060010190565b6000826117bb576117bb6117d6565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b03198116811461072d57600080fdfea2646970667358221220cc7b5b71ba419c3a434ffea9cc71afc819bfc349e05f5bdc6fa493562b31cf1164736f6c63430008040033"
    },
    EVTVARIABLE: {
        path: './contracts/EVT-variable.sol',
        name: 'EVTVariableDemo',
        abi: [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "approved",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "ApprovalForAll",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "DynamicPropertyAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "DynamicPropertyUpdated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "EncryptedKeyRegistered",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionAdded",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "PermissionRemoved",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "addDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "addPermission",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "propertyName",
                        "type": "string"
                    }
                ],
                "name": "addProperty",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getApproved",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicProperties",
                "outputs": [
                    {
                        "internalType": "bytes32[]",
                        "name": "ids",
                        "type": "bytes32[]"
                    },
                    {
                        "internalType": "bytes[]",
                        "name": "properties",
                        "type": "bytes[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicPropertiesArray",
                "outputs": [
                    {
                        "internalType": "string[]",
                        "name": "properties",
                        "type": "string[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "getDynamicPropertiesAsString",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "properties",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "getDynamicProperty",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "propertyName",
                        "type": "string"
                    }
                ],
                "name": "getProperty",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "propertyName",
                        "type": "string"
                    }
                ],
                "name": "getPropertyId",
                "outputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "hasPermission",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    }
                ],
                "name": "isApprovedForAll",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "ownerOf",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    }
                ],
                "name": "registerEncryptedKey",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "encryptedKeyID",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "address",
                        "name": "licensee",
                        "type": "address"
                    }
                ],
                "name": "removePermission",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    }
                ],
                "name": "safeMint",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "data",
                        "type": "bytes"
                    }
                ],
                "name": "safeTransferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "operator",
                        "type": "address"
                    },
                    {
                        "internalType": "bool",
                        "name": "approved",
                        "type": "bool"
                    }
                ],
                "name": "setApprovalForAll",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes",
                        "name": "message",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperties",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    },
                    {
                        "internalType": "bytes",
                        "name": "propertyValue",
                        "type": "bytes"
                    }
                ],
                "name": "setDynamicProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "propertyName",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "propertyValue",
                        "type": "string"
                    }
                ],
                "name": "setProperty",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes4",
                        "name": "interfaceId",
                        "type": "bytes4"
                    }
                ],
                "name": "supportsInterface",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "bytes32",
                        "name": "propertyId",
                        "type": "bytes32"
                    }
                ],
                "name": "supportsProperty",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "tokenURI",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "tokenId",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        bytecode: "60806040523480156200001157600080fd5b50604080518082018252600b81526a15985c9a58589b1951559560aa1b6020808301918252835180850190945260048452631591559560e21b908401528151919291839183916200006591600091620000f6565b5080516200007b906001906020840190620000f6565b50505050506200009a62000094620000a060201b60201c565b620000a4565b620001d9565b3390565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b82805462000104906200019c565b90600052602060002090601f01602090048101928262000128576000855562000173565b82601f106200014357805160ff191683800117855562000173565b8280016001018555821562000173579182015b828111156200017357825182559160200191906001019062000156565b506200018192915062000185565b5090565b5b8082111562000181576000815560010162000186565b600181811c90821680620001b157607f821691505b60208210811415620001d357634e487b7160e01b600052602260045260246000fd5b50919050565b612a4880620001e96000396000f3fe6080604052600436106101ee5760003560e01c80638da5cb5b1161010d578063b88d4fde116100a0578063e64546061161006f578063e645460614610559578063e985e9c514610579578063f1bc5493146105c2578063f2cfaeda146105e2578063f2fde38b1461060f57600080fd5b8063b88d4fde146104cb578063bfda4884146104eb578063c87b56dd14610519578063d1e67a4f1461053957600080fd5b8063a7d65764116100dc578063a7d6576414610458578063a8a5b17214610478578063affafce51461048b578063b48cc6e5146104ab57600080fd5b80638da5cb5b146103f3578063956c06cc1461041157806395d89b4114610423578063a22cb4651461043857600080fd5b80632c454f67116101855780636352211e116101545780636352211e1461037057806364789ebb1461039057806370a08231146103be578063715018a6146103de57600080fd5b80632c454f67146102fd5780633980ae3d1461031057806340d097c31461033057806342842e0e1461035057600080fd5b80631310ae52116101c15780631310ae52146102a457806321988c7b146102b757806323b872dd146102ca578063286633d2146102ea57600080fd5b806301ffc9a7146101f357806306fdde0314610228578063081812fc1461024a578063095ea7b314610282575b600080fd5b3480156101ff57600080fd5b5061021361020e366004612271565b61062f565b60405190151581526020015b60405180910390f35b34801561023457600080fd5b5061023d610640565b60405161021f91906127b6565b34801561025657600080fd5b5061026a610265366004612259565b6106d2565b6040516001600160a01b03909116815260200161021f565b34801561028e57600080fd5b506102a261029d366004612230565b6106f9565b005b6102a26102b236600461242e565b610814565b6102a26102c536600461239b565b610874565b3480156102d657600080fd5b506102a26102e5366004612155565b610931565b6102a26102f8366004612259565b610962565b6102a261030b366004612367565b6109fc565b34801561031c57600080fd5b5061023d61032b366004612259565b610ada565b34801561033c57600080fd5b506102a261034b366004612109565b610bfb565b34801561035c57600080fd5b506102a261036b366004612155565b610c28565b34801561037c57600080fd5b5061026a61038b366004612259565b610c43565b34801561039c57600080fd5b506103b06103ab3660046122a9565b610ca3565b60405190815260200161021f565b3480156103ca57600080fd5b506103b06103d9366004612109565b610cd3565b3480156103ea57600080fd5b506102a2610d59565b3480156103ff57600080fd5b50600c546001600160a01b031661026a565b6102a261041f3660046123e9565b5050565b34801561042f57600080fd5b5061023d610d6d565b34801561044457600080fd5b506102a26104533660046121f6565b610d7c565b34801561046457600080fd5b50610213610473366004612367565b610d87565b6102a2610486366004612346565b610db3565b34801561049757600080fd5b506102136104a6366004612259565b610e59565b3480156104b757600080fd5b506102a26104c63660046122a9565b610e66565b3480156104d757600080fd5b506102a26104e6366004612190565b610ec9565b3480156104f757600080fd5b5061050b610506366004612259565b610efb565b60405161021f9291906126be565b34801561052557600080fd5b5061023d610534366004612259565b6110ea565b34801561054557600080fd5b5061023d6105543660046123e9565b61114e565b34801561056557600080fd5b5061023d610574366004612346565b61117f565b34801561058557600080fd5b50610213610594366004612123565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b3480156105ce57600080fd5b506102a26105dd366004612367565b61122d565b3480156105ee57600080fd5b506106026105fd366004612259565b61128d565b60405161021f9190612755565b34801561061b57600080fd5b506102a261062a366004612109565b61147a565b600061063a826114f3565b92915050565b60606000805461064f90612950565b80601f016020809104026020016040519081016040528092919081815260200182805461067b90612950565b80156106c85780601f1061069d576101008083540402835291602001916106c8565b820191906000526020600020905b8154815290600101906020018083116106ab57829003601f168201915b5050505050905090565b60006106dd82611518565b506000908152600460205260409020546001600160a01b031690565b600061070482610c43565b9050806001600160a01b0316836001600160a01b031614156107775760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084015b60405180910390fd5b336001600160a01b038216148061079357506107938133610594565b6108055760405162461bcd60e51b815260206004820152603e60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206e6f7220617070726f76656420666f7220616c6c0000606482015260840161076e565b61080f8383611577565b505050565b600061081f83610ca3565b6000818152600e602090815260409091208551929350610843929091860190612003565b5061086e84828460405160200161085a91906127b6565b604051602081830303815290604052610874565b50505050565b61087d82610e59565b6108c95760405162461bcd60e51b815260206004820152601f60248201527f4556545661726961626c653a20696e76616c69642070726f7065727479496400604482015260640161076e565b6000838152600860209081526040808320858452825290912082516108f092840190612003565b507f5c35113126bc2315b8100f93663558bf245464c60d15a9b35c08e000957e51cc83838360405161092493929190612869565b60405180910390a1505050565b61093b33826115e5565b6109575760405162461bcd60e51b815260040161076e9061281b565b61080f838383611664565b61096d600682611800565b156109ba5760405162461bcd60e51b815260206004820152601d60248201527f4556545661726961626c653a2070726f70657274794964206578697374000000604482015260640161076e565b6109c5600682611818565b506040518181527f2b6a0e11889428f965bf2094c1743eef071e13a95251d803308991520e0266519060200160405180910390a150565b6000838152600a60205260409020610a149083611800565b610a6c5760405162461bcd60e51b8152602060048201526024808201527f455654456e63727974696f6e3a20696e76616c696420656e637279707465644b604482015263195e525160e21b606482015260840161076e565b60008381526009602090815260408083208584529091529020610a8f8183611824565b50816001600160a01b0316847f3a4d307811ec9b759e2a67095288aca7032cffe40cfbf58b15eb74178fd45ef685604051610acc91815260200190565b60405180910390a350505050565b60606000610ae78361128d565b9050604051806040016040528060018152602001605b60f81b815250915060005b8151811015610bd2578151610b1e8260016128e1565b1415610b745782828281518110610b4557634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001610b5e9291906124ba565b6040516020818303038152906040529250610bc0565b82828281518110610b9557634e487b7160e01b600052603260045260246000fd5b6020026020010151604051602001610bae9291906124e9565b60405160208183030381529060405292505b80610bca8161298b565b915050610b08565b5081604051602001610be4919061258f565b604051602081830303815290604052915050919050565b610c03611839565b6000610c0e600d5490565b9050610c1e600d80546001019055565b61041f8282611893565b61080f83838360405180602001604052806000815250610ec9565b6000818152600260205260408120546001600160a01b03168061063a5760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161076e565b600081604051602001610cb691906127b6565b604051602081830303815290604052805190602001209050919050565b60006001600160a01b038216610d3d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f7420612076616044820152683634b21037bbb732b960b91b606482015260840161076e565b506001600160a01b031660009081526003602052604090205490565b610d61611839565b610d6b60006118ad565b565b60606001805461064f90612950565b61041f3383836118ff565b60008381526009602090815260408083208584529091528120610daa81846119ce565b95945050505050565b6000828152600a60205260409020610dcb8183611800565b15610e0f5760405162461bcd60e51b8152602060048201526014602482015273195b98dc9e5c1d195912d95e525108195e1a5cdd60621b604482015260640161076e565b610e198183611818565b50827f44505c31d3afd73d70508c1d2687b8974aaee5313067dc12f6a3514c89a3bef583604051610e4c91815260200190565b60405180910390a2505050565b600061063a600683611800565b610e6e611839565b6000815111610eb35760405162461bcd60e51b8152602060048201526011602482015270496e76616c69642070726f70657274792160781b604482015260640161076e565b6000610ebe82610ca3565b905061041f81610962565b610ed333836115e5565b610eef5760405162461bcd60e51b815260040161076e9061281b565b61086e848484846119f0565b6060806000610f0a6006611a23565b90508067ffffffffffffffff811115610f3357634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610f5c578160200160208202803683370190505b5092508067ffffffffffffffff811115610f8657634e487b7160e01b600052604160045260246000fd5b604051908082528060200260200182016040528015610fb957816020015b6060815260200190600190039081610fa45790505b50915060005b818110156110e3576000610fd4600683611a2d565b905080858381518110610ff757634e487b7160e01b600052603260045260246000fd5b602090810291909101810191909152600087815260088252604080822084835290925220805461102690612950565b80601f016020809104026020016040519081016040528092919081815260200182805461105290612950565b801561109f5780601f106110745761010080835404028352916020019161109f565b820191906000526020600020905b81548152906001019060200180831161108257829003601f168201915b50505050508483815181106110c457634e487b7160e01b600052603260045260246000fd5b60200260200101819052505080806110db9061298b565b915050610fbf565b5050915091565b60606110f582611518565b600061110c60408051602081019091526000815290565b9050600081511161112c5760405180602001604052806000815250611147565b8061113684611a39565b604051602001610be49291906124ba565b9392505050565b6060600061115b83610ca3565b90506000611169858361117f565b905080806020019051810190610daa91906122dc565b600082815260086020908152604080832084845290915290208054606091906111a790612950565b80601f01602080910402602001604051908101604052809291908181526020018280546111d390612950565b80156112205780601f106111f557610100808354040283529160200191611220565b820191906000526020600020905b81548152906001019060200180831161120357829003601f168201915b5050505050905092915050565b600083815260096020908152604080832085845290915290206112508183611b53565b50816001600160a01b0316847fa1324460c0c0f0e277ca76993d05dd15f542bed836a91389e248b1c01245c50685604051610acc91815260200190565b606060008061129b84610efb565b9150915080518251146112df5760405162461bcd60e51b815260206004820152600c60248201526b3632b733ba341032b93937b960a11b604482015260640161076e565b815167ffffffffffffffff81111561130757634e487b7160e01b600052604160045260246000fd5b60405190808252806020026020018201604052801561133a57816020015b60608152602001906001900390816113255790505b50925060005b825181101561147257600083828151811061136b57634e487b7160e01b600052603260045260246000fd5b602002602001015190506000600e600083815260200190815260200160002060405160200161139a91906125b4565b604051602081830303815290604052905060008484815181106113cd57634e487b7160e01b600052603260045260246000fd5b60200260200101518060200190518101906113e891906122dc565b905081816040516020016113fd929190612524565b60405160208183030381529060405291508160405160200161141f919061256a565b60405160208183030381529060405291508187858151811061145157634e487b7160e01b600052603260045260246000fd5b6020026020010181905250505050808061146a9061298b565b915050611340565b505050919050565b611482611839565b6001600160a01b0381166114e75760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b606482015260840161076e565b6114f0816118ad565b50565b60006001600160e01b031982166369457ef160e11b148061063a575061063a82611b68565b6000818152600260205260409020546001600160a01b03166114f05760405162461bcd60e51b8152602060048201526018602482015277115490cdcc8c4e881a5b9d985b1a59081d1bdad95b88125160421b604482015260640161076e565b600081815260046020526040902080546001600160a01b0319166001600160a01b03841690811790915581906115ac82610c43565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000806115f183610c43565b9050806001600160a01b0316846001600160a01b0316148061163857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b8061165c5750836001600160a01b0316611651846106d2565b6001600160a01b0316145b949350505050565b826001600160a01b031661167782610c43565b6001600160a01b0316146116db5760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161076e565b6001600160a01b03821661173d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161076e565b611748600082611577565b6001600160a01b038316600090815260036020526040812080546001929061177190849061290d565b90915550506001600160a01b038216600090815260036020526040812080546001929061179f9084906128e1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b60008181526001830160205260408120541515611147565b60006111478383611b8d565b6000611147836001600160a01b038416611b8d565b600c546001600160a01b03163314610d6b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161076e565b61041f828260405180602001604052806000815250611bdc565b600c80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031614156119615760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161076e565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b03811660009081526001830160205260408120541515611147565b6119fb848484611664565b611a0784848484611c0f565b61086e5760405162461bcd60e51b815260040161076e906127c9565b600061063a825490565b60006111478383611d1c565b606081611a5d5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611a875780611a718161298b565b9150611a809050600a836128f9565b9150611a61565b60008167ffffffffffffffff811115611ab057634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611ada576020820181803683370190505b5090505b841561165c57611aef60018361290d565b9150611afc600a866129a6565b611b079060306128e1565b60f81b818381518110611b2a57634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a905350611b4c600a866128f9565b9450611ade565b6000611147836001600160a01b038416611d54565b60006001600160e01b0319821663357ba58160e11b148061063a575061063a82611e71565b6000818152600183016020526040812054611bd45750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561063a565b50600061063a565b611be68383611ec1565b611bf36000848484611c0f565b61080f5760405162461bcd60e51b815260040161076e906127c9565b60006001600160a01b0384163b15611d1157604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611c53903390899088908890600401612681565b602060405180830381600087803b158015611c6d57600080fd5b505af1925050508015611c9d575060408051601f3d908101601f19168201909252611c9a9181019061228d565b60015b611cf7573d808015611ccb576040519150601f19603f3d011682016040523d82523d6000602084013e611cd0565b606091505b508051611cef5760405162461bcd60e51b815260040161076e906127c9565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061165c565b506001949350505050565b6000826000018281548110611d4157634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905092915050565b60008181526001830160205260408120548015611e67576000611d7860018361290d565b8554909150600090611d8c9060019061290d565b9050818114611e0d576000866000018281548110611dba57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154905080876000018481548110611deb57634e487b7160e01b600052603260045260246000fd5b6000918252602080832090910192909255918252600188019052604090208390555b8554869080611e2c57634e487b7160e01b600052603160045260246000fd5b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061063a565b600091505061063a565b60006001600160e01b031982166380ac58cd60e01b1480611ea257506001600160e01b03198216635b5e139f60e01b145b8061063a57506301ffc9a760e01b6001600160e01b031983161461063a565b6001600160a01b038216611f175760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161076e565b6000818152600260205260409020546001600160a01b031615611f7c5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161076e565b6001600160a01b0382166000908152600360205260408120805460019290611fa59084906128e1565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461200f90612950565b90600052602060002090601f0160209004810192826120315760008555612077565b82601f1061204a57805160ff1916838001178555612077565b82800160010185558215612077579182015b8281111561207757825182559160200191906001019061205c565b50612083929150612087565b5090565b5b808211156120835760008155600101612088565b80356001600160a01b03811681146120b357600080fd5b919050565b600082601f8301126120c8578081fd5b81356120db6120d6826128b9565b612888565b8181528460208386010111156120ef578283fd5b816020850160208301379081016020019190915292915050565b60006020828403121561211a578081fd5b6111478261209c565b60008060408385031215612135578081fd5b61213e8361209c565b915061214c6020840161209c565b90509250929050565b600080600060608486031215612169578081fd5b6121728461209c565b92506121806020850161209c565b9150604084013590509250925092565b600080600080608085870312156121a5578081fd5b6121ae8561209c565b93506121bc6020860161209c565b925060408501359150606085013567ffffffffffffffff8111156121de578182fd5b6121ea878288016120b8565b91505092959194509250565b60008060408385031215612208578182fd5b6122118361209c565b915060208301358015158114612225578182fd5b809150509250929050565b60008060408385031215612242578182fd5b61224b8361209c565b946020939093013593505050565b60006020828403121561226a578081fd5b5035919050565b600060208284031215612282578081fd5b8135611147816129fc565b60006020828403121561229e578081fd5b8151611147816129fc565b6000602082840312156122ba578081fd5b813567ffffffffffffffff8111156122d0578182fd5b61165c848285016120b8565b6000602082840312156122ed578081fd5b815167ffffffffffffffff811115612303578182fd5b8201601f81018413612313578182fd5b80516123216120d6826128b9565b818152856020838501011115612335578384fd5b610daa826020830160208601612924565b60008060408385031215612358578081fd5b50508035926020909101359150565b60008060006060848603121561237b578081fd5b83359250602084013591506123926040850161209c565b90509250925092565b6000806000606084860312156123af578081fd5b8335925060208401359150604084013567ffffffffffffffff8111156123d3578182fd5b6123df868287016120b8565b9150509250925092565b600080604083850312156123fb578182fd5b82359150602083013567ffffffffffffffff811115612418578182fd5b612424858286016120b8565b9150509250929050565b600080600060608486031215612442578081fd5b83359250602084013567ffffffffffffffff80821115612460578283fd5b61246c878388016120b8565b93506040860135915080821115612481578283fd5b506123df868287016120b8565b600081518084526124a6816020860160208601612924565b601f01601f19169290920160200192915050565b600083516124cc818460208801612924565b8351908301906124e0818360208801612924565b01949350505050565b600083516124fb818460208801612924565b83519083019061250f818360208801612924565b600b60fa1b9101908152600101949350505050565b60008351612536818460208801612924565b601160f91b9083018181528451909190612557816001850160208901612924565b6001920191820152600201949350505050565b6000825161257c818460208701612924565b607d60f81b920191825250600101919050565b600082516125a1818460208701612924565b605d60f81b920191825250600101919050565b6e3d913a3930b4ba2fba3cb832911d1160891b81528154600090600f908290600181811c90808316806125e857607f831692505b602080841082141561260857634e487b7160e01b88526022600452602488fd5b81801561261c576001811461263157612661565b60ff1986168a890152848a0188019650612661565b60008b815260209020895b868110156126575781548c82018b015290850190830161263c565b505087858b010196505b505050505050610daa81691116113b30b63ab2911d60b11b8152600a0190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906126b49083018461248e565b9695505050505050565b604080825283519082018190526000906020906060840190828701845b828110156126f7578151845292840192908401906001016126db565b50505083810382850152845180825282820190600581901b83018401878501865b8381101561274657601f1986840301855261273483835161248e565b94870194925090860190600101612718565b50909998505050505050505050565b6000602080830181845280855180835260408601915060408160051b8701019250838701855b828110156127a957603f1988860301845261279785835161248e565b9450928501929085019060010161277b565b5092979650505050505050565b602081526000611147602083018461248e565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602e908201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560408201526d1c881b9bdc88185c1c1c9bdd995960921b606082015260800190565b838152826020820152606060408201526000610daa606083018461248e565b604051601f8201601f1916810167ffffffffffffffff811182821017156128b1576128b16129e6565b604052919050565b600067ffffffffffffffff8211156128d3576128d36129e6565b50601f01601f191660200190565b600082198211156128f4576128f46129ba565b500190565b600082612908576129086129d0565b500490565b60008282101561291f5761291f6129ba565b500390565b60005b8381101561293f578181015183820152602001612927565b8381111561086e5750506000910152565b600181811c9082168061296457607f821691505b6020821081141561298557634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561299f5761299f6129ba565b5060010190565b6000826129b5576129b56129d0565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146114f057600080fdfea26469706673582212208a9cc92a512f4ecf4771a75e750b42883c8101c37540395d3d46931566bc328f64736f6c63430008040033"
    }
}
