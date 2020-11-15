import express from 'express';

import './database/connection';
import routes from './routes';

// Setting up the express and putting it to listen the port 3333
const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333);
