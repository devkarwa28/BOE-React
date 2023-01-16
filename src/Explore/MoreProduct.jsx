import React from 'react'
import pDetails from '../Home/P_Details'
import Card2 from '../global/Card-2'

const MoreProuct = () =>{
    return(
        <>
            <section class="container-fluid section-explore-3">
        <div class="container">
            <div class="row">
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
export default MoreProuct;