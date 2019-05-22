const Web3 = require('Web3');

const web3 = new Web3('https://rinkeby.infura.io');

const privateKey = '0x5be8812326bb7c47be7d5a733473d698e6f7e83823cbaf5b21c546ff9b1ffadb'

const publicKey = '0x1E7d5cff20F4a82ba4B46e0ED58F15c7770e4f87'

const message = 'Hello World!'

const signedData = web3.eth.accounts.sign(message, privateKey)

console.log(signedData);

console.log('=================================');

const checkSignedData = web3.eth.accounts.recover(message, signedData.signature)

console.log(checkSignedData);

console.log(publicKey == checkSignedData);
