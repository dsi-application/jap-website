import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { useTranslation } from 'react-i18next';

import {
  Col,
  Container,
  Row,
  Image
} from 'react-bootstrap';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { Icon, InlineIcon } from '@iconify/react';

import './sal2019.css';

const Sal2019 = () => {
  const { t } = useTranslation();

  const reactPlayerRef = useRef();

  return (
    <Container className="main mt-5 mb-4 text-center text-md-left" fluid>
      <h2 style={{ color: '#00B451' }} className="font-weight-bold text-center">
        <InlineIcon icon="mdi:calendar-multiple" width="30" height="30" inline={false} /> {t("events")}
      </h2>
      <br /> <br />

      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <h5 style={{ color: '#00A7E1' }} className="text">
          <InlineIcon icon="mdi:jabber" width="30" height="30" inline={false} /> {t("firstEdition")} Sal (Cap Vert) 2019
        </h5>
        <br /> <br />
        <h6 className="text">
          {t("salDescription")}
        </h6>

        <br /> <br />
        <h5 style={{ color: '#00A7E1' }} className="text">
          <InlineIcon icon="mdi:jabber" width="30" height="30" inline={false} /> {t("worldGames")} (Doha 2019, Bali 2023)
        </h5>

        <br /> <br />
        <MDBRow className="mt-2">
          <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
            <Card style={{ width: '100%', height: '30rem' }}>
              <Card.Img style={{ width: '100%', height: '20rem' }} variant="top" src="./cap01.png" />
              <Card.Body>
                <Card.Title>Doha 2019</Card.Title>
                <a href="https://www.anocolympic.org/anoc-world-beach-games/anoc-world-beach-games-qatar-2019/">
                  <Button variant="primary">{t("seeMore")}</Button>
                </a>
              </Card.Body>
            </Card>
          </MDBCol>
          <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
            <Card style={{ width: '100%', height: '30rem' }}>
              <Card.Img style={{ width: '100%', height: '20rem' }} variant="top" src="./cap02.png" />
              <Card.Body>
                <Card.Title>Bali 2023</Card.Title>
                <a href="https://www.anocworldbeachgames.com/">
                  <Button variant="primary">{t("seeMore")}</Button>
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
