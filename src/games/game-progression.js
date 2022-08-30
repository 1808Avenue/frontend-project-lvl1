import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const removeCommas = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i += 1) {
    result += string[i].replace(',', ' ');
  }
  return result;
};

const getQuestionAnswerPair = () => {
  let randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const lowerLimitStepRange = 2;
  const upperLimitStepRange = 5;
  const randomStep = getRandomNumberInRange(lowerLimitStepRange, upperLimitStepRange);

  const lowerLimitLengthRange = 5;
  const upperLimitLengthRange = 10;
  const lengthNumbers = getRandomNumberInRange(lowerLimitLengthRange, upperLimitLengthRange);

  const arrayNumbers = [];
  for (let i = 0; i < lengthNumbers; i += 1) {
    randomNumber += randomStep;
    arrayNumbers[i] = randomNumber;
  }

  const lowerLimitIndex = 0;
  const upperLimitIndex = lengthNumbers - 1;
  const randomIndexColon = getRandomNumberInRange(lowerLimitIndex, upperLimitIndex);

  const correctNumber = arrayNumbers[randomIndexColon];
  arrayNumbers[randomIndexColon] = '..';

  const question = removeCommas(arrayNumbers.toString());
  const correctAnswer = correctNumber.toString();

  return [question, correctAnswer];
};

const runGameProgression = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameProgression;
