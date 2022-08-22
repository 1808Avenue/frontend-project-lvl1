import { randomNumberInRange } from '../../index.js';

export const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const firstNumberRange = 1;
const lastNumberRange = 25;
const randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const thirdRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

let answerOne;
if (randomNumber % 2 === 0) {
  answerOne = 'yes';
} else if (randomNumber % 2 !== 0) {
  answerOne = 'no';
}

let answerTwo;
if (secondRandomNumber % 2 === 0) {
  answerTwo = 'yes';
} else if (secondRandomNumber % 2 !== 0) {
  answerTwo = 'no';
}

let answerThree;
if (thirdRandomNumber % 2 === 0) {
  answerThree = 'yes';
} else if (thirdRandomNumber % 2 !== 0) {
  answerThree = 'no';
}

export const arrayQuestions = [randomNumber, secondRandomNumber, thirdRandomNumber];
export const arrayAnswers = [answerOne, answerTwo, answerThree];
