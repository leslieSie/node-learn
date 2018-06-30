var assert = require('assert');
var CountStream = require('./countStream');
var countStream = new CountStream('example');
var fs = require('fs');
var passed = 0;

countStream.on('total', function (count) {
    assert.equal(count, 1);// 无返回值，如果不限等抛出异常
    passed++;
});

fs.createReadStream(__filename).pipe(countStream);

process.on('exit', function () {
    console.log('Assertion passed:', passed);
});