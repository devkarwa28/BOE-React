import React from 'react'
import About_header from './About/About_header'
import WelcomeToBOE from './About/WelcomToBOE'
import WhatWeDo from './About/WhatWeDo'
import Footer from './global/Footer'
import Header from './global/Header'
import NeedAssitance from './Home/NeedAssitance'
import NewsLetter from './Home/NewsLetter'

const About = () =>{
    return(
        <>
            <Header/>
            <About_header/>
            <WelcomeToBOE/>
            <WhatWeDo/>
            <NeedAssitance/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default About;