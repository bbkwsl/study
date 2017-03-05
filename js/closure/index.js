/**
 * @author  https://github.com/silence717
 * @date on 2017/3/3
 */
function numberGenrator() {
	var num = 1;
	function checkNumber() {
		// console.log(num);
		document.write(num);
	}
	num++;
	return checkNumber;
}
var number = numberGenrator();
number();

function sayHello() {
	var say = function () {
		document.write(hello);
	};
	var hello = 'Hello, world!';
	return say();
}
var sayHelloClosure = sayHello();
// sayHelloClosure();

var x = 10;
function foo() {
	var y = x + 5;
	return y;
}
function bar() {
	var x = 2;
	return foo();
}
function main() {
	foo();
	document.write('foo' + foo() + '\r');
	bar();
	document.write('bar' + bar());
	return 0;
}
main();

function secretPassword() {
	var password = 'silence717';
	return {
		guessPassword: function(guess) {
			if (guess === password) {
				return true;
			} else {
				return false;
			}
		}
	}
}
var passwordGame = secretPassword();
document.write('<div>hailey is : ' + passwordGame.guessPassword('hailey') + '</div>');
document.write('<div>silence is : ' + passwordGame.guessPassword('silence717') + '</div>');
passwordGame.guessPassword('hailey');
passwordGame.guessPassword('silence717');

var obj = {i:0};
Object.observe(obj, function(changes){
	document.write('<div>' + changes + '</div>');
});
obj.i = obj.i++;