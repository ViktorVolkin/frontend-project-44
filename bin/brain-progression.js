#!/usr/bin/env node

import { startGame } from "../src/startGame.js";
import { generationNumber } from "../src/helpers/helpers.js";
export const progression = () => {
	const startingNumber = generationNumber(10, 99);
	const modificator = generationNumber(1, 250);
	const arr = Array.from({ length: 10 }).map(
		(_, idx) => startingNumber + idx * modificator
	);
	const randomIndex = generationNumber(0, 9);
	const prevVal = arr[randomIndex];
	arr[randomIndex] = "..";
	return [arr.join(" "), prevVal];
};

const desc = "What number is missing in the progression?";
startGame(desc, progression);
