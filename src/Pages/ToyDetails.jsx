import React from 'react';
import Footer from '../component/Footer';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';




const ToyDetails = () => {
  const {id} = useParams();
  const toyId = parseInt(id);
  const rawData = useLoaderData(); 
  const dataArray = Array.isArray(rawData) ? rawData : (rawData?.toys || []); 
  const alltoy = dataArray.find(toy => toy.toyId === toyId); 
 
    console.log("Found Toy:", alltoy);
  
   

  
const {toyName, pictureURL,description,price} =alltoy
 
 
    return (
    
         <div>
            <h2 className='font-bold items-center text-center text-5xl mt-10'> Toys details</h2>
         <div className='w-2/5 mx-auto mt-15'>
        <img className='w-50' src={pictureURL} alt='' />
        <h2>{toyName}</h2>
        <p>{description}</p>
        <p>price : {price}</p>
       <div className=''>
        <button className="btn btn-soft btn-primary  mr-8"> Mark as view </button>
       <button className="btn btn-soft btn-secondary">Add To card</button>
       </div>
       </div>
        <div>
            <Footer></Footer>
        </div>
      </div>
     
    );
};

export default ToyDetails;