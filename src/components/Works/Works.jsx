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
import { useTranslation ,I18nextProvider } from 'react-i18next';





const Works = () => {

    const reactPlayerRef = useRef();
    const { t,i18n } = useTranslation();


    return (
      
        <Container className="main"  fluid>
   
        <MDBContainer className="mt-4 mb-4 text-center text-md-left">
        <h2  style={{ color: '#00B451'}} className="font-weight-bold  text-center">
     <InlineIcon icon="mdi:campfire"  width="50" height="50"  /> {t('jbc')}   </h2>
     <br/>
                    <MDBRow className="mt-2">
                      
     
                        <MDBCol md="3" lg="3" xl="6" className="mb-4 dark-grey-text">
                        
                            <h6  className={i18n.language === "ar" ? "text-right" : "text-left"} >
                            {t('lja')}                            </h6>

                          <br/> 

                          <h6  className={i18n.language === "ar" ? "text-right" : "text-left"}>
                            <InlineIcon icon="mdi:gamepad-round"  width="30" height="30" inline={false} /> {t('dls')}  </h6>

                          <br/> 
                        

                         <h6 className={i18n.language === "ar" ? "text-right" : "text-left"} >
                        <InlineIcon icon="mdi:gamepad-round-down"  width="30" height="30" inline={false} />   {t('elr')}   </h6>

                        <br/> 
                      

                         <h6 className={i18n.language === "ar" ? "text-right" : "text-left"} >
                        <InlineIcon icon="mdi:gamepad-round-left"  width="30" height="30" inline={false} />   {t('etl')} </h6>

                        <br/> 
             
                         <h6 className={i18n.language === "ar" ? "text-right" : "text-left"} >
                        <InlineIcon icon="mdi:gamepad-round-right"  width="30" height="30" inline={false} />   {t('rult')}   </h6>

                        <br/> 
                       

                         <h6  className={i18n.language === "ar" ? "text-right" : "text-left"} >
                        <InlineIcon icon="mdi:gamepad-round-up"  width="30" height="30" inline={false} /> 
                        {t('lcf')}   </h6>


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