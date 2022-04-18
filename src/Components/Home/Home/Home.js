import React from 'react';
import Banner from '../Banner/Banner';
import AboutMeShort from '../AboutMeShort/AboutMeShort'
import Services from '../Services/Services';
import MyWork from '../MyWork/MyWork';
import Reviews from '../Reviews/Reviews';
import Footer from '../../SharedComponent/Footer/Footer';



const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutMeShort/>
            <Services/>
            {/* <MyWork/> */}
            <Reviews/>
            <Footer/>
        </div>
    );
};

export default Home;