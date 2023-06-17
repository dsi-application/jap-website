import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Icon, InlineIcon } from '@iconify/react';
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
  const { t } = useTranslation();

  return (
    <Container className="main center" fluid>
      <br /> <br />
      <h2 style={{ color: '#78c2ad' }} className="font-weight-bold text-center">
        <InlineIcon icon="mdi:town-hall" width="30" height="30" inline={false} /> {t("vill")}
      </h2>

      <Row xs={1} md={2} className="g-4 center">
        <CardDeck className='card-deck'>
          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 950, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> {t('acti1')} </Card.Title>
                <Card.Text className="text-left">
                  {t('acti1text')}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./parc.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 900, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> {t("hotel")} </Card.Title>
                <Card.Text className="text-left">
                  {t("hoteltext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmedina.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 1000, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'>{t("mouradi")} </Card.Title>
                <Card.Text className="text-left">
                {t("mouraditext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmenzah.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 900, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'>{t("manzah")}</Card.Title>
                <Card.Text className="text-left">
                 {t("manzahtext")}
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./hammamet.png" />
              </Card.Body>
            </Card>
          </Col>

        </CardDeck>
      </Row>
    </Container>
  )
}

export default Acit1
