import React, {useState} from 'react';
import styles from "../login/Login.css";
import imagens from "../../imagens/Logo ft black.png";
import Modal from 'react-modal';
import { FormGroup, Label, Form, Input, Card, Button  } from 'reactstrap';
Modal.setAppElement("#root");

const Login = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    // METODO CADASTRAR - MODAL
    const cadastrar = async (e) => {
      // const {createUser, error,setError, loading } = useAuthentication();
      e.preventDefault()

      if(email == ("")){
        alert("Informe um email válido!");
        return;
      }

      if(password == ("")){
        alert("Informe uma senha!");
        return;
      }

      if(confirmPassword == ("")){
        alert("Confirme a senha!");
        return;
      }

      if(password !== confirmPassword){
        alert("As senhas precisam ser iguais!");
        return;
      }

      if(password.length < 6) {
        alert("A senha precisa ter no mínimo 6 digitos.");
        return;
      }
      
      // const res = await createUser (user)

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
            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="modal-style">
              <FormGroup>
                <h2>Criando novo cadastro</h2>
                <hr/>
                  <p></p>

                    {/* EMAIL */}
                    <label>Informe seu email:</label>
                    <br></br>
                    <input type="email" 
                    name="email" 
                    style={{textTransform:"uppercase"}} 
                    class="input-modal" 
                    value={email} 
                    required 
                    onChange={(e) => setEmail(e.target.value)}
                    />

                    <br></br>

                    {/* SENHA */}
                    <label>Senha:</label>
                    <br></br>
                    <input type="password"
                    name = "password"
                    class="input-modal" 
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {/* CONFIRMAR SENHA */}
                    <label>Confirme a senha:</label>
                    <br></br>
                    <input type="password"
                    name = "confirmPassword"
                    class="input-modal" 
                    value={confirmPassword}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />

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