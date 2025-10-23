import React, { useEffect, useState } from 'react';
import ToyCard from '../Pages/ToyCard';


const Main = ({data}) => {

    const [allToys , setAllToys] = useState([])

    return (
        <div>
            
            
            <h3 className='text-6xl text-center font-bold mt-10'>Popular Toys</h3>
            <p className='text-center text-[#625F5F] mt-5'>HappyKid Toys offers a carefully curated collection of toys designed to inspire fun and learning for every child.</p>

            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5 max-w-6xl'>
            { 
                data.map((singleToy) =><ToyCard key={singleToy.Toyid} singleToy={singleToy}></ToyCard> )
            }
            </div>
           
        </div>
    );
};

export default Main;