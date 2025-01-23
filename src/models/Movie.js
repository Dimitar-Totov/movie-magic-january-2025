import { Schema,model,Types } from "mongoose";

const movieSchema = new Schema({
    title: String,
    genre: String,
    director: String,
    date: String,
    imageUrl: String,
    rating: Number,
    description: String,
    casts: [{
        type: Types.ObjectId,
        ref: 'Cast'
    }]
})

const Movie = model('Movie',movieSchema);

export default Movie;