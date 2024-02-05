import express from 'express';

import { openWeatherData } from '../api/externalApiCalls.js';

const router = express.Router();

router.get('/weather', (req, res) => {
  const { cityName } = req.body;
  if (!cityName) {
    return res.status(400).send('City is required');
  }
  openWeatherData(cityName)
    .then((response) => {
      const temp = response.data.main.temp;
      const city = response.data.name;
      res.send({
        city: city,
        temperature: temp,
      });
    })
    .catch((error) => {
      res.status(400).send({ weatherText: `${cityName} not found!` });
    });
});

export default router;
