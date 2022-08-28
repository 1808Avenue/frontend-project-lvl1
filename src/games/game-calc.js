import { brainGamesCore, randomNumberInRange } from '../index.js';

const rulesOfGame = 'What is the result of the expression?';

const getArrayQuestionAnswer = () => {
  const firstNumberRange = 1;
  const lastNumberRange = 25;
  const firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  const secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  const operator = ['+', '-', '*'];
  const firstOperatorIndex = 0;
  const lastOperatorIndex = operator.length - 1;
  const randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  let result;
  switch (randomOperator) {
    case '+':
      result = firstRandomNumber + secondRandomNumber;
      break;
    case '-':
      result = firstRandomNumber - secondRandomNumber;
      break;
    case '*':
      result = firstRandomNumber * secondRandomNumber;
      break;
    default:
      throw new Error(`Unknown state: '${randomOperator}'!`);
  }
  const answer = result.toString();

  const arrayQuestionAnswer = [question, answer];
  return arrayQuestionAnswer;
};

const runGameCalc = () => brainGamesCore(rulesOfGame, getArrayQuestionAnswer);

export default runGameCalc;
