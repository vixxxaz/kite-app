import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config';
import './App.css'

const Auth = () => {

    const [ registerEmail, setRegisterEmail ] = useState("")
    const [ registerPassword, setRegisterPassword ] = useState("")

    const register = async () => {

        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
            console.log(user)
        } catch (error) {
            console.log(error.message);
        }
        
    }


  return (
    <div className='register'>
        <div className='App'>
            <h3>Register user</h3>
            <input type="text" placeholder='email' onChange={(e) => setRegisterEmail(e.target.value)} />
            <input type="text" placeholder='password' onChange={(e) => setRegisterPassword(e.target.value)} />
            <button onClick={register}>create user</button>
        </div>
    </div>
  )
}

export default Auth