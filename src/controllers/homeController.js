import { Router } from "express";
import movieService from "../services/movieService.js"; 

const router = Router();

router.get('/', async(req,res) => {
    const movies = (await movieService.getAll()).map(document => document.toObject());

    res.render('home',{movies});
});

router.get('/about',(req,res) => {
    res.render('home/about');
});

router.get('/register',(req,res) => {
    res.render('register');
});

router.get('/login',(req,res) => {
    res.render('login');
});

export default router;