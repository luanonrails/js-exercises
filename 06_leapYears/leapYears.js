const leapYears = function(year) {
    const isCentury =  year % 100 == 0;
    const isYearDivisibleByFour = year % 4 == 0;
    const isYearDivisibleByFourHundred = year % 400 == 0;

    if ((!isCentury && isYearDivisibleByFour || isYearDivisibleByFourHundred)){
        return true;
    }
    return false;
}

module.exports = leapYears;