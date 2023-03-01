import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <span className='logo'>Chatmate</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.name}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar