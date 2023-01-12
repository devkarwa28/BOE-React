import React from 'react'
import { reviewdata } from './P_Details';
import Review_card from './Review-card';

const Testimonial = () =>{
    return(
        <>
            <section className="container-fluid section-6">
        <div className="container">
            <h1>What our clients say about us</h1>
            <div className="row">
                {reviewdata.map(function Review(val){
                    return(
                        <>
                            <Review_card
                                key={val.id}
                                profilepic={val.profilepic}
                                title={val.title}
                                desc={val.desc}
                                customer={val.customer}
                                location={val.location}
                            />
                        </>
                    )
                }
                )}
            </div>
        </div>
    </section>
        </>
    )
}
export default Testimonial;