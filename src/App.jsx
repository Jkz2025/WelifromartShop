import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Preferences } from "./components/Preferences";
import { MainPage } from "./components/MainPage";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from "./components/Home";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ForgotPassword } from "./components/ForgotPassword/ForgotPassword";
import { ProfilePage } from "./components/ProfilePage/ProfilePage";
import { Navbar } from "./components/Navbar/Navbar";
// import {useAuth}  from "./context/authContext";
function App() {
  // const { login } = useAuth();

  // useEffect(() => {
  //   //Verificar si hay un usuario autenticado guardado en LocalStorage
  //   const savedUser = localStorage.getItem("currentUser");
  //   if (savedUser) {
  //     login(JSON.parse(savedUser));
  //   }
  // }, [login]);

  return (
    <>
      <div className="wrapper">

      <Navbar />

        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/preferences" element={<Preferences />} />
              <Route
                path="/mainPage"
                element={
                  <ProtectedRoute>
                    <MainPage />

                  </ProtectedRoute>
                }
              />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
