import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const port = 5000;
const app = express();
app.engine('hbs',handlebars.engine({
    extname: 'hbs',
}));
app.set('view engine','hbs');
app.set('views','./src/views');

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(routes);

app.listen(port,() => console.log(`Server is listening on http://localhost:${port}`));