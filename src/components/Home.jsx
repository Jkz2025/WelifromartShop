import React from "react";
import { GoToLogin } from "./Buttons/goToLogin/goToLogin";
import { GoToRegister } from "./Buttons/goToRegister/goToRegister";

export function Home() {


  return (
    <div>
      <h1>Welcome to Welivefromart </h1>

      <p>Para iniciar, por favor crea una cuenta </p>

      <div className="botones">
    <GoToRegister />
        <p>Ya tienes una? </p>
    <GoToLogin />
      </div>
    </div>
  );
}

// import { useAuth } from "../context/authContext";
// import { useNavigate } from "react-router-dom";

// export function Home() {
//   const { user, logout, loading } = useAuth();

//   console.log(user);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     await logout();
//     navigate("/login");
//   };

//   if (loading) return <h1>Cargando</h1>

//   return (
//     <div>
//       {user && user.email ? (
//         <div>Welcome {user.email}</div>
//       ) : (
//         <div>No user found</div>
//       )}

//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// }
