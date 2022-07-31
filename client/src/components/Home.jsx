import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function HomeComp(){
    const [user, setUser] = useState({})
    const [isValid, setIsValid] = useState(true)
    const navigate = useNavigate()

    const userValidation = async () => {  
        const {data} = await axios.get("http://localhost:8000/users/" + user.username)
        if(data.length && data[0].password === user.password){
            sessionStorage["username"] = user.username
            navigate("/main")
        } else{
            setIsValid(false)
        }
    }

    return <>
        <h3>Log in Page</h3>
        User name: <input type="text" onChange={(e) => setUser({...user, username: e.target.value})}/><br/>
        Password: <input type="password" onChange={(e) => setUser({...user, password: e.target.value})} /><br/>
        {!isValid && <b style={{color : "red"}}>User name or password incorrect<br/></b>}
        <button onClick={userValidation}>Login</button>
    </>
}