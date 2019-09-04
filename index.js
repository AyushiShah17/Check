//console.log("hello world")
const square = require('./square.js');
const calcSquare = (a) => { //creating a function
    console.log(`the area of sqare with side ${a}  is ` + square.area(a));
    console.log(`the perimeter of sqare with side ${a}  is ` + square.perimeter(a));
}
calcSquare(5);//calling a function
console.log(__filename);//to print filename
console.log(__dirname);//to print directory name