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

import './Video.css'




const Video = () => {

    const reactPlayerRef = useRef();

    return (
      
        <Container className="main"  fluid>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-2">
                      
                        
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                        
                            <h6  style={{ color: '#507d70'}} className="font-weight-bold">
                            <InlineIcon icon="mdi:certificate"  width="30" height="30" inline={false} /> Bienvenue sur notre site vitrine de sport où vous pouvez découvrir notre collection de compétitions sportives, des événements de classe mondiale aux événements locaux. </h6>

                          <br/> <br/>

                          <h6  style={{ color: '#78c2ad'}} className="font-weight-bold">
                            <InlineIcon icon="mdi:book-multiple-outline"  width="30" height="30" inline={false} />   Découvrez notre sélection de compétitions sportives, allant des événements majeurs aux événements locaux, sur notre site vitrine de sport, conçu pour les passionnés de sport du monde entier. </h6>

                          <br/> 
                          <br/>

                         <h6  style={{ color: '#8fdac4'}} className="font-weight-bold">
                        <InlineIcon icon="mdi:home-city-outline"  width="30" height="30" inline={false} />   Nous sommes là pour vous accompagner et vous aider à identifier vos besoins en matière de formation qualifiée, 
                        <br/> en mettant en relation les entreprises qui peuvent bénéficier de vos compétences améliorées.   </h6>

                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                        <br/> 
                      
                       <iframe maxWidth="100%" width="700"  height="300"   position= "relative"  left="80px"
                         src="./conference.mp4" title="2023" frameborder="0" 
                           allow="autoplay; encrypted-media " 
                       allowfullscreen>
                       </iframe> 

    
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

        
        </Container>
    )
}

export default Video
