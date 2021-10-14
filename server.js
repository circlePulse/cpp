const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('index.html', (err, data) => res.write(`${data}`))
    res.end()
}).listen(8080)