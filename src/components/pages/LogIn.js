import React, { useState } from 'react'
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signOut 
} from 'firebase/auth';
import { auth } from '../../FirebaseConfig';

import Header from '../Header'


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
      <div>
        <h3> Register User </h3>
        <input placeholder='email...' onChange={(event) => { setRegisterEmail(event.target.value); }} />
        <input placeholder='password...' onChange={(event) => { setRegisterPassword(event.target.value); }} />AuthRoute
        <button onClick={register}> Create User </button>
      </div>

      <div>
        <h3> Login </h3>
        <input placeholder='email...' onChange={(event) => { setLoginEmail(event.target.value); }} />
        <input placeholder='password...' onChange={(event) => { setLoginPassword(event.target.value); }} />
        <button onClick={login}> Login </button>
      </div>

      <div>
        <h3> User Email: </h3>
        {user?.email}

        <button onClick={logout}> Sign Out </button>
      </div>
    </div>
  )
};
