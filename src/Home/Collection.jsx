import React from 'react'
import Card2 from '../global/Card-2'
import pDetails from './P_Details'



const Collection = () =>{
    return(
        <>
            <section class="section-4 container-fluid">
        <div class="container">
            <div class="d-flex justify-content-between mb-md-4 mb-lg-5">
                <h1>Browse by collection</h1>
                <button className='sm-none'>
                    Brows All
                </button>
            </div>
            <div class="row justify-content-md-center">
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
export default Collection;