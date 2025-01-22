import Movie from "../models/Movie.js";

const getAll = (filter = {}) => {
    let query = Movie.find();

    if(filter.search){
        //TODO Add case insensitive functionallity
        query = query.where({title: filter.search});
    };

    if(filter.genre){
        //TODO Add case insensitive functionallity
        query = query.where({genre: filter.genre});
    };

    if(filter.year){
        query = query.where({date: Number(filter.year)});
    }

    return query;
};


const getOne = (movieId) => Movie.findById(movieId,{},{lean: true});

export default {
    getAll,
    getOne
}
