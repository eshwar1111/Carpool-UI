import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link ,Navigate} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import BookRide from './BookRide';
import Home from './Home';
import OfferRide from './OfferRide';
import MyRides from './MyRides';
import './App.css'
import ProtectedRoute from './Utils/ProtectedRoute';

function App() {
  
  return (
    <Router>
      <Routes><Route path='/' element={<Navigate to="/login" replace={true}/>}></Route>
      <Route element={<ProtectedRoute/>}>
        <Route path='/bookride' element={<BookRide/>}/>
        <Route path='/offerride' element={<OfferRide/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path='/myrides' element={<MyRides/>}/>
      </Route>

      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    </Router>
  )
                                          
}

export default App
