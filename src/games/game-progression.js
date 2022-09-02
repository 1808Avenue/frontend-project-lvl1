import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getArrayOfArithmeticProgression = (number, step, lengthNumbers) => {
  const arrayNumbers = [];
  for (let i = 0; i < lengthNumbers; i += 1) {
    arrayNumbers[i] = number + (step * (i + 1));
  }
  return arrayNumbers;
};

const getQuestionAnswerPair = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const lowerLimitStepRange = 2;
  const upperLimitStepRange = 5;
  const randomStep = getRandomNumberInRange(lowerLimitStepRange, upperLimitStepRange);

  const lowerLimitLengthRange = 5;
  const upperLimitLengthRange = 10;
  const lengthNumbers = getRandomNumberInRange(lowerLimitLengthRange, upperLimitLengthRange);

  const arrayNumbers = getArrayOfArithmeticProgression(randomNumber, randomStep, lengthNumbers);

  const lowerLimitIndex = 0;
  const upperLimitIndex = lengthNumbers - 1;
  const randomIndexColon = getRandomNumberInRange(lowerLimitIndex, upperLimitIndex);

  const correctNumber = arrayNumbers[randomIndexColon];
  arrayNumbers[randomIndexColon] = '..';

  const question = arrayNumbers.join(' ');
  const correctAnswer = correctNumber.toString();

  return [question, correctAnswer];
};

const runGameProgression = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameProgression;
