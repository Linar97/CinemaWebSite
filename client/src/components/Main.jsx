import { Outlet, useNavigate } from "react-router-dom"

export default function MainComp(){
    const navigate = useNavigate()
    return <>
        <h3>Hello {sessionStorage["username"]}</h3>
        <button class="buttonMain" onClick={() => navigate("movies")}>Movies</button>
        <button class="buttonMain" onClick={() => navigate("members")}>Subscriptions</button>
        <button class="buttonMain" onClick={() => navigate("/")}>Log Out</button>

        <Outlet/>
    </>
}