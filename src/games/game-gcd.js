import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => (y === 0 ? x : getGcd(y, x % y));

const preparingDataForRound = () => {
  const firstRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const secondRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const correctAnswer = getGcd(firstRandomNumber, secondRandomNumber).toString();

  return [question, correctAnswer];
};

const runGameGcd = () => runGameCore(rulesOfGame, preparingDataForRound);

export default runGameGcd;
