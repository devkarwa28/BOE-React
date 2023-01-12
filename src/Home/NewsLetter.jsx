import React from 'react'

const NewsLetter = () =>{
    return(
        <>
            <section className="section-7 container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <h1>Subscribe to receive a 10% coupon for your first order.</h1>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="input-box position-relative">
                        <input type="text" placeholder="Enter Email Address"/>
                        <button className="position-absolute">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default NewsLetter;