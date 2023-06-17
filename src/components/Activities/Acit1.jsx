import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Icon, InlineIcon } from '@iconify/react';

import Zoom from 'react-reveal/Fade';


import './styleAcit.css'
import { useTranslation } from "react-i18next";


import {
  Container,
  Row,
  Card,
  Col,
  CardDeck,
} from 'react-bootstrap';

const Acit1 = () => {
  const reactPlayerRef = useRef();
  const {t,i18n} = useTranslation();

  return (
    <Container className="main center" fluid>
      <br /> <br />
      <h2 style={{ color: '#78c2ad' }} className="font-weight-bold text-center">
        <InlineIcon icon="mdi:town-hall" width="30" height="30" inline={false} /> {t("vill")}
      </h2>

      <Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                 <Card.Body className="main">
                <Card.Title className='title'> {t('acti1')} </Card.Title>
                <Card.Text className={i18n.language === "ar" ? "text-right" : "text-left"}>
                  {t('acti1text')}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./parc.png" />
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
                <Card.Title className='title'> {t("hotel")} </Card.Title>
                <Card.Text className={i18n.language === "ar" ? "text-right" : "text-left"}>
                  {t("hoteltext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmedina.png" />
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
                <Card.Title className='title'>{t("mouradi")} </Card.Title>
                <Card.Text className={i18n.language === "ar" ? "text-right" : "text-left"}>
                {t("mouraditext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmenzah.png" />
              </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
           < Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                 <Card.Body className="main">
                <Card.Title className='title'>{t("manzah")}</Card.Title>
                <Card.Text className={i18n.language === "ar" ? "text-right" : "text-left"}>
                 {t("manzahtext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./hammamet.png" />
              </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
            

     

        
    </Container>
  )
}

export default Acit1
