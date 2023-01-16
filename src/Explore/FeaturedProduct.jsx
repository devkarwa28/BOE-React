import React from 'react'
import pDetails from '../Home/P_Details';
import Card2 from '../global/Card-2';

const FeaturedProduct = () =>{
    return(
        <>
            <section className="container-fluid section-explore-1">
        <div className="container">
            <h1>Featured Products</h1>
            <div className="row">
            {pDetails.map(function pCard2(val) {
                                return (
                                    <>
                                        <Card2
                                            key={val.id}
                                            imglink={val.imglink}
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
export default FeaturedProduct;