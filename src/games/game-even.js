import readlineSync from 'readline-sync';
import { greeting, randomNumberInRange } from '../../index.js';

const runBrainEven = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  let randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
  console.log(`Question: ${randomNumber}`);

  let correctAnswer = '';
  if (randomNumber % 2 === 0) {
    correctAnswer = 'yes';
  } else if (randomNumber % 2 !== 0) {
    correctAnswer = 'no';
  }

  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');

    randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
    console.log(`Question: ${randomNumber}`);

    if (randomNumber % 2 === 0) {
      correctAnswer = 'yes';
    } else if (randomNumber % 2 !== 0) {
      correctAnswer = 'no';
    }

    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');

      randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      console.log(`Question: ${randomNumber}`);

      if (randomNumber % 2 === 0) {
        correctAnswer = 'yes';
      } else if (randomNumber % 2 !== 0) {
        correctAnswer = 'no';
      }
      userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctAnswer) {
        return `Correct!\nCongratulations, ${userName}!`;
      }
      return `'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    }
    return `'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
  }
  return `'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
};
export default runBrainEven;
