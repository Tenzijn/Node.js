const path = require('path');

const express = require('express');

const rootDir = require('../util/rootDir');

const postData = require('./addPostRoute');
const router = express.Router();

const data = postData.data;

router.get('/', (req, res) => {
  console.log('data', data);
  //   res.sendFile(path.join(rootDir, 'views', 'index.html'));
  res.send(`
  <header>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/addPost">Add Post</a></li>
        </ul>
      </nav>
    </header>
  <h1>Posts</h1>
${data.map((post, index) => {
  return `
  <div>
  <li>${post.title}</li>
  <p>${post.content}</p>
  <form action="/deletePost/${index}" method="POST">
  <button type="submit">Delete</button>
  </form>
  <form action="/updatePost/${index}" method="GET">
  <button type="submit">Edit</button>
  </form>
  </div>
  `;
})}
`);
});

module.exports = router;
