import { Router } from "express";
import movieService from "../services/movieService.js";
import Movie from "../models/Movie.js";

const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;
    const userId = req.user.id;

    await movieService.create(newMovie,userId);

    res.redirect('/');
});

router.get('/:movieId/details', async(req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    const isCreator = movie.creator?.equals(req.user?.id);

    movie.ratingView = getRatingData(movie.rating);
    res.render('movies/details', { movie, isCreator})

});

router.get('/search', async (req, res) => {

    const filter = req.query;
    const movies = (await movieService.getAll(filter)).map(document => document.toObject());

    res.render('home', { isSearch: true, movies, filter });
});

router.get('/:movieId/delete',async (req,res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);
    if(!movie.creator?.equals(req.user?.id)){
        return res.redirect('/404');
    }

    await movieService.remove(movieId);

    res.redirect('/');
});

router.get('/:movieId/edit',async (req,res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId);

    res.render('movies/edit', {movie});
});


function getRatingData(rating) {

    if (!Number.isInteger(rating)) {
        return 'n\\a';
    }
    return '&#x2605'.repeat(rating);
}

export default router;