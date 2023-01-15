import React from 'react'

const Card1 = (props) =>{
    return(
        <>
        <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure className=''>
                            <img src={props.imglink} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>{props.category}</h1>
                            <h2>{props.productName}</h2>
                            <p>{props.aboutProduct}</p>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Card1;