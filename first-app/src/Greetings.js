import {useState } from "react";
export default function Greeting({name,age=99}) {
    const [userName,setUserName] = useState({fname:'',lname:''});
    const changeHandler = (e)=> {
        setUserName(prevValue => {
            return {...prevValue,[e.target.name]:e.target.value}
        })
    }
    return (
        <>
            <h2> This is Greeting component {name} who is {age}</h2>
            <input value={userName.fname} placeholder="firstname" name="fname" onInput={changeHandler}/>
            <input value={userName.lname} placeholder="lastname" name="lname" onInput={changeHandler}/>
            <h2>{userName.lname}</h2>
            <h2>{userName.fname} {userName.lname}</h2>

            
        </>
    )
}