import React from 'react';
import Banner from '../banner/Banner';
import Packages from '../packages/Packages';
const Home = () => {
    return (
        <div className="container-fluid mt-2">

            <Banner></Banner>


            <Packages></Packages>
        </div>
    );
};

export default Home;