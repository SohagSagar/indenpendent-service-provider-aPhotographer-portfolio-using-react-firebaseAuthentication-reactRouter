import React from 'react';
import './AboutMeShort.css';
import { TiTick } from 'react-icons/ti';
import { AiOutlineSmallDash } from 'react-icons/ai';
import aboutImg from '../../../resources/about me/about.jpg'
import { useNavigate } from 'react-router-dom';

const AboutMeShort = () => {
    const navigate= useNavigate();
    const aboutDetailsBtn = () =>{
        navigate('/about-me-details')
    }
    return (

        <div className='about-short'>
            <div className='section-heading'>
                <h2><AiOutlineSmallDash /> About Me <AiOutlineSmallDash /></h2>
            </div>

            <div className='about-short-inner container'>
                <div className="description">
                    <h6>Photography is my passion and I started photography since 2007 and now I'm taking it as my career. I love to do my work with highest professionalizm </h6><br />
                    <h6>My comfort photography zone is to take portrait but I also love to cover wedding, corporate event, birthday event etc. You can hire me to make your special moment with photograph.</h6>
                    <hr className='hr-line' />
                    <p><TiTick className='tic-icon' />Over 15 years of experience</p>
                    <p><TiTick className='tic-icon' />200+ successfully executed projects</p>
                    <p><TiTick className='tic-icon' />Exceptional work quality</p>
                    <hr className='hr-line' />
                    <h3 style={{ color: '#FFFFFF' }}>John Martin</h3>
                    <p style={{ lineHeight: '0.2' }}>A Profetional Photographer</p>

                </div>

                <div className="about-short-photo">
                    <img src={aboutImg} alt="" />
                </div>
            </div>

            <div className='commom-btn pb-5'>
                <button onClick={aboutDetailsBtn} className='btn btn-success '>More Details</button>
            </div>

        </div>

    );
};

export default AboutMeShort;