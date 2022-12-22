const net = require('net');

const server = net.createServer();
server.on('connection', (socket) => {
  console.log(`PID: ${process.pid}!`);
});

debugger;
server.listen(9997, () => {
  console.log('come on!');
});
