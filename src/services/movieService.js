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

const create = (movieData,creatorId) => {
    const result = Movie.create({
        ...movieData,
        rating: Number(movieData.rating),
        year: Number(movieData.year),
        creator: creatorId
    });
    return result;
}

const getOne = (movieId) => Movie.findById(movieId,{},{lean: true}).populate('casts');

export default {
    getAll,
    getOne,
    create
}
