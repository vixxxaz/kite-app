import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';


const NavBar = ({ isAuth, setIsAuth }) => {
  let navigate = useNavigate();

    const signUserOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            setIsAuth(false);
            navigate('/login');
        })
    }
    
  return (
    <nav className='nav-container'>
        <Link to="/"> Home</Link>
        
        { !isAuth ? (
        <Link to="/login">Login </Link> 
        ): (
          <>
          <Link to='/greece'>Spots greece</Link>
          <Link to="/createpost"> create post</Link>
          <button className='logout-button' onClick={signUserOut}>Logout</button>
          </>
        )}

    </nav>
  )
}

export default NavBar