const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const sum = function(array) {
    return array.reduce((total, num) => total + num, 0);
}

const multiply = function(array) {
    return array.reduce((total, num) => total * num, 1);
}

const power = function(base, exponent) {
    return Math.pow(base, exponent);
}

const factorial = function(num) {
    return multiply(
        Array.from({length: num}, (value, index) => index + 1)
    );
}

module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
  }