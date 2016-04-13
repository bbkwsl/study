/**
 * @description []
 * @author [silence]
 * @date  2016-04-12
 */
function Range(from, to) {
    this.from = from;
    this.to = to;
}
Range.prototype = {
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
            console.log(i)
        }
    },
    /**
     * 返回表示这个范围的字符串
     */
    toString: function () {
        return '(' + this.from + '...' + this.to + ')'
    }
};
var r = new Range(1, 3);
r.includes(2);
r.foreach(console.log);
console.log(r);
