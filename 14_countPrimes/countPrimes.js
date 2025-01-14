const countPrimes = function(num) {
    if (num < 0) return "OOPS";

    let primes = Array.from(
        {length: num}, (value, index) => index + 1
    );

    primes.shift(); // remove number 1
    const limit = Math.sqrt(num);

    for (let i = 0; primes[i] < limit; i++) {
        primes = primes.filter(
            number => number % primes[i] != 0 || number == primes[i]
        );
    }

    return primes.length;
}

module.exports = countPrimes;