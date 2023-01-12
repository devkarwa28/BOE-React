import React from 'react';
import img1 from '../images/sec2-1.png';
import img2 from '../images/sec2-2.png';
import img3 from '../images/sec2-3.png';


const BrowseCollection = () =>{
    return(
        <>
            <section className="container-fluid section-2">
        <div className="container">
            <h1 className="text-center">Browse by collection</h1>
            <div className="row justify-content-md-center">
                <div className="col-md-6 col-lg-4">
                    <div className="sec2-box">
                        <figure>
                            <img src={img1} alt=""/>
                        </figure>
                        <div className="sec2-box-content">
                            <h2>Industrial Furniture</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute
                                irure dolor in
                            </p>
                            <a href="">Explore collection<i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="sec2-box">
                        <figure>
                            <img src={img2} alt=""/>
                        </figure>
                        <div className="sec2-box-content">
                            <h2>Solid Wood Furniture</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute
                                irure dolor in
                            </p>
                            <a href="">Explore collection<i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="sec2-box">
                        <figure>
                            <img src={img3} alt=""/>
                        </figure>
                        <div className="sec2-box-content">
                            <h2>Reclaimed Wood Furniture</h2>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute
                                irure dolor in
                            </p>
                            <a href="">Explore collection<i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
 export default BrowseCollection;