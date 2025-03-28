const express = require('express');
const fs = require('fs');
const router = express.Router();

const users = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

router.get('/', (req, res) => {
  res.json(users);
});


router.get('/users/:email', (req, res) => {
  const user = users.find(u => u.email === req.params.email);

  if (!user) {
    return res.status(404).json({ error: 'Utente non trovato' });
  }

  res.json(user);
});

module.exports = router;