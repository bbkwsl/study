#### 第六章 对象
一 创建对象：

 1. 对象直接量：由若干名/值对组成的映射表，名/值对中间使用冒号分离，明/值对之间用逗号分离，整个映射变使用花括号括起来。举例如下：
 ```
    var book = {
        "main title": "javascript",                   // 属性名字里有空格,必须用字符串表示
        "sub-title": "The Definitive Guide",          // 属性名字里连字符,必须使用字符串便是
        "for": "all audiences",                       // "for"是保留字,因此必须用引号
        author: {                                     // 这里的属性值是一个对象
            firstName: "David",                       // 注意,这里的属性名都没有引号
            surname: "Flanagan"
        }
    };
```
 2. 通过new创建对象：new运算符创建并初始化一个对象。关键字new后跟随一个函数调用。这里的函数称作构造函数，构造函数用以初始化一个新创建的对象。例如：

 ```
    var o = new Object();     // 创建一个空对象,和{}一样
    var a = new Array();      // 创建一个空数组,和[]一样
 ```
 3. 原型：每一个javascript对象都和另一个对象关联。
 没有原型的对象为数不多，Object.prototype就是其中之一。
 4. Object.create():它创建一个新对象，其中第一个参数是这个对象的原型，第二个可选参数，用以对对象的属性进行进一步描述。例如：
 ```
    var o1 = Object.create({x:1, y:2});       // o1继承了属性x和y
    var o2 = Object.create(null);             // o2不继承任何属性和方法
 ```
二 属性的查询和设置
   
    可以通过点(.)或方括号([])运算符来获取属性的值。运算符左侧应当是一个表达式，它返回一个对象。对于点来说，右侧必须是一个以属性名称命名的简单标识符。对于
方括号来说，方括号内必须是一个计算结果为字符串的表达式，这个字符串就是属性的名字：
 ```
    var author = book.author;          // 得到book的"author"属性
    var name = author.surname;         // 得到auhor的"surname"属性
 ```
    和查询属性的写法一样，通过点和方括号也可以创建属性或给属性赋值，但需要将它放在表达式的左侧：
 ```
    book.edition = 6;                    // 给book创建一个名为"edition"的属性
    book["main title"] = "ECMAScript";   // 给"main title"属性赋值
 ```

 三 删除属性
 
    delete运算符可以删除对象的属性。它的操作数应当是一个属性访问表达式。delete只是断开属性和宿主对象的联系，而不会去操作属性中的属性。例如:
 ```
    delete book.author;                  // book不再有属性author
 ```
    delete运算符只能删除自有属性，不能删除继承属性。

 四 检测属性
    javascript对象可以看做属性的集合。需要检测集合中成员的所属关系--判断某个属性是否存在于某个软件中。可以使用in运算符，hasOwnProperty()和propertyIsEnumerable()方法来完成。
    
 五 枚举属性
    遍历对象属性三种方法：
    * 通常使用for/in循环.
    * Object.keys().
    * Object.getOwnPropertyNames().

    
