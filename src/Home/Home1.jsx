import React from 'react'
import Slider from 'react-slick';

const Home1 = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" , right: "20px" }}
            onClick={onClick} 
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block" , left : "20px" , zIndex : '9' }}
            onClick={onClick}
          />
        );
      }
    const settings = {
        dots: false,
        nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 650,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow: false,
      prevArrow: false,
      autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
              }
            }
          ]
    };
    return (
        <div className='header-bg'>
            <Slider {...settings}>
            <div className='container-fluid px-0'>
                <div className="header-main h-bg-1">
                    <div className="container">
                        <h1 className="mx-auto text-center">Best Solid Wood
                            Furniture Manufacturer</h1>
                        <p className="text-center mx-auto">
                            Lorem ipsum dolor sit amet consectetur. Tortor mi lectus ipsum eget. Scelerisque gravida aliquam
                            volutpat sed sed tortor. Consectetur aliquet nulla sed id felis quis.
                        </p>
                        <div className="d-flex justify-content-center">
                            <button>
                                Exprore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className="header-main h-bg-2">
                    <div className="container">
                        <h1 className="mx-auto text-center">Best Solid Wood
                            Furniture Manufacturer</h1>
                        <p className="text-center mx-auto">
                            Lorem ipsum dolor sit amet consectetur. Tortor mi lectus ipsum eget. Scelerisque gravida aliquam
                            volutpat sed sed tortor. Consectetur aliquet nulla sed id felis quis.
                        </p>
                        <div className="d-flex justify-content-center">
                            <button>
                                Exprore Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Slider>
        </div>
    )
}
export default Home1;