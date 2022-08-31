import readlineSync from 'readline-sync';

export const lowerLimitInRange = 1;
export const upperLimitInRange = 25;

export const runGameCore = (rules, getQuestionAnswerPair) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);

  const amountRounds = 3;
  for (let i = 0; i < amountRounds; i += 1) {
    const [question, correctAnswer] = getQuestionAnswerPair();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${userName}!`);
    }
  }
  return console.log(`Congratulations, ${userName}!`);
};
