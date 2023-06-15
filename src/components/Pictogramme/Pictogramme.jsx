import React, { Component } from "react";
import PropTypes from "prop-types";
import OwlCarousel from "react-owl-carousel3";
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import Icofont from 'react-icofont';
import { Icon, InlineIcon } from '@iconify/react';

import './stylespartner.css'
class Pictogramme extends Component {
    render() {
        //Partner loop start
        const partnerData = this.props.partnersData.map((partner, index) => (
            <div className="single-partner-logo main" key={index}>
                <Link to={partner.partnerLink} className="logo-preview">
                    <img src={partner.partnerLogo} alt="partnerLogo" width = "100px"   height = "300px" />
                    
                </Link>
            </div>
        ));
        //Partner loop END PICTOGRAMME Pictogramme
        return (
            <React.Fragment>
                <section className="our-partners ptb-100 main">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="section-title">
                                    <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">
                                   <InlineIcon icon="mdi:graphql"  width="50" height="50" inline={false} />  {this.props.sectionTitle} </h2>    

                                        
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>

                        <div className="row">
                            <OwlCarousel
                                className="owl-theme partners-slides"
                                dots= {false}
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
                                    768: {
                                        items: 3
                                    },
                                    600: {
                                        items: 3
                                    }
                                }}
                            >
                                {partnerData}
                            </OwlCarousel>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

//Props Types
Pictogramme.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    partnersData: PropTypes.array
};

//Default Props
Pictogramme.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "  Pictogramme des jeux ",
    sectionDescription: "",
    partnersData: [
        {
            partnerLogo:   "./PICTOGRAMME-JAP-1.JPG" ,  
        
        },
       
        {
            partnerLogo:   "./PICTOGRAMME-JAP-2.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-3.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-4.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-5.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-6.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-7.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-8.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-9.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-10.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-11.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-12.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-13.JPG" ,  
        
        },

        {
            partnerLogo:   "./PICTOGRAMME-JAP-14.JPG" ,  
        
        },
     
    ]
};
export default Pictogramme;
