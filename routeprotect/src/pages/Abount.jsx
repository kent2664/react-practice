import { useParams } from "react-router-dom";
import { useContext, memo, useCallback } from "react";
import { UserContext } from "../UserContext";

    const Button = memo(
        function Button({ onClick}) {
          console.log('Button rendered');
          return <button onClick={onClick} >Click me</button>;
        }
    )

export default function About(){
    const {user,logout} = useContext(UserContext);
    let {id=0} = useParams();

    const inc = useCallback(()=>{
        setCount((prevCount) => prevCount + 1);
    },[text]);
    return(
        <>
            <h1>About page {id}</h1>
            <p>Count : {count}</p>
            <input type="text" value={text} onInput={(e)=>setText(e.target.value)}/>
            <Button onClick={inc} />
            {user?<>
                <h5>User is {user.name}</h5>
                <button onClick={logout}>Logout</button>
            </>:<h5>Login first</h5>}
        </>
    )
}