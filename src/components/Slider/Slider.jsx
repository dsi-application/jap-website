import React, { useState, useEffect } from 'react';
import Slider from "react-animated-slider";
import data from './sliderData.js';
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import './styles/slider-animation.css';
import './styles/styles.css';
import Counter from '../counter/counter.jsx';

const SliderComponent = () => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    setSlider(data);
  }, []);

  return (
    <>
      <div className="slider-container">
        <Slider className="slider-wrapper main" autoplay={300}>
          {slider.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{ background: `url('${item.image}') no-repeat center center` }}
              width="1920px"
              height="900px"
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
      </div>
      <div className="counter-container">
        <Counter />
      </div>
    </>
  );
};

export default SliderComponent;
