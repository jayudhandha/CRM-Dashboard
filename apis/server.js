const app = require('http');
const expAppModule = require('./app')

const server = app.createServer(expAppModule);

console.log("Your app will start on: "+ process.env.NODE_PORT);

server.listen(3000)

// GET POST DELETE PUT
