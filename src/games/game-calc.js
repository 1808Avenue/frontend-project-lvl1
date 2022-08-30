import getRandomNumberInRange from '../helpers.js';
import { runGameCore, lowerLimitInRange, upperLimitInRange } from '../index.js';

const rulesOfGame = 'What is the result of the expression?';

const getCorrectAnswer = (firstOperand, operator, secondOperand) => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    default:
      throw new Error(`Unknown state: '${operator}'!`);
  }
};

const getQuestionAnswerPair = () => {
  const firstRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);
  const secondRandomNumber = getRandomNumberInRange(lowerLimitInRange, upperLimitInRange);

  const operators = ['+', '-', '*'];
  const lowerLimitIndex = 0;
  const upperLimitIndex = operators.length - 1;
  const randomOperator = operators[getRandomNumberInRange(lowerLimitIndex, upperLimitIndex)];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;
  let correctAnswer = getCorrectAnswer(firstRandomNumber, randomOperator, secondRandomNumber);
  correctAnswer = correctAnswer.toString();

  return [question, correctAnswer];
};

const runGameCalc = () => runGameCore(rulesOfGame, getQuestionAnswerPair);

export default runGameCalc;
