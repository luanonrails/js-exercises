const perfectNumber = function(num) {
    if (num < 0) return 'OOPS';

    const divisors = [];
    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0) divisors.push(i);
    }

    const sum = divisors.reduce(
        (total, value) => total + value, 0
    );
    
    return sum == num;
}

module.exports = perfectNumber;