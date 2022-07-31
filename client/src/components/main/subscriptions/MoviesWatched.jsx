import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import SubscribeToNewMovieComp from "./SubscribeToNewMovie"

export default function MoviesWatchedComp(props){
    const [moviesWatched, setMoviesWatched] = useState([])
    const [showSubToMovieComp, setShowSubToMovieComp] = useState(false)
    useEffect(() => {
        const getMoviesWatchedData = async () => {
            const {data} = await axios.get("http://localhost:8000/subscription?memberId=" + props.id)
            setMoviesWatched(data)
        }
        getMoviesWatchedData()
        
    }, [moviesWatched])

    const newSubscriptionAdded = async (subscription) => {
        setMoviesWatched([...moviesWatched])
    }
    return <div class="div smallerDiv">
        <h3>Movies Watched</h3>
        <button onClick={() => setShowSubToMovieComp(!showSubToMovieComp)}>Subscribe to new movie</button>
        {
            showSubToMovieComp && 
            <SubscribeToNewMovieComp 
                moviesWatched={moviesWatched} 
                memberId={props.id} 
                callback={() => newSubscriptionAdded()}/>
        }
            <ul>
            {moviesWatched.length > 0 &&  moviesWatched.map((movie, index) => {
                return <li key={index}>
                    <Link to="../../movies/allMovies" state={{movie : movie.item}} >{movie.item.name}</Link>
                    {" , " + movie.date}
                </li>
            })}
            </ul>
        
    </div>
}