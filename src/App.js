import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import CreatePost from './pages/CreatePost';
import Home from './pages/Home';
import Login from './pages/Login';
import NavBar from './components/NavBar';

import Chalcidique from './pages/Chalcidique';
import Kallikrateia from './pages/Kallikrateia';

import Footer from './components/Footer';
import Angelo from './pages/Angelo';
import Riviera from './pages/Riviera';
import Epanomi from './pages/Epanomi';
import Mindloop from './pages/Mindloop';
import Vorvourou from './pages/Vorvourou';
import Nea from './pages/Nea';

const App = () => {

    const [ isAuth, setIsAuth ] = useState(localStorage.getItem("isAuth"));   

  return (
    <Router>
        <NavBar isAuth={isAuth} setIsAuth={setIsAuth} />
        <Routes>
            <Route path='/' element={<Home isAuth={isAuth}/>} />
            <Route path='/angelo' element={<Angelo />} />
            <Route path='/riviera' element={<Riviera />} />
            <Route path='/epanomi' element={<Epanomi />} />
            <Route path='/mindloop' element={<Mindloop />} />
            <Route path='/vorvourou' element={<Vorvourou />} />
            <Route path='/Nea' element={<Nea />} />
            <Route path='/kalikrateia' element={<Kallikrateia />} />           
            <Route path='/chalcidique' element={<Chalcidique />} />
            <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
            <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App