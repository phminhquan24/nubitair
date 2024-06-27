require('dotenv').config();
const Web3 = require('web3');

const apiKey = process.env.ALCHEMY_API_KEY;
const alchemyWsUrl = `wss://eth-sepolia.ws.alchemyapi.io/v2/${apiKey}`;

const web3Ws = new Web3(new Web3.providers.WebsocketProvider(alchemyWsUrl));

module.exports = web3Ws;
