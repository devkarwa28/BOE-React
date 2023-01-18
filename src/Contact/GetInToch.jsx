import React from 'react'
import img1 from '../images/email.svg'
import img2 from '../images/location.svg'
import img3 from '../images/call.svg'

const GetInToch = () =>{
    return(
        <>
        <section className="section-contact-1">
        <div className="container">
            <h1>Get in touch</h1>
            <h2>Our friendly team is always here to chat.</h2>
            <div className="row">
                <div className="col-lg-4">
                    <div className="contact-box">
                        <img src={img1} alt=""/>
                        <h3>Email</h3>
                        <p>Our friendly team is here to help.</p>
                        <a href="">jodhJodhpuri.net@gmail.com</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-box">
                        <img src={img2} alt=""/>
                        <h3>Office</h3>
                        <p>Come say hello at our office HQ.</p>
                        <a href="">100 Smith StreetCollingwood VIC 3066 AU</a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="contact-box">
                        <img src={img3} alt=""/>
                        <h3>Phone</h3>
                        <p>Mon-Fri from 8am to 5pm.</p>
                        <a href="">+1 (555) 000-0000</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default GetInToch;