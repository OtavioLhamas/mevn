const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  name: String,
  description: String,
  releaseYear: Number,
  genre: String,
});

const Movie = mongoose.model('Movie', MovieSchema)
module.exports(Movie);