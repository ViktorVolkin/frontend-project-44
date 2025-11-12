import readlineSync from "readline-sync";

export const startGame = (description, generateQuestion, amountOfTries) => {
	console.log("Welcome to the Brain Games!");
	const username = readlineSync.question("May I have your name? ");
	console.log(`Hello, ${username}!`);
	console.log(description);

	const roundsLimit = amountOfTries ?? 3;

	for (let i = 0; i < roundsLimit; i += 1) {
		const [question, correctAnswer] = generateQuestion();
		console.log(`Question: ${question}`);
		const userAnswer = readlineSync.question("Your answer: ");

		if (String(userAnswer) !== String(correctAnswer)) {
			console.log(
				`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
			);
			console.log(`Let's try again, ${username}!`);
			return;
		}
		console.log("Correct!");
	}

	console.log(`Congratulations, ${username}!`);
};
