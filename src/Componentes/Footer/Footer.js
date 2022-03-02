import React, { useContext} from 'react';
import {Row, Container, Col}  from 'react-bootstrap';
import AppContext from '../../Context/AppContext';

import './Footer.css';

function Footer() {
  const { lightMode } = useContext(AppContext);
  return (
    <section className={lightMode ? 'modeLight' : 'darkMode'}>
      <Container className="footer">
        <Row className="containerFooter">
          <Col>© 2022 Esau Matias</Col>
          <Col>
            <div class="socials">
              <ul class="social-icons containersoci">
                <li><a class={lightMode ? "linkedin light" : "linkedin dark"} href="https://www.linkedin.com/in/esau-freire-matias/" target="noopener"><i class="fab fa-linkedin"></i></a></li> 
                <li><a class={lightMode ? "github light" : "github dark"} href="https://github.com/esaumatias" target="noopener"><i class="fab fa-github"></i></a></li>
                <li><a class={lightMode ? "instagram light" : "instagram dark"} href="https://www.instagram.com/esau_matias/" target="noopener"><i class="fab fa-instagram" target="noopener"></i></a></li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer;
