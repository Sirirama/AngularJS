const http = require('http');
const hostName = '127.0.0.1';
const portNumber = 8080;

http.createServer(function (req, res){
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<h1>Ramakrishna Reddy</h1>');
}).listen(portNumber, hostName);

console.log("Server Running at http://"+hostName+':'+portNumber);
