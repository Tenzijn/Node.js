import express from 'express';

import rootRoute from './routes/rootRoute.js';
import weatherRoute from './routes/weatherRoute.js';

const app = express();
const port = 3000;

app.use(express.json()); // for parsing json body in requests

app.use(rootRoute);
app.use(weatherRoute);

app.listen(port);
