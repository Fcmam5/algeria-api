const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.json({ '🇩🇿': 'Hellow Bled' });
});

module.exports = router;
