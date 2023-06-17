import React, { useRef } from "react";
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { I18nextProvider, useTranslation } from 'react-i18next';

import {
    Col,
    Container,
    Row,
    Image
} from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

import { Icon, InlineIcon } from '@iconify/react';

import './etablissement.css'

const Etablissement = () => {
  const { t,i18n } = useTranslation();

    const reactPlayerRef = useRef();

    return (
      <Container className="main"  fluid>
      <MDBContainer className="mt-5 mb-4 text-center text-md-left">
                  <MDBRow className="mt-2">
                    

                      <MDBCol  md="12" lg="12" xl="12"  className="mb-4 dark-grey-text">
                      <h6  style={{ color: '#D40054'}} className={i18n.language === "ar" ? "text-right" : "text-left"}>

                      <InlineIcon icon="mdi:pillar"  width="30" height="30" inline={false} /> {t("hist")}
</h6>
                          <h6  style={{ color: '#000000'}} className={i18n.language === "ar" ? "text-right" : "text-left"}>

                          <br/> <br/>
                          {t("jap")}
                          <br/> <br/>
{t("acnoa")}                          
                          </h6>

                        <br/> <br/>
                        <h6  style={{ color: '#D40054'}} className={i18n.language === "ar" ? "text-right" : "text-left"}>

                        <InlineIcon icon="mdi:calendar-star"  width="30" height="30" inline={false} /> {t("presentation")}
</h6>
                        <h6  style={{ color: '#000000'}} className={i18n.language === "ar" ? "text-right" : "text-left"}>
                          <br/> <br/>
                          {t("capvert")}
                          <br/> <br/>
{t("cnos")}
                        <br/> <br/>
                        {t("cnoa")}
                        <br/> <br/>
                        {t("ceremonie")}
                        <br/> <br/>
                        {t("dix")}
                        <br/> <br/>
{t("challenge")}
                           </h6>

                

                      </MDBCol>
                      <MDBCol md="3" lg="4" xl="3" className="mb-4 dark-grey-text">
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      <br/> <br/>
                      
                      


                    

  
                      </MDBCol>
                      <iframe maxWidth="100%" width="100%"  height="500"   position= "relative"  
                       src="./presentation.mp4" title="conference" frameborder="0" 
                         allow=" encrypted-media " 
                     allowfullscreen>
                     </iframe>
                  </MDBRow>
              </MDBContainer>

        
      </Container>
    )
}

export default Etablissement
