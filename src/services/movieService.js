import Movie from "../models/Movie.js";

const getAll = async(filter = {}) => {
    let movies = (await Movie.find()).map(document=>document.toObject());

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


const getOne = (movieId) => Movie.findById(movieId,{},{lean: true});

export default {
    getAll,
    getOne
}
