import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Popularmenu from '../popularmenu/Popularmenu';
import Featured from './featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Popularmenu></Popularmenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;