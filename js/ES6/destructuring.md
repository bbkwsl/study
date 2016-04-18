### 变量的解构赋值
#### 1. 数组的解构赋值
##### 基本用法
ES6允许按照一定模式,从数组和对象中提取值,对变量进行赋值,这被称为解构(Destructuring).
```javascript
    var [a, b, c] = [1, 2, 3];
    // 编译为:
    "use strict";

    var a = 1;
    var b = 2;
    var c = 3;
```
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。例如:
```javascript
    let [foo, [[bar], baz]] = [1, [[2], 3]];
    // 编译为:
    "use strict";

    var foo = 1;
    var bar = 2;
    var baz = 3;

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(tail); // => [2, 3, 4]
```
如果解构不成功,值就等于undefined
```javascript
    var [foo] = [];
    console.log(foo);
```
##### 默认值
解构赋值允许指定默认值.
```javascript
    var [foo = true] = [];
    console.log(foo); // => true
    var [x, y = 'b'] = ['a'];
    console.log(x);   // => a
    console.log(y);   // => b

    var [x, y = 'b'] = ['a', undefined];
    console.log(x);  // => a
    console.log(y);  // => b
```
注意，ES6内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。例如:
```javascript
    var [x = 1] = [undefined];
    console.log(x);  // => 1
    var [x = 1] = [null];
    console.log(x);  // => null
```
上面的代码,一个数组成员是null,默认值不生效,因为null不严格等于undefined
#### 2. 对象的解构赋值
```
    var {foo, bar} = {foo: "aaa", bar: "bbb"};
    console.log(foo);   // => aaa
    console.log(bar);   // => bbb
```
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
```javascript
    var {bar, foo} = {foo: "aaa", bar: "bbb"};
    console.log(bar);   // => bbb
    console.log(foo);   // => aaa
```
如果变量名与属性名不一致，必须写成下面这样。
```javascript
    var { foo: baz } = { foo: "aaa", bar: "bbb" };
    console.log(baz);   // => aaa
    let obj = {
      first: 'hello',
      last: 'world'
    };
    let {
      first: f,
      last: l
    } = obj;
    console.log(f);  // => hello
    console.log(l);  // => world
```
这实际上说明，对象的解构赋值是下面形式的简写
```javascript
    var { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
```
也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
```javascript
    var {foo:baz} = {foo: "aaa", bar: "bbb"};
    console.log(baz);   // => aaa
    console.log(foo);   // => ReferenceError: foo is not defined
```
上面代码中，真正被赋值的是变量baz，而不是模式foo。

和数组一样，解构也可以用于嵌套结构的对象。
```javascript
    var obj = {
      p: [
        "hello",
        {y: "world"}
        ]
    };
    var {p: [x, {y}]} = obj
    console.log(x);
    console.log(y);
```
注意，这时p是模式，不是变量，因此不会被赋值。

下面是嵌套赋值的例子。
```javascript
    let obj = {};
    let arr = [];
    ({ foo: obj.prop, bar: arr[0] } = { foo: 123, bar: true });
    obj // {prop:123}
    arr // [true]
```
对象的解构也可以指定默认值。
```javascript
    var {x = 3} = {};
    x // 3
    var {x, y = 5} = {x: 1};
    x // 1
    y // 5
    var { message: msg = "Something went wrong" } = {};
    msg // "Something went wrong"
```
默认值生效的条件是，对象的属性值严格等于undefined。
```javascript
    var {x = 3} = {x: undefined};
    x // 3

    var {x = 3} = {x: null};
    x // null
```
如果解构失败，变量的值等于undefined。
```javascript
    var {foo} = {bar: 'baz'}
    foo // undefined
```
#### 3. 字符串的解构赋值
字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
```javascript
    const [a, b, c, d, e] = 'hello';
    console.log(a);  // => h
    console.log(b);  // => e
    console.log(c);  // => l
    console.log(d);  // => l
    console.log(e);  // => o
```
类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
```javascript
    let {length: len} = 'hello';
    console.log(len);
```
#### 4. 数值和布尔值的解构赋值
解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
```javascript
    let {toString: str} = 123;
    console.log(str === Number.prototype.toString);   // => true

    let {toString: s} = false;
    console.log(s === Boolean.prototype.toString);    // => true
```
上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。

解构赋值的规则是，只要等号右边的值不是对象，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。

#### 5. 函数的解构赋值
函数的参数也可以使用解构赋值。
```javascript
    function add([x, y]){
      return x + y;
    }
    console.log(add([1, 2]));  // => 3
```
函数参数的解构也可以使用默认值
```javascript
    function move({x = 0, y = 0} = {}){
      return [x,y];
    }
    console.log(move({x:3,y:8}));   // => [3, 8]
    console.log(move({x:3}));       // => [3, 0]
    console.log(move({}));          // => [0, 0]
    console.log(move());            // => [0, 0]
```
#### 6. 用途
6.1 交换变量的值
```javascript
[x, y] = [y, x];
```
6.2 从函数返回多个值
函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。
```javascript
// 返回一个数组
function example() {
  return [1,2,3];
}
var [a, b, c] = example();

console.log(a);   // 1
console.log(b);   // 2
console.log(c);   // 3
// 返回一个对象
function example() {
  return {
    foo: 1,
    bar: 2
  };
}
var {foo, bar} = example();
console.log(foo);   // 1
console.log(bar);   // 2
```
6.3 函数参数的定义
```javascript
    // 参数是一组有次序的值
    function f([x, y, z]) { ... }
    f([1, 2, 3])

    // 参数是一组无次序的值
    function f({x, y, z}) { ... }
    f({z: 3, y: 2, x: 1})
```
6.4 提取JSON数据
```javascript
    var jsonData = {
      id: 42,
      status: "OK",
      data: [867, 5309]
    }

    let { id, status, data: number } = jsonData;

    console.log(id, status, number);   // => 42 "OK" [867, 5309]
```
6.5 函数参数的默认值
6.6 遍历map结构
```javascript
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

for(let [key, value] of map) {
  console.log(key + ' is ' + value);  // => first is hello  second is world
}
```
如果只想获取键名，或者只想获取键值，可以写成下面这样。
```javascript
    // 获取键名
    for (let [key] of map) {
      // ...
    }

    // 获取键值
    for (let [,value] of map) {
      // ...
    }
```
6.7 输入模块的指定方法
加载模块时，往往需要指定输入那些方法。解构赋值使得输入语句非常清晰。
```javascript
    const { SourceMapConsumer, SourceNode } = require("source-map");
```
> 参考地址:http://es6.ruanyifeng.com/#docs/destructuring#对象的解构赋值