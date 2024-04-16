// geral
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

// pages
import Login from "./pages/login/Login";

function App () {

  // AUTENTICAÇÃO DE USUÁRIO
  const [user, setUser] = useState(undefined)

  return (
    // https://www.w3schools.com/react/showreact.asp?filename=demo2_react_router
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        <Route path="*" element={<Login />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App