import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, useEffect, useContext } from "react";
import { auth } from "./firebase";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

export const AuthDetails = () => {
  const { authUser, setAuthUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successfully");
      })
      .catch((error) => console.log(error));

      navigate("/login")
  };

  return (
    <div>
      {!authUser ? (
        <div>
          <button onClick={userSignOut}>Log out</button>
        </div>
      ) : (
        <div>
          <button onClick={() => navigate("/login")}>Log In</button>
        </div>
      )}
    </div>
  );
  
};
