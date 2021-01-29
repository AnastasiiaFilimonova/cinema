const mongoose = require('mongoose');
const Movie = mongoose.model('Movie', {
    label: String,
    img: String,
    title: String,
    year: Number,
    genres: [String]
 });
 module.exports=Movie;