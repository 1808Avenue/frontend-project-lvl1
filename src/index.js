import readlineSync from 'readline-sync';

export const brainGamesCore = (rules, arrayQuestionAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const amountRounds = 3;
  const questionIndex = 0;
  const answerIndex = 1;

  let userAnswer;
  for (let i = 0; i < amountRounds; i += 1) {
    console.log(`Question: ${arrayQuestionAnswer[questionIndex]}`);
    userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === arrayQuestionAnswer[answerIndex]) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arrayQuestionAnswer[answerIndex]}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};

export const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
