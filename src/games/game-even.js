import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEvenNumber = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const getCorrectAnswer = (number) => {
  if (isEvenNumber(number)) {
    return 'yes';
  }
  return 'no';
};

const getQuestionAnswerPair = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = getCorrectAnswer(randomNumber);

  return [question, correctAnswer];
};

const runGameEven = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameEven;
