import express from 'express';

const router = express.Router();

router.post('/weather', (req, res) => {
  const { cityName } = req.body;
  console.log('city name:', cityName);
  res.send('Weather data for ' + cityName);
});

export default router;
