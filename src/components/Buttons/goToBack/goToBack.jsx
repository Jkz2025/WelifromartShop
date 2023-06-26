import React from "react";
import { useNavigate } from "react-router-dom";

export function GoToBack() {
  const navigate = useNavigate();

    
  return <button onClick={() => navigate("/")}> ⇦</button>;
}
