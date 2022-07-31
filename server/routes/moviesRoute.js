const express = require("express")
const router = express.Router()
const movieBL = require("../BL/movie")
const subscriptionBL = require("../BL/subscription")

const getMoviesFromJson = async (req, res, next) => {
    try {
        const movies = await movieBL.getMovies()
        if (movies.length)
            next()
        else {
            await movieBL.getMoviesFromJson()
            next()
        }
    } catch (err) {
        res.status(500).json({ msg: err })
    }
}
router.get("/", getMoviesFromJson, async (req, res) => {
    try {
        const movies = await movieBL.getMovies()
        res.status(200).json(movies)
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id
        const movie = req.body
        const response = await movieBL.updateMovie(id, movie)
        if (response === "updated")
            res.status(200).json({ msg: response })
        else
            res.status(500).json({ msg: response })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const response = await movieBL.addMovie(req.body)
        if (response === "created")
            res.status(200).json({ msg: response })
        else
            res.status(500).json({ msg: err })
    } catch (err) {
        res.status(500).json({ msg: err })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const response = await movieBL.deleteMovie(req.params.id)
        const subscriptionsResponse = await subscriptionBL.deleteByMovieId(req.params.id)
        if (response === "deleted" && subscriptionsResponse === "deleted")
            res.status(200).json({ msg: "deleted" })
        else
            res.status(500).json({ msg: response })
    } catch (err) {
        res.status(500).json({ msg: err })
    }

})

module.exports = router