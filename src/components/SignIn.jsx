import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const notification = withReactContent(Swal);

export const SignIn = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      notification.fire({
        title: <strong>Successfully !</strong>,
        html: `<i>Welcome ${email}!</i>`,
        icon: 'success',
        timer: 1000
      })
      navigate("/mainPage");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="signin">
      <form onSubmit={handleSignIn}>
        <h1>Log In your Account</h1>
        {error && <p>{error}</p>}
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
