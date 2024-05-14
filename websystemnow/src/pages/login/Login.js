import React, {useState, useEffect} from 'react';
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
    // <div className={styles.Login} class="container">
    // <div className="Container">
    <div>
      <body>
      <div class="row vh-100">
        <form  id="login-form" action="home.html" class="form-login">
          {/* <div class="d-flex justify-content-center my-5 flex-column"> */}
            {/* <div class="container"> */}
              <div class="text-cente mb-6">
              {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
                <img src={imagens} alt="logo sinos"></img>
              </div>
           
              <div class="mb-6">
                <label for="exampleInputEmail1">E-mail:</label>
                <br></br>
                  <input type="email" class="form-control" id="email-login-input" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">Utilize seu e-mail para realizar o login.</div>
              </div>
              <p></p>
              <div class="mb-6">
                <label for="exampleInputPassword1">Senha:</label>
                <br></br>
                  <input type="password" class="form-control" id="password-login-input"/>
              </div>
              <div class="mb-6 form-check">
                  {/* <input type="checkbox" class="form-check-input" id="exampleCheck1"/> */}
                {/* <label class="form-check-label" for="exampleCheck1">Permanecer logado.</label> */}
              </div>
                                
              <div class="row">
                <div class="col">
                </div>
              {/* </div> */}
            {/* </div> */}
          </div>
        </form>
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
              <hr />
              <p></p>
                <label>Informe seu email:</label>
                <input type="email" class="form-control" id="password-login-input"/>
                <p></p>
                <label>Senha:</label>
                <input type="password" class="form-control" id="password-login-input"/>
                <p></p>
                <label>Confirmar senha:</label>
                <input type="password" class="form-control" id="password-login-input"/>
              <div class="row">
                <br></br>
                  <button class="btn button-basic" onClick={closeModal}>Cancelar</button>
                  <br></br>
                  <br></br>
                  <button class="btn button-basic">Registrar</button>

              </div>

        </Modal>
        </div>
      </body>
    </div>
  )

}

export default Login; 