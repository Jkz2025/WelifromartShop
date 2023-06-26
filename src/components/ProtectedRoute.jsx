import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const ProtectedRoute = ({ children }) => {
    const {currentUser, isEmailVerified}= useAuth()

    if (!currentUser) return <Navigate to="/login" />
    
    if(!isEmailVerified()){
        return <p>Please verify your email to access this page.</p>;
    }
    return <>{children}</>;

}