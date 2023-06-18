import React, { useRef } from "react";
import ReactPlayer from "react-player";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import { Icon, InlineIcon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Slider from "react-animated-slider";
import { useTranslation , I18nextProvider} from "react-i18next";
import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'

import './Video.css'




const Video = () => {

    const reactPlayerRef = useRef();
    const { t , i18n } = useTranslation();
    return (
      <>
   
        <Container className="main"  fluid>
        <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                    <MDBRow className="mt-2">
                      
                        
                        <MDBCol md="6" lg="6" xl="6" className="pt-4 mb-4 dark-grey-text">
                        
                            <h6 className={i18n.language === "ar" ? "text-right" : "text-left"}>
                            <InlineIcon icon="mdi:certificate"  width="30" height="30" inline={false} /> {t("bienvenue")}  </h6>

                          <br/> <br/>

                          <h6  className={i18n.language === "ar" ? "text-right" : "text-left"}>
                            <InlineIcon icon="mdi:book-multiple-outline"  width="30" height="30" inline={false} />   {t("Dec")} </h6>

                          <br/> 
                          <br/>

                         <h6  className={i18n.language === "ar" ? "text-right" : "text-left"}>
                        <InlineIcon icon="mdi:home-city-outline"  width="30" height="30" inline={false} />   {t("here")}   </h6>

                        </MDBCol>
                        <MDBCol md="6" lg="6" xl="6" className="mb-4 dark-grey-text ">
                        <br/> 
                      
                        {/* <Image width="500px" src="/badge-logo.png" style={{ marginTop: '-1px' }} /> */}

                        <Image width="100%" src="/poster.jpg"  />

    
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>

        
        </Container>
        </>
    )
}

export default Video
