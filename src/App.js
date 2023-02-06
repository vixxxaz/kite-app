import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Greece from './pages/Greece';
import Chalcidique from './pages/Chalcidique';


const App = () => {

    const [ isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));   

  return (
    <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
            <Route path='/' element={<Home isAuth={isAuth}/>} />
            <Route path='/greece' element={<Greece />} />
            <Route path='/chalcidique' element={<Chalcidique />} />
            <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
    </Router>
  )
}

export default App