import axios from "axios"
import { useState, useEffect } from "react"
import MovieComp from "./Movie"
import { useLocation } from "react-router-dom";


export default function AllMoviesComp() {
    const location = useLocation()
    const { movie } = location.state ? location.state : ""
    const [movies, setMovies] = useState([])
    const [moviesAfterSearch, setMoviesAfterSearch] = useState([])
    const [movieToSearch, setMovieToSearch] = useState("")

    useEffect(() => {

        if (movie) {
            setMoviesAfterSearch([movie])
        } else {
            const getAllMoviesFromServer = async () => {
                const { data } = await axios.get("http://localhost:8000/movies/")
                setMovies([...data])
                setMoviesAfterSearch([...movies])
            }
            getAllMoviesFromServer()
        }
    }, [movies])

    const searchMovie = () => {
        const matchedMovies = [...movies].filter(movie => movie.name.includes(movieToSearch))
        setMoviesAfterSearch([...matchedMovies])
    }

    const deleteMovie = async (id, movie) => {
        const { data } = await axios.delete("http://localhost:8000/movies/" + id)
        if (data === "deleted") {
            const newMoviesArr = movies.filter(m => !m._id === id)
            setMovies([...newMoviesArr])
        }
    }

    return <div>
        Find Movie: <input type="text" onChange={(e) => setMovieToSearch(e.target.value)} />
        <button onClick={searchMovie}>Find</button>
        {
            moviesAfterSearch.map((movie) => {
                return <MovieComp key={movie._id} movie={movie} callback={id => deleteMovie(id)} />
            })
        }
    </div>
}