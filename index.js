const Web3 = require('Web3');

const web3 = new Web3('https://rinkeby.infura.io');

const privateKey = '0x26e22e89538c173aef66eef8186b5d8e33f1ab9657dc7e48c071e392241576a3'

const publicKey = '0x65459Ed00A0Bef1e728B90dd7410b6155E1797DE'

const message = 'Hello, world!'

let signedData = web3.eth.accounts.sign(message, privateKey)

console.log(signedData);

console.log('=================================');

let checkSignedData = web3.eth.accounts.recover(message, signedData.signature)

console.log(checkSignedData);

console.log(publicKey == checkSignedData);
