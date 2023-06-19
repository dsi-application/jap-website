import React, { useState, useEffect } from 'react';
import Slider from "react-animated-slider";
import data from './sliderData.js';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './styles/slider-animation.css';
import './styles/styles.css';
import Counter from '../counter/counter.jsx';
import {Carousel} from 'rs-3d-react-carousal';

const SliderComponent = () => {
  // const [slider, setSlider] = useState([]);

  // useEffect(() => {
  //   setSlider(data);
  // }, []);

  let slides = [
    <img  style={{width:"100%"}} src="./Solari1.png" alt="1" />,
    <img style={{width:"100%"}} src="./Solari2.png" alt="2" />  ,
    <img style={{width:"100%"}} src="./Solari3.png" alt="3" />  ,
    <img style={{width:"100%"}} src="./Solari4.png" alt="4" />  ,
    // <img src="./slide2.png" alt="5" />  
   ];
    const callback = function(index){
      console.log("callback",index);
  }
  return (
    <>
    <Carousel  slides={slides} autoplay={true} interval={3000} onSlideChange={callback}/>
{/*     
      <div className="slider-container">
        <Slider className="slider-wrapper main" autoplay={300}>
          {slider.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
              width="1920px"
              height="1500px"
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
 

      <div className="ocean-container">
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
      </div>*/}
      <br>
      </br>
      <br></br>
      <div className="counter-container">
        <Counter />
      </div> 
    </>
  );
};

export default SliderComponent;
