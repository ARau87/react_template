const app = require('./server/app');
const server = require('http').createServer(app);
const PORT = process.env.PORT || 5050;

server.listen(PORT);

