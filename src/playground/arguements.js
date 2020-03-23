function unary(fn) {
    return function one(arg) {
        return fn(arg)
    };
}
    function binary(fn) {
        return function two(arg1, arg2) {
            return fn(arg1, arg2)
        };
    }
function f(...args) {
    console.log(args);
}
var g = unary(f) 
var h = binary(f)

g(1,2,3,4)
h(1,2,3,4)

function flip(fn) {
    return function flipped(arg1, arg2, ...args) {
    return fn(arg2, arg1, ...args);
};
}
function f(...args) {
    console.log(args);
}
var g = flip(f)
g(1,2,3,4)

//REVERSE Method
function reverseArgs(fn) {
    return function reversed(...args) {
        return fn (...args.reverse());
    };
}
function f(...args) {
    console.log(args);
}
var g = reverseArgs(f);
g(1,2,3,4);

function spreadArgs(fn) {
    return function spread(args) {
        return fn(...args);
    }
}
function f(x,y,z,w) {
    console.log(x+y+z+w);
}
var g = spreadArgs(f);
g([1,2,3,4]);