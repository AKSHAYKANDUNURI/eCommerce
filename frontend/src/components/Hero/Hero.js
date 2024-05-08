import React from 'react';
import  './Hero.css'
import hand_icon from '../assests/hand_icon.png'
import arrow_icon from '../assests/arrow.png'
import hero_img from '../assests/hero_image.png'
const Hero = () => {
    return (
        <div className='hero'>
           <div className='hero-left'>
              <h2>NEW ARRIVALS ONLY!</h2>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon}></img>
            </div>
                <p>collections</p>
                <p>for everyone</p>
            </div> 
           
            <div className='hero-latest-btn'>
                <div>
                    <div>Latest Collections</div>
                <img src={arrow_icon}></img>
                </div>
            </div>

            <div className='hero-right'>
                <img src={hero_img} height={700}/>
            </div> 
        </div>
    );
};

export default Hero;
