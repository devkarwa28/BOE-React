 import React from 'react'
import BestSelling from './Explore/BestSelling';
import Explore_head from './Explore/Explore-head';
import FeaturedProduct from './Explore/FeaturedProduct';
import MoreProuct from './Explore/MoreProduct';
import Footer from './global/Footer';
import Header from './global/Header';
 
 const Explore = () =>{
    return(
        <>
        <Header/>
        <Explore_head/>
        <FeaturedProduct/>
        <BestSelling/>
        <MoreProuct/>
        <Footer/>
        </>
    )
 }
 export default  Explore;