
import './App.css';
import Header from './Components/SharedComponent/Header/Header'
import { Route, Routes } from 'react-router-dom';
import AboutMeDetails from './Components/NavComponents/AboutMeDetails/AboutMeDetails';
import Packages from './Components/NavComponents/Packages/Packages';
import Gallery from './Components/NavComponents/Gallery/Gallery';
import FAQ from './Components/NavComponents/FAQ/FAQ';
import Contract from './Components/NavComponents/Contract/Contract';
import NoPageFound from './Utilities/NoPageFound/NoPageFound';
import Home from './Components/Home/Home/Home';
import Login from './Components/NavComponents/Login/Login';
import Register from './Components/NavComponents/Register/Register';
import Logout from './Components/NavComponents/Logout/Logout';

 


function App() {
  return (
    <div className="App">
      <Header></Header>
        <Routes>

          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/about-me-details' element={<AboutMeDetails/>}></Route>
          <Route path='/packages' element={<Packages/>}></Route>
          <Route path='/gallery' element={<Gallery/>}></Route>
          <Route path='/frequenty-asked-questions' element={<FAQ/>}></Route>
          <Route path='/contract' element={<Contract/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>

          <Route path='*' element={<NoPageFound/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
