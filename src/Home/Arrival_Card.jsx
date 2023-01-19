import React from 'react'

const Arrival_card = (props) => {
    return (
        <>
            <div>
                <div className="sec1-box">
                    <figure>
                        <img src={props.imglink} alt="" />
                    </figure>
                    <div className="sec1-box-content">
                        <h1>{props.categori}</h1>
                        <h2>{props.productName}</h2>
                        <p>{props.aboutProduct}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Arrival_card;