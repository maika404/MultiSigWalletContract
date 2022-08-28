# MultiSigWalletContract
MultiSigWalletを実装したスマートコントラクト用のリポジトリになります。

### About Project 
 
We have developed a DApp that requires multiple address approvals to make the transfer of crypto assets more secure.  
It can be created with a preference for multi-sig wallets with different conditions for any users.

#### Inspiration
 
Several steps are required to get the most out of this application, such as creating a multi-sig wallet, approving, and executing transactions. We have kept the screen design as simple as possible to make it easy to use these functions.

#### What it does
 
The following fuctions are implemented in this MultiSigWallet
1. Connect Wallet 
2. Deposit for send amount
3. Create MulitiSig Wallet
4. Create Send Transaction
5. approve Send Transaction
6. execute Send Transaction
7. revoke Send Transaction

#### How we built it

The most difficult part was to integrate the back-end smart contract functionality into the front-end side. We carefully wrote test code to ensure smooth integration into the front end. We also developed the UI with the policy of making it thimble so that users can operate it intuitively, but this was also a challenge.

#### Challenges we ran into

The most difficult part was to integrate the back-end smart contract functionality into the front-end side. We carefully wrote test code to ensure smooth integration into the front end. We also developed the UI with the policy of making it thimble so that users can operate it intuitively, but this was also a challenge.

#### Accomplishments that we're proud of

Although it is not as powerful as the multisig wallet developed by Gnosis Safe, we believe that the most significant achievement is that we were able to implement a multisig wallet DApp from scratch. In addition, through this development, we were able to create a template for the front side, which we believe will greatly improve the efficiency of future development. This is another achievement.

#### What we learned
 
Through the development of the MultiSigWalletDApp, I was able to learn the basics of DApp development using React.js and Truffle. Also, unlike bitcoin, the ethereum-type blockchain does not have a standard implementation of the multisig function, so we had to implement it ourselves, but we were able to learn an implementation pattern using smart contracts.

#### What's next for MultiSigWalletDApp
  
We would like to set up certain incentives for users who Deposit in order to encourage more users to use the MultiSigWalletDApp. Specifically, we envision extending the ability to issue original ERC20 tokens or NFTs. We would also like to increase the number of blockchain types supported. 

### before start

Please fill your data to `backend/.env` file

```
ALCHEMY_APIKEY=<YOUR_DATA>
ALCHEMY_GOERLI_APIKEY=<YOUR_DATA>
ALCHEMY_MUNBAI_APIKEY=<YOUR_DATA>
ETHERSCAN_API_KEY=<YOUR_DATA>
POLYGONSCAN_API_KEY=<YOUR_DATA>
BSCSCAN_API_KEY=<YOUR_DATA>
SNOWTRACE_API_KEY=<YOUR_DATA>
MNEMONIC=<YOUR_DATA>
```
### how to work this repo (SmartContract)

1. `cd backend`
2. choose a commands from the below described

    `npm run test`  
    `npm run build`  
    `npm run migrate:local`  
    `npm run migrate:goreli`  
    `npm run migrate:munbai`  
    `npm run migrate:bsctestnet`  
    `npm run migrate:fuji`  
    `npm run verify:goreli`  
    `npm run verify:munbai`  
    `npm run verify:bsctestnet`  
    `npm run verify:fuji`  

### how to work this repo (frontend)

1. `cd client`
2. `npm run start`

### test result

```bash
Using network 'develop'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: MultiSigWallet Contract tests!!
    initialization
      ✓ confirm owner address (88ms)
      ✓ confirm number of required
    receive test
Tx Hash: 0xbda6f8978f5d847c0a133ddcc7eef4fb7568eec8e86a0fd700fc21273eb0252a
txData: {
  hash: '0xbda6f8978f5d847c0a133ddcc7eef4fb7568eec8e86a0fd700fc21273eb0252a',
  nonce: 202,
  blockHash: '0x5cb1c50423d538e71dbd9affeb140227f0b9ed4a55cd6c5e70a109a1f395101e',
  blockNumber: 1050,
  transactionIndex: 0,
  from: '0x3bF9fc2AbD1bC95baaBBFC1c0a9D55573C9989f9',
  to: '0x95B2B2aeBFf5679eE742A25b729a026B9b921CdC',
  value: '50000000000000000',
  gas: 90000,
  gasPrice: '20000000000',
  input: '0x',
  v: '0x25',
  r: '0x826d0933924da1fc00cb1cb3850e8efd84d69b456d28e31127cba211d22b3786',
  s: '0x3ce0f037ae8351f948ee9163e8c3a6b670e603c3567f0ebf76ecf1e1fc9c3107'
}
      ✓ deposit (65ms)
    submit test
      ✓ submit transaction (329ms)
      ✓ should be revert from invalid address (513ms)
    approve test
      ✓ approve transaction (459ms)
      ✓ should be revert from invalid address (245ms)
      ✓ should be revert invalid txId (390ms)
    execute test
      ✓ execute (807ms)
      ✓ should be revert invalid txId (414ms)
      ✓ should be revert with insufficient approvement  (444ms)
      ✓ this tx is aleady executed (710ms)
    revoke test
      ✓ revoke (966ms)
      ✓ should be revert invalid txId (680ms)
      ✓ should be revert from invalid address (585ms)
      ✓ should be revert from invalid address (422ms)


  16 passing (10s)
```

### result of migration

#### goerli

```bash
Starting migrations...
======================
> Network name:    'goreli'
> Network id:      5
> Block gas limit: 29999972 (0x1c9c364)


2_factory_deploy.js
===================

   Deploying 'WalletFactory'
   -------------------------
   > transaction hash:    0x4c7bc57be1138bba71ebeca98c15335f7eda29fd277f2108d9ed008d2b4ecdab
   > Blocks: 0            Seconds: 13
   > contract address:    0x3c955E552Fd383435765313330301c23f014e0a6
   > block number:        7246924
   > block timestamp:     1658128962
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             63.796987607823851171
   > gas used:            2945970 (0x2cf3b2)
   > gas price:           1.50000005 gwei
   > value sent:          0 ETH
   > total cost:          0.0044189551472985 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 7246925)
   > confirmation number: 2 (block: 7246926)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0044189551472985 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.0044189551472985 ETH
```

#### Munbai

```bash
Starting migrations...
======================
> Network name:    'munbai'
> Network id:      80001
> Block gas limit: 20000000 (0x1312d00)


2_factory_deploy.js
===================

   Deploying 'WalletFactory'
   -------------------------
   > transaction hash:    0xf04e28434f351f7cdf404ea9381a260da68ce074c69f0ce82de4dd9263c2dc37
   > Blocks: 73           Seconds: 368
   > contract address:    0xFEbf942Ce0f403a48a01D4757710289E0458bca9
   > block number:        27223555
   > block timestamp:     1658129418
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             11.93849754166501465
   > gas used:            2945970 (0x2cf3b2)
   > gas price:           2.50000001 gwei
   > value sent:          0 ETH
   > total cost:          0.0073649250294597 ETH

   Pausing for 2 confirmations...
   ------------------------------
   > confirmation number: 1 (block: 27223556)
   > confirmation number: 2 (block: 27223557)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0073649250294597 ETH


Summary
=======
> Total deployments:   1
> Final cost:          0.0073649250294597 ETH
```

#### BSC testnet

```bash
Compiling your contracts...
===========================
> Compiling ./contracts/MultiSigWallet.sol
> Compiling ./contracts/WalletFactory.sol
> Artifacts written to /Users/harukikondo/git/MultiSigWalletContract/client/src/contracts
> Compiled successfully using:
   - solc: 0.8.0+commit.c7dfd78e.Emscripten.clang



Starting migrations...
======================
> Network name:    'bsctestnet'
> Network id:      97
> Block gas limit: 30000000 (0x1c9c380)


1_mulitSig_deploy.js
====================

   Deploying 'MultiSigWallet'
   --------------------------
   > transaction hash:    0x0791477e9185ad522d089ed04fde05961a0362dce014e4f103c46fbdbf7e9216
   > Blocks: 2            Seconds: 4
   > contract address:    0xAa363921A48Eac63F802C57658CdEde768B3DAe1
   > block number:        22333020
   > block timestamp:     1661654210
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             0.95555135
   > gas used:            1932550 (0x1d7d06)
   > gas price:           23 gwei
   > value sent:          0 ETH
   > total cost:          0.04444865 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 1 (block: 22333021)
   > confirmation number: 3 (block: 22333023)
   > confirmation number: 4 (block: 22333024)
   > confirmation number: 5 (block: 22333025)
   > confirmation number: 7 (block: 22333027)
   > confirmation number: 8 (block: 22333028)
   > confirmation number: 9 (block: 22333029)
   > confirmation number: 11 (block: 22333031)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.04444865 ETH


2_factory_deploy.js
===================

   Deploying 'WalletFactory'
   -------------------------
   > transaction hash:    0xc2bd532844f6aac52a92fc63f475e16936d197da4fda6b1051714cac4333f5b2
   > Blocks: 1            Seconds: 4
   > contract address:    0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb
   > block number:        22333033
   > block timestamp:     1661654249
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             0.88779404
   > gas used:            2945970 (0x2cf3b2)
   > gas price:           23 gwei
   > value sent:          0 ETH
   > total cost:          0.06775731 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 1 (block: 22333034)
   > confirmation number: 2 (block: 22333035)
   > confirmation number: 4 (block: 22333037)
   > confirmation number: 5 (block: 22333038)
   > confirmation number: 6 (block: 22333039)
   > confirmation number: 8 (block: 22333041)
   > confirmation number: 9 (block: 22333042)
   > confirmation number: 10 (block: 22333043)
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.06775731 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.11220596 ETH
```

#### Avalanche Testnet

```bash
> multisigwalletcontract@1.0.0 migrate:fuji
> truffle migrate --network fuji


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



Starting migrations...
======================
> Network name:    'fuji'
> Network id:      43113
> Block gas limit: 8000000 (0x7a1200)


1_mulitSig_deploy.js
====================

   Deploying 'MultiSigWallet'
   --------------------------
   > transaction hash:    0xabc0ca4a7b8f91ac7930b4ce9f2b16da170f6e4a9f14f2dabf21715760bee463
   > Blocks: 0            Seconds: 0
   > contract address:    0xAa363921A48Eac63F802C57658CdEde768B3DAe1
   > block number:        12928492
   > block timestamp:     1661654422
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             11.946645875
   > gas used:            1940150 (0x1d9ab6)
   > gas price:           27.5 gwei
   > value sent:          0 ETH
   > total cost:          0.053354125 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 1 (block: 12928492)
   > confirmation number: 3 (block: 12928494)
   > confirmation number: 5 (block: 12928496)
   > confirmation number: 6 (block: 12928497)
   > confirmation number: 9 (block: 12928500)
   > confirmation number: 10 (block: 12928501)
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.053354125 ETH


2_factory_deploy.js
===================

   Deploying 'WalletFactory'
   -------------------------
   > transaction hash:    0x9c4c4a68ce165d07ee74e3b4402d051e9e072befe1890165cc02d56f30b0dc64
   > Blocks: 0            Seconds: 4
   > contract address:    0x2B5914De5D5166eBaa423C92BAb8518c85EAA0cb
   > block number:        12928503
   > block timestamp:     1661654460
   > account:             0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
   > balance:             11.8656317
   > gas used:            2945970 (0x2cf3b2)
   > gas price:           27.5 gwei
   > value sent:          0 ETH
   > total cost:          0.081014175 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 4 (block: 12928505)
   > confirmation number: 6 (block: 12928507)
   > confirmation number: 7 (block: 12928508)
   > confirmation number: 8 (block: 12928509)
   > confirmation number: 9 (block: 12928510)
   > confirmation number: 12 (block: 12928513)
   > Saving artifacts
   -------------------------------------
   > Total cost:         0.081014175 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.1343683 ETH
```

## Demo Video Link
 <a href="https://www.youtube.com/watch?v=romGtIu4oWI">https://www.youtube.com/watch?v=romGtIu4oWI</a>  
 [Presentation Video](https://www.youtube.com/watch?v=-rLWfQZCCCQ)

### References
1. <a href="https://lab.miguelmota.com/ethereum-input-data-decoder/example/">InputDataDecoder</a>
2. <a href="https://web3js.readthedocs.io/en/v1.2.11/web3-eth-abi.html">Web3.jsのドキュメント</a>
3. [WalletConnect](https://docs.walletconnect.com/)
4. [WalletConnectExampleDappRepo](https://github.com/WalletConnect/walletconnect-example-dapp)
5. [WalletConnectExampleDapp](https://example.walletconnect.org/)
6. [truffle-plugin-verify](https://www.npmjs.com/package/truffle-plugin-verify)
7. [ChainList](https://chainlist.org/)
