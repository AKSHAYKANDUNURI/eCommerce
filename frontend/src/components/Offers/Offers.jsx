import React from 'react';
import './Offers.css'
import exlusive_image from '../assests/exclusive_image.png'

const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>CheckNow</button>
            </div>
            <div className="offers-right">
                <img src={exlusive_image} alt="" />
            </div>

        </div>
    );
};

export default Offers;