#### javascript中this的用法
#####this是javascript语言的一个关键字，不是变量，也不是属性名。
this对象是在运行时基于函数的执行环境绑定的：在全局函数中，this等于window。而当函数被作为某个对象的方法调用时， this等于那个对象。
##### 闭包中的this

```javascript
    var name = "window";
    var object = {
        name : "object",
        getName: function () {
            return function () {
                console.log(this); // => Window{external:Object, chrome:Object, ....}
                return this.name;
            }
        }
    };
    console.log(object.getName()()); // => window
```
    
由于每个函数在调用的时候，其活动对象都会自动获取两个特殊的变量：this和arguments。内部函数在搜索这两个变量的时候，只会搜索到其活动对象为止。

修改一下代码：
```javascript
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
```
如果嵌套函数作为函数调用，其this值不是全局对象（非严格模式下）就是undefined(严格模式)，例如闭包this的两种特殊情况：
```javascript
    function show() {
        function test() {
            console.log(this); // =>  Window {external: Object, chrome: Object,...}
        }
        test();
    }
    show();
```
```
    (function () {
        console.log(this); // =>  Window {external: Object, chrome: Object,...}
    })();
```
因为闭包立即执行，相当于全局作用域下调用了函数，所以指向window。
    
```javascript
    function show() {
        'use strict';
        function test() {
            console.log(this);    // => undefined
        }
        test();
    }
    show();
```
```
    (function () {
        'use strict';
        console.log(this);  // => undefined
    })();

```
严格模式下就是undefined。

##### 函数中的this
1. 指向调用它的作用域
    
    ```javascript
        function test() {
            console.log(this); // =>  Window {external: Object, chrome: Object,...}
        }
        test();
    ```
    ```
        var x = 1;
        function test() {
            this.x = 0;
        }
        test();
        console.log(x); // => 0
    ```
2. 引用函数可以改变函数的执行作用域，调用函数不会。例如：

    函数引用：
    ```javascript
        var obj = {
            name: 'a obj',
            f: function () {
                return this;
            }
        };
        
        obj.obj1 = {
            name: 'another obj',
            me: obj.f
        };
        
        console.log(obj.obj1.me());  // => {name: "another obj", me: function()}
    ```
    函数调用：
    ```javascript
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
        console.log(obj.obj1.me);  // => {name: "a obj", f: function(), obj1: Object}
    ```
##### 构造函数中的this
所谓构造函数，就是通过这个函数生成一个新对象（object）。这时，this就指这个新对象。
```javascript
    var x = 2;
    function test(){
        this.x = 1;
    }
    var o = new test();
    console.log(x); //2,全局变量x的值没有改变。
```
##### call对this的影响
apply()是函数对象的一个方法，它的作用是改变函数的调用对象，它的第一个参数就标识改变后的调用函数的对象。因此,this指的就是第一个参数。
```javascript
    var x = 0;
    function test(){
        console.log(this.x);
    }
    var o={};
    o.x = 1;
    o.m = test;
    o.m.apply(); //0
```
其中apply的参数为空时，默认调用全局对象。因此，这时候的结果为0。修改为：
```javascript
    var x = 0;
    function test(){
        console.log(this.x);
    }
    var o={};
    o.x = 1;
    o.m = test;
    o.m.apply(o); //1，这个时候this代表的是对象o。
```
```
    function test(){
        console.log(this);
    }
    test.call('hi');  // => String {0: "h", 1: "i", length: 2, [[PrimitiveValue]]: "hi"}
    test.call(123);   // => Number {[[PrimitiveValue]]: 123}
    test.call(true);  // => Boolean {[[PrimitiveValue]]: true}
```
充分说明this指的就是第一个参数。

##### 最后看到一处关于this优先级的总结：
|优先级| 情景 | this的值 | 备注|
|------|------|-----    |------|
| 1    |new   |new出来的空object| |
|      |apply/call|传入的参数|并强烈第一,apply/call不能和new同时出现|
| 3    |事件 |发生事件的元素| |
| 4    |方法 |所有者|  |
| 5    |其他(嵌套)|window或undefined| 看是否为严格模式


> 参考地址：http://www.ruanyifeng.com/blog/2010/04/using_this_keyword_in_javascript.html

