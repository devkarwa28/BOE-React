import React from 'react'

const Card3 = (props) =>{
    return(
        <>
            <div class="col-lg-4">
                    <div class="card-3">
                        <img src={props.imglink} alt="" />
                        <div class="card-3-content">
                            <h2>{props.productName}</h2>
                            <p>
                               {props.aboutProduct}
                            </p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Card3;