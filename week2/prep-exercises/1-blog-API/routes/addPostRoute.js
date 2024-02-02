const path = require('path');

const express = require('express');

const rootDir = require('../util/rootDir');

const router = express.Router();

const data = [];

router.get('/addPost', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-Post.html'));
});

router.post('/addPost', (req, res) => {
  console.log(req.body.title);
  data.push({ title: req.body.title, content: req.body.content });
  res.redirect('/');
});

exports.routes = router;
exports.data = data;
