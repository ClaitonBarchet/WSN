// geral
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ReactDOM from 'react-dom';
import { onAuthStateChanged } from "firebase/auth";
// import { useAuthentication } from "./hooks/useAuthentication";
//context - AUTENTICAÇAO DE USUÁRIO
// import { AuthProvider } from "./context/AuthContext";

// hooks
import { useState, useEffect } from "react";
//https://www.youtube.com/watch?v=ytE_IlF0xv8
// useState => acrescenta informação na variável.
// useEffect => faz algo quando algo sofrer alteração na pagina.

// pages
import Login from "./pages/login/Login";
import Desktop from './pages/desktop/Desktop';

function App () {

  return (
    <div>
      <body>
        <p></p>
        {/* https://www.w3schools.com/react/showreact.asp?filename=demo2_react_router */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
              <Route path="/desktop" element={<Desktop />}></Route>
              {/* <Route path="*" element={<Login />}/> */}
              </Route>
            </Routes>
          </BrowserRouter>
      </body>
    </div>
  );
}

export default App
