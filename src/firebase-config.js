// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore';
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-WSIaXiDSvUaCSqMqZdYlmAcEYMc6qFM",
  authDomain: "blog-app-8e3b9.firebaseapp.com",
  projectId: "blog-app-8e3b9",
  storageBucket: "blog-app-8e3b9.appspot.com",
  messagingSenderId: "31362250320",
  appId: "1:31362250320:web:5e9e4085a3f99f2a228355"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

