import movieData from "../data/movieData.js";
import {v4 as uniqueId} from 'uuid';

const getAll = () => movieData.getAll();

const create = (movie) => {

    movie.id = uniqueId();
    return movieData.create(movie)
}

export default {
    getAll,
    create,
}
