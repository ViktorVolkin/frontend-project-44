import { startGame } from "../src/startGame.js";
import { generationNumber, gcd } from "../src/helpers/helpers.js";
function brainGcd() {
	const num1 = generationNumber(1, 100);
	const num2 = generationNumber(1, 100);
	const question = `${num1} ${num2}`;
	const correctAnswer = gcd(num1, num2);
	return [question, correctAnswer];
}
const desc = "Find the greatest common divisor of given numbers.";
startGame(desc, brainGcd);
