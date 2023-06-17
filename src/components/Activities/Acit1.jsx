import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Icon, InlineIcon } from '@iconify/react';
import './styleAcit.css';
import Zoom from 'react-reveal/Fade';


import {
  Container,
  Row,
  Card,
  Col,
  CardDeck,
} from 'react-bootstrap';

const Acit1 = () => {
  const reactPlayerRef = useRef();

  return (
    <Container className="main center" fluid>
      <br /> <br />
      <h2 style={{ color: '#78c2ad' }} className="font-weight-bold text-center">
        <InlineIcon icon="mdi:town-hall" width="30" height="30" inline={false} /> Le village des athlètes
      </h2>

      <Row className="justify-content-md-center">
        <CardDeck className='card-deck'>
          <Zoom cascade>
            <Col xs="12" lg="12">
              <Card border='primary' style={{ height: "100%", width: "100%" }}>
                <Card.Body className="main">
                  <Card.Title className='title'> Le Parc Olympique, Yasmine Hammamet</Card.Title>
                  <Card.Text className="text-left">
                  La station touristique Yasmine Hammamet, située dans la zone sud de la ville, s'étend sur
                  277 hectares avec une façade maritime de 4 kilomètres. Elle dispose d'un port de plaisance,
                  de 46 unités hôtelières, dont 80 % sont des 4 et 5 étoiles, et de 20 % d'unités résidentielles.
                  Elle comprend également une reproduction d'une médina arabe appelée Médina Mediterranea, un parc
                  à thèmes appelé « Carthage Land », l'un des plus grands centres de conférences de Tunisie, deux casinos,
                  une esplanade de 1,5 kilomètre de long avec des galeries commerciales, sept centres de thalassothérapie,
                  des espaces verts et des centres d'animation. Les 2èmes Jeux Africains de Plage auront lieu dans cette
                  station en juin 2023, où les sportifs et la jeunesse africaine célébreront ensemble
                  les valeurs de l'amitié, du respect et de l'excellence.
                </Card.Text>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./parc.png" />
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
                  <Card.Title className='title'> Hôtel de la Famille Olympique, Diar El Medina</Card.Title>
                  <Card.Text className="text-left">
                  L'hôtel Diar El Medina est un établissement de luxe à Hammamet, en Tunisie,
                  proche de la plage et des sites touristiques locaux. Avec son architecture traditionnelle
                  et des chambres confortables décorées dans un style typiquement tunisien, cet hôtel offre
                  un cadre idéal pour se détendre. Les installations comprennent un grand jardin, une piscine
                  extérieure, un spa, un restaurant proposant une cuisine locale et internationale et un bar.
                  L'hôtel accueillera l'exécutif de l'ACNOA, les membres du CIO, les présidents des CNOs et d'autres
                  invités spéciaux, ainsi que les assemblées générales de l'ACNOA et de l'AANOA.
                </Card.Text>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./elmedina.png" />
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
                  <Card.Title className='title'>Hôtel El Mouradi El Menzah</Card.Title>
                  <Card.Text className="text-left">
                  L'hôtel El Mouradi El Menzah à Yasmine Hammamet en Tunisie est un établissement renommé avec
                  une architecture moderne et élégante, situé près de la plage de sable fin. Les chambres spacieuses
                  et bien équipées offrent une vue imprenable sur la mer ou sur le jardin luxuriant. Les clients peuvent
                  profiter des 4 restaurants, 3 bars, un café maure et un disco pub, ainsi que d'un room-service 24/24.
                  L'hôtel dispose également de 3 piscines extérieures, une piscine couverte avec jacuzzi et un centre de
                  thalassothérapie équipé d'un hammam, de 2 saunas et de 5 salles de soins de beauté. Les activités comprennent
                  des sports nautiques, des excursions dans les environs ou tout simplement se détendre sur la plage ou au bord
                  de la piscine. L'équipe de l'hôtel est très professionnelle et accueillante, offrant un service personnalisé pour
                  satisfaire les besoins de tous les clients. L'hôtel El Mouradi El Menzah est l'endroit idéal pour se détendre et
                  profiter du soleil et de la mer en Tunisie.
                  Il hébergera les athlètes et leur staff technique des Jeux Africains de plage 2023.
                </Card.Text>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./elmenzah.png" />
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
                  <Card.Title className='title'>Hôtel El Mouradi Hammamet</Card.Title>
                  <Card.Text className="text-left">
                  L'hôtel El Mouradi El Menzah à Yasmine Hammamet en Tunisie est un établissement renommé avec
                  une architecture moderne et élégante, situé près de la plage de sable fin. Les chambres spacieuses
                  et bien équipées offrent une vue imprenable sur la mer ou sur le jardin luxuriant. Les clients peuvent
                  profiter des 4 restaurants, 3 bars, un café maure et un disco pub, ainsi que d'un room-service 24/24.
                  L'hôtel dispose également de 3 piscines extérieures, une piscine couverte avec jacuzzi et un centre de
                  thalassothérapie équipé d'un hammam, de 2 saunas et de 5 salles de soins de beauté. Les activités comprennent
                  des sports nautiques, des excursions dans les environs ou tout simplement se détendre sur la plage ou au bord
                  de la piscine. L'équipe de l'hôtel est très professionnelle et accueillante, offrant un service personnalisé pour
                  satisfaire les besoins de tous les clients. L'hôtel El Mouradi El Menzah est l'endroit idéal pour se détendre et
                  profiter du soleil et de la mer en Tunisie.
                  Il hébergera les athlètes et leur staff technique des Jeux Africains de plage 2023.
                </Card.Text>
                  <Card.Img style={{ height: "100%", width: "100%" }} variant="top" src="./hammamet.png" />
                </Card.Body>
              </Card>
            </Col>
            </Zoom>
        </CardDeck>
            </Row>
            

      {/* <Row xs={1} md={2} className="g-4 center">
        <CardDeck className='card-deck'>
          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 950, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> Le Parc Olympique, Yasmine Hammamet </Card.Title>
                <Card.Text className="text-left">
                  La station touristique Yasmine Hammamet, située dans la zone sud de la ville, s'étend sur
                  277 hectares avec une façade maritime de 4 kilomètres. Elle dispose d'un port de plaisance,
                  de 46 unités hôtelières, dont 80 % sont des 4 et 5 étoiles, et de 20 % d'unités résidentielles.
                  Elle comprend également une reproduction d'une médina arabe appelée Médina Mediterranea, un parc
                  à thèmes appelé « Carthage Land », l'un des plus grands centres de conférences de Tunisie, deux casinos,
                  une esplanade de 1,5 kilomètre de long avec des galeries commerciales, sept centres de thalassothérapie,
                  des espaces verts et des centres d'animation. Les 2èmes Jeux Africains de Plage auront lieu dans cette
                  station en juin 2023, où les sportifs et la jeunesse africaine célébreront ensemble
                  les valeurs de l'amitié, du respect et de l'excellence.
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./parc.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 900, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> Hôtel de la Famille Olympique, Diar El Medina </Card.Title>
                <Card.Text className="text-left">
                  L'hôtel Diar El Medina est un établissement de luxe à Hammamet, en Tunisie,
                  proche de la plage et des sites touristiques locaux. Avec son architecture traditionnelle
                  et des chambres confortables décorées dans un style typiquement tunisien, cet hôtel offre
                  un cadre idéal pour se détendre. Les installations comprennent un grand jardin, une piscine
                  extérieure, un spa, un restaurant proposant une cuisine locale et internationale et un bar.
                  L'hôtel accueillera l'exécutif de l'ACNOA, les membres du CIO, les présidents des CNOs et d'autres
                  invités spéciaux, ainsi que les assemblées générales de l'ACNOA et de l'AANOA.
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmedina.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 1000, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> Hôtel El Mouradi El Menzah </Card.Title>
                <Card.Text className="text-left">
                  L'hôtel El Mouradi El Menzah à Yasmine Hammamet en Tunisie est un établissement renommé avec
                  une architecture moderne et élégante, situé près de la plage de sable fin. Les chambres spacieuses
                  et bien équipées offrent une vue imprenable sur la mer ou sur le jardin luxuriant. Les clients peuvent
                  profiter des 4 restaurants, 3 bars, un café maure et un disco pub, ainsi que d'un room-service 24/24.
                  L'hôtel dispose également de 3 piscines extérieures, une piscine couverte avec jacuzzi et un centre de
                  thalassothérapie équipé d'un hammam, de 2 saunas et de 5 salles de soins de beauté. Les activités comprennent
                  des sports nautiques, des excursions dans les environs ou tout simplement se détendre sur la plage ou au bord
                  de la piscine. L'équipe de l'hôtel est très professionnelle et accueillante, offrant un service personnalisé pour
                  satisfaire les besoins de tous les clients. L'hôtel El Mouradi El Menzah est l'endroit idéal pour se détendre et
                  profiter du soleil et de la mer en Tunisie.
                  Il hébergera les athlètes et leur staff technique des Jeux Africains de plage 2023.
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./elmenzah.png" />
              </Card.Body>
            </Card>
          </Col>

          <Col style={{ marginBottom: '40px', marginLeft: '120px' }}>
            <Card border='primary' style={{ height: 900, width: 1000 }}>
              <Card.Body className="main">
                <Card.Title className='title'> Hôtel El Mouradi Hammamet </Card.Title>
                <Card.Text className="text-left">
                  L'hôtel El Mouradi Hammamet est un établissement renommé situé sur la côte est de la Tunisie,
                  en bordure de la plage de sable fin de Yasmine-Hammamet. Les chambres sont spacieuses et équipées
                  de tout le nécessaire pour un séjour confortable. L'hôtel dispose d'un grand parc, d'une piscine extérieure,
                  d'un centre de remise en forme, d'un spa proposant une variété de soins et de massages, ainsi que de plusieurs
                  restaurants servant une cuisine internationale et tunisienne. L'équipe de l'hôtel est professionnelle et attentive
                  aux besoins des clients. C'est une destination idéale pour se détendre et profiter de la beauté naturelle de la Tunisie.
                  Il accueillera plusieurs groupes et représentants lors de l'événement.
                </Card.Text>
                <Card.Img style={{ height: 550, width: 900 }} variant="top" src="./hammamet.png" />
              </Card.Body>
            </Card>
          </Col>

        </CardDeck>
      </Row> */}
    </Container>
  )
}

export default Acit1
