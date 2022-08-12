#!/usr/bin/env node
import readlineSync from 'readline-sync';

// GREETING 
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
// GREETING //




// ANSWER YES OR NO
console.log('Answer "yes" if the number is even, otherwise answer "no".');
const limitNumber = 20;
const randomNumber = Math.round(Math.random() * limitNumber);
console.log(`Question: ${randomNumber}`);
// ANSWER YES OR NO //



const getAnswer = () => {
    let correctAnswer = '';

    if (randomNumber % 2 === 0) {
        correctAnswer = 'yes';
    } else if (randomNumber % 2 !== 0) {
        correctAnswer = 'no';
    };
    const userAnswer = readlineSync.question('Your answer: ');
    if ( userAnswer === correctAnswer) {
        console.log('Correct!');

        const secondRandomNumber = Math.round(Math.random() * limitNumber);
        console.log(`Question: ${secondRandomNumber}`);

        const secondUserAnswer = readlineSync.question('Your answer: ');
        if (secondRandomNumber % 2 === 0) {
            correctAnswer = 'yes';
        } else if (secondRandomNumber % 2 !== 0) {
            correctAnswer = 'no';
        };
        if (correctAnswer === secondUserAnswer) {
            console.log('Correct!');

            const thirdRandomNumber = Math.round(Math.random() * limitNumber);
            console.log(`Question: ${thirdRandomNumber}`);
            
            const thirdUserAnswer = readlineSync.question('Your answer: ');
            if (thirdRandomNumber % 2 === 0) {
                correctAnswer = 'yes';
            } else if (thirdRandomNumber % 2 !== 0) {
                correctAnswer = 'no';
            };
            if (correctAnswer === thirdUserAnswer) {
                return `Correct!\nCongratulations, ${userName}!`;
            } else if (correctAnswer !== thirdUserAnswer) {
                return `'${thirdUserAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
            };

        } else if (correctAnswer !== secondUserAnswer) {
            return `'${secondUserAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
        };
       
    } else if (userAnswer !== correctAnswer) {
        return `'${userAnswer}' is a wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`;
    };
};

console.log(getAnswer());