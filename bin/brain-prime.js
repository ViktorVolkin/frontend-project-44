#!/usr/bin/env node

import { generationNumber, isPrime } from "../src/helpers/helpers.js";
import { startGame } from "../src/startGame.js";
function brainPrime() {
	const generateRandomNum = generationNumber(1, 100000);
	const answer = isPrime(generateRandomNum) ? "yes" : "no";
	return [generateRandomNum, answer];
}
const desc = 'Answer "yes" if given number is prime. Otherwise answer "no".';
startGame(desc, brainPrime);
