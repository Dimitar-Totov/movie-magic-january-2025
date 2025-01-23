import Movie from "../models/Movie.js";

const getAll = (filter = {}) => {
    let query = Movie.find();

    if(filter.search){
        query = query.where({title: { $regex: filter.search, $options: 'i'}});
    };

    if(filter.genre){
        query = query.where({genre: { $regex: filter.genre, $options: 'i'}});
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
