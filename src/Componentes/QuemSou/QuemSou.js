import React, { useContext } from "react";
import AppContext from "../../Context/AppContext";
import { Container, Row, Col, Image } from "react-bootstrap";

import Perfil from "../../Images/esau.svg";

import "./QuemSou.css";

function QuemSou() {
  const { lightMode } = useContext(AppContext);

  return (
    <section
      className={
        lightMode ? "modeLight" : "darkMode"
      }
    >
      <Container className="containerSobre">
        <h1>QUEM SOU</h1>
        <Row className="containerSobre2">
          <Col>
            <p>
              Meu nome é Esau Matias. Me formei como Técnico em Informática em
              2013, onde obtive conhecimentos em Javascript, porém, na época,
              não quis seguir carreira, pois havia outros sonhos, em 2021 terminei 
              a graduação em Ciências contábeis e atualmente faço o curso
              de desenvolvimento Full Stack pela trybe onde ja concluí os módulos de
              <strong> FUNDAMENTOS DO DESENVOLVIMENTO WEB</strong> e <strong>DESENVOLVIMENTO FRONT END</strong>.
            </p>
          </Col>

          <Col className="imagePerfil">
            <Image src={Perfil} alt="perfilBOneco" fluid/>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default QuemSou;
