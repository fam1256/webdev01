const http = require('http');
http
.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html>
        <head>
        </head>
        <body>
            <h1>Yeahhh</h1>
            <span> testing </span>
        </body>
        </html>
        `);
    res.end();
})
.listen(80);
console.log('one');
console.log('two');
console.log('three');