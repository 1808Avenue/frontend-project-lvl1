import { brainGamesCore, randomNumberInRange } from '../index.js';

const rulesOfGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getArrayQuestionAnswer = () => {
  const getPrimeNumber = (number) => {
    let result = 0;

    for (let i = number; i > 0; i -= 1) {
      if (number % i === 0) {
        result += 1;
      }
    }

    if (result === 2) {
      return true;
    }
    return false;
  };

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  const randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  const question = randomNumber;

  let result;
  if (getPrimeNumber(randomNumber) === true) {
    result = 'yes';
  } else if (getPrimeNumber(randomNumber) === false) {
    result = 'no';
  }

  const answer = result;

  const arrayQuestionAnswer = [question, answer];
  return arrayQuestionAnswer;
};

const runGamePrime = () => brainGamesCore(rulesOfGame, getArrayQuestionAnswer);

export default runGamePrime;
