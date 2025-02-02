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
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const casts = await castService.getAll().lean();

    res.render('cast/cast-attach', {movie, casts});  
});

router.post('/attach/:movieId',async (req,res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;
    const actorData = await castService.getOne(castId);
    await castService.addCast(movieId,actorData);

    res.redirect(`/movies/${movieId}/details`);
});

export default router;
