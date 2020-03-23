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