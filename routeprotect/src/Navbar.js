import { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link,Outlet } from "react-router-dom";

export default function Navbar(){
    const {user} = useContext(UserContext);
    return(
        <>
            <nav>
                <ul>
                    {
                        !user?
                        <li>
                            <Link to="/login">Login</Link>
                        </li>:
                        <>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
            <Outlet />
        </>
    )
}