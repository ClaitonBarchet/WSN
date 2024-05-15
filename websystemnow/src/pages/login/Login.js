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
    // https://mui.com/material-ui/react-grid/
    // GRID










      <body>
        <div class="container">

            <form  id="login-form" action="home.html">
              <div class="d-flex justify-content-center my-5 flex-column">
                <div align="center">
                  {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
                  <img src={imagens} alt="logo sinos"></img>
                </div>

                  <div class="col-sm-4">
                    <label>E-mail:</label>
                      <div align="center">
                      <input type="email" class="input-basic" id="email-login-input"/>
                      </div>
                    </div>

                  <div align="left" class="col-sm-4">
                    <label>Utilize seu e-mail para realizar o login.</label>
                    <br></br>
                  </div>

                  <div align="left" class="col-sm-4" for="exampleInputPassword1">
                    <label>Senha:</label>
                    <div align="center">
                    <input type="password" class="input-basic" id="password-login-input"/>
                    </div>
                  </div>
                
              </div>
            </form>

              <div align="center">
                <p></p>
                <button type="module" class="btn button-basic">Entrar</button>
                <p></p>
                <button class="btn button-criar-conta" onClick={openModal}>Crie sua conta aqui</button>
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
        </div>
      </body>
  )

}

export default Login; 