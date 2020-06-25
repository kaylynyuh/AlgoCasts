// Write a function that checks if a number is
// divisible by 2

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = isEven;