import React from 'react'
import img1 from '../images/sec2-3.png'

const WhatWeDo = () =>{
    return(
        <>
            <section className="section-about-2">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <div className="content">
                        <h2>What We Do</h2>
                        <h1>We Create Custom Furniture</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ullam soluta,
                            illo, neque rerum libero fugit, nam explicabo maiores porro veritatis possimus totam beatae
                            voluptates molestias non. Ducimus unde, in dolores fugit placeat perferendis saepe, omnis ab
                            aliquam labore error, reiciendis ipsam mollitia qui vel blanditiis pariatur numquam
                            doloribus?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vitae ullam soluta,
                            illo, neque rerum libero fugit, nam explicabo maiores porro veritatis possimus totam beatae
                            voluptates molestias non. Ducimus unde, in dolores fugit placeat perferendis saepe, omnis ab
                            aliquam labore error, reiciendis ipsam mollitia qui vel blanditiis pariatur numquam
                            doloribus?
                        </p>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6">
                    <img src={img1} alt=""/>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default WhatWeDo;