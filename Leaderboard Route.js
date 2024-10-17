const express = require('express');
const router = express.Router();

//Simulated leaderboard data
let leaderboards = [
  {name: 'Tom', streak: 10},
  {name: 'Judy', streak: 8},
  {name: 'Don', streak: 7}
];

router.get('/', (req, res) => {
  res.render('leaderboard', {  leaderboards });
});

module.exports = router;