const express = require('express');
const router = express.Router();

//Simulated in memory storage for user streaks
let streak = null;

router.get('/', (req, res) => {
  res.render('index', { streak });
});

module.exports = router;