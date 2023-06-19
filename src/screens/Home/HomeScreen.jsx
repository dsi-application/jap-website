import React from 'react';


import Meta from '../../components/Helmet/Meta';
import SliderComponent from '../../components/Slider/Slider';
//import Activities from '../../components/Activities/Activities';

import Partners from '../../components/Partner/Partner';
 import Video from '../../components/Video/Video';
import Pictogramme from '../../components/Pictogramme/Pictogramme';
 import Sal2019 from '../../components/Sal2019/Sal2019';
 import Works from '../../components/Works/Works';

const HomeScreen = () => {

    return (
        <div style={{width:"100%"}}>
              {/* <div
        style={{
          backgroundImage: `url('../../background.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '120vh',
          position: 'fixed',
          zIndex: '-1',
          display: 'flex',
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          animation: 'water 5s ease-in-out infinite',
        }}
      >
        
      </div> */}
      
           <SliderComponent />

            <Video/>

            <Pictogramme/>

            <Works/>

            {/* <Sal2019/> */}

            <Partners/>

            
 

        </div>
    )
}

export default HomeScreen;
