import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  if (firstNumber === 0) {
    return secondNumber;
  }

  while (secondNumber !== 0) {
    if (firstNumber > secondNumber) {
      firstNumber -= secondNumber;
    } else {
      secondNumber -= firstNumber;
    }
  }
  return firstNumber;
};

const getQuestionAnswerPair = () => {
  const firstRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const secondRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getGcd(firstRandomNumber, secondRandomNumber).toString();

  return [question, correctAnswer];
};

const runGameGcd = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameGcd;
