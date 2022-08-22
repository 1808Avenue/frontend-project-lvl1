import { randomNumberInRange } from '../../index.js';

export const rulesOfGame = 'What number is missing in the progression?';

const removeCommas = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += string[i].replace(',', ' ');
  }
  return result;
};

const firstNumberRange = 1;
const lastNumberRange = 25;
let randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

const firstNumberStepRange = 2;
const lastNumberStepRange = 5;
let randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);

const firstNumberLengthRange = 5;
const lastNumberLengthRange = 10;
let lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);

const firstArrayNumbers = [];
for (let i = 0; i < lengthNumbers; i += 1) {
  randomNumber += randomStep;
  firstArrayNumbers[i] = randomNumber;
}

const firstIndexRange = 0;
let lastIndexRange = lengthNumbers - 1;
let randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);

let correctNumber = firstArrayNumbers[randomIndexColon];
firstArrayNumbers[randomIndexColon] = '..';

const questionOne = removeCommas(firstArrayNumbers.toString());
const answerOne = correctNumber.toString();

const secondArrayNumbers = [];
randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);
lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);
lastIndexRange = lengthNumbers - 1;
for (let i = 0; i < lengthNumbers; i += 1) {
  randomNumber += randomStep;
  secondArrayNumbers[i] = randomNumber;
}
randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);
correctNumber = secondArrayNumbers[randomIndexColon];
secondArrayNumbers[randomIndexColon] = '..';

const questionTwo = removeCommas(secondArrayNumbers.toString());
const answerTwo = correctNumber.toString();

const thirdArrayNumbers = [];
randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);
lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);
lastIndexRange = lengthNumbers - 1;
for (let i = 0; i < lengthNumbers; i += 1) {
  randomNumber += randomStep;
  thirdArrayNumbers[i] = randomNumber;
}
randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);
correctNumber = thirdArrayNumbers[randomIndexColon];
thirdArrayNumbers[randomIndexColon] = '..';

const questionThree = removeCommas(thirdArrayNumbers.toString());
const answerThree = correctNumber.toString();

export const arrayQuestions = [questionOne, questionTwo, questionThree];
export const arrayAnswers = [answerOne, answerTwo, answerThree];
