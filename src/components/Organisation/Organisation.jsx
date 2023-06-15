import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { Icon, InlineIcon } from '@iconify/react';

import {
    Col,
    Container,
    Row,
    Image , Card, ListGroup, Tab 
} from 'react-bootstrap'

import './organisation.css'

import Fade from 'react-reveal/Fade';
import RubberBand from 'react-reveal/RubberBand';




const Organisation = () => {


    return (
      
        <Container className="main mt-5 mb-4 text-center text-md-left "   fluid>
            <br />
            <br />
            <br/>

            <Tab.Container style={{ marginBottom: "80px" }}>
              <Col>
                <Row className=" text-center text-md-left ">
                <Fade top>
                    <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">
                    <InlineIcon icon="mdi:calendar-multiple"  width="30" height="30" inline={false} /> Organisation </h2>
                </Fade>
     <br/> <br/>

                    <br/> <br/> 
                  
                </Row>

            <br/> <br/>
                <Tab.Container defaultActiveKey="#link1" >
                  <Row className="margin-top-80" >
                    <Col sm={4}>
                      <ListGroup>
                        <ListGroup.Item action href="#link1"  style={{ color: 'WHITE', backgroundColor: '#507d70'}} >
                          Propriété de l’ACNOA                   </ListGroup.Item>
                        <ListGroup.Item action href="#link2"  style={{ color: 'WHITE', backgroundColor: '#649f8e'}} >
                        Le Comité d’organisation   
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" style={{ color: 'WHITE', backgroundColor: '#78c2ad'}}>
                        Le haut comité de soutien
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link4" style={{ color: 'WHITE', backgroundColor: '#84ceb9'}}>
                        Les commissions
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link5" style={{ color: 'WHITE', backgroundColor: '#8fdac4'}}>
                        Les services régionaux et locaux
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link6" style={{ color: 'WHITE', backgroundColor: '#9be6d0'}}>
                        Les bénévoles
                        </ListGroup.Item>
               
                      </ListGroup>
                    </Col>

                    <Col sm={8}>
                      <Tab.Content>
    

                        <Tab.Pane eventKey="#link1">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "46rem" }}>
                              <Card.Text className=" text-left">    Propriété de l’ACNOA    </Card.Text>

                    
                                <Card.Img variant="top" src="./comite.jpg"/>
              

                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                         <Tab.Pane eventKey="#link2">
                          <div>
                            <h4>   Le Comité d’organisation    </h4>
                            <h6 >
                            Les Jeux africains de plage sont un événement multi-sports regroupant des disciplines qui se déroulent sur la plage.
                            <br/> <br/>
                           Ils sont organisés par l’Association des comités nationaux olympiques d’Afrique (ACNOA).
                            </h6>
                                        
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#link3">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "46rem" }}>
                              <Card.Text className=" text-left"> Le haut comité de soutien   </Card.Text>
                                <Card.Img variant="top" src="./haut.jpg"/>
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "46rem" }}>
                              <Card.Text className=" text-left">  Les commissions  </Card.Text>
                                <Card.Img variant="top" src="./commissions.jpg"/>
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                          <h4> Les services régionaux et locaux  </h4>                        </Tab.Pane>
                       

                        <Tab.Pane eventKey="#link6">

                          <h4>  Les bénévoles  </h4>
                          
                            <h6 >Plus de 300 bénévoles apporteront leur soutien à l’organisation et <br /> <br />
                            assureront l’accueil à l’aéroport, aux hôtels et sur le site des compétitions. <br /> <br />
                            Ils seront au service des délégations pour tout renseignement et assistance, <br /> <br />
                            pour le meilleur séjour possible des participants, le bon déroulement des entrainements et des compétitions. <br />  <br />
                           Plusieurs partenariats avec les associations nationales et régionales ont été conclu <br />  <br />
                           tel que celui avec l’Association des Étudiants et Stagiaires Africains en Tunisie qui mettra à disposition environ 50 bénévoles.
                          </h6>
                      
                            
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Tab.Container>

      


            
        </Container>
    )
}

export default Organisation
