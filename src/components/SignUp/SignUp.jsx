import { useState } from "react";
import React from "react";
import { useAuth } from "../../context/authContext";
import { useNavigate } from "react-router-dom";
import { GoToBack } from "../Buttons/goToBack/goToBack";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./SignUp.css";

const notification = withReactContent(Swal);

export const SignUp = () => {
  const { signUp, sendEmail } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState(null);
  const [registerClicked, setRegisterClicked] = useState(false);

  // function errorFirebase(){
  //   if (error === "auth/email-already-in-use"){
  //     notification.fire({
  //       title: <strong>Ups !</strong>,
  //       html: `<i>¡Parece que este correo ya esta en uso </i>`,
  //       icon: "warning",
  //       timer: 5000,
  //     });
  //   } else {
  //     notification.fire({
  //       title: <strong>Bienvenido!</strong>,
  //       html: `<i>Hubo un error, por favor intente mas tarde </i>`,
  //       icon: "warning",
  //       timer: 5000,
  //     });
  //   }
  // }
  const notificationOff = () => {
    setRegisterClicked(false);
  };
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (registerClicked) {
      if (password.length < 8) {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>La contraseña debe tener al menos 8 caracteres</i>`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (!password.match(/[a-z]/i)) {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>La contraseña debe contener letras</i>`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (!password.match(/[A-Z]/)) {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>La contraseña debe contener al menos una mayúscula</i>`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (!password.match(/\d/)) {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>La contraseña debe contener al menos un número</i>`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (password !== password2) {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>La contraseña no coincide</i>`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (password === "" || password2 === "") {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>Debe ingresa una contraseña`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else if (email === "") {
        notification.fire({
          title: <strong>Ups!</strong>,
          html: `<i>Por favor ingresa un correo`,
          icon: "error",
          timer: 3000,
        });
        setRegisterClicked(false);
      } else {
        try {
          await signUp(email, password);
          await sendEmail();
          window.localStorage.setItem('emailForSignIn', email);
          navigate("/login");
          notification.fire({
            title: <strong>Successfully !</strong>,
            html: `<i> Correo de verificacion enviado exitosamente</i>`,
            icon: "success",
            timer: 2000,
          });
        } catch (error) {
          if (error.code === "auth/email-already-in-use") {
            navigate("/login");
            notification.fire({
              title: <strong>Lo sentimos</strong>,
              html: `<i>¡Parece que este correo ya está en uso!</i>`,
              icon: "warning",
              timer: 3000,
            });
          } else if (error.code === "auth/invalid-email") {
            notification.fire({
              title: <strong>Lo sentimos</strong>,
              html: `<i>Correo no valido</i>`,
              icon: "warning",
              timer: 3000,
            });
          } else {
            notification.fire({
              title: <strong>Lo sentimos</strong>,
              html: `<i>Hubo un error, por favor intente más tarde</i>`,
              icon: "warning",
              timer: 3000,
            });
            console.log(error);
          }
        }
      }
    } else {
      navigate("/");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignUp}>
        <h1>Create Account</h1>
        <div className="emailContainer">
          <label>Email address</label>
          <input
            className="inputSignUp"
            type="text"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="passwordContainer">
          <label>Password</label>
          <input
            className="inputSignUp"
            type="password"
            placeholder="Your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="password2">
          <label>Password</label>
          <input
            type="password"
            placeholder="Repeat password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
        </div>
        <br />
        <br />
        <GoToBack onClick={notificationOff} />
        <button
          onClick={() => setRegisterClicked(true)}
          type="submit"
          style={{ marginLeft: 40 }}
        >
          Register
        </button>
      </form>
    </div>
  );
};
