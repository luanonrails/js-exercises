const countPrimes = function(num) {
    if (num < 0) return "OOPS";

    let numbers = Array.from({length: num});
    let counter = 0;

    for (let i = 2; i <= num; i++) {
        if (numbers[i]) {
            continue;
        } 
        
        counter++;
        for (let n = i * i; n <= num; n += i) {
            numbers[n] = n;
        }
    }
    return counter;
}

module.exports = countPrimes;