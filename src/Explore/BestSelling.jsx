import React from 'react'
import Card3 from '../global/Card-3'
import {bestselling} from '../Home/P_Details'

const BestSelling = () =>{
    return(
        <>
            <section className="section-explore-2 container-fluid">
        <div className="container">
            <h1>Best Selling Products</h1>
            <div className="row">
                {bestselling.map(function bestcard(val){
                    return(
                        <>
                        <Card3
                        id= {val.id}
                        imglink= {val.imglink}
                        productName= {val.productName}
                        aboutProduct= {val.aboutProduct}
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
export default BestSelling;