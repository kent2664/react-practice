import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function Login(){
    const {login} = useContext(UserContext);
    const [tmpUser,setTmpUser] = useState({name:'',role:'a'});
    const tmpUserChHandler = (inputObj) =>{
        const {name:propName,value} = inputObj.target;
        setTmpUser((prevUserObj)=>{
            return {...prevUserObj,[propName]:value}
        })
    }
    const submitHandler = (formObj) =>{
        formObj.preventDefault();
        login(tmpUser);
    }
    return(
        <form onSubmit={submitHandler}>
            <input name="name" placeholder="name" value={tmpUser.name} onInput={tmpUserChHandler}/>
            <select value={tmpUser.role} name="role" onChange={tmpUserChHandler}>
                <option value='a'>Admin</option>
                <option value='s'>Staff</option>
                <option value='c'>Customer</option>
            </select>
            <button type="submit">Login</button>
        </form>
    )
}