import React from 'react';

const Service = ({ service }) => {
    console.log(service);
    const { service_name, description, picture, price } = service;
    return (

        <div className="service-card ">
            <img src={picture} alt="" />
            <h4>{service_name}</h4>
            <hr />
            <p>{description}</p>
            <p className='price'><span style={{ fontSize: '1.5em' }} >$</span>{price}</p>
            <div className='commom-btn'>
                <button className=' btn btn-outline-secondary'>Book Now</button>
            </div>
        </div>
    );
};

export default Service;