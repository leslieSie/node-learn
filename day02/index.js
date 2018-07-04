console.log(__dirname); // __dirname 全局变量，输出文件夹的路径（不含当前文件）
console.log(__filename); // __dirname 全局变量，输出文件夹的路径（含当前文件）

// 路径拼接,相比于字符串拼接，这种方法可以兼容UNIX和WINDOWS的斜杆和反斜杠
let path = require('path');
let combindPath = path.join(__dirname, 'views');
console.log(combindPath);