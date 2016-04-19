### 字符串扩展
1. 字符串的遍历器接口
```javascript
    for(let codePoint of 'foo') {
      console.log(codePoint);
    }
```
2.  includes(): 返回布尔值，表示是否找到了参数字符串.
    startsWith(): 返回布尔值，表示参数字符串是否在源字符串的头部.
    endsWith(): 返回布尔值，表示参数字符串是否在源字符串的头部。
```javascript
    var s = 'hello world';
    console.log(s.includes('o'));   // => true
    console.log(s.startsWith('h')); // => true
    console.log(s.startsWith('hello')); // => true
    console.log(s.endsWith('world'));   // => true
    console.log(s.endsWith('d'));   // => true
```
这三个方法都支持第二个参数，表示开始搜索的位置。
```javascript
    var s = 'hello world';
    console.log(s.startsWith('world', 6));   // => true
    console.log(s.endsWith('hello', 5));     // => true
    console.log(s.includes('hello', 1));     // => false

```
上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同。它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。
3. repeat(): 返回一个新字符串，表示将原字符串重复n次。
```javascript
    console.log('hello'.repeat(2.9));  // => hellohello
```
参数如果是小数,会被取整.
如果参数是负数或者Infinity,会报错.
```javascript
console.log('hello'.repeat(Infinity)); // => Invalid count value
console.log('hello'.repeat(-1)); // => Invalid count value
```
但是，如果参数是0到-1之间的小数，则等同于0，这是因为会先进行取整运算。0到-1之间的小数，取整以后等于-0，repeat视同为0。
```javascript
    console.log('na'.repeat(-0.9));  // => ''
```
参数NaN等同于0。
```javascript
    console.log('na'.repeat(NaN));  // => ''
```
如果repeat的参数是字符串，则会先转换成数字。
```javascript
    console.log('na'.repeat('na'));  // => ''
    console.log('na'.repeat('3'));   // => 'nanana'
```
4. 字符串补全长度:如果某个字符串不够指定长度，会在头部或尾部补全。padStart用于头部补全，padEnd用于尾部补全。
```javascript
console.log('na'.padStart(5, 'a'));  // => aaana
console.log('nb'.padEnd(5, 'a'));    // => nbaaa
```
padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
```javascript
    'xxx'.padStart(2, 'ab') // 'xxx'
    'xxx'.padEnd(2, 'ab') // 'xxx'
```
如果省略第二个参数，则会用空格补全长度。
```javascript
    'x'.padStart(4)   // '   x'
    'x'.padEnd(4)     // 'x   '
```
padStart的常见用途是为数值补全指定位数.这样的话用于日期时间补全最好不过了.
```javascript
    var date = new Date();
    var year = date.getFullYear();
    var month = (date.getMonth()+1).toString().padStart(2,0);
    var day = date.getDate().toString().padStart(2,0);
    console.log(year+'-'+month +'-'+day);  // =>
```
