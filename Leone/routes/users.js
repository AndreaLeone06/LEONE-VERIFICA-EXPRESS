const express = require('express');
const router = express.Router();
const users = require('../users.json');

router.get('/rest', (req, res) => {
  res.json(users);
});

module.exports = router;