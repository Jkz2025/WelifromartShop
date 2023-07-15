import { useAuth } from "../../context/authContext";
import { AuthDetails } from "../AuthDetails";
export function ProfilePage() {
  const { currentUser } = useAuth();
  return (
    <div>
      <h1>Your Profile </h1>
      {JSON.stringify(currentUser, null, 2)}
      <AuthDetails />
    </div>
  );
}
