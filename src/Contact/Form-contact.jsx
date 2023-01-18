import React from 'react'
import img1 from '../images/Map.png'

const Form_contact = () =>{
    return(
        <>
            <section className="section-contact-2 container-fluid">
        <div className="container">
            <div className="row flex-column-reverse flex-lg-row">
                <div className="col-lg-6">
                    <img src={img1} alt=""/>
                </div>
                <div className="col-lg-6">
                    <div className="contact-form">
                        <h1>Contact form </h1>
                        <h2>Our friendly team would love to hear from you.</h2>
                        <form action="">
                            <div className="d-md-flex d-lg-flex ">
                                <div className="input-row">
                                    <label for="">First Name</label>
                                    <input type="" className="small-input" placeholder="First name" />
                                </div>
                                <div className="input-row">
                                    <label for="">Last name</label>
                                    <input type="" className="small-input" placeholder="Last name" />
                                </div>
                            </div>
                            <div className="input-row">
                                <label for="">Email</label>
                                <input type="email" placeholder="you@company.com" />
                            </div>
                            <div className="input-row">
                                <label for="">Phone number</label>
                                <div className="d-flex">
                                    <select name="" id="">
                                        <option value="">IND</option>
                                        <option value="">US</option>
                                        <option value="">PAK</option>
                                    </select>
                                    <input type="tel" className="seclect-input" placeholder="Phone number" />
                                </div>
                            </div>
                            <div className="input-row">
                                <label for="">Message</label>
                                <textarea name="" id="" cols="" rows=""></textarea>
                            </div>
                            <div className="policy d-flex">
                                <input type="checkbox"/>
                                <p>You agree to our friendly <a href="">privacy policy</a>.</p>
                            </div>
                            <button>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default Form_contact;