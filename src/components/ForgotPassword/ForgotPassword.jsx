import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/authContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

export function ForgotPassword() {
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();
  const notification = withReactContent(Swal);
  const navigate = useNavigate()

  const handleForgotPassword = (e) => {
    e.preventDefault();
    forgotPassword(email)
      .then((res) => {
        notification.fire({
            title: <strong>Successfully !</strong>,
            html: `<i>Correo de verificacion enviado exitosamente, por favor revisa tu bajenda de entrada ${email}!</i>`,
            icon: "success",
            timer: 10000,
          });
        console.log(res);
          navigate("/login")
      })
      .catch((err) => {
        console.log(err);
        notification.fire({
            title: <strong>Lo sentimos </strong>,
            html: `<i>Hubo un error, por favor intente mas tarde "${err.code}!"</i>`,
            icon: "error",
            timer: 10000,
          });
      });
  };

  return (
    <>
      <div className="forgotpassword">
        <h1>Recupera tu cuenta</h1>
        <form onSubmit={handleForgotPassword}>
          <label htmlFor="">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" />
          <br />
          <button>Enviar correo verifiacion</button>
        </form>
      </div>
    </>
  );
}
