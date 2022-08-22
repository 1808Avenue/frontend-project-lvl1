import { randomNumberInRange } from '../../index.js';

export const rulesOfGame = 'What is the result of the expression?';

const firstNumberRange = 1;
const lastNumberRange = 25;
let firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
let secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

const operator = ['+', '-', '*'];
const firstOperatorIndex = 0;
const lastOperatorIndex = operator.length - 1;
let randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];

const questionOne = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
let result;
switch (randomOperator) {
  case '+':
    result = firstRandomNumber + secondRandomNumber;
    break;
  case '-':
    result = firstRandomNumber - secondRandomNumber;
    break;
  case '*':
    result = firstRandomNumber * secondRandomNumber;
    break;
  default:
    throw new Error(`Unknown state: '${randomOperator}'!`);
}
const answerOne = result.toString();

firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];
const questionTwo = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
switch (randomOperator) {
  case '+':
    result = firstRandomNumber + secondRandomNumber;
    break;
  case '-':
    result = firstRandomNumber - secondRandomNumber;
    break;
  case '*':
    result = firstRandomNumber * secondRandomNumber;
    break;
  default:
    throw new Error(`Unknown state: '${randomOperator}'!`);
}
const answerTwo = result.toString();

firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];
const questionThree = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
switch (randomOperator) {
  case '+':
    result = firstRandomNumber + secondRandomNumber;
    break;
  case '-':
    result = firstRandomNumber - secondRandomNumber;
    break;
  case '*':
    result = firstRandomNumber * secondRandomNumber;
    break;
  default:
    throw new Error(`Unknown state: '${randomOperator}'!`);
}
const answerThree = result.toString();

export const arrayQuestions = [questionOne, questionTwo, questionThree];
export const arrayAnswers = [answerOne, answerTwo, answerThree];
