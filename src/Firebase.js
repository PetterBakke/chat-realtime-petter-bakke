import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB2H4VHx86HM3U1dCyvR1jdLcjS9v2h4uc",
  authDomain: "chat-realtime-c0a37.firebaseapp.com",
  projectId: "chat-realtime-c0a37",
  storageBucket: "chat-realtime-c0a37.appspot.com",
  messagingSenderId: "705217341213",
  appId: "1:705217341213:web:0055ff6949e4247f42e3f4",
  measurementId: "G-JKFPD6R4K5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
// const analytics = getAnalytics(app);