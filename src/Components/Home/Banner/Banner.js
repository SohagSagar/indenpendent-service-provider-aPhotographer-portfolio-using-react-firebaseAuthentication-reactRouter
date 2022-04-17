import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../../resources/slider/img1.png';
import img2 from '../../../resources/slider/img2.png';
import img3 from '../../../resources/slider/img3.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className='slider-container'>
            <Carousel fade >
                <Carousel.Item >
                    <img
                        className="d-block  w-100 "
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <button className='btn btn-success btn-style'>View Gallery</button>

                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <button className='btn btn-success btn-style'>View Gallery</button>
                    </Carousel.Caption>

                </Carousel.Item >

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <button className='btn btn-success btn-style'>View Gallery</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;