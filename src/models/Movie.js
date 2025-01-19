import { Schema,model } from "mongoose";

const movieSchema = new Schema({
    title: String,
    genre: String,
    director: String,
    date: Number,
    imageUrl: String,
    rating: Number,
    description: String
})

const Movie = model('Movie',movieSchema);

export default Movie();