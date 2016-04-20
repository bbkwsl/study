### 函数的扩展
#### 1. 函数的默认值
##### 基本用法
```javascript
    function Point(x=0, y=0){
      this.x = x;
      this.y = y;
    }
    var p = new Point();
    p; // => {"x":0,"y":0}
```
参数变量是默认声明的，所以不能用let或const再次声明。
##### 与解构赋值默认值结合使用
```javascript
    function fetch(url, { body = '', method = 'GET', headers = {} }){
      console.log(method);
    }

    fetch('http://example.com', {});   // => GET
    fetch('http://example.com')   // error
```
##### 函数的length属性
指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
```javascript
    (function(a){}).length // 1
    (function(a = 5){}).length // 0
    (function(a, b, c = 5){}).length // 2
```
#### 2. 箭头函数
```javascript
    const full = ({first, last}) => first + '' + last;
    const isEven = n => n % 2 == 0;
    const square = n => n * n;
    [1,2,3].map(x => x * x);
```
箭头函数有几个使用注意点。
（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。