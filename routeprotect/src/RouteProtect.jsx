import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Navigate } from "react-router-dom";
export default function RouteProtect({children}){
    const {user} = useContext(UserContext);
    if(!user){
        return <Navigate to="/login" replace />
    }
    return children;
}