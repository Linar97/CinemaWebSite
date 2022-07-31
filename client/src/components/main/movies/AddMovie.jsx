import axios from "axios"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

export default function AddMovieComp(){

    const [movie, setMovie] = useState({})
    const [isCreated, setIsCreated] = useState(false)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setMovie({...movie, [e.target.name] : e.target.value})
    }

    const saveMovie = async () => {
        const {data} = await axios.post("http://localhost:8000/movies/", movie)
        if(data.msg === "created")
            setIsCreated(true)
        else{
            console.log(data.msg)
            setIsCreated(false)
        }
    }

    return <div>
        Name : <input type="text" name="name" onChange={handleInput}/><br/>
        Genres : <input type="text" name="genres" onChange={(e) => setMovie({...movie, genres : e.target.value.split(',')})}/><br/>
        Image URL : <input type="text" name="imageUrl" onChange={handleInput}/><br/>
        Premired : <input type="text" name="yearPremiered" onChange={handleInput}/><br/>
        {isCreated && <b style={{color: "green"}}>Movie added succesfuly<br/></b>}

        <button onClick={saveMovie}>Save</button>
        <button onClick={() => navigate("../allMovies")}>Cancel</button>

    </div>
}