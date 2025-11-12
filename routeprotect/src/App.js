import { UserProvider } from "./UserContext";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/Abount';
import Navbar from "./Navbar";
import Login from "./pages/Login";
import RouteProtect from "./RouteProtect";
export default function App(){
  return(
    <BrowserRouter>
      <UserProvider>
          <Routes>
            <Route path="/" element={<Navbar />}> 
              <Route index element={<Home />} />
              <Route path="about" element={
                <RouteProtect>
                  <About />
                </RouteProtect>} /> 
              <Route path="about/:id" element={<RouteProtect>
                  <About />
                </RouteProtect>} />
              <Route path="login"  element={<Login />} />
            </Route>
          </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}