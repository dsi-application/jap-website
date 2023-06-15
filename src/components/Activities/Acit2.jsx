import React, { Component } from "react";
import Icofont from "react-icofont";
import PropTypes from "prop-types";
import ScrollAnimation from "react-animate-on-scroll";
import { MDBContainer, MDBRow } from "mdbreact";
import Lightbox from "react-image-lightbox";
import './styleAcit.css'
import { Icon, InlineIcon } from '@iconify/react';


const images = [
    "./a300.jpg" ,
    "./a301.jpg" ,
    "./a302.jpg" ,
    "./a303.png" ,
    "./a304.jpg"
    
  ];
  
  const smallImages = [
    "./terrain1.png" ,
    "./terrain2.png" ,
    "./terrain3.png" ,
    "./terrain4.png" ,
    "./terrain5.png" ,
    "./terrain6.png" 
  ];

  const images1 = [
    "./a300.jpg" ,
    "./a301.jpg" ,
    "./a302.jpg" ,
    "./a303.png" ,
    "./a304.jpg"
    
  ];
  
  const smallImages1 = [
    "./entree.PNG" ,
    "./entree2.PNG" 
  ];

  const smallImages2 = [
    "./sitevueglobale.PNG" ,
    "./sitevueglobale2.PNG" 
  ];

class Acit2 extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      }

    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
                <section id="works" className="our-works ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <ScrollAnimation animateIn="fadeInUp">

                  
                                    <div className="section-title">
                                    <br/> <br/>
                                    <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">
         <InlineIcon icon="mdi:kabaddi"  width="30" height="30" inline={false} /> {this.props.sectionTitle}</h2>

                                        <br/> <br/>

                                        <iframe maxWidth="100%" width="700"  height="500"   position= "relative"  left="80px"
                       src="./chefsmission.mp4" title="conference" frameborder="0" 
                         allow="autoplay; encrypted-media " 
                     allowfullscreen>
                     </iframe>
                                        <br/> <br/>
                                        <h6 className=" text-left">Le site des compétitions est situé sur une plage longue de 500 mètres en face des hôtels de Yasmine Hammamet  <br/>        <br/>
                     et longée par une esplanade qui conduit jusqu’à la Marina de la station. 
                    La plage est divisée en deux zones : une zone abritant les terrains d’entrainements et une zone où   <br/>        <br/>
                     sont aménagés les terrains de compétitions. Ces terrains sont répartis en 8 arènes : 
                    
                    <br/> <br/>   Arène 1 : Beach Handball & Beach Soccer 
                    <br/>  <br/>   Arène 2 : Beach Volley 4x4 & Beach Tennis  
                    <br/>  <br/>  Arène 3 : Basket 3x3 
                    <br/>  <br/>  Arène 4 : Beach Aviron Sprint, Nage en eau libre, Kayak de mer et Stand Up Paddle 
                    <br/>  <br/>  Arène 5 : Kata Karaté, Wushu Kung Fu, Lutte de plage  
                    <br/>   <br/> Arène 6 : Teqball et Air badminton  
                    <br/>  <br/>  Arène 7 : Escrime (démonstration) 
                    <br/>    <br/> Arène 8 : Parcours du marathon de plage.  
                    <br/>  <br/>  Des tentes VIP, médicales, anti-dopage, médias, plateau de télévision, détente athlètes, <br/>
                    <br/>   et bien évidemment des vestiaires et des cabines sanitaires seront réparties à travers le site.  <br/>

                    <br/>    Sur l’esplanade des espaces d’exposition de produits artisanaux, d’animations artistiques et  <br/> 
                    <br/>    culturelles, de merchandising, de sponsors, et de comités d’organisation de jeux sont prévus.
                        </h6>

                    <br/> <br/>
                                        <p>{this.props.sectionDescription}</p>
                                        <span className="section-title-bg">
                                            {this.props.SectionbgTitle}
                                        </span>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>

                    <br/> <br/>
              <h4> Entrée du site </h4>
<br/> 
                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages1[0]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages1[1]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                              

                               
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>

                    <br/> <br/>

                    <h4> Vue du site globale </h4>
                    <br/> 

<MDBContainer>
    <div className="mdb-lightbox no-margin">
        <MDBRow>
            <div className="col-md-6 col-lg-4">
                <div className="work-details">
                    <figure>
                        <img
                        src={smallImages2[0]}
                        alt="Gallery"
                        className="img-fluid"
                        width= "360px"
                        height = "390px"
                        />
                      
                    </figure>
                </div>
            </div>

            <div className="col-md-6 col-lg-4">
                <div className="work-details">
                    <figure>
                        <img
                        src={smallImages2[1]}
                        alt="Gallery"
                        className="img-fluid"
                        width= "360px"
                        height = "390px"
                        />
                      
                    </figure>
                </div>
            </div>

          

           
        </MDBRow>
    </div>
    {isOpen && (
    <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        imageTitle={photoIndex + 1 + "/" + images.length}
        onCloseRequest={() => this.setState({ isOpen: false })}
        onMovePrevRequest={() =>
        this.setState({
            photoIndex: (photoIndex + images.length - 1) % images.length
        })
        }
        onMoveNextRequest={() =>
        this.setState({
            photoIndex: (photoIndex + 1) % images.length
        })
        }
    />
    )}
</MDBContainer>

                    <h1>les terrains </h1>
                    <MDBContainer>
                        <div className="mdb-lightbox no-margin">
                            <MDBRow>
                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[0]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[1]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                          
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[2]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[3]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            width= "360px"
                                            height = "390px"
                                            />
                                            
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[4]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </div>

                                <div className="col-md-6 col-lg-4">
                                    <div className="work-details">
                                        <figure>
                                            <img
                                            src={smallImages[5]}
                                            alt="Gallery"
                                            className="img-fluid"
                                            />
                                        </figure>
                                    </div>
                                </div>

                               
                            </MDBRow>
                        </div>
                        {isOpen && (
                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            imageTitle={photoIndex + 1 + "/" + images.length}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length
                            })
                            }
                            onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length
                            })
                            }
                        />
                        )}
                    </MDBContainer>

                </section>
            </React.Fragment>
        );
    }
}
//Props Types
Acit2.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
};

//Default Props
Acit2.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "Le site de compétition ",
    sectionDescription:
        "",
};

export default Acit2;
