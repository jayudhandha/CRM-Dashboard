const app = require('http');
const expAppModule = require('./src/apis/app')

const server = app.createServer(expAppModule);

server.listen(3000)

// var test = function (req, res) {
//     console.log("Hello")
// }

// var test1 = (req, res) => {
//     console.log('Arrow function')
// }