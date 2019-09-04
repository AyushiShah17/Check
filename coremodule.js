const path = require('path')//importing path package
const filename = path.join(__filename);//print url using path
const basename = path.basename(filename);//print file name with extension
const extname = path.extname(basename);//print extension
console.log(filename);
console.log(basename);
console.log(extname);
