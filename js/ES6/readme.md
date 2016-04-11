### ECMAScript 6 学习笔记
#### 一、 let 和 const 命令
###### 1. let命令
1.1 基本用法：
    用来声明变量，类似于var,声明的变量只在let命令所在的代码块内有效。例如：
```
    {
      let a = 10;
      var b = 1;
    }
    console.log(a);    // => a is not defined
    console.log(b);    // => 1
```

for循环很适合使用let命令：

```
    var a = [];
    for(let i = 0; i< 10; i++) {
      a[i] = function() {
        console.log(i);
      }
    }
    a[6]();   // => 6
```
如果改为var,就成为js中经典的闭包
```
    var a = [];
    for(var i = 0; i< 10; i++) {
      a[i] = function() {
        console.log(i);
      }
    }
    a[6]();   // => 10
```
1.2 不存在变量提升：变量一定要在声明后使用，否则报错。例如：
```
    console.log(foo);   // => undefined
    console.log(bar);   // =>  ReferenceError: foo is not defined
```
1.3 暂时性死区：只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
```
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
```
    {
        let a = 10;
        var a = 1;
    }
```
这样使用会报错。
###### 块级作用域
```
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


块级作用域替换立即执行匿名函数（IIFE）写法。
```
    // 立即执行函数（IIFE）写法
    (function() {
      var tmp = '123';
      ...
    }());
    // 块级作用域写法
    {
      let tmp = 'test';
      ...
    }
```
