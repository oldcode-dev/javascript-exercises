const sumAll = function() {
    let total = 0;
    const args = Array.from(arguments);
    
    if (args.length < 2 || !args.every(Number.isInteger) || args.some(num => num < 0)) {
        return 'ERROR';
    }
    
    const [min, max] = [Math.min(...args), Math.max(...args)];
    
    for (let i = min; i <= max; i++) {
        total += i;
    }
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
