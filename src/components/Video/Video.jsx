import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";
import { useTranslation } from "react-i18next";
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './Video.css'




const Video = () => {

    const reactPlayerRef = useRef();
    const { t } = useTranslation();
    return (
      <>
   
        <Container className="main"  fluid>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-2">
                      
                        
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                        
                            <h6 className="text">
                            <InlineIcon icon="mdi:certificate"  width="30" height="30" inline={false} /> {t("bienvenue")}  </h6>

                          <br/> <br/>

                          <h6  className="text">
                            <InlineIcon icon="mdi:book-multiple-outline"  width="30" height="30" inline={false} />   {t("Dec")} </h6>

                          <br/> 
                          <br/>

                         <h6  className="text">
                        <InlineIcon icon="mdi:home-city-outline"  width="30" height="30" inline={false} />   {t("here")}   </h6>

                        </MDBCol>
                        <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                        <br/> 
                      
                        {/* <Image width="500px" src="/badge-logo.png" style={{ marginTop: '-1px' }} /> */}


    
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

        
        </Container>
        </>
    )
}

export default Video
