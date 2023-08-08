import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD685taG5wjK1PlXviSHaOVpzOWZf3yIYs",
  authDomain: "chat-bro-415c1.firebaseapp.com",
  projectId: "chat-bro-415c1",
  storageBucket: "chat-bro-415c1.appspot.com",
  messagingSenderId: "501803425159",
  appId: "1:501803425159:web:eda8d7a18890be456b0722"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();