import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (firstNumber, secondNumber) => {
  let a = firstNumber;
  let b = secondNumber;

  while (b !== 0) {
    b = a % (a = b);
  }
  return a;
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
