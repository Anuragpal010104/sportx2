// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJgBsi7NuBo6bca41ZlB-ChcbmFT61zrY",
  authDomain: "sportx-1ba66.firebaseapp.com",
  projectId: "sportx-1ba66",
  storageBucket: "sportx-1ba66.firebasestorage.app",
  messagingSenderId: "928889899079",
  appId: "1:928889899079:web:2d5540d88acdd36aab8962",
  measurementId: "G-GFBPVJ27Q1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };