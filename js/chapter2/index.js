/**
 * @description [js权威指南二第章 词法结构]
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
test();

