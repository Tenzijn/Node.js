import express from 'express';

const router = express.Router();

router.post('/weather', (req, res) => {
  const { cityName } = req.body;
  res.send(JSON.stringify({ cityName }));
});

export default router;
