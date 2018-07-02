var CountStream = require('./countStream');
var countStream = new CountStream('风之之');
let http = require('http');

http.get('http://www.cnblogs.com/fzz9/p/9247915.html', (res) => {
    res.pipe(countStream);
});

countStream.on('total', (count) => {
    console.log('total matches:', count);
});