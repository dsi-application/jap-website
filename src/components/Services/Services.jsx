
    
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

import './services.css'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

import Zoom from 'react-reveal/Fade';
import { useTranslation } from "react-i18next";

const Services = () => {
  
    const reactPlayerRef = useRef();
    const { t } = useTranslation();
    return (
        
        <Container className="main center " fluid>
    
    <Fade top>    <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">
         <InlineIcon icon="mdi:kabaddi"  width="30" height="30" inline={false} /> Competition  </h2> </Fade>
    
            <Row xs={1} md={2} className="g-4 center ">

            <CardDeck className='card-deck   ' >

            <Zoom cascade>

            <Col  style={{  marginBottom: '40px'  , marginLeft: '120px'}}> 
                <Card border='primary' style={{  height: 650, width: 1000   }}>
                    <Card.Body className="main">
                        <Card.Title className='title' >{t("sports")} </Card.Title>
                        <Card.Img  style={{  height: 550, width: 900   }} variant="top" src="./PLANCHE.jpg"/>
                    </Card.Body>
                </Card>

                </Col>
                <Col   style={{  marginBottom: '40px'  , marginLeft: '120px'}}  >
                <Card  border='primary' style={{  height: 650, width: 1000  }}>
                    <Card.Body className="main">
                        <Card.Title className='title'> {t("participants")} </Card.Title>
                        <Card.Img   style={{  height: 550, width: 900   }} variant="top" src="./drapeaux1.png"/>

                    </Card.Body>
                </Card>

                </Col>
          </Zoom>

            </CardDeck>
        </Row>
     


        </Container>
    )
}

export default Services
