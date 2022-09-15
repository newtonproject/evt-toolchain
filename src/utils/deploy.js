const { deploy } = require('./contract');

const path = process.argv[2];
const name = process.argv[3];


async function main(){
    const Contract = await deploy(path, name)
    console.log("Contract Address: " + Contract.address);
    return Contract;
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });