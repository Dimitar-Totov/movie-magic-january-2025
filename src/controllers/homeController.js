import { Router } from "express";
import movieService from "../services/movieService.js"; 
import authService from "../services/authService.js";

const router = Router();

router.get('/', async(req,res) => {
    const movies = (await movieService.getAll()).map(document => document.toObject());

    res.render('home',{movies});
});

router.get('/about',(req,res) => {
    res.render('home/about');
});

export default router;