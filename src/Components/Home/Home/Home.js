import React from 'react';
import Banner from '../Banner/Banner';
import AboutMeShort from '../AboutMeShort/AboutMeShort'
import Services from '../Services/Services';
import MyWork from '../MyWork/MyWork';
import Reviews from '../Reviews/Reviews';



const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMeShort/>
            <Services/>
            {/* <MyWork/> */}
            <Reviews/>
        </div>
    );
};

export default Home;