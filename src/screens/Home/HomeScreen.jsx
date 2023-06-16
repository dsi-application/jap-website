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
        <>
           
           <SliderComponent />

            <Video/>

            <Pictogramme/>

            <Works/>

            {/* <Sal2019/> */}

            <Partners/>

            
 

        </>
    )
}

export default HomeScreen;
