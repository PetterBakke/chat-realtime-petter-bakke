// import React, { useState } from 'react';
// import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
// import { auth, storage, db } from '../../firebase';
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { FcAddImage } from "react-icons/fc";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from 'react-router-dom';

// function Register() {
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files;

//     try {
//       //Create user
//       const res = await createUserWithEmailAndPassword(auth, email, password);

//       //Create unique image name
//       const date = new Date().getTime();
//       const storageRef = ref(storage, `${displayName + date}`);

//       const metadata = {
//         uid: res.user.uid, // Set the UID of the user as metadata
//       };

//       await uploadBytesResumable(storageRef, file, { metadata}).then(() => {
//         getDownloadURL(storageRef).then(async (downloadURL) => {
//           try {
//             // Update profile
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
//             // Create user on firestore
//             await setDoc(doc(db, 'users', res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             // Create empty user chats on firestore
//             await setDoc(doc(db, 'userChats', res.user.uid), {});
//             navigate("/");
//           } catch (err) {
//             console.log(err);
//             setErr(true);
//             setLoading(false);
//           }
//         });
//       });
//     } catch (err) {
//       console.log('Error storing user data:', err);
//       setErr(true);
//       setLoading(false);
//     }
//   };
//   return (
//     <div className='form-container'>
//       <div className='formWrapper'>
//         <span className='logo'>ChatMate</span>
//         <span className='title'>Register</span>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="Name" />
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           <input style={{ display: "none" }} type="file" id="file" />
//           <label htmlFor='file'>
//             <FcAddImage className='addAvatar' />
//             <span>Add an avatar</span>
//           </label>
//           <button disabled={loading}>Sign up</button>
//           {loading && "uploading and compressing the image, please wait"}
//           {err && <span>Something went wrong</span>}
//         </form>
//         <p>Do you already have an account?<Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// };
// export default Register;

import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, storage, db } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';

function Register() {
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Create user with email and password
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      // Create unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${user.uid}-${date}`);

      // Upload photoURL to Firebase Storage
      await uploadBytesResumable(storageRef, photoURL).then(async () => {
        const downloadURL = await getDownloadURL(storageRef);

        // Store user data in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          uid: user.uid,
          displayName,
          email,
          photoURL: downloadURL,
        });

        // Create user chat and chats collections
        await setDoc(doc(db, 'userChats', user.uid), {});
        await setDoc(doc(db, 'chats', user.uid), {});

        setLoading(false);
        navigate('/');
      });
    } catch (error) {
      console.log('Error registering user:', error);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="formWrapper">
        <span className="logo">ChatMate</span>
        <span className="title">Register</span>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setPhotoURL(e.target.files[0])} 
        />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={loading}>Sign up</button>
          {loading && 'Uploading and compressing the image, please wait'}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Do you already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;