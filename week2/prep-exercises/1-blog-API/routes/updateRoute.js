const express = require('express');
const router = express.Router();

const postData = require('./addPostRoute');

const data = postData.data;

router.get('/updatePost/:index', (req, res) => {
  const index = req.params.index;
  res.send(`<form action="/updatePost/${index}" method="POST">
	<input type="text" name="title" value="${data[index].title}">
	<textarea name="content"> ${data[index].content} </textarea>
	<button type="submit">Update</button>
	</form>`);
});

router.post('/updatePost/:index', (req, res) => {
  const index = req.params.index;
  data[index] = { title: req.body.title, content: req.body.content };
  res.redirect('/');
});

module.exports = router;
