import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Icofont from 'react-icofont';
import { Icon, InlineIcon } from '@iconify/react';
import {Carousel} from 'rs-3d-react-carousal';
import { useTranslation } from 'react-i18next';

import './stylespartner.css'
const Pictogramme = ({ SectionbgTitle, sectionTitle, sectionDescription, partnersData }) => {

    const { t } = useTranslation();

    let slides = [
        <img  style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-1.png" alt="1" />,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-2.png" alt="2" />  ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}}  src="./PICTOGRAMME-JAP-3.png" alt="3" />  ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}}  src="./PICTOGRAMME-JAP-4.png" alt="4" />  ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-5.png" alt="5" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-6.png" alt="6" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-7.png" alt="7" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-8.png" alt="8" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-9.png" alt="9" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-10.png" alt="10" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-11.png" alt="11" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-12.png" alt="12" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-13.png" alt="13" /> ,
        <img style={{ background: 'rgba(0, 180, 81, 0.8)',width:"100%"}} src="./PICTOGRAMME-JAP-14.png" alt="14" /> ,

      ];
        const callback = function(index){
          console.log("callback",index);
      }
    // Partner loop start
    const partnerData = partnersData.map((partner, index) => (
      <div className="single-partner-logo main" key={index}>
        <Link to={partner.partnerLink} className="logo-preview">
          <img src={partner.partnerLogo} alt="partnerLogo" width="100px" height="300px" />
        </Link>
      </div>
    ));
    // Partner loop END PICTOGRAMME Pictogramme
    return (
      <React.Fragment>
        <section className="our-partners ptb-10 main">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <ScrollAnimation animateIn="fadeInUp">
                  <div className="section-title">
                    <h2 style={{ color: '#00B451' }} className="font-weight-bold text-center">
                      <InlineIcon icon="mdi:graphql" width="50" height="50" inline={false} /> {t('pdj')}
                    </h2>
                    <p>{sectionDescription}</p>
                    <span className="section-title-bg"></span>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
           {/* <div className="row"> */}
            <Carousel slides={slides} autoplay={true} interval={3000} onSlideChange={callback}/>

              {/* <OwlCarousel
                className="owl-theme partners-slides"
                dots={false}
                loop={true}
                margin={100}
                autoplay={true}
                smartSpeed={1000}
                nav={true}
                navText={[
                  "<i class='icofont-arrow-left text-success'></i>",
                  "<i class='icofont-arrow-right text-success'></i>"
                ]}
                responsive={{
                  0: { items: 1 },
                  768: { items: 3 },
                  600: { items: 3 }
                }}
              >
                {partnerData}
              </OwlCarousel> */}
            {/* </div> */}
          </div>
        </section>
      </React.Fragment>
    );
  };
  
  // Props Types
  Pictogramme.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
  };
  
  // Default Props
  Pictogramme.defaultProps = {
    SectionbgTitle: '',
    sectionTitle: '  Pictogramme des jeux ',
    sectionDescription: '',
    partnersData: [
      { partnerLogo: './PICTOGRAMME-JAP-1.png' },
      { partnerLogo: './PICTOGRAMME-JAP-2.png' },
      // ... rest of the partner logos
    ]
  };
export default Pictogramme;
