import React from 'react'

function Card2(props){
    return(
        <>
            <div class="col-6 col-md-4 col-lg-3">
                    <div class="card-2">
                        <figure>
                            <img src={props.imglink} alt=""/>
                        </figure>
                        <h2>{props.productName}</h2>
                        <p>
                            {props.aboutProduct}
                        </p>
                    </div>
                </div>
        </>
    )
}
export default Card2;
