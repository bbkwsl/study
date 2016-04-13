/**
 * @description []
 * @author [silence]
 * @date  2016-04-12
 */
function Complex(real, imaginary) {
    if (isNaN(real) || isNaN(imaginary)) throw new TypeError();
    this.r = real;
    this.i = imaginary;
}

Complex.prototype.add = function (that) {
    return  new Complex(this.r + that.r, this.i + that.i);
};

Complex.prototype.toString = function () {
    return "{" + this.r + "," + this.i + "}";
};

Complex.prototype.equals = function (that) {
    return that != null &&
           that.constructor === Complex &&
           this.r === that.r && this.i === that.i;
};