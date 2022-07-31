import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export default function MembersWatchedComp(props){
    const [membersWatched, setMembersWatched] = useState([])
    
    useEffect(() => {
        const getMembersWatchedData = async () => {
            const {data} = await axios.get("http://localhost:8000/subscription?movieId=" + props.id)
            setMembersWatched(data)
        }
        getMembersWatchedData()
    }, [])

    return <div class="div smallerDiv">
        <b>Subscriptions Watched</b>    
            <ul>
            {membersWatched.length > 0 &&  membersWatched.map((member, index) => {
                return <li key={index}>{member.item.name + " , " + member.date}</li>
            })}
            </ul>
        
    </div>
}