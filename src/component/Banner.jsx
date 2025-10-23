import React from 'react';
import banner from '../assets/Labubu-png.webp'
import Marquee from 'react-fast-marquee';
import  two  from  '../assets/banner2.jpg'
import three from '../assets/banner-3.jpg'

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Marquee pauseOnHover={true} speed={100}>
            <img src={banner} className=' h-150' alt="" />
            <img src={two} className=' h-150' alt="" />
            <img src={three} className=' h-150' alt="" />
            </Marquee>
            
        </div>
    );
};

export default Banner;