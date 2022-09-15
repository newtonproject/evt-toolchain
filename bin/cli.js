#!/usr/bin/env node
const dotenv = require('dotenv').config('.env')
const configs = dotenv.parsed;

function print(msg) {
    process.stdout.write(msg + '\n')
}

function error(msg) {
    process.stderr.write(msg + '\n')
    process.exit(1)
}

const Arguments = process.argv.slice(2);

if (process.argv.includes('--help') || process.argv.includes('-h') || Arguments.length == 0) {
    print(`
    Usage
        $ evtc [options]

    Options
        -h, --help       Show help
    `)
    process.exit(1)
}
if (!configs || !configs.RPC_URL || !configs.CHAIN_ID || !configs.PRIVATE_KEY) {
    error('could not read env file.')
}

async function main() {
    try {
        switch (Arguments[0]) {
            case 'evt':
                if(Arguments[1] && Arguments[1] == 'call') {
                    const evtCall = require('../src/evt/index');
                    await evtCall(Arguments[2], Arguments.slice(3));
                } else {
                    const evtIndex = require('../src/evt/deploy');
                    await evtIndex();
                }
                break
            case 'encryption':
                if(Arguments[1] == 'call') {
                    const encrypCall = require('../src/encryption/index');
                    await encrypCall(Arguments[2], Arguments.slice(3));
                } else if(Arguments[1] == 'test'){
                    const encrypTest = require('../src/encryption/test');
                    await encrypTest();
                } else {
                    const encrypIndex = require('../src/encryption/deploy');
                    await encrypIndex();
                }
                break
            case 'variable':
                if(Arguments[1] == 'call') {
                    const variableCall = require('../src/variable/index');
                    await variableCall(Arguments[2], Arguments.slice(3));
                } else {
                    const variableIndex = require('../src/variable/deploy');
                    await variableIndex();
                }
                break
            default:
                error('invalid option');
                break;
        }
    } catch (err) {
        error(err);
    }
}

main()
    .catch((err) => {
        error(err);
        process.exit(1);
    });