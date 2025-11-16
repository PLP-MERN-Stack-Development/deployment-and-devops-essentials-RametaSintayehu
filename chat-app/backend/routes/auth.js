const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    res.json({ message: 'Auth routes working'});
});

router.post('/login', (req, res) => {
    res.json({ message: 'Login endpoint'});
});

router.post('/register', (req, res) => {
  res.json({ message: 'Register endpoint' });
});

module.exports = router;
EOF