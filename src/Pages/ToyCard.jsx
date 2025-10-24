import React from 'react';

import { Link } from 'react-router';

const ToyCard = ({singleToy}) => {
   const{toyName, sellerName, toyId,price,rating,description,pictureURL} = singleToy
    return (
       
   <Link to={`toydetails/${toyId}`}>
  
         <div className="card bg-base-100 w-96 shadow-sm ">
  <figure className='p-5'>
    <img
     className='h-[176px]'
      src={pictureURL}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
   {toyName}
      <div className="badge badge-secondary">{sellerName}</div>
    </h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{price}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
  </div>
 
</div>

   </Link>

  
    );
};

export default ToyCard;