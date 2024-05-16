import React, {useState} from 'react';
import styles from "../login/Login.css";
import imagens from "../../imagens/Logo ft black.png";
import Modal from 'react-modal';
import { FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';
Modal.setAppElement("#root");

const Login = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [email, setEmail]= useState("")
    // METODO CADASTRAR
    const cadastrar = async (e) => {
      e.preventDefault()
      // if(email)

      alert("teste modal cadastro")

    }


    // METODO DA MODAL
    function openModal() {
      setIsOpen(true);
    }

    function closeModal() {
      setIsOpen(false);
    }

    return (
      
        <div class="container">

            <form class="form-basic" action="home.html">
                  
                    <div align="left">
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

{/* MODAL */}
          <div className = "modal"> 
          {/* https://reactcommunity.org/react-modal/ */}
            <Modal 
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              className="modal-style"
            >
              <FormGroup>
                <h2>Criando novo cadastro</h2>
                <hr/>
                  <p></p>
                    <label>Informe seu email:</label>
                    <br></br>
                    <input type="email" class="input-modal" name="email"/>
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
                        <button class="btn button-modal" onClick={cadastrar}>Cadastrar</button>
                    </div>
                  </div>
                  </FormGroup>
            </Modal>
          </div>
        </div>
  )
}

export default Login; 