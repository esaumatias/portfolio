import React, {useContext, useState} from 'react';
import AppContext from '../../Context/AppContext';
import {Container, Row, Col, Carousel, Button}  from 'react-bootstrap';
import projectsArray from '../../Data/Data';

import './Portfolio.css';

function Portfolio() {
  const { lightMode } = useContext(AppContext);

  function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="cardProjects" variant={lightMode ? 'dark' : 'light'}>
         {projectsArray.map((value, index) => (
            <Carousel.Item key={index}>
               <h3>{value.name}</h3>
               <img
                  src={value.image}
                  alt="First slide"
                />
              <Carousel.Caption >
                <a href={value.link} target="blank"><Button variant="secondary">Acessar</Button></a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
      </Carousel>
    );
  }
  
  
  return (
   <section className={lightMode ? 'modeLight containerPortfolio' : 'darkMode containerPortfolio'}>
     <Container>
       <Row>
        <Col className="containerTitlePorti">
          <h1>PORTFÓLIO</h1>
          <p>Aqui você irá ver alguns dos meus projetos, dos mais variados tipos.</p>
        </Col>
        <Col>
          {ControlledCarousel()}
        </Col>
        </Row>
      </Container>
   </section>
  )
}

export default Portfolio;
