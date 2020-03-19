//PURIFICATION OF FUNCTIONS INTO PURE FUNCTIONS
//DESTRUCTURING - using spread operator & array
function foo(x,y, z, w) {
    console.log(x, y, z, w);
}
function bar(x= 2, ...args) {
    return foo (x, 42, ...args)
}
console.log(bar());
console.log(bar(3, 8, 11));
console.log(bar(...[6, 5]));

var data1 = ([...[5, 10]]);
var data = ([5, 10]);
console.log(data1);
console.log(data)

function foo(x, y) {
    return [x + 1, y - 1]
}
var [a, b] = foo(...[5, 10])
console.log(a);
console.log(b);

//PURIFYING to prevent hoisting which can intefer with programs outside
//solve the exercise
// function f(x) {
//     return 2 * Math.pow(x, 2) + 3;
// } var = y;
// y = f(2);
// y = f(0);
// y = f(-1);
// function F(x) {
//     var y;
//     f(x);
//     return y;
//     function f(x) {
//         return y = 2 * Math.pow(x, 2) + 3;
//     };
// }
// var y;
// console.log(F(0))

//Currying
function f() {
    y = 2 * Math.pow(x, 2) + 3;
}
function F(curX) {
    var [origX, origY] = [x, y];
    x = curX
   console.log(f());
}
var newY = y;
[x, y] = [origX, origY]
return newY;
//var x, y;

console.log(F(0));
console.log(F(2));