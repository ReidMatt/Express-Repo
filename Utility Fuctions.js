function generateQuestion() {
  const num1 = Math.floor(Math.random() * 10) +1;
  const num2 = Math.floor(Math.random() * 10) +1;
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = eval(question);
  return { question, answer };
}

function checkAnswer(userAnswer, correctAnswer) {
  return parseFloat(userAnswer) === correctAnswer;
}

module.exports = {generateQuestion, checkAnswer };