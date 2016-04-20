### 数值的扩展
#### 1. Number.isFinite(): 检查一个数值是否非无穷.
```javascript
    Number.isFinite(-Infinity);  // => false
    Number.isFinite(-Infinity);  // => false
    Number.isFinite(16);         // => true
    Number.isFinite(NaN);        // => false
```
#### 2. Number.isNaN():用来检查一个值是否为NaN.
```javascript
    Number.isNaN(NaN);          // => true
    NUmber.isNaN(15);           // => false
    NUmber.isNaN(true);         // => false
```
以上两个方法支队数值有效,非数值一律返回false.
#### 3. Number.parseInt(),Number.parseFloat():将全局方法parseInt()和parseFloat()，移植到Number对象上面，行为完全保持不变.
```javascript
    Number.parseInt(12.44);   // => 12
    Number.parseFloat('123.45#') // 123.45
```
这样做的目的是减少全局性方法,使得语言逐步模块化
```javascript
    Number.parseFloat === parseFloat;   // => true
    Number.parseInt === parseInt;       // => true
```
#### 4. Number.isInteger(): 用来判断一个值是否为整数。
```javascript
    Number.isInteger(25.0);    // => true
    Number.isInteger(25);      // => true
```
#### 5. 安全整数和Number.isSafeInteger()
javascript能够准确表示的整数范围在-2^53和2^53之间(不含两个端点),超过这个范围,无法精确表示这个值.

ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
```javascript
    Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1;         // => true
    Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER;    // => true
```
Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
```javascript
    Number.isSafeInteger(3) // true
    Number.isSafeInteger(Infinity) // false
```
#### 6.Math对象的扩展
```javascript
    Math.trunc(4.1);   // => 4
```
对于非数值，Math.trunc内部使用Number方法将其先转为数值。

对于空值和无法截取整数的值，返回NaN。
#### 7. Math.sign()方法用来判断一个数到底是正数、负数、还是零。

它会返回五种值。

    参数为正数，返回+1；
    参数为负数，返回-1；
    参数为0，返回0；
    参数为-0，返回-0;
    其他值，返回null。
#### 8. Math.cbrt方法用于计算一个数的立方根。
```javascript
    Math.cbrt(27);   // => 3
```
