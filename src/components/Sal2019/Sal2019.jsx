import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Col, Container, Row, Image } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
import './sal2019.css';

const Sal2019 = () => {
  const reactPlayerRef = useRef();

  return (
    <Container className="main mt-5 mb-4 text-center text-md-left" fluid>
      <h2 style={{ color: '#78c2ad' }} className="font-weight-bold text-center">
        <InlineIcon icon="mdi:calendar-multiple" height="30" inline={false} /> Evénements
      </h2>
      <br /> <br />

      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <h5 style={{ color: '#78b2c2' }} className="font-weight-bold text-center ">
          <InlineIcon icon="mdi:jabber" height="30" inline={false} />1ère édition des JAP, Sal (Cap Vert) 2019
        </h5>
        <br /> <br />
        <h6 className="mt-10 mb-10 text-center text-md-left ">
          Environ 886 sportifs dont 416 athlètes féminines se sont affrontés en juin 2019 dans les 11 disciplines au programme
          <br /> de la première édition des Jeux de Africains de Plage :
          <br /> <br />
          l'athlétisme,
          le basketball 3x3,
          Beach Handball
          <br /> <br /> le Beach soccer, le beach tennis, le beach volley-ball
          <br /> <br /> l'aviron de mer, Freestyle football, le karaté Kata
          <br /> <br /> Kiteboarding, la natation en eaux libres.
          <br />
          Cette première édition regroupa 42 Comités Nationaux Olympiques africains.
        </h6>

        <br /> <br />
        <h5 style={{ color: '#78b2c2' }} className="font-weight-bold text-center">
          <InlineIcon icon="mdi:jabber" width="30" height="30" inline={false} /> Jeux Mondiaux de Plage (Doha 2019, Bali 2023)
        </h5>

        <br /> <br />
        <MDBRow className="mt-2">
          <MDBCol md="6" lg="6" xl="6" className="mb-4 dark-grey-text">
            <Card style={{ width: '100%', height: '30rem' }}>
              <Card.Img style={{ height: '20rem' }} variant="top" src="./cap01.png" />
              <Card.Body>
                <Card.Title>Doha2019</Card.Title>
                <a href="https://www.anocolympic.org/anoc-world-beach-games/anoc-world-beach-games-qatar-2019/">
                  <Button variant="primary">Voir plus</Button>
                </a>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol md="6" lg="6" xl="6" className="mb-4 dark-grey-text">
            <Card style={{ width: '100%', height: '30rem' }}>
              <Card.Img style={{ height: '20rem' }} variant="top" src="./cap02.png" />
              <Card.Body>
                <Card.Title> Bali 2023 </Card.Title>
                <a href="https://www.anocworldbeachgames.com/">
                  <Button variant="primary">Voir plus</Button>
                </a>
              </Card.Body>
            </Card>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Container>
  )
}

export default Sal2019;
