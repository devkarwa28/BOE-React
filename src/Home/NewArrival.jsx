import React from 'react'
import img1 from '../images/sec1-1.png';
import img2 from '../images/sec1-2.png';
import img3 from '../images/sec1-3.png';


const NewArrival = () =>{
    return(
        <>
            <section className="section-1 container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-3">
                    <div className="new-arrival">
                        <h1>New arrivals</h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol
                        </p>
                        <button>
                            More Products
                        </button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img1} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Tables</h1>
                            <h2>Rounded Wood Table</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img2} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Chairs</h1>
                            <h2>Indoor Lounge Chair</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img3} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Sofas</h1>
                            <h2>Fleur Modern Sofa</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default NewArrival;