import readlineSync from 'readline-sync';
import { greeting, randomNumberInRange } from '../index.js';

const runBrainProgression = () => {
  greeting();
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const firstNumberRange = 1;
  const lastNumberRange = 25;
  let randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);

  const firstNumberStepRange = 2;
  const lastNumberStepRange = 5;
  let randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);

  const firstNumberLengthRange = 5;
  const lastNumberLengthRange = 10;
  let lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);

  const firstArrayNumbers = [];
  for (let i = 0; i < lengthNumbers; i += 1) {
    randomNumber += randomStep;
    firstArrayNumbers[i] = randomNumber;
  }

  const firstIndexRange = 0;
  let lastIndexRange = lengthNumbers - 1;
  let randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);

  let correctNumber = firstArrayNumbers[randomIndexColon];
  firstArrayNumbers[randomIndexColon] = '..';

  const removeCommas = (string) => {
    let result = '';
    for (let i = 0; i < string.length; i += 1) {
      result += string[i].replace(',', ' ');
    }
    return result;
  };

  console.log(`Question: ${removeCommas(firstArrayNumbers.toString())}`);
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctNumber.toString()) {
    console.log('Correct!');

    const secondArrayNumbers = [];
    randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
    randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);
    lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);
    lastIndexRange = lengthNumbers - 1;
    for (let i = 0; i < lengthNumbers; i += 1) {
      randomNumber += randomStep;
      secondArrayNumbers[i] = randomNumber;
    }

    randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);
    correctNumber = secondArrayNumbers[randomIndexColon];
    secondArrayNumbers[randomIndexColon] = '..';

    console.log(`Question: ${removeCommas(secondArrayNumbers.toString())}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctNumber.toString()) {
      console.log('Correct!');

      const thirdArrayNumbers = [];
      randomNumber = randomNumberInRange(firstNumberRange, lastNumberRange);
      randomStep = randomNumberInRange(firstNumberStepRange, lastNumberStepRange);
      lengthNumbers = randomNumberInRange(firstNumberLengthRange, lastNumberLengthRange);
      lastIndexRange = lengthNumbers - 1;
      for (let i = 0; i < lengthNumbers; i += 1) {
        randomNumber += randomStep;
        thirdArrayNumbers[i] = randomNumber;
      }

      randomIndexColon = randomNumberInRange(firstIndexRange, lastIndexRange);
      correctNumber = thirdArrayNumbers[randomIndexColon];
      thirdArrayNumbers[randomIndexColon] = '..';

      console.log(`Question: ${removeCommas(thirdArrayNumbers.toString())}`);
      userAnswer = readlineSync.question('Your answer: ');
      if (userAnswer === correctNumber.toString()) {
        return `Correct!\nCongratulations, ${userName}!`;
      }
      return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctNumber.toString()}'.\nLet's try again, ${userName}!`;
    }
    return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctNumber.toString()}'.\nLet's try again, ${userName}!`;
  }
  return `'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctNumber.toString()}'.\nLet's try again, ${userName}!`;
};
export default runBrainProgression;
