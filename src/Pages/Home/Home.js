import React, {useContext, useEffect} from 'react';
import imageHome from '../../Images/devArt.svg';
import AppContext from '../../Context/AppContext';
import {Image, Container, Stack}  from 'react-bootstrap';
import Header from '../../Componentes/Header/Header';
import Conhecimentos from '../../Componentes/Conhecimentos/Conhecimentos';
// import QuemSou from '../../Componentes/QuemSou/QuemSou';

import './Home.css';

function Home() {
  const { lightMode } = useContext(AppContext);
  
  useEffect(() => {
    function typeWrite(elemento){
      const textoArray = elemento.innerHTML.split('');
      elemento.innerHTML = ' ';
      textoArray.forEach(function(letra, i){   
        
      setTimeout(function(){
          elemento.innerHTML += letra;
      }, 75 * i)
  
    });
  }
  const titulo = document.querySelector('.titulo-principal');
  typeWrite(titulo);
  }, [])

  return (
    <>
      <Header />
      <section className={lightMode ? 'modeLight containerHome' : 'darkMode containerHome'}>
      <Container fluid="md">
        <Stack className="containerTextPrincipal" direction="horizontal" gap={2}>

          <div className="containerRight">
            <Image fluid src={imageHome} alt="developer"/>
          </div>

          <div className="typewriter containerLefth">
            <p>Olá, eu sou</p>
            <h3>Esau Matias.</h3>
            <h1 className="titulo-principal">Front-end developer.</h1>
          </div>

        </Stack>
      </Container>
      <section className={lightMode ? "socialContainerLigth" : "socialContainerDark"}>
        <a className="social" href="https://www.linkedin.com/in/esau-freire-matias/" target="blank">
          <img src="https://img.icons8.com/stickers/100/000000/linkedin.png" alt="linkedin"/>
          <span>Linkedin</span>
        </a>

        <div className="bar">
          <div></div>
        </div>

        <a className="social" href="https://github.com/esaumatias" target="blank">
          <img src="https://img.icons8.com/stickers/100/000000/github.png" alt="GitHub"/>
          <span>GitHub</span>
        </a>
      </section>
    </section>

    {/* <QuemSou /> */}

    <Conhecimentos />
    </>
  )
}

export default Home;
