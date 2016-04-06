/**
 * @description [js中的闭包]
 * @author [silence]
 * @date  16/4/6
 */
/***
 * 闭包
 */
var scope = "global scope";
function checkScope() {
    var scope = "local scope";
    function f() {
        return scope;
    }
    return f;
}
console.log(checkScope()());
// js函数的执行用到了作用域链,这个作用域链是函数定义的时候创建的,和函数的调用位置无关.

function counter() {
    var n = 0;
    return {
        count: function () {
            return n++;
        },
        reset: function () {
            n = 0;
        }
    }
}

var c = counter();
var d = counter();
console.log(c.count());    // => 0
console.log(d.count());    // => 0
console.log(c.reset());    // 重置c
console.log(c.count());    // => 0:重置了c
console.log(d.count());    // => 1:没有重置了d


// function f1(){
//     var n = 999;
//     nAdd = function(){
//         n += 1
//     }
//     function f2(){
//         console.log(n);
//     }
//     return f2;
// }
// var result=f1();
// result(); // => 999
// nAdd();
// result(); // => 1000

function f1(){
    var n = 999;
    nAdd = function(){
        n += 1
    }
    function f2(){
        console.log(n);
    }
    return f2();
}
var result = f1;
result(); // => 999
nAdd();
result(); // => 999
/**
 * 在同一个作用域里定义两个闭包，这两个闭包共享同样的私有变量。正确使用:
 */
function constfuncs(v) {
    return function() {
        return v;
    }
}
var funcs = [];
for(var i = 0; i < 10; i++ ) {
    funcs[i] =  constfuncs(i);
}
console.log(funcs[5]()); // => 5
/**
 * 错误使用
 * @returns {Array}
 */
function constfuncs() {
    var funcs = [];
    for(var i = 0; i < 10; i++ ) {
        funcs[i] =  function () {
            return i;
        }
    }
    return funcs;
}
var funcs = constfuncs();
console.log(funcs[5]());