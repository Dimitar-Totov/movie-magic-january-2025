import Cast from "../models/Cast.js";
import Movie from "../models/Movie.js";

const getAll = () => Cast.find();

const getOne = (actorName) => {
    return Cast.findOne({'name': actorName});
}

const addCast = (movieId,actorData) => {
    return Movie.findByIdAndUpdate(movieId,{$push:{casts: actorData}});
}

export default {
    getAll,
    getOne,
    addCast
}