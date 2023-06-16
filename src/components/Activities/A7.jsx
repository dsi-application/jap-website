import React, { useState } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css';

const images = [
  "./R1.png",
  "./R2.png",
  "./R3.png",
  "./R4.png"
];

const smallImages = [
  "./R1.png",
  "./R2.png",
  "./R3.png",
  "./R4.png"
];

const A7 = ({ sectionTitle, sectionDescription, SectionbgTitle }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
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
                    <figure onClick={() => openLightbox(index)}>
                      <img
                        src={image}
                        alt="Gallery"
                        className="img-fluid"
                        width="360px"
                        height="390px"
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
              imageTitle={`${photoIndex + 1}/${images.length}`}
              onCloseRequest={() => setIsOpen(false)}
              onMovePrevRequest={() =>
                setPhotoIndex((photoIndex + images.length - 1) % images.length)
              }
              onMoveNextRequest={() =>
                setPhotoIndex((photoIndex + 1) % images.length)
              }
            />
          )}
        </MDBContainer>
      </section>
    </React.Fragment>
  );
};

// Props Types
A7.propTypes = {
  SectionbgTitle: PropTypes.string,
  sectionTitle: PropTypes.string,
  sectionDescription: PropTypes.string,
};

// Default Props
A7.defaultProps = {
  SectionbgTitle: "",
  sectionTitle: "  ",
  sectionDescription: "",
};

export default A7;
