import React from 'react';
import Banner from '../Banner/Banner';
import AboutMeShort from '../AboutMeShort/AboutMeShort'
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMeShort/>
            <Services/>
        </div>
    );
};

export default Home;