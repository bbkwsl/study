/**
 * @author  https://github.com/silence717
 * @date on 2017/3/1
 */
function toNumber(value) {
	if (typeof value == 'number') {
		return value;
	}
	if (isSymbol(value)) {
		return NAN;
	}
	if (isObject(value)) {
		var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
		value = isObject(other) ? (other + '') : other;
	}
	if (typeof value != 'string') {
		return value === 0 ? value : +value;
	}
	value = value.replace(reTrim, '');
	var isBinary = reIsBinary.test(value);
	return (isBinary || reIsOctal.test(value))
		? freeParseInt(value.slice(2), isBinary ? 2 : 8)
		: (reIsBadHex.test(value) ? NAN : +value);
}
function toFinite(value) {
	if (!value) {
		return value === 0 ? value : 0;
	}
	value = toNumber(value);
	if (value === INFINITY || value === -INFINITY) {
		var sign = (value < 0 ? -1 : 1);
		return sign * MAX_INTEGER;
	}
	return value === value ? value : 0;
}
function toInteger(value) {
	var result = toFinite(value),
		remainder = result % 1;

	return result === result ? (remainder ? result - remainder : result) : 0;
}
function _isInteger(value) {
	return typeof value === 'number' && value == toInteger(value);
}