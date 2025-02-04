const plusOne = function(digits) {
    let carry = 1;
    let count = 1;
    while (carry) {
        const index = digits.length - count;

        if (index < 0) {
            digits.unshift(carry);
            break;
        } 

        const sum = digits[index] + carry;
        digits[index] = sum % 10;
        carry = Math.floor(sum / 10);
        count++;
    }
    return digits;
}

module.exports = plusOne;