/**
 * @author [silence_yfang@126.com]
 * @date  2016-06-03
 */
var a = [1, 2], b = [3], c = [80];

function test(a1, b1, c1) {
    a1 = [];
    b1[0] = 4;
    c1 = [8];
}
test(a, b, c);

console.log(a);
console.log(b);
console.log(c);