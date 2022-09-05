import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => number % 2 === 0;

const preparingDataForRound = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = isEvenNumber(randomNumber) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGameEven = () => runGameCore(rulesOfGame, preparingDataForRound);

export default runGameEven;
