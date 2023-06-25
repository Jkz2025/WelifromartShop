// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJpQGpeKPDnDl758LCMFMkE7hDKIzCSc0",
  authDomain: "shopping-cart-auth-ad5a7.firebaseapp.com",
  projectId: "shopping-cart-auth-ad5a7",
  storageBucket: "shopping-cart-auth-ad5a7.appspot.com",
  messagingSenderId: "875211749675",
  appId: "1:875211749675:web:77fb5807a397b96e242d6e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
