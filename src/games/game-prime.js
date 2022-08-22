import { randomNumberInRange } from '../../index.js';

export const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
  let result = 0;

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      result += 1;
    }
  }

  if (result === 2) {
    return true;
  }
  return false;
};

const firstNumberRange = 1;
const lastNumberRange = 25;
const randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
const thirdRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

let correctAnswer;
if (getPrimeNumber(randomNumber) === true) {
  correctAnswer = 'yes';
} else if (getPrimeNumber(randomNumber) === false) {
  correctAnswer = 'no';
}
const answerOne = correctAnswer;

if (getPrimeNumber(secondRandomNumber) === true) {
  correctAnswer = 'yes';
} else if (getPrimeNumber(secondRandomNumber) === false) {
  correctAnswer = 'no';
}
const answerTwo = correctAnswer;

if (getPrimeNumber(thirdRandomNumber) === true) {
  correctAnswer = 'yes';
} else if (getPrimeNumber(thirdRandomNumber) === false) {
  correctAnswer = 'no';
}
const answerThree = correctAnswer;

export const arrayQuestions = [randomNumber, secondRandomNumber, thirdRandomNumber];
export const arrayAnswers = [answerOne, answerTwo, answerThree];
