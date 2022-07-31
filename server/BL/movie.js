const movieModel = require("../models/movie")
const jFile = require("jsonfile")
const path = require("path")

const getMovies = () => {
    return new Promise((resole, reject) => {
        movieModel.find({}, (err, data) => {
            err && reject(err)
            data && resole(data)
        })
    })
}

const getMoviesFromJson = () => {
    const filePath = path.join(__dirname, "../data/shows.json")
    return new Promise((resolve, reject) => {
        jFile.readFile(filePath, (err, movies) => {
            if(err){
                reject(err)
            }
            else{
                movies.forEach(movie => {
                    const newMovie = new movieModel({
                        name: movie.name,
                        yearPremiered : movie.premiered,
                        genres : movie.genres,
                        imageUrl : movie.image.medium
                    })

                    newMovie.save(err => {
                        err && console.log(err)
                    })
                })
            }
        })
    })
}

const updateMovie = (id, movie) => {
    return new Promise((resolve, reject) => {
        movieModel.findByIdAndUpdate(id, movie, err => {
            reject(err)
        })
        resolve("updated")
    })
}

const addMovie = (movie) => {
    return new Promise((resolve, reject) => {
        console.log(movie)
        const newMovie = new movieModel(movie)
        console.log(newMovie)
        newMovie.save(err => {
            err && reject(err)
        })
        resolve("created")
    })
}

const deleteMovie = (id) => {
    return new Promise((resolve, reject) => {
        movieModel.findByIdAndDelete(id, err => {
            err && reject(err)
        })
        resolve("deleted")
    })
}

module.exports = {getMovies, getMoviesFromJson, updateMovie, addMovie, deleteMovie}