import { brainGamesCore, randomNumberInRange } from '../index.js';

const rulesOfGame = 'What number is missing in the progression?';

const getArrayQuestionAnswer = () => {
  const removeCommas = (string) => {
    let result = '';
    for (let i = 0; i < string.length; i += 1) {
      result += string[i].replace(',', ' ');
    }
    return result;
  };

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  let randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  const firstNumberStepRange = 2;
  const lastNumberStepRange = 5;
  const randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);

  const firstNumberLengthRange = 5;
  const lastNumberLengthRange = 10;
  const lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);

  const arrayNumbers = [];
  for (let i = 0; i < lengthNumbers; i += 1) {
    randomNumber += randomStep;
    arrayNumbers[i] = randomNumber;
  }

  const firstIndexRange = 0;
  const lastIndexRange = lengthNumbers - 1;
  const randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);

  const correctNumber = arrayNumbers[randomIndexColon];
  arrayNumbers[randomIndexColon] = '..';

  const question = removeCommas(arrayNumbers.toString());
  const answer = correctNumber.toString();

  const arrayQuestionAnswer = [question, answer];
  return arrayQuestionAnswer;
};

const runGameProgression = () => brainGamesCore(rulesOfGame, getArrayQuestionAnswer);

export default runGameProgression;
