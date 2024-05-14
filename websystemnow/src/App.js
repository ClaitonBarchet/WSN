// geral
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ReactDOM from 'react-dom';

// hooks
import { useState, useEffect } from "react";
//https://www.youtube.com/watch?v=ytE_IlF0xv8
// useState => acrescenta informação na variável.
// useEffect => faz algo quando algo sofrer alteração na pagina.

// pages
import Login from "./pages/login/Login";

function App () {

  // AUTENTICAÇÃO DE USUÁRIO
  const [user, setUser] = useState(undefined)

  return (
    <div>
      <body>
        <p></p>
        {/* https://www.w3schools.com/react/showreact.asp?filename=demo2_react_router */}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />}>
              <Route path="*" element={<Login />}/>
              </Route>
            </Routes>
          </BrowserRouter>
      </body>
    </div>
  );
}

export default App

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {showModal: false};
//     this.mostraModal = this.mostraModal.bind(this);
//     this.escondeModal = this.escondeModal.bind(this);
//   }

//   mostraModal() {
//     this.setState({showModal: true});
//   }

//   escondeModal() {
//     this.setState({showModal: false});
//   }

//   render() {
//     const modal = this.state.showModal ? (
//       <Modal>
//         <div className="modal">
//           <div>Olá, eu sou um modal!</div>
//           <button id="btnModal">Hide modal</button>
//           {/* <button onClick={this.escondeModal}>Hide modal</button> */}
//         </div>
//       </Modal>
//     ) : null;

//     return (
//       <div>
//         <button id="btnModal">Show modal</button>
//         {/* <button onClick={this.mostraModal}>Show modal</button> */}
//         {modal}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('root'));