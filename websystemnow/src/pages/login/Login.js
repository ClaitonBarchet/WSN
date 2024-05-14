import React, {useState, useEffect} from 'react';
import styles from "../login/Login.css"
import imagens from "../../imagens/Logo ft black.png"
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
    // <div className={styles.Login} class="container">
    <div className="Container">
      <div class="row vh-100">
        <form  id="login-form" action="home.html" class="form-login">
          <div class="d-flex justify-content-center my-5 flex-column">
            <div class="container">
              <div class="text-cente mb-6">
              {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
                <img src={imagens} alt="logo sinos"></img>
              </div>
           
              <div class="mb-6">
                <label for="exampleInputEmail1" class="form-label">E-mail:</label>
                <p></p>
                  <input type="email" class="form-control" id="email-login-input" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Utilize seu e-mail para realizar o login.</div>
              </div>
              <p></p>
              <div class="mb-6">
                <label for="exampleInputPassword1" class="form-label">Senha:</label>
                <p></p>
                  <input type="password" class="form-control" id="password-login-input"/>
              </div>
              {/* <div class="mb-6 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Permanecer logado.</label>
              </div> */}
              {/* <button type="module" class="btn button-login">Entrar</button> */}
                                
              <div class="row">
                <div class="col">
                </div>
              </div>
            </div>
          </div>
        </form>

        <p></p>
        <button type="module" class="btn button-login">Entrar</button>
        <p></p>
        <button class="btn button-criar-conta" onClick={openModal}>Crie sua conta aqui!</button>
      
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

              <h2>Criando seu cadastro</h2>
              <hr />
              <p>
              <h4>Informe seu email:</h4>
              <input type="email" class="form-control" id="password-login-input"/>
              <h4>Senha:</h4>
              <input type="password" class="form-control" id="password-login-input"/>
              <h4>Confirmar senha:</h4>
              <input type="password" class="form-control" id="password-login-input"/>
              </p>
              <div class="row">
                
                <div class="col">
                  <button onClick={closeModal}>Close</button>

                  <button>Registrar</button>
                </div>

              </div>

        </Modal>
        </div>
    </div>
  )

}

export default Login; 