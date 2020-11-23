const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'My App', message: 'Hello' });
});

module.exports = router;
