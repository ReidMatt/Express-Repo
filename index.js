var express = require('express');
var router = express.Router();

//Define the home page route
router.get('/', function(reg, res) {
  res.send('Welcome to the Home Page');
});

module.exports = router;