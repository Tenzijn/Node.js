import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json()); // Add this line to parse JSON data

app.get('/', (req, res) => {
  res.send('Hello from backend to frontend :)');
});

app.post('/weather', (req, res) => {
  // Change the route to POST and set the endpoint to /weather
  const { cityName } = req.body; // Extract the cityName from the request body
  res.send(cityName); // Send the cityName back as a response
});

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
