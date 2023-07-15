import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/authContext";
import "./loginWithGoogle.css";

export function LoginWithGoogle() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();

  return (
    <button
      className="loginWithGoogleButton"
      onClick={() => {
        loginWithGoogle()
          .then((user) => console.log(user))
          .catch((error) => console.log(error));
        navigate("/mainPage");
      }}
    >
      <svg
        className="logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="48px"
        height="48px"
      >
        <path
          fill="#ffab91"
          d="M28.5,25.5v5c0,0.6,0.4,1,1,1h9c-1.4,4.6-5.4,7.7-11.1,7.3c-4.2-0.3-7.9-3.1-9.3-7.1c-2.7-7.8,3-15,10.4-15	c2.5,0,4.7,0.8,6.6,2.2c0.4,0.3,0.9,0.2,1.3-0.1l3.8-3.8c0.4-0.4,0.4-1.1-0.1-1.5c-3.7-3-8.5-4.5-13.8-3.9c-8.4,1-15.1,7.7-16,16.1	C9,36.7,17.6,46.1,28.5,46.1C44,46.1,47.1,32.8,46,25.4c-0.1-0.5-0.5-0.9-1-0.9l-15.5,0C28.9,24.5,28.5,24.9,28.5,25.5z"
        />
        <line
          x1="13.8"
          x2="9"
          y1="18.5"
          y2="14.8"
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <line
          x1="9"
          x2="13.8"
          y1="33.2"
          y2="29.5"
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <line
          x1="36.9"
          x2="32.1"
          y1="36.3"
          y2="32"
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M30.9,41.2c10-3.1,12.1-13.6,11.1-19.8c-0.1-0.5-0.5-0.9-1-0.9l-15.5,0c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h9	c-1.4,4.6-5.4,7.7-11.1,7.3c-4.2-0.3-7.9-3.1-9.3-7.1c-2.7-7.8,3-15,10.4-15c2.5,0,4.7,0.8,6.6,2.2c0.4,0.3,0.9,0.2,1.3-0.1l3.8-3.8	c0.4-0.4,0.4-1.1-0.1-1.5c-3.2-2.6-7.3-4.1-11.8-4.1"
        />
        <path
          fill="none"
          stroke="#18193f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M17.3,6.8C11.4,9.3,7,14.9,6.2,21.6C5,32.2,13,41.4,23.2,42.1"
        />
      </svg>
      Ingresar con Google
    </button>
  );
}
