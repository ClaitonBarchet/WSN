import React, {useState, useEffect} from 'react';
import styles from "../login/Login.css"
import imagens from "../../imagens/Logo ft black.png"
// import modalCadastro from '../../Component/Modal/modal';
import modal from "../../Component/Modal/modal"

import { NavLink } from "react-router-dom";
import { FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';
// import styles from "../../../public/css/styles.css"

import Modal from 'react-modal';
import openModal from "../../Component/Modal/modal"

Modal.setAppElement("#root");

// const Login = () => {
  function Login() {
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

  return (
    // <div className={styles.Login} class="container">
    <div className="Container">
      <div class="row vh-100">
        <form  id="login-form" action="home.html" class="form-login">
          <div class="d-flex justify-content-center my-5 flex-column">
            <div class="container">
              <div class="text-cente mb-3">
              {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
                <img src={imagens} alt="logo sinos"></img>
              </div>
           
              <div class="mb-6">
                <label for="exampleInputEmail1" class="form-label">E-mail</label>
                  <p></p>
                  <input type="email" class="form-control" id="email-login-input" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Utilize seu e-mail para realizar o login.</div>
              </div>
              <p></p>
              <div class="mb-6">
                <label for="exampleInputPassword1" class="form-label">Senha</label>
                  <p></p>
                  <input type="password" class="form-control" id="password-login-input"/>
              </div>
              <div class="mb-6 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Permanecer logado.</label>
              </div>
              <button type="module" class="btn button-login">Entrar</button>
                                
              <div class="row">
                <div class="col">
                  <p class="text-center mt-2 form-text" data-bs-toggle="modal"data-bs-target="#register-modal">Ainda não tem conta?
                  {/* <span class="link-default"> Criar conta</span> */}
                  {/* <button onclick={openModal}>Criar conta</button>                   */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <button onClick={openModal}>Criar conta</button>

      <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel='Example Modal'
            overLayClassName="modal-overlay"
            className="modal-content"
            >
            <h2>Hello - I am modal</h2>
            <hr />
            <p>
            isso é a modal
            </p>
            <button onClick={closeModal}>Close</button>

        </Modal>
        
    </div>
  )

}

export default Login; 