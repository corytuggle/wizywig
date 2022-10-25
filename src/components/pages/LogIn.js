import React, { useState } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from '../../FirebaseConfig';

import Header from '../Header'
import '../../css/login.css'


export default function LogIn() {
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      console.log(user)
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };


  const logout = async () => {
    await signOut(auth);
  };

  return (
    <div>
      <Header />
      <div id='login-page'>
        <div className='login-page-container'>
          <div className='header-container'>
            <p> Register User </p>
          </div>
          <div className='input-containers'>
            <input placeholder='Email...' onChange={(event) => { setRegisterEmail(event.target.value); }} />
            <input placeholder='Password...' onChange={(event) => { setRegisterPassword(event.target.value); }} />
            <button className='login-page-button' onClick={register}> Create User </button>
          </div>
        </div>

        <div className='login-page-container'>
          <div className='header-container'>
            <p> Login </p>
          </div>
          <div className='input-containers'>
            <input placeholder='Email...' onChange={(event) => { setLoginEmail(event.target.value); }} />
            <input placeholder='Password...' onChange={(event) => { setLoginPassword(event.target.value); }} />
            <button className='login-page-button' onClick={login}> Login </button>
          </div>
        </div>

        <div className='login-page-container'>
          <div className='signout-header-container'>
            <p> User Logged In: {user?.email}</p>
            
          </div>
          <button id='signout-button' onClick={logout}> Sign Out </button>
        </div>
      </div>
    </div>
  )
};
