const http = require('http');

const app = http.createServer((req, res) => {
   res.writeHead(200, {'Content-Type':'application/json'});
   res.end('Review NodeJS application');
})

app.listen(4001, () => {
   console.log('Server online port 4001');
})