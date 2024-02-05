import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('hello world!');
  res.send('Hello World!');
});

export default router;
