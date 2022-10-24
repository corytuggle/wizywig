// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../../FirebaseConfig';


// export default function SignUp() {

//   const register = async () => {
//     try {
//       const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//       console.log(user)
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div>
//       <h3> Register User </h3>
//       <input placeholder='email...' onChange={(event) => { setRegisterEmail(event.target.value); }} />
//       <input placeholder='password...' onChange={(event) => { setRegisterPassword(event.target.value); }} />

//       <button onClick={register}> Create User </button>
//     </div>
//   )
// }
