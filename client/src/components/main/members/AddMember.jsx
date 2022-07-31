import axios from "axios"
import { useState } from "react"
import {useNavigate} from 'react-router-dom'

export default function AddMemberComp(){

    const [member, setMember] = useState({})
    const [isCreated, setIsCreated] = useState(false)
    const navigate = useNavigate()

    const handleInput = (e) => {
        setMember({...member, [e.target.name] : e.target.value})
    }

    const saveMember = async () => {
        const {data} = await axios.post("http://localhost:8000/members/", member)
        if(data.msg === "created")
            setIsCreated(true)
        else{
            console.log(data.msg)
            setIsCreated(false)
        }
    }

    return <div>
        Name : <input type="text" name="name" onChange={handleInput}/><br/>
        Email : <input type="text" name="email" onChange={handleInput}/><br/>
        City : <input type="text" name="city" onChange={handleInput}/><br/>
        {isCreated && <b style={{color: "green"}}>Member added succesfuly<br/></b>}

        <button onClick={saveMember}>Save</button>
        <button onClick={() => navigate("../allMembers")}>Cancel</button>

    </div>
}