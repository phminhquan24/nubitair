const web3Https = require('./alchemyHttps');
const web3Ws = require('./alchemyWs');

// Sử dụng web3Https để lấy thông tin block mới nhất
web3Https.eth.getBlock('latest')
    .then(block => console.log('Latest block via HTTPS:', block))
    .catch(error => console.error('Error fetching block via HTTPS:', error));

// Sử dụng web3Ws để lắng nghe các block mới
const subscription = web3Ws.eth.subscribe('newBlockHeaders', (error, blockHeader) => {
    if (error) {
        console.error('Error on subscription via WebSocket:', error);
    } else {
        console.log('New block via WebSocket:', blockHeader);
    }
});
