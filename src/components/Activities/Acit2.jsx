import React, { useState } from "react";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import { Icon, InlineIcon } from '@iconify/react';

const Acit2 = (props) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const images = [
    "./a300.jpg",
    "./a301.jpg",
    "./a302.jpg",
    "./a303.png",
    "./a304.jpg"
  ];

  const smallImages = [
    "./terrain1.png",
    "./terrain2.png",
    "./terrain3.png",
    "./terrain4.png",
    "./terrain5.png",
    "./terrain6.png"
  ];

  const smallImages1 = [
    "./entree.PNG",
    "./entree2.PNG"
  ];

  const smallImages2 = [
    "./sitevueglobale.PNG",
    "./sitevueglobale2.PNG"
  ];

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
                  <br /> <br />
                  <h2 style={{ color: '#78c2ad' }} className="font-weight-bold  text-center">
                    <InlineIcon icon="mdi:kabaddi" width="30" height="30" inline={false} /> {props.sectionTitle}
                  </h2>
                  <br /> <br />
                  <iframe
                    maxWidth="100%"
                    width="100%"
                    height="500"
                    position="relative"
                    //left="80px"
                    src="./chefsmission.mp4"
                    title="conference"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  ></iframe>
                  <br /> <br />
                  <h6 className=" text-left">Le site des compétitions est situé sur une plage longue de 500 mètres en face des hôtels de Yasmine Hammamet  <br />        <br />
                    et longée par une esplanade qui conduit jusqu’à la Marina de la station.
                    La plage est divisée en deux zones : une zone abritant les terrains d’entrainements et une zone où   <br />        <br />
                    sont aménagés les terrains de compétitions. Ces terrains sont répartis en 8 arènes :
                    <br /> <br />   Arène 1 : Beach Handball & Beach Soccer
                    <br />  <br />   Arène 2 : Beach Volley 4x4 & Beach Tennis
                    <br />  <br />  Arène 3 : Basket 3x3
                    <br />  <br />  Arène 4 : Beach Rugby
                    <br />  <br />  Arène 5 : Beach Football
                    <br />  <br />  Arène 6 : Beach Wrestling
                    <br />  <br />  Arène 7 : Beach Karaté & Beach Judo
                    <br />  <br />  Arène 8 : Kitesurf
                    <br />  <br /> <br /> <br />  </h6>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <MDBContainer>
            <MDBRow>
              {images.map((image, index) => (
                <div className="col-md-4" key={index}>
                  <ScrollAnimation animateIn="fadeInUp">
                    <div className="single-our-works">
                      <img src={image} alt="work-image" className="img-fluid" onClick={() => openLightbox(index)} />
                      <div className="works-overlay">
                        <h4>Compétitions</h4>
                        <p>
                          Découvrez nos différentes compétitions et terrains d'entraînement.
                        </p>
                        <a href="#" target="_blank">
                          <Icon icon="mdi:arrow-top-right-bold-outline" width="24" height="24" />
                        </a>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              ))}
            </MDBRow>
          </MDBContainer>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              onCloseRequest={closeLightbox}
              onMovePrevRequest={movePrev}
              onMoveNextRequest={moveNext}
            />
          )}
        </div>
      </section>
    </React.Fragment>
  );
};

Acit2.propTypes = {
  sectionTitle: PropTypes.string.isRequired
};

export default Acit2;
