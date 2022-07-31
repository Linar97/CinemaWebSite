import { Outlet, useNavigate } from "react-router-dom"
import MembersWatchedComp from "../subscriptions/MembersWatched"

export default function MovieComp(props){
    const {movie} = props
    const navigate = useNavigate()

    const navigateToEditMovie = () => {
        navigate("../../editMovie", {state: {movieToEdit : movie}})
    }

    return <div class="div smallerDiv">
        <b>{`${movie.name} ,${movie.yearPremiered ? movie.yearPremiered.split("-")[0] : ""}`}</b><br/>
        geners : {movie.genres.toString()}<br/>
        {/* <img style={{width: "50px", height: "50px"}} src={movie.imageUrl}/><br/> */}
        <MembersWatchedComp id={movie._id}/> 
        <button onClick={navigateToEditMovie}>Edit</button>
        <button onClick={() => props.callback(movie._id)}>Delete</button>
    </div>
}