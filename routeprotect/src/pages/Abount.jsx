import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../UserContext";
export default function About(){
    const {user,logout} = useContext(UserContext);
    let {id=0} = useParams();
    return(
        <>
            <h1>About page {id}</h1>
            {user?<>
                <h5>User is {user.name}</h5>
                <button onClick={logout}>Logout</button>
            </>:<h5>Login first</h5>}
        </>
    )
}