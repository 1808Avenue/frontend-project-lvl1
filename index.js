import readlineSync from 'readline-sync';

export const greeting = () => console.log('Welcome to the Brain Games!');
export const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const brainGamesCore = (rules, question, correctAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  console.log(`Question: ${question}`);
  let userAnswer = readlineSync.question('Your answer: ');
  if (userAnswer === correctAnswer) {
    console.log('Correct!');
    console.log(`Question: ${question}`);
    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      console.log(`Question: ${question}`);
      userAnswer = readlineSync.question('Your answer: ');

      if (userAnswer === correctAnswer) {
        return console.log(`Correct!\nCongratulations, ${userName}!`);
      } return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    } return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
  } return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
};
