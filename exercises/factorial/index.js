// Define a function factorial that takes an integer x as input.
// Calculate and return the factorial of that number.

function factorial(num) {
	let total = 1;
	while(num > 0) {
		total = total *= num;
		num -= 1
	}
	return total
}

module.exports = factorial;