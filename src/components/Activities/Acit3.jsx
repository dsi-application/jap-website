import React, { Component, useState } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css'

const images = [
"./CH1.jpeg" ,
"./CH2.jpeg" ,
"./CH3.jpeg" ,
"./CH4.jpeg" ,
"./CH5.jpeg"
];

const smallImages = [
"./CH1.jpeg" ,
"./CH2.jpeg" ,
"./CH3.jpeg" ,
"./CH4.jpeg" ,
"./CH5.jpeg"
];

function Acit3({ sectionTitle, sectionDescription, SectionbgTitle }) {
const [photoIndex, setPhotoIndex] = useState(0);
const [isOpen, setIsOpen] = useState(false);


const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
};

const closeLightbox = () => {
    setIsOpen(false);
};

const moveNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
};

const movePrev = () => {
    setPhotoIndex((photoIndex + images.length - 1) % images.length);
};

return (
    <React.Fragment>
        <section id="works" className="our-works ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <ScrollAnimation animateIn="fadeInUp">
                            <div className="section-title">
                                <h2>{sectionTitle}</h2>
                                <p>{sectionDescription}</p>
                                <span className="section-title-bg">
                                    {SectionbgTitle}
                                </span>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>

            <MDBContainer>
                <div className="mdb-lightbox no-margin">
                    <MDBRow>
                        {smallImages.map((image, index) => (
                            <div className="col-md-6 col-lg-6" key={index}>
                                <div className="work-details">
                                    <figure>
                                        <img
                                            src={image}
                                            alt={"Gallery " + index}
                                            className="img-fluid"
                                            width="100%"
                                            height="390px"
                                            onClick={() => openLightbox(index)}
                                        />
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </MDBRow>
                </div>
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        imageTitle={photoIndex + 1 + "/" + images.length}
                        onCloseRequest={closeLightbox}
                        onMovePrevRequest={movePrev}
                        onMoveNextRequest={moveNext}
                    />
                )}
            </MDBContainer>
        </section>
    </React.Fragment>
);
}

//Props Types
Acit3.propTypes = {
SectionbgTitle: PropTypes.string,
sectionTitle: PropTypes.string,
sectionDescription: PropTypes.string,
};

//Default Props
Acit3.defaultProps = {
SectionbgTitle: "",
sectionTitle: "" ,
sectionDescription: "",
};

export default Acit3;