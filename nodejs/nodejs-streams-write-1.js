const http = require('http');

function transformStream(data) {
    // write implementation here
}

const server = http.createServer((req, res) => {
    req.setEncoding('utf8');

    req.on('data', chunk => {
        transformStream(chunk);
    });

    req.on('end', (body) => {
        const data = JSON.parse(body);
        res.end();
    });
})

server.listen(3000);