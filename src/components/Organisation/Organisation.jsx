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

import { useTranslation } from "react-i18next";


const Organisation = () => {
  const { t } = useTranslation();

    return (
      
        <Container className="main mt-5 mb-4 text-center text-md-left "   fluid>
            <br />
            <br />
            <br/>

            <Tab.Container style={{ marginBottom: "80px" }}>
              <Col>
                <Row className=" text-center text-md-left ">
                <Fade top>
                    <h2  style={{ color: '#00B451'}} className="font-weight-bold  text-center">
                    <InlineIcon icon="mdi:calendar-multiple"  width="30" height="30" inline={false} /> {t("organisation")}</h2>
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
                         {t("prop")}                  </ListGroup.Item>
                        <ListGroup.Item action href="#link2"  style={{ color: 'WHITE', backgroundColor: '#649f8e'}} >
                     {t("comite")}
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link3" style={{ color: 'WHITE', backgroundColor: '#78c2ad'}}>
                       {t("haut")}
                       </ListGroup.Item>
<ListGroup.Item action href="#link4" style={{ color: 'WHITE', backgroundColor: '#84ceb9' }}>
  {t("commissions")}
</ListGroup.Item>
<ListGroup.Item action href="#link5" style={{ color: 'WHITE', backgroundColor: '#8fdac4' }}>
  {t("services")}
</ListGroup.Item>
<ListGroup.Item action href="#link6" style={{ color: 'WHITE', backgroundColor: '#9be6d0' }}>
  {t("benevoles")}
</ListGroup.Item>
               
                      </ListGroup>
                    </Col>

                    <Col sm={8}>
                      <Tab.Content>
    

                        <Tab.Pane eventKey="#link1">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>
                              <Card style={{ width: "100%" }}>
                              <Card.Text className=" text-left">    Propriété de l’ACNOA    </Card.Text>

                    
                                <Card.Img variant="top" src="./comite.jpg"/>
              

                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                         <Tab.Pane eventKey="#link2">
                          <div>
                            <h4>    {t("comite")}    </h4>
                            <h6 >
                           {t("jeux")}
                            <br/> <br/>
                            {t("comite2")}
                            </h6>
                                        
                          </div>
                        </Tab.Pane>

                        <Tab.Pane eventKey="#link3">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>

                              <Card style={{ width: "100%" }}>
                              <Card.Text className=" text-left"> {t("haut")}  </Card.Text>

                                <Card.Img variant="top" src="./haut.jpg"/>
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link4">
                          <div>
                           
                            <Col style={{ textAlign: "-webkit-center" }}>

                              <Card style={{ width: "100%" }}>
                              <Card.Text className=" text-left">  {t("commissions")} </Card.Text>

                                <Card.Img variant="top" src="./commissions.jpg"/>
                              </Card>
                            </Col>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="#link5">
                          <h4>{t("services")}  </h4>                        </Tab.Pane>
                       

                        <Tab.Pane eventKey="#link6">

                          <h4> {t("benevoles")}  </h4>
                          
                            <h6> {t("text1")}  <br /> <br />
                           {t("text2")} <br /> <br />
                            {t("text3")} <br /> <br />
                            {t("text4")} <br />  <br />
                           {t("text5")} <br />  <br />
{t("text6")}                          </h6>
                      
                            
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
