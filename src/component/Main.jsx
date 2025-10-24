import React  from 'react';
import ToyCard from '../Pages/ToyCard';
import { Link } from 'react-router';

const Main = ({ data }) => {
const toysData = Array.isArray(data) ? data : (data?.toys || []);
const cardData = toysData.slice(0,6)

console.log(cardData)
    return (
        <div>
         
            <h3 className='text-6xl text-center font-bold mt-10'>Popular Toys</h3>
            <p className='text-center text-[#625F5F] mt-5'>HappyKid Toys offers a carefully curated collection of toys designed to inspire fun and learning for every child.</p>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 max-w-6xl mt-10'>
            { 
               cardData.map((singleToy) =><ToyCard key={singleToy.Toyid} singleToy={singleToy}></ToyCard> )
            }
            </div>
          <div className='flex justify-center mt-8'>
             <Link to={`/about`} className='font-bold  border w-40 h-10 bg-pink-700 text-white text-center'>View All</Link>
          </div>
        </div>
    );
};

export default Main;