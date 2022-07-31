    import axios from "axios"
    import { useState, useEffect } from "react"

    export default function SubscribeToNewMovieComp(props){
        const [movies, setMovies] = useState([])
        const [subscription, setSubscription] = useState({memberId : props.memberId})

        useEffect(() => {
            const getMoviesFromServer = async () => {
                const {data} = await axios.get("http://localhost:8000/movies/")
                props.moviesWatched.forEach(movieWatched => {
                    const index = data.findIndex(movie => movie._id == movieWatched.item._id)
                    data.splice(index, 1)
                })
                setMovies([...data])
            }
            getMoviesFromServer()
        }, [movies])

        const addNewSubscription = async () => {
            const {data} = await axios.post("http://localhost:8000/subscription/", subscription)
            console.log(data)
            if(data.msg === "created"){
                props.callback()
                setMovies([...movies])
            }
        }


        return <div class="subscriptionDiv">
            <b>Add a new movie</b> <br/>
            <select onChange={(e) => setSubscription({...subscription, movieId: e.target.value})}>
                <option value="">Choose a movie</option>
                {
                    movies.length > 0 && movies.map( movie => {
                        return <option key={movie._id} value={movie._id}>{movie.name}</option>
                    })
                }
            </select>
            <input type="text" onChange={(e) => setSubscription({...subscription, date: e.target.value})} /><br/>
            <button onClick={addNewSubscription}>Subscribe</button>
        </div>
    }