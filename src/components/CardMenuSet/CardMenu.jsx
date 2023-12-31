import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Icon, InlineIcon } from '@iconify/react';
import {
  Container,
  Row,
  Card,
  Col,
  CardDeck,
} from 'react-bootstrap'
import './CardMenuStyles.css'
import Zoom from 'react-reveal/Fade';
import Fade from 'react-reveal/Fade';

const CardMenu = () => {
  const reactPlayerRef = useRef();

  return (
    <Container >
      <Fade top>
        <h2 style={{ color: '#78c2ad' }} className="font-weight-bold text-center">
          <InlineIcon icon="mdi:calendar-multiple" width="30" height="30" inline={false} /> Tableaux sportifs
        </h2>
      </Fade>

      <Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                <Card.Body className="main">
                  <Card.Title className='title'>Calendrier Général des Jeux Africains</Card.Title>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./calendriergeneral.PNG" />
                </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
            <Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                <Card.Body className="main">
                  <Card.Title className='title'>Calendrier de compétition</Card.Title>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./calendrierdecompetition.PNG" />
                </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
            <Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                <Card.Body className="main">
                  <Card.Title className='title'>Sports par arènes</Card.Title>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./sportspararenes.PNG" />
                </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
            {/* <Col xs={1} md={2} className="g-4 center">
            <CardDeck className='card-deck'>
          <Zoom cascade>
            <Row style={{ marginBottom: '40px', marginLeft: '120px' }}>
              <Card border='primary' style={{ height: 650, width: 1000 }}>
                <Card.Body className="main">
                  <Card.Title className='title'>Calendrier de compétition</Card.Title>
                  <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./calendrierdecompetition.PNG" />
                </Card.Body>
              </Card>
            </Row>
            </Zoom>
        </CardDeck>
            </Col>
            <Col xs={1} md={2} className="g-4 center">
            <CardDeck className='card-deck'>
          <Zoom cascade>
            <Row style={{ marginBottom: '40px', marginLeft: '120px' }}>
              <Card border='primary' style={{ height: 650, width: 1000 }}>
                <Card.Body className="main">
                  <Card.Title className='title'>Sports par arènes</Card.Title>
                  <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./sportspararenes.PNG" />
                </Card.Body>
              </Card>
            </Row>
          </Zoom>
        </CardDeck>
      </Col> */}
    </Container>
  )
}

export default CardMenu;
