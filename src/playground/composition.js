function mult(x, y) {
    return x * y;
} 
console.log(3 * 4) + 5

var x_y = mult(3,4);
sum(x_y, 5); //17 composition
//composing - left to right
function sum(x, y) {
    return x + y;
}

function mult (x,y) {
    return x * y;
}
console.log(sum(mult(3, 4), 5)); //17

function sum(x, y) {
    return x +y;
}
function mult(x, y) {
    return x * y;
}

function multAndSum(x,y,z) {
    return sum(mult(x,y),z
    );
}
console.log(multAndSum(3,4,5))

//pipe opposite of composing
function sum(x, y){
    return x + y;
}
function mult(x,y) {
    return x * y;
}
function pipe2(fn1,fn2) {
    return function piped(arg1,arg2,arg3){
        return fn2 (
            fn1(arg1, arg2), arg3
        );
    }
}
var multAndSum = pipe2(mult, sum);
//(3 * 4) + 5
console.log(multAndSum(3,4,5));

function increment(x){
    return x + 1;
}
function double(x){
    return x * 2;
}
var f = composeRight(increment, double);
var p = composeRight(double, increment);
console.log(f(3));
console.log(p(3))
function composeRight(fn2, fn1){
    return function(composeRight(...args)){
        return fn2(fn1)
    }
}