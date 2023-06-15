import "./Works.css";
  //import tof1 from "./1.PNG";
  //import Fiverr from "../../img/fiverr.png";
  //import Amazon from "../../img/amazon.png";
  //import Shopify from "../../img/Shopify.png";
  //import Facebook from "../../img/Facebook.png";
  import { motion } from "framer-motion";
  
import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'





const Works = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
   
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
        <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">
     <InlineIcon icon="mdi:campfire"  width="50" height="50"  /> Jeux bas carbone :   </h2>
     <br/>
                    <MDBRow className="mt-2">
                      
     
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                        
                            <h6 >
                            Les Jeux Africains de plage 2023 s'engagent pour le climat avec sobriété, innovation et audace. Le CNOT établit un nouveau standard environnemental et JAP23 joue un rôle majeur dans la lutte contre les changements climatiques. Cinq actions concrètes sont prévues lors des JAP.
                            </h6>

                          <br/> 

                          <h6>
                            <InlineIcon icon="mdi:gamepad-round"  width="30" height="30" inline={false} /> Décréter la semaine JAP, du 23 au 30 juin 2023, semaine sans plastique dans toute la zone Yasmine Hammamet. En consacrant les moyens de son application. </h6>

                          <br/> 
                        

                         <h6 >
                        <InlineIcon icon="mdi:gamepad-round-down"  width="30" height="30" inline={false} />  Équiper les rues de la zone en poubelles sélectives. Deux couleurs : une pour toutes matières recyclables et une pour les détritus organiques.   </h6>

                        <br/> 
                      

                         <h6 >
                        <InlineIcon icon="mdi:gamepad-round-left"  width="30" height="30" inline={false} />   Pendant toute la durée des JAP, interdire la circulation automobile dans les artères principales connexes aux jeux. </h6>

                        <br/> 
             
                         <h6  >
                        <InlineIcon icon="mdi:gamepad-round-right"  width="30" height="30" inline={false} />  Réserver un lot de terrain de 1200 m2 environ, à Nabeul, siège du gouvernorat dont dépend Hammamet, pour la plantation d’un jardin Olympique africain, à l’occasion des JAP 2023.   </h6>

                        <br/> 
                       

                         <h6  >
                        <InlineIcon icon="mdi:gamepad-round-up"  width="30" height="30" inline={false} /> 
                        Les calèches facilitent la mobilité des VIP et des responsables d'équipes entre les hôtels et le site de compétition, tandis que les athlètes se déplacent à pied entre leurs hôtels et le site d'entraînement et de compétition.
                          </h6>


                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                        <br/><br/><br/><br/><br/><br/> 
                      
                        <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
         
          <div className="w-secCircle">
            <img  src="./1.PNG"  alt="" />
          </div>

          <div className="w-secCircle">
            <img  src="./6.PNG"  alt="" />
          </div>

          <div className="w-secCircle">
            <img  src="./2.PNG" alt="" />
          </div>{" "}

          <div className="w-secCircle">
            <img  src="./5.PNG" alt="" />
          </div>
  
          <div className="w-secCircle">
            <img  src="./3.PNG"  alt="" />
          </div>
          
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        
        <div className="w-backCircle redCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

        
        </Container>
    )
}

export default Works
