import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

import Chalcidique from './pages/Chalcidique';
import Kallikrateia from './pages/Kallikrateia';
import Angelo from './pages/Angelo';
import Footer from './components/Footer';


const App = () => {

    const [ isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));   

  return (
    <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
            <Route path='/' element={<Home isAuth={isAuth}/>} />
            <Route path='/angelo' element={<Angelo />} />
            <Route path='/kalikrateia' element={<Kallikrateia />} />           
            <Route path='/chalcidique' element={<Chalcidique />} />
            <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
        <Footer/>
    </Router>
  )
}

export default App