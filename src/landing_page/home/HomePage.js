import React from 'react';
import Education from './Education';
import Stats from './Stats';
import Pricing from './Pricing';
import HeroSection from './HeroSection';
import Awards from './Awards';
import OpenAcc from '../OpenAcc';


function HomePage() {
    return ( 
        <>
        
            
            <HeroSection /> 
            <Awards/>
            <Stats/>
            <Pricing/>
            <Education />
            <OpenAcc/>
            
            

        </>
     );
}

export default HomePage;
