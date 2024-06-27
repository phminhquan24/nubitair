require('dotenv').config();
const Web3 = require('web3');

const apiKey = process.env.ALCHEMY_API_KEY;
const alchemyHttpsUrl = `https://eth-sepolia.alchemyapi.io/v2/${apiKey}`;

const web3Https = new Web3(new Web3.providers.HttpProvider(alchemyHttpsUrl));

module.exports = web3Https;
