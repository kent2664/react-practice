import {createContext, useState} from "react";
//first create the contexts
export const UserContext = createContext();

export function UserProvider({children}){
    const [user,setUser] = useState(null);

    const login = () =>{
        setUser({name:'John',role:'Admin'});
    }

    const logout = () =>{setUser(null)};
    return(
        <UserContext.Provider value={{user,login,logout}}>
            {children}
        </UserContext.Provider>
    )
}