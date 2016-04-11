/**
 * @description [js权威指南第9章  类和模块]
 * @author [silence]
 * @date  16/4/7
 */
// 去除字符串两头的空格
String.prototype.trim = String.prototype.trim || function () {
    if (!this) return this;
    return this.replace(/^\s+|\s+$/g, "");
};

function testEqual(a, b) {
    var flag;
    if (a.unit == b.nuit) {
        flag = a == b ? true : false;
    }
    return flag;
}
var parent = Object.getPrototypeOf(testEqual);

console.log(parent.name)

var a  = {
    number : 10,
    unit : 'm'
};
var b = {
    number : 10,
    unit: 'm'
};

console.log(parseInt(3, 0))


var a = /123/,
    b = /123/;

// a === b
console.log(typeof  a )
function foo() { }
var oldName = foo.name;
foo.name = "bar";
console.log(foo.name)