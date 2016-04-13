/**
 * @description [类和原型]
 * @author [silence]
 * @date  2016-04-12
 */
/**
 * 返回一个继承自原型对象p的属性的新对象
 */
function inherit(p) {
    if (p == null)  throw TypeError();
    if (Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== 'object' && t !== 'function' ) throw  TypeError();
    function f() {}
    f.prototype = p;
    return new f();
}

// 原型对象定义方法,这些方法为每个范围对象所继承
range.methods = {
    /**
     * 如果x在范围内,则返回true,否则返回false
     * @param x
     * @returns {boolean}
     */
    includes: function (x) {
        return this.from <= x && x <= this.to;
    },
    /**
     * 对于范围内的每个数都调用f
     */
    foreach: function (f) {
        for (var i = Math.ceil(this.from); i < this.to; i++) {
            f(i);
        }
    },
    /**
     * 返回表示这个范围的字符串
     */
    toString: function () {
        return '(' + this.from + '...' + this.to + ')'
    }
};
function range(from, to) {
    var r = inherit(range.methods);

    r.from = from;
    r.to = to;

    return r;
}

var r = range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);