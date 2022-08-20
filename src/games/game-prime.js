import readlineSync from 'readline-sync';
import { greeting, randomNumberInRange } from '../../index.js';

const runBrainPrime = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

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
  let randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  let correctAnswer;

  console.log(`Question: ${randomNumber}`);
  let userAnswer = readlineSync.question('Your answer: ');
  if (getPrimeNumber(randomNumber) === true) {
    correctAnswer = 'yes';
  } else if (getPrimeNumber(randomNumber) === false) {
    correctAnswer = 'no';
  }
  if (userAnswer === correctAnswer) {
    console.log('Correct!');

    randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
    console.log(`Question: ${randomNumber}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (getPrimeNumber(randomNumber) === true) {
      correctAnswer = 'yes';
    } else if (getPrimeNumber(randomNumber) === false) {
      correctAnswer = 'no';
    }
    if (userAnswer === correctAnswer) {
      console.log('Correct!');

      randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      console.log(`Question: ${randomNumber}`);
      userAnswer = readlineSync.question('Your answer: ');
      if (getPrimeNumber(randomNumber) === true) {
        correctAnswer = 'yes';
      } else if (getPrimeNumber(randomNumber) === false) {
        correctAnswer = 'no';
      }
      if (userAnswer === correctAnswer) {
        return `Correct!\nCongratulations, ${userName}!`;
      }
      return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
    return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
};
export default runBrainPrime;
