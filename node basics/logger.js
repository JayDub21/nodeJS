const EventEmitter = require('events');

var url = 'http://duckduckgo.com/';

class Logger extends EventEmitter {
  log(message) {
    //Send an HTTP request
    console.log(message);

    //Emit - signaling that an event has happened.
    this.emit('messageLogged', { id: 1, url: 'htttp://' });
  }
}
//↓↓↓ Makes function available Globally (see require in app.js)↓↓↓
// (ex1)
// module.exports.log = log;

//(ex2)
//↓↓↓ Instead of exporting an object, we can export a single function ↓↓↓
module.exports = Logger;

//↓↓↓ Name can be changed globally and remain 'url' privately ↓↓↓

// module.exports.endPoint = url;
