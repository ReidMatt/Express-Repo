const express = require('express');
const router = express.Router();
const { generateQuestion, checkAnswer } = require('../utils/quiz');

//Simulated in memory streak and quesion data
let currentQuestion = null
let streak = 0

router.get('/', (req, res) => {})
  currentQuestion = generateQuestion();
  res.render('quiz', { question: currentQuestion.question, answer: currentQuestion.answer});

  router.post('/submit', (req, res) => {
    const { userAnswer, answer } = req.body;
    if (checkAnswer(userAnswer, answer)) {
      streak++;
    } else {
      streak = 0;
    }
    res.redirect('quiz/completion');
  });

  router.get('/completion', (req, res) => {
    res.render('completion', { streak});
  });

  module.exports = router; 

