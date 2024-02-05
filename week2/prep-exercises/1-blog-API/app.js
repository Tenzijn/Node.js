const express = require('express');
const bodyParser = require('body-parser');

const homeRoute = require('./routes/homeRoute');
const addPostData = require('./routes/addPostRoute');
const deletePost = require('./routes/deletePost');
const updatePost = require('./routes/updateRoute');

const app = express();

// YOUR CODE GOES IN HERE
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(homeRoute);
app.use(addPostData.routes);
app.use(deletePost);
app.use(updatePost);

app.listen(3000);

app.use(express.json());
