let writable = require('stream').Writable;
let util = require('util');

function CountStream(matchText) {
    writable.call(this);
    this.count = 0;
    this.matcher = new RegExp(matchText, 'ig');
}
// extends Writable

CountStream.prototype._write = function(chunk, ending, cb) {
    var matches = chunk.toString().match(this.matcher);
    if (matches) {
        this.count += matches.length;
    }
    cb();
} 

CountStream.prototype.end = function() {
    this.emit('total', this.count);
}

util.inherits(CountStream, writable); //使CountStream继承自writable

module.exports = CountStream;