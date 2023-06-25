import React from "react";
import { AuthDetails } from "./AuthDetails";

export function Home() {
  return (
    <div>
      <AuthDetails />
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
