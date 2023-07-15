import { createContext, useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendEmailVerification,
  FacebookAuthProvider, 
  sendPasswordResetEmail
} from "firebase/auth";
import { auth } from "../components/firebase";
import { useEffect } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const setAuthUser = (user) => {
    setCurrentUser(user);
  };

  useEffect(() => {
    //Recuperar el estado de currentUser desde localStorage asi se recargue la pagina 
    const savedUser = localStorage.getItem("currentUser");
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, [])


  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };  

  // const login = (user) => {
  //   //Autenticar al usuario y establecer currentUser
  //   setCurrentUser(user)
  //   //Guardar currentUser en LocalStorage
  //   localStorage.getItem("currentUser", JSON.stringify(user))
  // }

  const signOut = () => {
    return auth.signOut();
  };

  // const logout = () => {
  //  //limpiar el estado currentUser
  //   setCurrentUser(null)
  //   //Eliminar currentUser de LocalStorage
  //   localStorage.removeItem("currentUser")
  // }


  const sendEmail = () => {
    return sendEmailVerification(auth.currentUser);
  };



  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  }

  const isEmailVerified = () => {
    return currentUser && currentUser.emailVerified;
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email, {
      url: 'http://localhost:5174/login',
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
      console.log("User:", user); // Agrega este console.log
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    signOut,
    loginWithGoogle,
    loginWithFacebook,
    setAuthUser,
    sendEmail,
    isEmailVerified,
    forgotPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
