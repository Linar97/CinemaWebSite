import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function EditMovieComp(){
    const {state} = useLocation()
    const [movie, setMovie] = useState(state.movieToEdit)
    const [movieName, setMovieName] = useState(movie.name)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setMovie({...movie, [e.target.name] : e.target.value})
    }

    const updateMovieOnServer = async () => {
        !Array.isArray(movie.genres) && setMovie({...movie, genres : movie.genres.split(',')})
        console.log(movie.genres)
        const {data} =  await axios.put("http://localhost:8000/movies/" + movie._id, movie)
        console.log(data)
    }

    return <div class="div">
        <h3>Movies</h3><br/>
        <h3>Edit Movie : {movieName}</h3>
        Name: <input type="text" name="name" value={movie.name} onChange={handleInput} /><br/>
        Geners: <input type="text" name="genres" value={movie.genres} onChange={handleInput} /><br/>
        Image url: <input type="text" name="imageUrl" value={movie.imageUrl} onChange={handleInput} /><br/>
        Premired: <input type="text" name="yearPremiered" value={movie.yearPremiered} onChange={handleInput} /><br/>
        <button onClick={updateMovieOnServer}>Update</button>
        <button onClick={() => navigate("../movies/allMovies")}>Cancel</button>
    </div>
}