import { Outlet, useNavigate } from "react-router-dom"

export default function MoviesComp(){
    const navigate = useNavigate()
    return <div class="div">
        <h3>Movies</h3>
        <button onClick={() => navigate("allMovies")}>All Movies</button>
        <button onClick={() => navigate("addMovie")}>Add Movie</button>
        <br/>
        <Outlet/>
    </div>
}