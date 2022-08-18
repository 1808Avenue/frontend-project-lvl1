import readlineSync from 'readline-sync';
import { greeting, randomNumberInRange } from '../index.js';

const runBrainCalc = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  let firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  let secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  const operator = ['+', '-', '*'];
  const firstOperatorIndex = 0;
  const lastOperatorIndex = operator.length - 1;

  let randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];
  console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
  let userAnswer = readlineSync.question('Your answer: ');
  let result = '';
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
  }
  if (userAnswer === result.toString()) {
    console.log('Correct!');

    randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];
    firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
    secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

    console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
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
    }
    if (userAnswer === result.toString()) {
      console.log('Correct!');

      randomOperator = operator[randomNumberInRange(firstOperatorIndex, lastOperatorIndex)];
      firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

      console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);
      userAnswer = readlineSync.question('Your answer: ');
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
      }
      if (userAnswer === result.toString()) {
        return `Correct!\nCongratulations, ${userName}!`;
      }
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
};
export default runBrainCalc;
