import React from 'react'
import Slider from 'react-slick';
import { reviewdata } from './P_Details';
import Review_card from './Review-card';

const Testimonial = () =>{

        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1
        }
    return(
        <>
            <section className="container-fluid section-6">
        <div className="container">
            <h1>What our clients say about us</h1>
            <div className="row">
            <Slider {...settings}>
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
            </Slider>
            </div>
        </div>
    </section>
        </>
    );
            }

export default Testimonial;