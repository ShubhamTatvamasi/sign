const Web3 = require('Web3');

const web3 = new Web3('https://rinkeby.infura.io');

const contract = require('./contract')

const myContract = new web3.eth.Contract(contract.abi, contract.address)

const reciverAddress = '0x52C3a9B0f293CaC8C1bAAbE5B62524A71211a616'
const amount = 10

const data = myContract.methods.transfer(reciverAddress, amount).encodeABI()

console.log(data)
