import express from 'express';

import mongooseSetup from './config/mongooseSetup.js';
import expressSetup from './config/expressSetup.js';
import routes from './routes.js';
import 'dotenv/config';

const port = 5000;
const app = express();

mongooseSetup(app);
expressSetup(app);

app.use(routes);

app.listen(port,() => console.log(`Server is listening on http://localhost:${port}`));