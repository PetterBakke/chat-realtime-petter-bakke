import React, { useContext } from 'react'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  console.log('This should be the user photoURL:', currentUser.photoURL);

  return (
    <div className='navbar'>
      <span className='logo'>Chatmate</span>
      <div className='user'>
      {currentUser.photoURL ? (
          <>
            <img src={currentUser.photoURL} alt="" />
            <span>{currentUser.displayName}</span>
          </>
        ) : (
          <p>Loading...</p> // Or display a placeholder image
        )}
        <button onClick={() => signOut(auth)}>Logout</button>
        {/* <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button> */}
      </div>
    </div>
  );
};

export default Navbar;