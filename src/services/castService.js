import Cast from "../models/Cast.js";
import Movie from "../models/Movie.js";

const getAll = () => Cast.find();

const getOne = (actorId) => {
    return Cast.findOne({'_id': actorId});
}

const addCast = (movieId,actorData) => {
    return Movie.findByIdAndUpdate(movieId,{$push:{casts: actorData}});
}

export default {
    getAll,
    getOne,
    addCast
}