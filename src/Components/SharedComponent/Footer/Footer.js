import React from 'react';
import './Footer.css'
import { FaFacebookSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoLinkedin } from 'react-icons/io';
import { IoLogoYoutube } from 'react-icons/io';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

import 'tippy.js/dist/tippy.css';



const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className='footer-section'>
            <div className='container'>
                <div className="subscribe-section">
                    <div className="subscribe-text">
                        <h3>Sign up to get latest update</h3>
                        <p>Sign up for our monthly newsletter for the latest news & articles</p>

                    </div>
                    <div className="subscribe-form">
                        <input className='form-control' type="text" placeholder='Enter Your Email' />
                        <button className='btn btn-secondary subcribe-btn'>Subscribe</button>
                    </div>
                </div>

                <div className="social-links">
                    <FaFacebookSquare className=' footer-icon' />
                    <AiFillInstagram className=' footer-icon' />
                    <IoLogoLinkedin className=' footer-icon' />
                    <IoLogoYoutube className=' footer-icon' />
                </div>
                <p className='copy-right mt-2'>All Right Reserved <AiOutlineCopyrightCircle/> John Photography {year} </p>

            </div>

        </div >
    );
};

export default Footer;