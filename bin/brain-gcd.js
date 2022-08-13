#!/usr/bin/env node
import readlineSync from 'readline-sync';


console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Find the greatest common divisor of given numbers.');

let limitNumber = 50;
const firstRandomNumber = Math.round(Math.random() * limitNumber);
const secondRandomNumber = Math.round(Math.random() * limitNumber);

const thirdRandomNumber = Math.round(Math.random() * limitNumber);
const fourthRandomNumber = Math.round(Math.random() * limitNumber);

const fivethRandomNumber = Math.round(Math.random() * limitNumber);
const sixthRandomNumber = Math.round(Math.random() * limitNumber);
    
console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);
const userAnswer = readlineSync.question('Your answer: ');
let result = '';

const getGreatestCommonDivisor = (a, b) => {
    let firstElement = a;
    let secondElement = b;

    while (firstElement !== secondElement) {
        if (a === 0) {
            return b;
        } else if (b === 0) {
            return a;
        } else if (firstElement > secondElement) {
            firstElement = firstElement -  secondElement;
        } else {
            secondElement = secondElement - firstElement;
        };
    };
    return firstElement;
};

if (userAnswer === getGreatestCommonDivisor(firstRandomNumber, secondRandomNumber).toString()) {
    console.log('Correct!');

    console.log(`Question: ${thirdRandomNumber} ${fourthRandomNumber}`);
    const secondUserAnswer = readlineSync.question('Your answer: ');
    if (secondUserAnswer === getGreatestCommonDivisor(thirdRandomNumber, fourthRandomNumber).toString()) {
        console.log('Correct!');

        console.log(`Question: ${fivethRandomNumber} ${sixthRandomNumber}`);
        const thirdUserAnswer = readlineSync.question('Your answer: ');
        if (thirdUserAnswer === getGreatestCommonDivisor(fivethRandomNumber, sixthRandomNumber).toString()) {
            console.log(`Correct!\nCongratulations, ${userName}!`);
        } else {
            console.log(`'${thirdUserAnswer}' is wrong answer ;(. Correct answer was '${getGreatestCommonDivisor(fivethRandomNumber, sixthRandomNumber).toString()}'.\nLet's try again, ${userName}!`);
        };

    } else {
        console.log(`'${secondUserAnswer}' is wrong answer ;(. Correct answer was '${getGreatestCommonDivisor(thirdRandomNumber, fourthRandomNumber).toString()}'.\nLet's try again, ${userName}!`);
    };

} else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${getGreatestCommonDivisor(firstRandomNumber, secondRandomNumber).toString()}'.\nLet's try again, ${userName}!`);
};