import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Navbar() {
    const { user, login, logout } = useContext(UserContext);
    return (
        <>
            <h2>welcome</h2>
            {
                user ?

                    (
                    <>
                        <i>{user.name} {user.role}</i>
                        <a href="#" onClick={logout}>Logout</a>
                    </>
                    )
                    :
                    (
                        <a href="#" onClick={login}>Login</a>
                    )
            }
        </>)
}