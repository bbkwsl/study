#### js中的闭包
##### 函数对象可以通过作用域链相互关联起来，函数体内部的变量都可以保存在函数作用域内，这种特性称为闭包。
简单点可以理解为：闭包就是能够读取其他函数内部变量的函数。由于在javascript语言中,只有函数内部的子函数才能读取局部变量，因此可以把闭包理解为“定义在一个函数内部的函数”。
##### 闭包的用途：
1. 读取函数内部的变量。
2. 变量的值始终保持在内存中。

``` 
    function f1(){
        var n = 999;
        nAdd = function(){
            n += 1
        }
        function f2(){
            console.log(n);
        }
        return f2;
    }
    var result=f1();
    result(); // => 999
    nAdd();
    result(); // => 1000    
```
在这段代码中，result实际上就是闭包f2函数。它一共运行了两次，第一次的值是999，第二次的值是1000。这证明了，函数f1中的局部变量n一直保存在内存中，并没有在f1调用后被自动清除。

为什么会这样呢？原因就在于f1是f2的父函数，而f2被赋给了一个全局变量，这导致f2始终在内存中，而f2的存在依赖于f1，因此f1也始终在内存中，不会在调用结束后，被垃圾回收机制（garbage collection）回收。

这段代码中另一个值得注意的地方，就是"nAdd=function(){n+=1}"这一行，首先在nAdd前面没有使用var关键字，因此nAdd是一个全局变量，而不是局部变量。其次，nAdd的值是一个匿名函数（anonymous function），而这个匿名函数本身也是一个闭包，所以nAdd相当于是一个setter，可以在函数外部对函数内部的局部变量进行操作。

##### 使用闭包的注意点：
1. 由于闭包使函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页性能问题，在IE中导致内存泄漏。解决方法：在退出函数之前，将不使用的局部变量全部删除。
2. 闭包会在函数外部，改变父函数内部变量的值。
##### 在同一个作用域里定义两个闭包，这两个闭包共享同样的私有变量。例如：

```
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
    console.log(funcs[5]());  // => 10
```
这段代码创建了10个闭包，并将它们存储到一个数组中。这些闭包都是在同一个函数中定义的，所以它们共享变量i。当constfuncs()返回时，变量i的值为10，所有闭包都共享这一个值。
修改为：
```
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
```