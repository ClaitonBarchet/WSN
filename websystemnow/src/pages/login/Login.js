import React, {useState} from 'react';
import styles from "../login/Login.css";
import imagens from "../../imagens/Logo ft black.png";
import Modal from 'react-modal';

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
      <body>
      <div class="row vh-100">
        <form  id="login-form" action="home.html" class="form-login">
          
          <div class="d-flex justify-content-center my-5 flex-column">
            {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
            <img src={imagens} alt="logo sinos"></img>
          </div>

            <div align="left" class="mb-3">E-mail:</div>
              <div align="center">
              <input type="email" class="input-basic" id="email-login-input"/>
              </div>
            <div align="left" class="mb-3">Utilize seu e-mail para realizar o login.</div>
            <br></br>
            <div align="left" class="mb-3" for="exampleInputPassword1">Senha:</div>
            <div align="center">
            <input type="password" class="input-basic" id="password-login-input"/>
            </div>
        </form>

          <div align="center">
            <p></p>
            <button type="module" class="btn button-basic">Entrar</button>
            <p></p>
            <button class="btn button-criar-conta" onClick={openModal}>Crie sua conta aqui</button>
          </div>
      </div>

        <div className = "modal"> 
        {/* https://reactcommunity.org/react-modal/ */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          // contentLabel='Example Modal'
          // overLayClassName="modal-overlay"
          className="modal-style"
        >
              <h2>Criando novo cadastro</h2>
              <hr/>
              <p></p>
                <label>Informe seu email:</label>
                <br></br>
                <input type="email" class="input-basic" id="password-login-input"/>
                <p></p>
                <label>Senha:</label>
                <br></br>
                <input type="password" class="input-basic" id="password-login-input"/>
                <p></p>
                <label>Confirmar senha:</label>
                <br></br>
                <input type="password" class="input-basic" id="password-login-input"/>
              <p></p>

              <div class="mb-3">
                <div>
                    <button class="btn button-basic" onClick={closeModal}>Cancelar</button>                   
                    <button class="btn button-basic">Registrar</button>
                </div>
              </div>

        </Modal>
        </div>
      </body>
  )

}

export default Login; 