const leapYears = function(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0))
        return true;
    else
        return false;
};

console.log(leapYears(1900), 1900 % 400)
// Do not edit below this line
module.exports = leapYears;
