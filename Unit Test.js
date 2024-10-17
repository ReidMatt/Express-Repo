const { expect } = require('chai');
const { generateQuestion, checkAnswer } = require('../utils/quiz');

describe('Quiz Utilities', () => {
  it('should generate a valid question and answer', () => {
    const { question, answer } = generateQuestion();
    expect(question).to.be.a('string');
    expect(answer).to.be.a('number');
  });

  it('should correctly evaluate a correct answer', () => {
    expect(checkAnswer(10,10)).to.be.true;
  });

  it('should correctly evaluate an incorrect answer', () => {
    expect(checkAnswer(10, 5)).to.be.false;
  });
});