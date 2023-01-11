import { useState, useEffect } from 'react'
import "./App.css"
import { auth } from './firebase-config'
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [ loginEmail, setLoginEmail ] = useState("")
    const [ loginPassword, setLoginPassword ] = useState("")
    const [ user, setUser ] = useState({})

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
    }

    const logout = async () => {

        await signOut(auth);
    }

  return (
    <>
        <div className='register'>
            <div className='App'>
                <h3>login user</h3>
                <input placeholder='email' onChange={(e) => setLoginEmail(e.target.value)} />
                <input placeholder='password' onChange={(e) => setLoginPassword(e.target.value)} />
                <button onClick={login}>login</button>
            </div>
        </div>
        <div className='App'>
            <h4>user logged in</h4>
            {user? user.email : "not logged in"}
            <br />
            <button onClick={logout}>sign out</button>
        </div>
    </>
  )
}

export default Login