import React from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import { Icon, InlineIcon } from '@iconify/react';
import { useTranslation } from 'react-i18next';

import './stylespartner.css';

const Partners = ({ SectionbgTitle, sectionTitle, sectionDescription, partnersData }) => {
  const partnerData = partnersData.map((partner, index) => (
    <div className="single-partner-logo main" key={index}>
      <Link to={partner.partnerLink} className="logo-preview">
        <img src={partner.partnerLogo} alt="partnerLogo" width="30px" height="100px" />
      </Link>
    </div>
  ));
  const { t } = useTranslation();
  //const sectionTitle = {t('sectionTitle')};

  return (
    <React.Fragment>
      <section className="our-partners ptb-100 main">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <ScrollAnimation animateIn="fadeInUp">
                <div className="section-title">
                  <h2 style={{ color: '#00B451' }} className="font-weight-bold text-center">
                    <InlineIcon icon="mdi:account-group" width="50" height="50" inline={false} />{t('sectionTitle')}
                  </h2>
                  <p>{t('sde')}</p>
                  <span className="section-title-bg">{SectionbgTitle}</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row">
            <OwlCarousel
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
            </OwlCarousel>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

// Props Types
Partners.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
  partnersData: PropTypes.array
};

// Default Props
Partners.defaultProps = {
  SectionbgTitle: "",
  sectionTitle: "",
  sectionDescription: "Nos partenaires sont toujours là pour nous accompagner.",
  partnersData: [
    {
      partnerLogo: "./ooreedoo1.png",
    },
    {
      partnerLogo: "./imageP100.png",
    },
    {
      partnerLogo: "./imageP10000.png",
    },
  ]
};

export default Partners;