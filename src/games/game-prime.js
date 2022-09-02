import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getPrimeNumber = (number) => {
  let divisionСounter = 0;

  for (let i = number; i > 0; i -= 1) {
    if (number % i === 0) {
      divisionСounter += 1;
    }
  }
  return divisionСounter === 2;
};

const getQuestionAnswerPair = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = (getPrimeNumber(randomNumber)) ? 'yes' : 'no';

  return [question, correctAnswer];
};

const runGamePrime = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGamePrime;
