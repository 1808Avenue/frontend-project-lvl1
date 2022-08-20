import readlineSync from 'readline-sync';
import { greeting, randomNumberInRange } from '../../index.js';

const runBrainGcd = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  let firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  let secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
  let userAnswer = readlineSync.question('Your answer: ');

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

  if (userAnswer === getGcd(firstRandomNumber, secondRandomNumber).toString()) {
    console.log('Correct!');

    firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
    secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

    console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === getGcd(firstRandomNumber, secondRandomNumber).toString()) {
      console.log('Correct!');

      firstRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      secondRandomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
      userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === getGcd(firstRandomNumber, secondRandomNumber).toString()) {
        return `Correct!\nCongratulations, ${userName}!`;
      }
      return `'${userAnswer}' is wrong answer ;(. Correct answer was '${getGcd(firstRandomNumber, secondRandomNumber).toString()}'.\nLet's try again, ${userName}!`;
    }
    return `'${userAnswer}' is wrong answer ;(. Correct answer was '${getGcd(firstRandomNumber, secondRandomNumber).toString()}'.\nLet's try again, ${userName}!`;
  }
  return `'${userAnswer}' is wrong answer ;(. Correct answer was '${getGcd(firstRandomNumber, secondRandomNumber).toString()}'.\nLet's try again, ${userName}!`;
};
export default runBrainGcd;
