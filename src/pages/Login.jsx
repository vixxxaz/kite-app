import React from 'react'
import { auth, provider } from '../firebase-config';
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


const Login = ( {isAuth, setIsAuth} ) => {

    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true)
            setIsAuth(true)
            navigate('/')
        })
    }

  return (
    <div className='loginPage'>        
        <button className='login-with-google-btn' onClick={signInWithGoogle}>sign in with google</button>
    </div>
  )
}

export default Login