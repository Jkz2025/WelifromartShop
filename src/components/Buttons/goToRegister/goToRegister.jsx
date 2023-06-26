import React from 'react'
import { useNavigate } from 'react-router-dom'

export function GoToRegister() {
    const navigate = useNavigate()

    const register = () => {
        navigate("/Register")
    }

  return (
    <button onClick={register}>New Account</button>
  )
}
