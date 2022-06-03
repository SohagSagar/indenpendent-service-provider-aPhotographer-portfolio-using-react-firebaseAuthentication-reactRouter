
import './App.css';
import Header from './Components/SharedComponent/Header/Header'
import { Route, Routes } from 'react-router-dom';
import AboutMeDetails from './Components/NavComponents/AboutMeDetails/AboutMeDetails';
import Packages from './Components/NavComponents/Packages/Packages';
import Gallery from './Components/NavComponents/Gallery/Gallery';
import Contract from './Components/NavComponents/Contract/Contract';
import Home from './Components/Home/Home/Home';
import Login from './Components/NavComponents/Login/Login';
import Register from './Components/NavComponents/Register/Register';
import Logout from './Components/NavComponents/Logout/Logout';
import CheckOut from './Components/NavComponents/CheckOut/CheckOut';
import RequireAuth from './Utilities/RequireAuth/RequireAuth';
import Blogs from './Components/NavComponents/Blogs/Blogs';
import PageNotFound from './Utilities/PageNotFound/PageNotFound';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

 


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
          <Route path='/check-out' element={
            <RequireAuth>
              <CheckOut/>
            </RequireAuth>
          }></Route>
          {/* <Route path='/frequenty-asked-questions' element={<FAQ/>}></Route> */}
          <Route path='/blogs' element={<Blogs/>}></Route>
          <Route path='/contract' element={<Contract/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/logout' element={<Logout/>}></Route>

          <Route path='*' element={<PageNotFound/>}></Route>

      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
