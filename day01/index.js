var CountStream = require('./countStream');
var countStream = new CountStream('Node');
let http = require('http');

http.get('http://www.runoob.com/nodejs/nodejs-stream.html', (res) => {
    res.pipe(countStream);
});

countStream.on('total', (count) => {
    console.log('total matches:', count);
});