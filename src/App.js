import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './Components/Router/Navbar';
import Home from './Components/Router/Home';
import Help from './Components/Router/Help';
import Settup from './Components/Router/Settup';



function App() {
  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}>
        <Route path='/Help' element={<Help/>}/>
        </Route>

        <Route path='/Settup' element={<Settup/>}>

        </Route>
   
      </Routes>
    </div>
  );
}

export default App;
