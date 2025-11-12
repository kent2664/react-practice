import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Dashboard() {
    const { user } = useContext(UserContext);
    return (
        <>
            {user ? <p>{user.name} Willkommen</p>: <p>You need to login first.</p>}
        </>
    )
}