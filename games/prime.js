const prime = (num) => {
  if (num <= 1) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0 && num !== i) {
      return false;
    }
    i += 1;
  }
  return true;
};

const task = () => {
  const num = Math.round(Math.random() * 100);

  const answer = prime(num) ? 'yes' : 'no';

  return [num, answer];
};

export default task;
