export const generationNumber = (min = 0, max = 100) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};
export const isEven = (num) => {
	return num % 2 === 0;
};

export const generationMathOperator = () => {
	const possibleOperators = ["*", "+", "-"];
	return possibleOperators[generationNumber(0, 2)];
};
export const calc = (num1, num2, operator) => {
	switch (operator) {
		case "*":
			return Math.floor(num1 * num2);
		case "+":
			return Math.floor(num1 + num2);
		case "-":
			return Math.floor(num1 - num2);
		default:
			return num1 + num2;
	}
};

export const gcd = (num1, num2) => {
	if (num2 === 0) {
		return num1;
	}
	return gcd(num2, num1 % num2);
};

export const isPrime = (num) => {
	if (num <= 1) return false;
	if (num === 2) return true;
	if (num % 2 === 0) return false;
	for (let i = 3; i <= Math.sqrt(num); i += 2) {
		if (num % i === 0) {
			return false;
		}
	}
	return true;
};
