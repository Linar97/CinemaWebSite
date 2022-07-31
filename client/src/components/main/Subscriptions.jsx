import { Outlet, useNavigate } from "react-router-dom"

export default function SubscriptionsComp(){
    const navigate = useNavigate()
    return <div class="div">
        <h3>Subscriptions</h3>
        <button onClick={() => navigate("allMembers")}>All Members</button>
        <button onClick={() => navigate("addMember")}>Add Member</button>
        <br/>
        <Outlet/>
    </div>
}