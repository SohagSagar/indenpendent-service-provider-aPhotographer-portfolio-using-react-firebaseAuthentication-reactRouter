import React, { useEffect, useState } from 'react';
import './Services.css';
import { AiOutlineSmallDash } from 'react-icons/ai';
import useServices from '../../../Hooks/useServices';
import Service from '../Services/Service/Service'



const Services = () => {
    const [services, setServices] = useServices();

    return (
        <div className='service-section'>
            <div className='section-heading mb-5'>
                <h2 style={{ color: '#1B1B1B' }}><AiOutlineSmallDash /> My Services <AiOutlineSmallDash /></h2>
            </div>

            <div className="card-container container">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>

        </div>
    );
};

export default Services;