import React from 'react';
import './Reviews.css'
import Review from '../Review/Review';
import { Spinner } from 'react-bootstrap';
import { AiOutlineSmallDash } from 'react-icons/ai';
import useCustomerReviews from '../../../Hooks/useCustomerReviews';


const Reviews = () => {
    const [reviews, setReviews] = useCustomerReviews();

    return (
        <div className='customer-review-section '>
            <div className='container '>
                <div className='section-heading mb-5'>
                    <h2><AiOutlineSmallDash /> Customer Reviews <AiOutlineSmallDash /></h2>
                </div>
                <div className='all-reviews'>
                    {
                        reviews ?
                            reviews.slice(0, 9).map(review => <Review key={review.id} review={review}></Review>)
                            : <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                    }



                </div>
            </div>
        </div>
    );
};

export default Reviews;