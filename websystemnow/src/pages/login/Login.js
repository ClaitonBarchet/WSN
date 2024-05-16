import React, {useState} from 'react';
import styles from "../login/Login.css";
import imagens from "../../imagens/Logo ft black.png";
import Modal from 'react-modal';
import { Container, Row, Col } from 'reactstrap';

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

    // export default class Example extends React.Component {
      // render() {

    return (
      
      // <body>
        <div class="container">
          
      {/* <Container>
        <Row>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
        </Row>
      </Container> */}

            <form class="form-basic" action="home.html">
                  
                    <div align="center">
                      {/* https://pt.stackoverflow.com/questions/309953/como-inserir-imagem-usando-react-js */}
                      <img src={imagens} alt="logo sinos"></img>
                    </div>
                 
                  <div align="left">
                    <label>E-mail:</label>
                      <div>
                      <input type="email" class="input-form" id="email-login-input"/>
                      </div>
                  </div>

                  <div align="left">
                    <label class="text-form" >Utilize seu e-mail para realizar o login.</label>
                    <br></br>
                  </div>

                  <p></p>
                  <div align="left">
                    <label>Senha:</label>
                    <div>
                    <input type="password" class="input-form" id="password-login-input"/>
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
                  <input type="email" class="input-modal" id="password-login-input"/>
                  <br></br>
                  <label>Senha:</label>
                  <br></br>
                  <input type="password" class="input-modal" id="password-login-input"/>
                  <br></br>
                  <label>Confirmar senha:</label>
                  <br></br>
                  <input type="password" class="input-modal" id="password-login-input"/>
                <div>
                  <div>
                      <button class="btn button-modal" onClick={closeModal}>Cancelar</button>                   
                      <button class="btn button-modal">Registrar</button>
                  </div>
                </div>

          </Modal>
          </div>
        </div>
      // </body>
      
  )
// }
// }

}

export default Login; 