import { Outlet, useNavigate } from "react-router-dom"
import MoviesWatchedComp from "../subscriptions/MoviesWatched"

export default function MemberComp(props){
    const {member} = props
    const navigate = useNavigate()

    const navigateToEditMember = () => {
        navigate("../../editMember", {state: {memberToEdit : member}})
    }

    return <div class="div smallerDiv">
        <b>{member.name}</b><br/>
        Email : {member.email}<br/>
        City : {member.city}<br/>
        <MoviesWatchedComp id={member._id}/>
        <button onClick={navigateToEditMember}>Edit</button>
        <button onClick={() => props.callback(member._id)}>Delete</button>
    </div>
}