import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getCorrectAnswer = (number) => {
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else if (number % 2 !== 0) {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const getQuestionAnswerPair = () => {
  const randomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const question = randomNumber;

  const correctAnswer = getCorrectAnswer(randomNumber);

  return [question, correctAnswer];
};

const runGameEven = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameEven;
