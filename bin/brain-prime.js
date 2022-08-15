#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { getRandomNumberInRange, getPrimeNumber } from '../index.js';


console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let randomNumber = getRandomNumberInRange(1, 25);
let correctAnswer;
// FIRST QUESTION
console.log(`Question: ${randomNumber}`);
const userAnswer = readlineSync.question('Your answer: ');
if (getPrimeNumber(randomNumber) === true) {
    correctAnswer = 'yes';
} else if (getPrimeNumber(randomNumber) === false) {
    correctAnswer = 'no';
};
if (userAnswer === correctAnswer) {
    console.log('Correct!');

    randomNumber = getRandomNumberInRange(1, 25);
// SECOND QUESTION
    console.log(`Question: ${randomNumber}`);
    const secondUserAnswer = readlineSync.question('Your answer: ');
    if (getPrimeNumber(randomNumber) === true) {
        correctAnswer = 'yes';
    } else if (getPrimeNumber(randomNumber) === false) {
        correctAnswer = 'no';
    };
    if (secondUserAnswer === correctAnswer) {
        console.log('Correct!');

        randomNumber = getRandomNumberInRange(1, 25);
// THIRD QUESTION
        console.log(`Question: ${randomNumber}`);
        const thirdUserAnswer = readlineSync.question('Your answer: ');
        if (getPrimeNumber(randomNumber) === true) {
            correctAnswer = 'yes';
        } else if (getPrimeNumber(randomNumber) === false) {
            correctAnswer = 'no';
        };
        if (thirdUserAnswer === correctAnswer) {
            console.log(`Correct!\nCongratulations, ${userName}!`);
        } else {
            console.log(`'${thirdUserAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
        };

    } else {
        console.log(`'${secondUserAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    };

} else {
    console.log(`'${userAnswer.toString()}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};



  