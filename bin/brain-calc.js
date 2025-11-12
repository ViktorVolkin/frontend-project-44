#!/usr/bin/env node

import { startGame } from '../src/startGame.js'
import {
  generationMathOperator,
  generationNumber,
  calc,
} from '../src/helpers/helpers.js'

export function generateCalcQuestion() {
  const num1 = generationNumber()
  const num2 = generationNumber()
  const randomOperator = generationMathOperator()
  const answer = calc(num1, num2, randomOperator)
  const question = `${num1} ${randomOperator} ${num2}`
  return [question, answer]
}
const description = 'What is the result of the expression?'

startGame(description, generateCalcQuestion)
