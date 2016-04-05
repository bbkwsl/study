/**
 * @description [js权威指南第7章]
 * @author [silence]
 * @date  16/4/5
 */

/***
 * 用数值大小排序
 */
var a  = [33, 4, 111, 222];

a.sort();
console.log(a);
// 字母表顺序: 111, 222, 33, 4
a.sort(function (a, b) {
    return a-b;
});
console.log(a);
// 从小到大: 4, 33, 111, 222
a.sort(function (a, b) {
    return b-a;
});
console.log(a);
// 从大到小: 222, 111, 33 ,4

/***
 * 对字符串数组执行不区分大小写的字母表排序
 */
var arr = ['ant', 'Bug', 'cat', 'Dog'];
arr.sort();
console.log(arr);
 // 区分大小写排序: ['Bug', 'Dog', 'ant', 'cat']
arr.sort(function (s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
console.log(arr);
//不区分大小写: ['ant', 'Bug', 'cat', 'Dog']
/***
 * splice方法练习
 * @type {number[]}
 * @private
 */
var _arr = [1, 2, 3, 4, 5, 6, 7, 8];
_arr.splice(4);
console.log(_arr);
// 返回[5, 6, 7, 8];_arr是[1,2,3,4]
_arr.splice(1, 2);
console.log(_arr);
// 返回[2, 3];_arr是[1,4]


var data = [1,2,3,4,5];
var sum = 0;
data.forEach(function(value){
    sum += value;
});
console.log(sum);    // => 15


var a_arr = [1, 2, 3];
var b = a_arr.map(function(x){
    return x*x;
})
console.log(b);  // =>b = [1, 4, 9]

/***
 * reduce 方法
 */

var _data = [1,2,3,4,5];
var sum = _data.reduce(function (x, y) {
   return x+y;
}, 0);
// 求和 => 15
var product = a.reduce(function (x, y) {
    return x*y;
}, 1);
// 求积 => 120
var max = a.reduce(function (x, y) {
   return x>y ? x : y;
});
// 求最大值 => 5
