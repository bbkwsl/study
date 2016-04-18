### ECMAScript 6 学习笔记
#### 一、 let 和 const 命令
###### 1. let命令
1.1 基本用法：
    用来声明变量，类似于var,声明的变量只在let命令所在的代码块内有效。例如：
```javascript
    {
      let a = 10;
      var b = 1;
    }
    console.log(a);    // => a is not defined
    console.log(b);    // => 1
```

for循环很适合使用let命令：

```javascript
    var a = [];
    for(let i = 0; i< 10; i++) {
      a[i] = function() {
        console.log(i);
      }
    }
    a[6]();   // => 6
```
如果改为var,就成为js中经典的闭包
```javascript
    var a = [];
    for(var i = 0; i< 10; i++) {
      a[i] = function() {
        console.log(i);
      }
    }
    a[6]();   // => 10
```
1.2 不存在变量提升：变量一定要在声明后使用，否则报错。例如：
```javascript
    console.log(foo);   // => undefined
    console.log(bar);   // =>  ReferenceError: foo is not defined
```
1.3 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```javascript
    if(true) {
      tmp = 'abc';   // => 报错
      console.log(tmp); // => 报错
      
      let tmp;
      console.log(tmp);  // => undefined
      
      tmp = 123;
      console.log(tmp);  // => 123
    }
```
1.4 let不允许在相同作用域内，重复声明同一个变量。
```javascript
    {
        let a = 10;
        var a = 1;
    }
```
这样使用会报错。
###### 2. 块级作用域
```javascript
    function f() {
      let n = 5;
      if(true) {
        let n = 10;
      }
      console.log(n);
    }
    f();
```
上面的函数有两个代码块，都声明了变量n,运行后输出5。这表示外层代码块不受内层代码块的影响。

ES6允许块级作用域的任意嵌套,其中外层作用域无法读取内层作用域的变量.
```javascript
    {{{{let insane = 'hello world'}}}};
```

块级作用域替换立即执行匿名函数（IIFE）写法。
```javascript
    // 立即执行函数（IIFE）写法
    (function() {
      var tmp = '123';
    }());
    // 块级作用域写法
    {
      let tmp = 'test';
    }
```
###### 3. const命令

const用来声明变量,但是声明的是常量.一旦声明,常量的值就不能改变.意味着const一旦声明变量,就必须立即初始化,不能留到以后赋值.

const的作用域与let命令相同：只在声明所在的块级作用域内有效。

const声明的常量，也与let一样不可重复声明。

对于复合类型的变量，变量名不指向数据，而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，并不保证该地址的数据不变。
```javascript
    const foo = {};
    foo.prop = 123;
    console.log(foo.prop);
    foo = {}  // => TypeError: "foo" is read-only
```
###### 4. 跨模块常量
const 声明的常量只在当前代码块有效,如果想设置跨模块常量,可以采用下面的写法:
```javascript
    // constants.js 模块
    export const A = 1;
    export const B = 3;
    export const C = 4;
    // test1.js 模块
    import * as constants from './constants';
    console.log(constants.A); // 1
    console.log(constants.B); // 3
    // test2.js 模块
    import {A, B} from './constants';
    console.log(A); // 1
    console.log(B); // 3
```
###### 5. 全局对象的属性
全局对象是最顶层的对象，在浏览器环境指的是window对象，在Node.js指的是global对象。ES5之中，全局对象的属性与全局变量是等价的。

ES6规定，var命令和function命令声明的全局变量，依旧是全局对象的属性；另一方面规定，let命令、const命令、class命令声明的全局变量，不属于全局对象的属性。
```javascript
    var a = 1;
    console.log(window.a);  // => 1

    let b = 1;
    console.log(window.b);  // => undefined

```