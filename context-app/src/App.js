import { UserProvider } from "./UserContext";
import  Navbar from "./Navbar";
import Dashboard from "./Dashboard";
export default function App() {
  return (

    <UserProvider>
      <Navbar />
      <Dashboard />
    </UserProvider>
  );
}
