import { Router } from "express";
import movieService from "../services/movieService.js";

const router = Router();

router.get('/create',(req,res) => {
    res.render('movies/create');
});

router.post('/create', async (req,res) => {
    const movieData = req.body;
    await movieService.create(movieData);

    res.redirect('/');
});

router.get('/:movieId/details',async (req,res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    movie.ratingView = getRatingData(movie.rating);

    res.render('movies/details',{ movie });
});

router.get('/search',async (req,res) => {

    const filter = req.query;
    const movies = await movieService.getAll(filter);

    res.render('home',{isSearch: true, movies, filter });
});


function getRatingData(rating){

    if(!Number.isInteger(rating)){
        return 'n\\a';
    }
    return '&#x2605'.repeat(rating);
}

export default router;