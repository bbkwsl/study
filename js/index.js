/**
 * @description [js权威指南]
 * @author [silence]
 * @date  16/3/30
 */

var scope = "global";
function  f() {
    console.log(scope);
    var scope = "local";
    console.log(scope);
}
// f();
// 输出local

function factorial(x) {
    if (x < 0) throw new Error("x不能是负数");
    for (var f = 1; x >1 ; f*=x, x--) /**/
    return f;
}

function test() {
    try {
        var n = Number(prompt("请输入一个正整数", ""));
        var f = factorial(n);
        alert(n + "!=" + f);
    } catch (ex) {
        alert(ex);
    }
}
// test();

var book = {
    "main title": "javascript",                   // 属性名字里有空格,必须用字符串表示
    "sub-title": "The Definitive Guide",          // 属性名字里连字符,必须使用字符串便是
    "for": "all audiences",                       // "for"是保留字,因此必须用引号
    author: {                                     // 这里的属性值是一个对象
        firstName: "David",                       // 注意,这里的属性名都没有引号
        surname: "Flanagan"
    }
};

var o = new Object();     // 创建一个空对象,和{}一样
var a = new Array();      // 创建一个空数组,和[]一样

function classof(o) {
    if (o === null ) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString().call(o).slice(8, -1);
}


function postJson(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.setRequestHeader("Content-Type", "application/json");
    request.send(JSON.stringify(data));
}