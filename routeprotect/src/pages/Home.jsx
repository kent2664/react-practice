import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";
export default function Home(){
    const {user} = useContext(UserContext);
    const nav = useNavigate();
    useEffect(()=>{
        if(!user)
            nav('\login');
    },[])
    return(
        <>
            <h1>Home page</h1>
            <h4>Welcome {user?<i>{user.name} {user.role}</i>:<i>Guest</i>}</h4>
        </>
    )
}