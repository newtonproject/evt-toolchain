# evt-toolchain

## Summary
In this toolchain, you can use some simple shell command line to **deploy contract**, **create EVT**, call **EVT Encryption** functions, call **EVT Variable** functions. etc.


## Development with EVT

### Prerequisites
1. Node.js installed on your local machine.
2. Get RPC Endpoint and ChainId which you want to try.
3. Own an Address and PrivateKey

#### **Newton Mainnet：**
RPC：
https://global.rpc.mainnet.newtonproject.org

ChainId：
1012

Block Explorer：
https://explorer.newtonproject.org

#### **Newton Testnet：**

RPC：
https://rpc1.newchain.newtonproject.org

ChainId：
1007

Block Explorer：

https://explorer.testnet.newtonproject.org

http://e.testnet.diynova.com

### Get source code and Install
    ```bash

    # install evt-toolchain
    npm install @newton-protocol/evt-toolchain

    # create .env file in your project root
    touch .env
    # set new CHAIN_ID, RPC_URL, PRIVATE_KEY in .env file
    
    ```

### Use EVT and EVTA
1. Deploy Contract
    ```bash
    npx evtc evt deploy
    ```
2. Create
   1. EVT
        ```bash

        # mint EVT
        npx evtc evt call mintEVT
        # you can get EVT_ADDRESS and EVTA_ADDRESS in log file
        # copy contract addresses to .env file
        # the token will be owned by your address
        ```
   2. EVTA
        ```bash
        # mint EVTA. quantity: the amount you want to mint
        npx evtc evt call mintEVTA <quantity>
        # the tokens will be owned by your address
        ```

By run Deploy and Mint, you can check your contract and EVT in blockchain explorar.

If you use Newchain testnet configuration, you can see in [Newton Testnet Explorar](http://e.testnet.diynova.com/) with EVT_ADDRESS, EVTA_ADDRESS or ACCOUNT.

### Use EVT Encryption

We provide an open source project [`NewKeeper`](https://github.com/newkeeper-core/newkeeper) to combine with EVT Encryption.

You need some knowledge of Deffie-Hellman key exchange algorithm(DH algorithm) and AES encryption to understand newkeeper.

1. Run NewKeeper
    ```bash
    # pull newkeeper-dev v0.3, version: 0.3
    docker pull pschy/newkeeper-dev:<version>

    # run newkeeper with a PORT(You need to change `PORT` to your local PORT), for example, `PORT`=80, version: 0.3
    docker run -it -d -p `PORT`:8000 --name newkeeper pschy/newkeeper-dev:<version>

    # check status and get CONTAINER ID
    docker ps

    # show logs
    docker logs -f `CONTAINER ID`

    # set NEWKEEPER url in .env file, for example: NEWKEEPER="http://127.0.0.1:`PORT`/"(`PORT`: Your Local Port)
    ```

2. Deploy Contract
    ```bash

    # deploy contract
    npx evtc encryption deploy
    # get TOKEN_ADDRESS and CONTRACT_ADDRESS, set in .env file
    ```
3. Call Functions
    ```bash
    # call contract functions with params
    npx evtc encryption call <functions> <params>
    ```
    Use the shell common line to call Below functions. you can get returns in commander

    #### **Functions**
    - mint_token()
        - desc
            
            mint a Token for encryption key register permission.
            
    - mint_EVT()
        - desc

            mint a new EVT
            
    - get_balance()
        - desc

            check address token balance, the permission for Key register
        - returns

            balance
    - generator()
        - desc

            call Newkeeper to generate KeyId
        - returns

            peerPrivateKey, keyId, privateKey, peer, prime, peerPublicKey
    - register_encrypted_key(params)
        - desc

            Use a keyId to encrypted a Token.
        - params

            tokenId, keyId
    - add_permission(params)
        - desc

            Add permission to an Address with a keyId
        - params

            tokenId, keyId, licensee(an address)
    - has_permission(params)
        - desc

            Check the permission
        - params

            tokenId, keyId, licensee(an address)
        - returns

            result
    - register(params)
        - desc

            Bind keyId, tokenId, Contract in NewKeeper
        - params

            tokenId, KeyId, peerPrivateKey, privateKey (you can get these from generator function)
    - get_key(params)
        - desc

            Get PrivateKey
        - params
        
            prime, peerSwapKey, KeyId


You can also run a commond line to test EVT encryption:
```bash
npx evtc encryption test
```
It will deploy contracts, mint token and evt, generate key with Newkeeper etc.


### Use EVT Variable

1. Deploy Contract
    ```bash

    # deploy contract
    npx evtc variable deploy
    # get TOKEN_ADDRESS and CONTRACT_ADDRESS, set in .env file
    ```
2. Call functions

    ```bash
    # Mint evt
    npx evtc variable call mint

    # Add a Property. like: height, with, age. etc.
    npx evtc variable call addProperty <propertyName>

    # Set Property to a EVT
    # ex.: npx evtc variable call setProperty 0 age 30
    npx evtc variable call setProperty <tokenId> <propertyName> <propertyValue>

    # Get Property
    # ex.: npx evtc variable call getProperty 0 age
    npx evtc variable call getProperty <tokenId> <propertyName>
    ```

## Reference

- https://www.newtonproject.org/en/evt/

- https://neps.newtonproject.org/neps/nep-53/

- https://github.com/newtonproject/evt-lib

- https://neps.newtonproject.org/neps/nep-61/