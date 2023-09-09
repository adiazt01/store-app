import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAehdIY_yxGMODBAzpIwM4WwQKBRl1i81o",
  authDomain: "store-market-ff686.firebaseapp.com",
  projectId: "store-market-ff686",
  storageBucket: "store-market-ff686.appspot.com",
  messagingSenderId: "981488463523",
  appId: "1:981488463523:web:7f399299ba75301cb65916"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)
