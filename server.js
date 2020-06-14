const app = require('http');
const expAppModule = require('./apis/app')

const server = app.createServer(expAppModule);

server.listen(3000)
