import React from 'react';
import Banner from './Banner';
import Main from './Main';
import { useLoaderData } from 'react-router';
import ToyCard from '../Pages/ToyCard';

const Home = () => {
    const data= useLoaderData()
    console.log(data)

    return (
        <div>
           <Banner></Banner>
           <Main data={data}></Main>
           

           
        </div>
    );
};

export default Home;