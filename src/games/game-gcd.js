import { randomNumberInRange } from '../../index.js';

export const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let firstElement = a;
  let secondElement = b;

  while (firstElement !== secondElement) {
    if (a === 0) {
      return b;
    } if (b === 0) {
      return a;
    } if (firstElement > secondElement) {
      firstElement -= secondElement;
    } else {
      secondElement -= firstElement;
    }
  }
  return firstElement;
};

const firstNumberRange = 1;
const lastNumberRange = 25;
let firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
let secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const questionOne = `${firstRandomNumber} ${secondRandomNumber}`;
const answerOne = getGcd(firstRandomNumber, secondRandomNumber).toString();

firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const questionTwo = `${firstRandomNumber} ${secondRandomNumber}`;
const answerTwo = getGcd(firstRandomNumber, secondRandomNumber).toString();

firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const questionThree = `${firstRandomNumber} ${secondRandomNumber}`;
const answerThree = getGcd(firstRandomNumber, secondRandomNumber).toString();

export const arrayQuestions = [questionOne, questionTwo, questionThree];
export const arrayAnswers = [answerOne, answerTwo, answerThree];
