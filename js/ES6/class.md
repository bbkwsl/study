### class
#### ES6 class 继承
使用extends关键字来继承的时候，子类必须在constructor方法中调用super方法，否则新建实例时会报错。这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象。
```javascript
// bad
class Point {}
class ColorPoint extends Point {
  constructor () {
  }
}
// good
class Point {}
class ColorPoint extends Point {
  constructor () {
    super();
  }
}
```
#### 类的prototype属性和__proto__属性
（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。
（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
```javascript
    class A {}
    class B extends A {}
    console.log(B.__proto__ === A);  // => true
    console.log(B.prototype.__proto__ === A.prototype);  // => true
```
#### 从子类上获取父类
Object.getPrototypeOf(ColorPoint) === Point; // => true
#### super关键字
super这个关键字，有两种用法，含义不同。

（1）作为函数调用时（即super(...args)），super代表父类的构建函数。

（2）作为对象调用时（即super.prop或super.method()），super代表父类。注意，此时super即可以引用父类实例的属性和方法，也可以引用父类的静态方法。
#### Class的静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

父类的静态方法，可以被子类继承。
```javascript
    class Foo {
      static classMethod() {
        return 'hello';
      }
    }

    class Bar extends Foo {
    }
    Bar.classMethod(); // 'hello'
```
#### Class的静态属性和实例属性
静态属性指的是Class本身的属性，即Class.propname，而不是定义在实例对象（this）上的属性。
```javascript
    class Foo {
    }

    Foo.prop = 1;
    Foo.prop // 1
```