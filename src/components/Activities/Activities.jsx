import React, { Component } from 'react';
import PropTypes from "prop-types";
import Icofont from 'react-icofont';
import { Link } from 'react-router-dom';
import ScrollAnimation from 'react-animate-on-scroll';
import './styleActivities.css'
import { Icon, InlineIcon } from '@iconify/react';

import Fade from 'react-reveal/Fade';

class Activities extends Component {

    componentDidMount() {
        let scrollWithOffset = (el, offset) => {
            const elementPosition = el.offsetTop - offset;
            window.scroll({
                top: elementPosition,
                left: 0,
                behavior: "smooth"
            });
        };
        this.setState({ scrollWithOffset });
    }

  render() {
    //Blog loop start
    const blogdata = this.props.blogsData.map((blog, index) => (
        
        <div className="col-md-6 col-lg-6 main"  key={index}>
            <div className="blog-item">
                <Link to={blog.postLink} className="blog-img">
                  
                    <img  src= {blog.postImage}  alt="blog-one" />

                    <br/>         <br/>        <br/>
                    </Link>
    
                    
                     <div className="title-meta text-center ">
                       <Link to={blog.postLink}>

                       <h4>    {blog.posttitle} </h4>
                        <h6> <br /> Voir plus </h6>
                        </Link>
                       
                    </div>
            
              
            </div>
        </div>
    ));
    //Blog loop END
    return (
        <React.Fragment>
            <section id="blog" className="our-blog ptb-100 main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <ScrollAnimation animateIn="fadeInUp">
                                <div className="section-title">

               
                             
                    <Fade top> <h2  style={{ color: '#78c2ad'}} className="font-weight-bold  text-center">

<InlineIcon icon="mdi:camera-party-mode"  width="30" height="30" inline={false} />  {this.props.sectionTitle} </h2> </Fade>
                        

                                    <p>{this.props.sectionDescription}</p>
                                    <span className="section-title-bg">{this.props.SectionbgTitle}</span>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    <div className="row">
                        {blogdata}
                       
                    </div>
                </div>
            </section>   
        </React.Fragment>
    );
  }
}
//Props Types
Activities.propTypes = {
    SectionbgTitle: PropTypes.string,
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    btnLink: PropTypes.string,
    BlogBtn: PropTypes.string,
    blogsData: PropTypes.array
};

//Default Props
Activities.defaultProps = {
    SectionbgTitle: "",
    sectionTitle: "Médiathèque",
    sectionDescription:  "",

        blogsData: [


        {
            postImage:  "./R2.png" ,
            postLink: "/a7",
            posttitle: "Réunion ACNO-CNOT Décembre 2022",
           
        },

        {
            postImage:  "./CH4.jpeg" ,
            postLink: "/acit3",
            posttitle: "Réunion chefs de mission, Avril 2023 ",
           
        },

        {
            postImage:  "./Signature2.png" ,
            postLink: "/acit4",
            posttitle: "Signature du contrat d'organisation Novembre 2022",
           
        },

        {
            postImage:  "./Visite2.png" ,
            postLink: "/acit5",
            posttitle: "Visite du secretaire général de l'ACNOA, novembre 2022 ",
           
        },

       
      
    ]
};

export default Activities;
