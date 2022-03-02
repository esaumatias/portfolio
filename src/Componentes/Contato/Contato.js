import React, {useContext} from 'react';
import AppContext from '../../Context/AppContext';
import {Button, Container, Nav, Form}  from 'react-bootstrap';
import './Contato.css';

function Contato() {
  const { lightMode } = useContext(AppContext);
  return (
    <span className={lightMode ? 'modeLight contatos' : 'darkMode contatos'} id="contato">
                    <h1>CONTATO</h1>
      <Container className="containerAllContatos">
        <div className="contatosContainer">
          <section className="sectionImageContacts">
            <h3>Fale comigo</h3>
            <Form action="https://formsubmit.co/esaufreirematias@gmail.com" method="POST">
              <input type="hidden" name="_captcha" value="false"/>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" name="name" required placeholder="escreva seu nome" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" required placeholder="escreva seu email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Mensagem</Form.Label>
                <Form.Control as="textarea" type="textarea" name="textarea"rows={3} />
              </Form.Group>
              
              <Button variant={lightMode ? "dark" : "light"} type="submit">
                Enviar
              </Button>
              <input type="hidden" name="_next" value="https://pokedex-woad-beta.vercel.app/"></input>
            </Form>
          </section>

          <section className="sectionTextContacts">
            <div className="box">
              <p> <i class="fas fa-phone" id={lightMode ? "light" : "dark"}></i>+55 84 98842 - 0786</p>
              <p> <i class="fas fa-envelope" id={lightMode ? "light" : "dark"}></i>esaufreirematias@gmail.com</p>
              <p> <i class="fas fa-map-marked-alt" id={lightMode ? "light" : "dark"}></i>Natal, RN - Brasil.</p>
            </div>
            
            <div class="socials">
              <ul class="social-icons">
                <li><a class={lightMode ? "linkedin light" : "linkedin dark"} href="https://www.linkedin.com/in/esau-freire-matias/" target="noopener"><i class="fab fa-linkedin"></i></a></li> 
                <li><a class={lightMode ? "github light" : "github dark"} href="https://github.com/esaumatias" target="noopener"><i class="fab fa-github"></i></a></li>
                <li><a class={lightMode ? "instagram light" : "instagram dark"} href="https://www.instagram.com/esau_matias/" target="noopener"><i class="fab fa-instagram" target="noopener"></i></a></li>
              </ul>
            </div>
          </section>
        </div>
      </Container>
    </span>
  );
}

export default Contato;
