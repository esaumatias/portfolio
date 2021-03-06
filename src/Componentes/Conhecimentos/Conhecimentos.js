import React, { useContext, useState } from 'react';
import AppContext from '../../Context/AppContext';
import {Container, Row, Col}  from 'react-bootstrap';

import QuemSou from '../QuemSou/QuemSou';

import './Conhecimentos.css';

function Conhecimentos() {
  const { lightMode } = useContext(AppContext);
  const [text, setTest] = useState(0);

  function mudarText() {
    if(text === 0) {
      return <div>*passe o cursor do mouse no card para ler*</div>
    } else if (text === 1) {
      return <div>HTML é uma linguagem baseada em marcação, onde marcamos os elementos para definir quais informações a página vai exibir.</div>
    } else if (text === 2) {
      return <div>CSS é uma linguagem de folha de estilo composta por “camadas”, criado com o propósito de estilizar as páginas HTML.</div>
    } else if (text === 3) {
      return <div>JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.</div>
    } else if (text === 4) {
      return <div>ReactJS é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.</div>
    } else if (text === 5) {
      return <div>O React-Bootsrap é uma biblioteca que nos oferece os componentes clássicos do Bootstrap construídos em React. </div>
    } else if (text === 6) {
      return <div>Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo.</div>
    } else if (text === 7) {
      return <div>GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git.</div>
    } else if (text === 8) {
      return <div>API é uma interface que viabiliza a comunicação entre dois sistemas ou plataformas distintas, possibilitando agregar funções diversificadas a sites e aplicativos.</div>
    } else if (text === 9) {
      return <div>A Context API é uma forma de compartilhar dados entre componentes em diferentes níveis de uma árvore de elementos, muito utilizado para evitar prop drilling e até mesmo como um gerenciador de estados.</div>
    }
  }

  return (
    <section className={lightMode ? 'modeLight containerConhecimentos' : 'darkMode containerConhecimentos'} id="quemSou">
      <Container>
        <QuemSou />
        <div id="conhecimentos">
          <Col onMouseOver={() => setTest(0)}  className="containerTitleName">
            <div>
              <h1>CONHECIMENTOS</h1>
              {mudarText()}
            </div>
          </Col>

          <Col>
            <Row className="containerCardsConheci">
              <div onMouseOver={() => setTest(1)} className={lightMode ? 'light' : 'dark'}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 1 ? <p>HTML 5</p> : <p></p>}
                <img src="https://img.icons8.com/color/480/000000/html-5--v1.png" alt="HTML"/>
              </div>

              <div onMouseOver={() => setTest(2)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 2 ? <p>CSS</p> : <p></p>}
                <img src="https://img.icons8.com/color/480/000000/css3.png" alt="css3" />
              </div>

              <div onMouseOver={() => setTest(3)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 3 ? <p>JavaScript</p> : <p></p>}
                <img src="https://img.icons8.com/color/480/000000/javascript--v1.png" alt="javascript" />
              </div>

              <div onMouseOver={() => setTest(4)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 4 ? <p>ReactJS</p> : <p></p>}
                <img src="https://img.icons8.com/office/480/000000/react.png" alt="reactJs"/>
              </div>
              
              <div onMouseOver={() => setTest(5)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 5 ? <p>Bootstrap</p> : <p></p>}
                <img src="https://img.icons8.com/color/480/000000/bootstrap.png" alt="bootstrap"/>
              </div>

              <div onMouseOver={() => setTest(6)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 6 ? <p>Redux</p> : <p></p>}
                <img src="https://img.icons8.com/color/480/000000/redux.png" alt="redux" />
              </div>

              <div onMouseOver={() => setTest(7)} className={lightMode ? 'light' : 'dark'}>
              <span></span>
                <span></span>
                <span></span>
                <span></span>
                {text === 7 ? <p>GitHub</p> : <p></p>}
                <img src="https://img.icons8.com/plasticine/400/000000/github-squared.png" alt="GitHub" />
              </div>

              <div onMouseOver={() => setTest(8)} className={lightMode ? 'light' : 'dark'}>
                <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {text === 8 ? <p>API</p> : <p></p>}
                <img src="https://img.icons8.com/plasticine/100/000000/api.png" alt="api"/>
              </div>

              <div onMouseOver={() => setTest(9)} className={lightMode ? 'light' : 'dark'}>
                <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  {text === 9 ? <p>CONTEXT API</p> : <p></p>}
                  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-context-automation-technology-flaticons-flat-flat-icons.png" alt="context API"/>
              </div>
            </Row>
          </Col>
        </div>
      </Container>
    </section>
  )
}

export default Conhecimentos;
