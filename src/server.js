import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';

try{
    await mongoose.connect('mongodb://127.0.0.1/JavaScriptBack-End');
    console.log('Successfully connected');
} catch(err){
    console.log(err.message);
}

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