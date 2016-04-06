/**
 * @description [js权威指南 第8章  函数]
 * @author [silence]
 * @date  16/4/5
 */
// 求最大值
function max() {
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0,len = arguments.length; i < len; i++ ) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
var largest = max(1, 20, 100, 2, 4, 1000, 9999);   // => 9999
// callee递归调用自身
function factorial(x) {
    if (x <= 1) return 1;
    return x * arguments.callee(x-1);
}
console.log(factorial(4)); // => 24
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

/**
 * this对象
 */
var name = "window";
var object = {
    name : "object",
    getName: function () {
        var _this = this;
        return function () {
            console.log(_this); // => Object{name: "object"}
            return _this.name;
        }
    }
};
console.log(object.getName()()); // => object

(function () {
    console.log(this); // =>  Window {external: Object, chrome: Object,...}
})();

(function () {
    'use strict';
    console.log(this);  // => undefined
})();

// function test() {
//     console.log(this);
// }
// test();  // =>  Window {external: Object, chrome: Object,...}

// var x = 1;
// function test() {
//     this.x = 0;
// }
// test();
// console.log(x); // => 0

// function show() {
//     'use strict';
//     function test() {
//         console.log(this);
//     }
//     test();
// }
// show();

var obj = {
    name: 'a obj',
    f: function () {
        return this;
    }
};

obj.obj1 = {
    name: 'another obj',
    me: obj.f()
};

// console.log(obj.obj1.me);  // => {name: "a obj", f: function(), obj1: Object}

// var x = 2;
// function test(){
//     this.x = 1;
// }
// var o = new test();
// console.log(x); //2

var x = 0;
function test(){
    console.log(this.x);
}
var o={};
o.x = 1;
o.m = test;
o.m.apply(o); //0