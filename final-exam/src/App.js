import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  EasyCompo  from './EasyCompo';
import  MediumCompo  from './MediumCompo';
import  HardCompo  from './HardCompo';
import  UserContext  from './UserContext';
import HomeCompo from './HomeCompo';


function App() {
  return (
    <BrowserRouter>
                    <UserContext>
                        <Routes>
                          <Route index path='/home' element={<HomeCompo />} />
                            <Route path='/easy' element={<EasyCompo />} />
                            <Route path='/medium' element={<MediumCompo />} />
                            <Route path='/hard' element={<HardCompo />} />
                        </Routes>
                     </UserContext>
    </BrowserRouter>
  );
}

export default App;
