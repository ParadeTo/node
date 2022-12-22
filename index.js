// const cluster = require('cluster');
// const http = require('http');

// if (cluster.isMaster) {
//   cluster.fork();
//   // cluster.fork();
// } else {
//   const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('handled by child, pid is ' + cluster.worker.process.pid + '\n');
//   });

//   server.listen(9998);
// }

const cluster = require('cluster');
cluster.setupMaster({
  exec: 'worker.js',
});

const worker1 = cluster.fork();
const worker2 = cluster.fork();

// let h1, h2;
// worker1.on('message', function (_, handle) {
//   h1 = handle;
//   console.log('====================================');
//   console.log(_, handle);
//   console.log('====================================');
//   if (h1 === h2) console.log('equal');
// });

// worker2.on('message', function (_, handle) {
//   h2 = handle;
//   console.log('====================================');
//   console.log(_, handle);
//   console.log('====================================');
//   if (h1 === h2) console.log('equal');
// });

// 2
// const net = require('net');
// // const http = require('http');

// const tcpServer = net.createServer();
// tcpServer.listen(9990);
// // (err, handle) => {
// //   debugger;
// // };
// // tcpServer.on('connection', (...args) => {
// //   debugger;
// //   server.emit('connection', ...args);
// // });
// // const handle = tcpServer._handle

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('handled by child, pid is ' + cluster.worker.process.pid + '\n');
// });
// debugger;
// const noop = () => {};
// server._handle = { close: noop, listen: noop, ref: noop, unref: noop };
// server._listen2(null, 9990, 4, 0, undefined, undefined);
// tcpServer._handle.onconnection = server._handle.onconnection;

// 3
// const http = require('http');

// const server = http.createServer(function (req, res) {
//   debugger;
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('handled by child, pid is ' + cluster.worker.process.pid + '\n');
// });
// debugger;
// server.listen(9991);

// 4
// const net = require('net');
// const rval1 = net._createServerHandle(undefined, 9999, 4, undefined, undefined);
// const rval2 = net._createServerHandle(undefined, 9999, 4, undefined, undefined);
// rval1.onconnection = (err, clientHandle) => {
//   console.log(err, clientHandle);
// };
// const err11 = rval1.listen(1);
// const err12 = rval1.listen(1);
// const err2 = rval2.listen(1);
// console.log(err11, err12, err2); // 0 0 -48

// const net = require('net');
// const server1 = net.createServer();
// // const server2 = net.createServer();
// server1.listen(9999);
// server2.listen(9999);

// const net = require('net');
// const rval1 = net._createServerHandle(
//   '127.0.0.1',
//   9999,
//   4,
//   undefined,
//   undefined
// );
// const rval2 = net._createServerHandle(undefined, 9999, 4, undefined, undefined);
// rval1.onconnection = (err, clientHandle) => {
//   console.log('rval1');
// };
// rval2.onconnection = (err, clientHandle) => {
//   console.log('rval2');
// };
// const err1 = rval1.listen(1);
// const err2 = rval2.listen(1);
// console.log(err1, err2); // 0 0 -48

// const net = require('net');
// const server1 = net.createServer(() => {
//   console.log('server1');
// });
// const server2 = net.createServer(() => {
//   console.log('server2');
// });
// server1.listen(9999, '127.0.0.1');
// server2.listen(9999);
