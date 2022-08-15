#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);


const getRandomNumberInRange = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log('What number is missing in the progression?');
  
  let randomStep = getRandomNumberInRange(2, 5);
    if (randomStep === 0) {
      randomStep = randomStep + 1;
    };
  
  
  const firstArrayNumbers = [ ];
  let lengthNumbers = getRandomNumberInRange(5, 10);
  let randomNumber = getRandomNumberInRange(1, 20);
  for (let i = 0; i < lengthNumbers; i += 1) {
    randomNumber = randomNumber + randomStep;
    firstArrayNumbers[i] = randomNumber;
  };
  
  let randomIndexColon = getRandomNumberInRange(0, lengthNumbers - 1);
  let correctNumber = firstArrayNumbers[randomIndexColon];
  firstArrayNumbers[randomIndexColon] = '..';
  
  const removeCommas = (string) => {
    let result = '';
    for (let i = 0; i < string.length; i += 1) {
      result = result + string[i].replace(',', ' ');
    }
    return result;
  };

// FIRST QUESTION
console.log(`Question: ${removeCommas(firstArrayNumbers.toString())}`);
const userAnswer = readlineSync.question('Your answer: ');
if (userAnswer === correctNumber.toString()) {
    console.log('Correct!');

    const secondArrayNumbers = [ ];
    lengthNumbers = getRandomNumberInRange(5, 10);
    randomNumber = getRandomNumberInRange(1, 20);
    randomStep = getRandomNumberInRange(2, 5);
    if (randomStep === 0) {
      randomStep = randomStep + 1;
    };
    for (let i = 0; i < lengthNumbers; i += 1) {
      randomNumber = randomNumber + randomStep;
      secondArrayNumbers[i] = randomNumber;
    };

    randomIndexColon = getRandomNumberInRange(0, lengthNumbers - 1);
    const secondCorrectNumber = secondArrayNumbers[randomIndexColon];
    secondArrayNumbers[randomIndexColon] = '..';

    // SECOND QUESTION
    console.log(`Question: ${removeCommas(secondArrayNumbers.toString())}`);
    const secondUserAnswer = readlineSync.question('Your answer: ');
    if (secondUserAnswer === secondCorrectNumber.toString()) {
      console.log('Correct!');
      
      const thirdArrayNumbers = [ ];
      lengthNumbers = getRandomNumberInRange(5, 10);
      randomNumber = getRandomNumberInRange(1, 20);
      randomStep = getRandomNumberInRange(2, 5);
      if (randomStep === 0) {
        randomStep = randomStep + 1;
      };
      for (let i = 0; i < lengthNumbers; i += 1) {
        randomNumber = randomNumber + randomStep;
        thirdArrayNumbers[i] = randomNumber;
      };

      randomIndexColon = getRandomNumberInRange(0, lengthNumbers - 1);
      const thirdCorrectNumber = thirdArrayNumbers[randomIndexColon];
      thirdArrayNumbers[randomIndexColon] = '..';

      // THIRD QUESTION
      console.log(`Question: ${removeCommas(thirdArrayNumbers.toString())}`);
      const thirdUserAnswer = readlineSync.question('Your answer: ');
      if (thirdUserAnswer === thirdCorrectNumber.toString()) {
        console.log(`Correct!\nCongratulations, ${userName}!`);
      } else {
        console.log(`'${thirdUserAnswer.toString()}' is wrong answer ;(. Correct answer was '${thirdCorrectNumber.toString()}'.\nLet's try again, ${userName}!`);
      };

    } else {
      console.log(`'${secondUserAnswer.toString()}' is wrong answer ;(. Correct answer was '${secondCorrectNumber.toString()}'.\nLet's try again, ${userName}!`);
    };

} else {
    console.log(`'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctNumber.toString()}'.\nLet's try again, ${userName}!`);
  };



  
  

  