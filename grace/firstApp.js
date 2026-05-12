const http = require('http');

http.createServer((req, res) => {
    res.writeHead(401, {'Content-Type': 'text/html'});
    console.log(req.headers);
}).listen(4000);