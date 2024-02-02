const express = require('express');
const router = express.Router();
const postData = require('./addPostRoute');

const data = postData.data;

router.post('/deletePost/:index', (req, res) => {
  const index = req.params.index;
  data.splice(index, 1);
  res.redirect('/');
});

module.exports = router;
