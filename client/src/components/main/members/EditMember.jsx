import axios from "axios"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function EditMemberComp(){
    const {state} = useLocation()
    const [member, setMember] = useState(state.memberToEdit)
    const [memberName, setMemberName] = useState(member.name)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setMember({...member, [e.target.name] : e.target.value})
    }

    const updateMemberOnServer = async () => {
        const {data} =  await axios.put("http://localhost:8000/members/" + member._id, member)
        console.log(data)
    }

    return <div class="div">
        <h3>Members</h3><br/>
        <h3>Edit Member : {memberName}</h3>
        Name: <input type="text" name="name" value={member.name} onChange={handleInput} /><br/>
        Email: <input type="text" name="email" value={member.email} onChange={handleInput} /><br/>
        City: <input type="text" name="city" value={member.city} onChange={handleInput} /><br/>
        <button onClick={updateMemberOnServer}>Update</button>
        <button onClick={() => navigate("../subscriptions/allMembers")}>Cancel</button>
    </div>
}