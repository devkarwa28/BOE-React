import React from 'react'
import Slider from 'react-slick';
import { newArrival } from './P_Details';
import Arrival_card from './Arrival_Card';


const NewArrival = () =>{
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "grid" , right: "-40px" , backgroundColor: "#BB5036", width: "40px", height: "40px" , borderRadius: "50%" , color : "white" }}
            onClick={onClick} 
          >
          <i class="fa-solid fa-arrow-right"></i>
          </div>
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "grid" , left: "-40px" , backgroundColor: "#BB5036", width: "40px", height: "40px" , borderRadius: "50%" , color : "white", zIndex : '9' }}
            onClick={onClick}
          >
           <i class="fa-solid fa-arrow-left"></i>
          </div>
        );
      }

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2,
                nextArrow: false,
      prevArrow: false,
      autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
              }
            },
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
      prevArrow: false,
      autoplay: true,
        autoplaySpeed: 5000,
        cssEase: "linear"
              }
            }
          ]
      };
    return(
        <>
            <section className="section-1 container-fluid">
        <div className="container">
            <div className="row">
            <Slider {...settings}>
            <div className='sm-none'>
            <div className="new-arrival">
                        <h1>New arrivals</h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol
                        </p>
                        <button>
                            More Products
                        </button>
                    </div>
            </div>
            {newArrival.map(function nArrive(val){
                return(
                    <>
                        <Arrival_card
                            key={val.id}
                            imglink={val.imglink}
                            categori={val.categori}
                            productName={val.productName}
                            aboutProduct={val.aboutProduct}
                        />
                    </>
                )
            })}
            </Slider>
                {/* <div className="col-md-6 col-lg-3">
                    <div className="new-arrival">
                        <h1>New arrivals</h1>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol
                        </p>
                        <button>
                            More Products
                        </button>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img1} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Tables</h1>
                            <h2>Rounded Wood Table</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img2} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Chairs</h1>
                            <h2>Indoor Lounge Chair</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="sec1-box">
                        <figure>
                            <img src={img3} alt=""/>
                        </figure>
                        <div className="sec1-box-content">
                            <h1>Sofas</h1>
                            <h2>Fleur Modern Sofa</h2>
                            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dol Duis aute irure
                                dolor in</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </section>
        </>
    )
}
export default NewArrival;