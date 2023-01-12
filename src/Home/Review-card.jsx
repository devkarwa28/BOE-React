import React from 'react'

const Review_card = (props) =>{
    return(
        <>
            <div className="col-md-6 col-lg-6">
                    <div className="sec6-box">
                        <figure>
                            <img src={props.profilepic} alt=""/>
                        </figure>
                        <div className="sec6-box-content">
                            <h2>“{props.title}”</h2>
                            <p>{props.desc}</p>
                            <h3>
                                {props.customer}
                            </h3>
                            <h4>
                                {props.location}
                            </h4>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Review_card;