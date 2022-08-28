import { brainGamesCore, randomNumberInRange } from '../index.js';

const rulesOfGame = 'Find the greatest common divisor of given numbers.';

const getArrayQuestionAnswer = () => {
  const getGcd = (a, b) => {
    let firstElement = a;
    let secondElement = b;

    while (firstElement !== secondElement) {
      if (a === 0) {
        return b;
      } if (b === 0) {
        return a;
      } if (firstElement > secondElement) {
        firstElement -= secondElement;
      } else {
        secondElement -= firstElement;
      }
    }
    return firstElement;
  };

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  const firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  const secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = getGcd(firstRandomNumber, secondRandomNumber).toString();

  const arrayQuestionAnswer = [question, answer];
  return arrayQuestionAnswer;
};

const runGameGcd = () => brainGamesCore(rulesOfGame, getArrayQuestionAnswer);

export default runGameGcd;
