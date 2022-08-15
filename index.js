export const getRandomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

export const getPrimeNumber = (number) => {
    let result = 0;
  
    for (let i = number; i > 0; i -= 1) {
      if (number % i === 0) {
        result = result + 1;
      } else {
        continue;
      }
    };
  
    if (result === 2) {
      return true;
    } else {
      return false;
    }
  };