import movieData from "../data/movieData.js";
import {v4 as uniqueId} from 'uuid';

const getAll = () => movieData.getAll();

const create = (movie) => {

    movie.id = uniqueId();
    movie.rating = Number(movie.rating);
    return movieData.create(movie)
}

const getOne = async (movieId) => {
    const movies = await movieData.getAll();
    const currentMovie = movies.find(movie => movie.id == movieId); 
    return currentMovie;
}

export default {
    getAll,
    create,
    getOne
}
