import { createContext, useState, useEffect } from "react";
//first create the context
export const UserContext = createContext();

export function UserProvider({children}){
    const [user,setUser] = useState(null);
    useEffect(()=>{
        if(localStorage.getItem('user'))
            setUser(JSON.parse(localStorage.getItem('user')))
    },[])
    const login = (userObj) =>{
        setUser(userObj);
        localStorage.setItem('user',JSON.stringify(userObj));
    }

    const logout = () =>{
        setUser(null);
        localStorage.removeItem('user');
    };
    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}
