import React from 'react';
import Header from './global/Header';
import Home1 from './Home/Home1';
import NewArrival from './Home/NewArrival';
import BrowseCollection from './Home/BrowseCollection';
import WhatMakesOur from './Home/WhatMakesOur';
import Collection from './Home/Collection';
import NeedAssitance from './Home/NeedAssitance';
import Testimonial from './Home/Testimonial';
import NewsLetter from './Home/NewsLetter';
import Footer from './global/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Home1/>
            <NewArrival/>
            <BrowseCollection/>
            <WhatMakesOur/>
            <Collection/>
            <NeedAssitance/>
            <Testimonial/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default Home;