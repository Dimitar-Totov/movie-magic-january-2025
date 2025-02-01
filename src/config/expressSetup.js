import express from 'express';
import handlebars from 'express-handlebars';
import cookieParser from 'cookie-parser';
import { authMiddleware } from '../middlewares/authMiddleware.js';

export default function expressSetup(app){
    app.engine('hbs',handlebars.engine({
        extname: 'hbs',
    }));
    app.set('view engine','hbs');
    app.set('views','./src/views');
    app.use(express.urlencoded({extended: false}));
    app.use(express.static('public'));
    app.use(cookieParser());
    app.use(authMiddleware);
}