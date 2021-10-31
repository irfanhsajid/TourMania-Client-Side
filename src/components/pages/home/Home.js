import React from 'react';
import Banner from '../banner/Banner';
import Faq from '../FAQ/Faq';
import Packages from '../packages/Packages';
import Places from '../places/Places';
const Home = () => {
    return (
        <div className="container-fluid mt-2">
            <Banner></Banner>
            <Places></Places>
            <Packages></Packages>
            <Faq></Faq>
        </div>
    );
};

export default Home;