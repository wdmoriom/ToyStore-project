import React, { Suspense } from 'react';

import Footer from './Footer';



const About = () => {
 
   
    return (
        <div>
            <h2 className='font-bold text-4xl text-blue-900 text-center mt-10'>About TOY STORE: Welcome to the World of Imagination</h2>
      <div className='text-center mt-15'>
      
        <p className='text-3xl font-semibold'>Our Mission</p>
        <p className='text-xl font-semibold'>Welcome to our toy store—where the joy of childhood never ends. TOY STORE was founded on the belief <br /> that every toy is not just a plaything, but a vital tool for learning, imagination, and creating family bonds.</p>
      </div>
      <div className='text-center mt-10'>
        <p className='text-3xl font-semibold text-emerald-900'>Our Commitment</p>
        <p className='text-xl font-semibold text-cyan-600'>Our goal is not just to sell toys, but to build a community where fun and <br />learning go hand-in-hand. TOY STORE aims to become your one-stop hub, <br /> where you'll find the latest toy news, reviews, and the perfect item for your little one.</p>
      </div>
      <div className='text-center mt-10'>
        <p className='text-2xl font-bold'>Your Journey</p>
        <p className='font-semibold text-xl'>Elevate your child's imagination to the next level with TOY STORE—Play. Learn. Grow. 🧸🚀</p>
      </div>
         
       
        <Footer></Footer>
        </div>


    );
};

export default About;