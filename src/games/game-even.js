import { brainGamesCore, randomNumberInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const getArrayQuestionAnswer = () => {
  const firstNumberRange = 1;
  const lastNumberRange = 25;
  const randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  const question = randomNumber;

  let result;
  if (randomNumber % 2 === 0) {
    result = 'yes';
  } else if (randomNumber % 2 !== 0) {
    result = 'no';
  }

  const answer = result;

  const arrayQuestionAnswer = [question, answer];
  return arrayQuestionAnswer;
};

const runGameEven = () => brainGamesCore(rulesOfGame, getArrayQuestionAnswer);

export default runGameEven;
