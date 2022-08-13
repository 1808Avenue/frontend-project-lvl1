#!/usr/bin/env node
import readlineSync from 'readline-sync';

const runBrainCalc = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);


    let limitNumber = 20;
    const firstRandomNumber = Math.round(Math.random() * limitNumber);
    const secondRandomNumber = Math.round(Math.random() * limitNumber);

    const thirdRandomNumber = Math.round(Math.random() * limitNumber);
    const fourthRandomNumber = Math.round(Math.random() * limitNumber);

    const fivethRandomNumber = Math.round(Math.random() * limitNumber);
    const sixthRandomNumber = Math.round(Math.random() * limitNumber);
    
    console.log('What is the result of the expression?');

    const operator = ['+', '-', '*'];
    const randomOperator = operator[Math.round(Math.random() * 2)];
    console.log(`Question: ${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
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
    };
    if (userAnswer === result.toString()) {
        console.log('Correct!');
        const secondRandomOperator = operator[Math.round(Math.random() * 2)];
        console.log(`Question: ${thirdRandomNumber} ${secondRandomOperator} ${fourthRandomNumber}`);
        
        const secondUserAnswer = readlineSync.question('Your answer: ');
        switch (secondRandomOperator) {
            case '+':
                result = thirdRandomNumber + fourthRandomNumber;
                break;
            case '-':
                result = thirdRandomNumber - fourthRandomNumber;
                break;
            case '*': 
                result = thirdRandomNumber * fourthRandomNumber;
                break; 
        };
        if (secondUserAnswer === result.toString()) {
            console.log('Correct!');
            const thirdRandomOperator = operator[Math.round(Math.random() * 2)];
            console.log(`Question: ${fivethRandomNumber} ${thirdRandomOperator} ${sixthRandomNumber}`);

            const thirdUserAnswer = readlineSync.question('Your answer: ');
            switch (thirdRandomOperator) {
                case '+':
                    result = fivethRandomNumber + sixthRandomNumber;
                    break;
                case '-':
                    result = fivethRandomNumber - sixthRandomNumber;
                    break;
                case '*': 
                    result = fivethRandomNumber * sixthRandomNumber;
                    break; 
            };
            if (thirdUserAnswer === result.toString()) {
                return `Correct!\nCongratulations, ${userName}!`;
            } else {
                return `'${thirdUserAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
            };

        } else {
            return `'${secondUserAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
        };

    } else {
        return `'${userAnswer}' is wrong answer ;(. Correct answer was '${result}'.\nLet's try again, ${userName}!`;
    };
    
};
console.log(runBrainCalc());