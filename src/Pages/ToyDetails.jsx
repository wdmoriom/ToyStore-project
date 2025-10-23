import React from 'react';
import { useParams } from 'react-router';

const ToyDetails = () => {
    const {id} = useParams()
    console.log(id)
   
    return (
        <div>
            this is toy details
        </div>
    );
};

export default ToyDetails;