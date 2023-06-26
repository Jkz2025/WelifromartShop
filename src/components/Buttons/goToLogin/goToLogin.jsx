import React from 'react'
import { useNavigate } from 'react-router-dom'


export function GoToLogin() {
    const navigate = useNavigate()

    const login = () => {
        navigate("/login")
    }

  return (
    <button onClick={login}>Login</button>
  )
}
