import { Router } from "express";
import Cast from "../models/Cast.js";
import castService from "../services/castService.js"
import movieService from "../services/movieService.js";

const router = Router();

router.get('/create',(req,res) => {
    res.render('cast/cast-create');
});

router.post('/create',async(req,res) => {
    const data = req.body;
    await Cast.create(data);
    res.redirect('/');
});

router.get('/attach/:movieId',async (req,res) => {
    const casts = await castService.getAll().lean();
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    res.render('cast/cast-attach', {movie, casts});  
})

export default router;
