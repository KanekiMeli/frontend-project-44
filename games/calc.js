const task = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);

  const operator = ['+', '*', '-'];
  const indexOper = Math.round(Math.random() * 2);

  let answer = '';

  switch (indexOper) {
    case 0:
      answer = `${num1 + num2}`;
      break;
    case 1:
      answer = `${num1 * num2}`;
      break;
    default:
      answer = `${num1 - num2}`;
  }
  return [`${num1} ${operator[indexOper]} ${num2}`, answer];
};

export default task;
