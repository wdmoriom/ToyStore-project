import React from 'react';
import Banner from './Banner';
import Main from './Main';
import { useLoaderData } from 'react-router';

import Footer from './Footer';
import ToyDetails from '../Pages/ToyDetails';




const Home = () => {
    const data= useLoaderData()
    console.log(data)

    return (
        <div>
           <Banner></Banner>
           <Main data={data}></Main>
          
           <Footer></Footer>

           
        </div>
    );
};

export default Home;