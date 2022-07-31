import axios from "axios"
import { useState, useEffect } from "react"
import MemberComp from "./Member"

export default function AllMembersComp(){

    const [members, setMembers] = useState([])

    useEffect(() => {
        const getAllMembersFromServer = async () => {
            const {data} = await axios.get("http://localhost:8000/members/")
            setMembers([...data])
        }
        getAllMembersFromServer()
    }, [members])

    const deleteMember = async (id) => {
        const {data} = await axios.delete("http://localhost:8000/members/" + id)
        if(data === "deleted"){
            const newMembersArr = members.filter(member => !member._id === id)
            setMembers([...newMembersArr])
        }
    }

    return <div>
       {
        members.map((member) => {
            return <MemberComp key={member._id} member={member} callback={id => deleteMember(id)} />
        })
       }
    </div>
}