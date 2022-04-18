import React from 'react';
import './Review.css'
import { BsChatSquareQuote } from 'react-icons/bs';

const Review = ({review}) => {
    const {name,designation,avatar,message,rating}=review
    return (
        <div className='review-card'>
            <img src={avatar} alt="" />
            <p className='card-reviewer'>{name} | <small>{designation}</small></p>
            <p className='rating'>Rating: {rating}/5</p>
            <p className='Quote-start'><BsChatSquareQuote/></p>
            <p className='review-detail '>{message}</p>  
        </div>
    );
};

export default Review;