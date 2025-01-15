import movieData from "../data/movieData.js";
import {v4 as uniqueId} from 'uuid';

const getAll = async (filter = {}) => {
    let movies = await movieData.getAll();

    if(filter.search){
        movies = movies.filter(movie => movie.title.toLowerCase().includes(filter.search.toLowerCase()));
    };

    if(filter.genre){
        movies = movies.filter(movie => movie.genre.toLowerCase().includes(filter.genre.toLowerCase()));
    };

    if(filter.year){
        movies = movies.filter(movie => movie.date === filter.year);
    }

    return movies;
};

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
