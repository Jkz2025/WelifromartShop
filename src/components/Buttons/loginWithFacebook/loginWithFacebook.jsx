import React from "react";
import { useAuth } from "../../../context/authContext";
import { useNavigate } from "react-router-dom";
import "./LoginWithFacebook.css";

export function LoginWithFacebook() {
  const { loginWithFacebook } = useAuth();
  const navigate = useNavigate();
  const loginFb = async () => {
    try {
      await loginWithFacebook();
      navigate("/mainPage");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <button className="loginWithFacebook" onClick={loginFb}>
     <svg className="logoFb"xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="64px" height="64px"><path d="M32,6C17.642,6,6,17.642,6,32c0,13.035,9.603,23.799,22.113,25.679V38.89H21.68v-6.834h6.433v-4.548	c0-7.529,3.668-10.833,9.926-10.833c2.996,0,4.583,0.223,5.332,0.323v5.965h-4.268c-2.656,0-3.584,2.52-3.584,5.358v3.735h7.785	l-1.055,6.834h-6.73v18.843C48.209,56.013,58,45.163,58,32C58,17.642,46.359,6,32,6z"/></svg> Sign In With Facebook
    </button>
  );
}