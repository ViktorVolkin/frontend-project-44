#!/usr/bin/env node
import { isEven, generationNumber } from '../src/helpers/helpers.js'
import { startGame } from '../src/startGame.js'

const generateEvenQuestion = () => {
  const num = generationNumber()
  const correctAnswer = isEven(num) ? 'yes' : 'no'
  const question = `${num}`
  return [question, correctAnswer]
}

const description = `Answer "yes" if the number is even, otherwise answer "no".`
startGame(description, generateEvenQuestion)
