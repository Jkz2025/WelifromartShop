import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { GoToBack } from "../Buttons/goToBack/goToBack";
import { LoginWithGoogle } from "../Buttons/loginWithGoogle/LoginWithGoogle";
import { LoginWithFacebook } from "../Buttons/loginWithFacebook/loginWithFacebook";
import { useEffect } from "react";
import "./SignIn.css"

const notification = withReactContent(Swal);

export const SignIn = () => {
  const { signIn, isEmailVerified, currentUser, signOut } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   // Check Facebook login status on component mount
  //   FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  //   });
  // }, []);

  // const statusChangeCallback = (response) => {
  //   if (response.status === "connected") {
  //     // Person is logged in and connected to your app
  //     // Redirect or perform other actions as needed
  //     navigate("/mainPage");
  //   } else if (response.status === "not_authorized") {
  //     // Person is logged in to Facebook but not your app
  //     // Show login button or open login dialog with FB.login()
  //   } else {
  //     // Person is not logged in to Facebook and not connected to your app
  //     // Show login button or prompt user to login
  //   }
  // };

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      notification.fire({
        title: <strong>Error !</strong>,
        html: `<i>Campos vacios </i>`,
        icon: "error",
        timer: 3000,
      });
    } else {
      try {
        if(!email){
          notification.fire({
            title: <strong>Lo sentimos !</strong>,
            html: `<i>Usuario no existe</i>`,
            icon: "warning",
            timer: 3000,
          });
        } else if (currentUser && !isEmailVerified()) {
          notification.fire({
            title: <strong>Lo sentimos </strong>,
            html: `<i>Por favor verifica tu correo electronico</i>`,
            icon: "warning",
            timer: 5000,
          });
          signOut()
        } else  {
          await signIn(email, password);
          notification.fire({
            title: <strong>Successfully !</strong>,
            html: `<i>Welcome ${email}!</i>`,
            icon: "success",
            timer: 10000,
          });
          navigate("/mainPage");
        }
      } catch (error) {
        if (error.code === "auth/wrong-password") {
          notification.fire({
            title: <strong>Lo sentimos</strong>,
            html: `<i>Usuario y/o Contraseña incorrectos</i>`,
            icon: "warning",
            timer: 3000,
          });
        } else if (error.code === "auth/invalid-email") {
          notification.fire({
            title: <strong>Lo sentimos</strong>,
            html: `<i>Usuario y/o Contraseña incorrectos</i>`,
            icon: "warning",
            timer: 3000,
          });
        } else if (error.code === "auth/missing-password") {
          notification.fire({
            title: <strong>Hey !</strong>,
            html: `<i>Por favor ingrese una contraseña</i>`,
            icon: "warning",
            timer: 3000,
          });
        } else if (error.code === "auth/user-not-found") {
          notification.fire({
            title: <strong>Error </strong>,
            html: `<i>Usuario no existe, por favor crea una cuenta </i>`,
            icon: "error",
            timer: 3000,
          });
        } else {
          notification.fire({
            title: <strong>Lo sentimos</strong>,
            html: `<i>Hubo un error, por favor intente más tarde</i>`,
            icon: "warning",
            timer: 3000,
          });
          throw error;
        }
      }
    }
  };

  return (
    <div className="signin">
      <form onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Log in</button>
      </form>
      <br />
      <LoginWithGoogle />
      <br />
      <br />
      <LoginWithFacebook />
      <br />
      <br />
      <div className="pie-form">
            <a href="/forgotPassword">¿Perdiste tu contraseña?</a>
            <a href="/register">¿No tienes Cuenta? Registrate</a>
          </div>
      <GoToBack />
    </div>
  );
};
