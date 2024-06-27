const { AlchemyWeb3 } = require("@alch/alchemy-web3");

// Thay 'YOUR_ALCHEMY_API_KEY' bằng API key của bạn
const apiKey = 'q-V9_pNDyzizt7BSTfZzM8oO5KK5pbzn';

// URL Alchemy bao gồm API key của bạn
const alchemyUrl = `https://eth-mainnet.alchemyapi.io/v2/${apiKey}`;

// Kết nối đến node Alchemy
const web3 = AlchemyWeb3(alchemyUrl);

// Ví dụ: Lấy block số 0
web3.eth.getBlock(0).then(console.log);
