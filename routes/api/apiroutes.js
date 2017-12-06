const express = require('express');
const router = express.router();

router.get('/search', (req,res) => {
  const clue = {
    symbol: "Magnifying glass"
  };
  res.json(clue)
});

module.exports = router;
