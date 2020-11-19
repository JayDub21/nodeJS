//★★★ (ex1) ★★★

// const logger = require("./logger");

// console.log(logger);

// logger.log("message");

//★★★ (ex2) ★★★

// const log = require("./logger");

// log("message");

//★★★ (ex3) PATH ★★★

// const path = require("path");

// var pathObj = path.parse(__filename);

// console.log(pathObj);

//★★★ (ex4) OS ★★★

// const os = require("os");

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log("Total Memory: " + totalMemory);

// // ↑↑↑ Template String (ES6) Version of Above ↓↓↓

// console.log(`Free Memory: ${freeMemory}`);

//★★★ (ex5) FS ★★★

// const fs = require("fs");

// // const files = fs.readdirSync("./");
// // console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) console.log("Error", err);
//   else console.log("Result", files);
// });

//★★★ (ex6) Events ★★★

// const EventEmitter = require('events');

// const Logger = require('./logger');
// const logger = new Logger();

// // Registr a listener
// logger.on('messageLogged', (arg) => {
//   console.log('Listener Called', arg);
// });

// logger.log('message');

//★★★ (ex7) HTTP ★★★

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.write('Hello World');
//     res.end();
//   }

//   if (req.url === '/api/courses') {
//     res.write(JSON.stringify([1, 2, 3]));
//     res.end();
//   }
// });

// server.listen(3000);

// console.log('Listening on port 3000...');
