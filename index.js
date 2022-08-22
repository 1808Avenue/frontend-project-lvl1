import readlineSync from 'readline-sync';

export const brainGamesCore = (rules, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  let userAnswer;
  for (let i = 0; i < question.length; i += 1) {
    console.log(`Question: ${question[i]}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer[i]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer[i]}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
