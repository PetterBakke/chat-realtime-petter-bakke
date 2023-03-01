// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth, db, storage } from '../../Firebase';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import React, { useState } from 'react'
import { FcAddImage } from "react-icons/fc";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from 'react-router-dom';

function Register() {
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];
    
   
  return (
    <div className='form-container'>
      <div className='formWrapper'>
        <span className='logo'>ChatMate</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor='file'>
            <FcAddImage className='addAvatar' />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {/* {err && <span>Something went wrong</span>} */}
        </form>
        {/* <p>Do you already have an account? <Link to="/login">Login</Link></p> */}
      </div>
    </div>
    )
  }
}
export default Register;