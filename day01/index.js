var CountStream = require('./countStream');
var countStream = new CountStream('book');
let http = require('http');

http.get('http://www.manning.com', (res) => {
    res.pipe(countStream);
});

countStream.on('total', (count) => {
    console.log('total matches:', count);
});