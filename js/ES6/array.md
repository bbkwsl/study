### 数组的扩展
#### 1. Array.from():将两类对象转为真正的数组,类似数组的对象和可遍历的对象.
```javascript
    let arrayLike = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      length: 3
    }
    // ES5
    var arr1 = [].slice.call(arrayLike);
    console.log(arr1);   // => ["a", "b", "c"]
    // ES6
    let arr2 = Array.from(arrayLike);
    console.log(arr2);   // => ["a", "b", "c"]
```
#### 2. Array.of():用户将一组值转换为数组.

Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。
```javascript
    console.log(Array.of());            // => []
    console.log(Array.of(undefined));   // => [undefined]
    console.log(1);                     // => [1]
    console.log(1,2);                   // => [1,2]
```

#### 3. Array.copyWithin():在当前数组内部，将指定位置的成员复制到其他位置（会覆盖原有成员），然后返回当前数组.
```javascript
    Array.prototype.copyWithin(target, start = 0, end = this.length);
    它接受三个参数:
    target（必需）：从该位置开始替换数据。
    start（可选）：从该位置开始读取数据，默认为0。如果为负值，表示倒数。
    end（可选）：到该位置前停止读取数据，默认等于数组长度。如果为负值，表示倒数。
```
demo
```javascript
[1,2,3,4,5].copyWithin(0, 4);  // => [5, 2, 3, 4, 5]
[1,2,3,4,5].copyWithin(0, 3);  // => [4, 5, 3, 4, 5]
[1,2,3,4,5].copyWithin(0, 2);  // => [3, 4, 5, 4, 5]
[1,2,3,4,5].copyWithin(0, 1);  // => [2, 3, 4, 5, 5]
```
copyWithin方法不要求其this值必须是一个数组对象；因此，如果为类数组对象，内部先将类数组转为真正的对象，然后按照copyWithin方法对数组进行操作，然后再将数组转为当前的类型输出。
```javascript
    // 类数组对象
    [].copyWithin.call({length: 5, 3: 1}, 0, 3);  // => {"0":1,"3":1,"length":5}
    // 可遍历对象
    var items = [
      ["name", "张三"],
      ["title", "Author"]
    ];
    [].copyWithin.call(items ,0, 1);   // => [["title","Author"],["title","Author"]]
```
##### 4. 数组实例的find()和findIndex();
find用于找出第一个符合条件的数组成员.它的参数是一个回调函数，所有数组成员依次执行该回调函数，直到找出第一个返回值为true的成员，然后返回该成员。如果没有符合条件的成员，则返回undefined。
```javascript
    [1, 4, -5, 10].find((n) => n <0 )   // => -5
    [1, 5, 10, 15].find(function(value, index, arr) {
      return value > 9;
    }) // 10
```
find方法的回调函数可以接受三个参数，依次为当前的值、当前的位置和原数组。

findIndex 返回第一个符合条件的数组成员的位置，如果所有成员都不符合条件，则返回-1。
##### 5. 数组实例的fill(): 使用给定值，填充一个数组。
```javascript
    ['a', 'b', 'c'].fill(0);       // => [0, 0, 0]
    new Array(3).fill(0);          // => [0, 0, 0]
```
fill方法还可以接受第二个和第三个参数，用于指定填充的起始位置和结束位置。
```javascript
    ['a', 'b', 'c'].fill(1, 0, 2);   // => [1, 1, 'c']
```
##### 6.数组实例的entries()是对键值对的遍历，keys()是对键名的遍历和values()是对键值的遍历.
```javascript
    for (let index of ['a', 'b'].keys()) {
      console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
      console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
      console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"
```
##### 7. 数组实例的includes()
Array.prototype.includes方法返回一个布尔值，表示某个数组是否包含给定的值，与字符串的includes方法类似。
```javascript
    [1,2,3].includes(0);   // => false
    [1,2,3].includes(2);   // => true
```
该方法的第二个参数表示搜索的起始位置，默认为0。如果第二个参数为负数，则表示倒数的位置，如果这时它大于数组长度（比如第二个参数为-4，但数组长度为3），则会重置为从0开始。