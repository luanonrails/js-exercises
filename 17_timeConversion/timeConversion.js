const timeConversion = function(time) {
    const period = time.slice(-2);
    let hour = time.slice(0, 2);

    if (period == 'AM' && hour == 12)
        hour = '00';

    if (period == 'PM' && hour < 12)
        hour = +hour + 12;

    return hour + time.slice(2, -2);
}

module.exports = timeConversion;