const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    name: String,
    yearPremiered : String,
    genres : [String],
    imageUrl : String
})

const movieModel = mongoose.model("movie", movieSchema)

module.exports = movieModel