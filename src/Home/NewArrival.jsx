import React from 'react'
import img1 from '../';
import img2 from '../images/sec1-2.png';
import img3 from '../images/sec1-3.png';
import Card1 from './Card-1';
import pDetails, { arrivalProduct } from './P_Details';


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
                {arrivalProduct.map(function arriveProduct(val){
                    return(
                        <>
                            <Card1
                                key={val.id}
                                imglink={val.imglink}
                                category={val.category}
                                productName={val.productName}
                                aboutProduct={val.aboutProduct}
                            />
                        </>
                    )
                })}
            </div>
        </div>
    </section>
        </>
    )
}
export default NewArrival;