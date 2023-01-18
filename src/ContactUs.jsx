import React from 'react'
import Contact1 from './Contact/Contact1'
import Form_contact from './Contact/Form-contact'
import Form from './Contact/Form-contact'
import GetInToch from './Contact/GetInToch'
import Footer from './global/Footer'
import Header from './global/Header'
import NewsLetter from './Home/NewsLetter'

const ContactUs = () =>{
    return(
        <>
            <Header/>
            <Contact1/>
            <GetInToch/>
            <Form_contact/>
            <NewsLetter/>
            <Footer/>
        </>
    )
}
export default ContactUs;