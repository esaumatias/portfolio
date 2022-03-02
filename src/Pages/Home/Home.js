import React, {useContext, useEffect} from 'react';
import imageHome from '../../Images/devArt.svg';
import AppContext from '../../Context/AppContext';
import {Image, Container, Stack}  from 'react-bootstrap';
import Particles from "react-tsparticles";
import Header from '../../Componentes/Header/Header';
import Conhecimentos from '../../Componentes/Conhecimentos/Conhecimentos';
import Portfolio from '../../Componentes/Portfolio/Portfolio';
import Contato from '../../Componentes/Contato/Contato';
import Footer from '../../Componentes/Footer/Footer';

import './Home.css';

function Home() {
  const { lightMode } = useContext(AppContext);
  const color = lightMode ? '#212529' : '#ffffff';
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  
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
    <span id="home">
      <Header />
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 500,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: color,
          },
          // links: {
          //   color: color,
          //   distance: 150,
          //   enable: true,
          //   opacity: 0.5,
          //   width: 1,
          // },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      
      <section className={lightMode ? 'modeLight containerHome' : 'darkMode containerHome'}>
      <Container fluid="md" className="containerPrincipal">
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

    <Conhecimentos />

    <Portfolio />

    <Contato />

    <Footer />
    </span>
  )
}

export default Home;
