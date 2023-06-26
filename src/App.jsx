import { Dashboard } from "./components/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Preferences } from "./components/Preferences";
import { useState } from "react";
import { MainPage } from "./components/MainPage";
import { SignIn } from "./components/SignIn/SignIn";
import { SignUp } from "./components/SignUp/SignUp";
import { Home } from "./components/Home";
import { AuthProvider } from "./context/authContext";
import { AuthDetails } from "./components/AuthDetails";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <div className="wrapper">
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

              <Route path="/login" element={<SignIn />} />
              <Route path="/register" element={<SignUp />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
