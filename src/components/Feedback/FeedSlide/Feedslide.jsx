import { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import './Feedslide.css'

export default function CenterMode2() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "-240px",
        slidesToShow: 5,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 360,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true,
                }
            }
        ]
    };

    const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://test.black-analysis-solutions.com/api/internfeedback');
          setData(response.data.data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
  
      fetchData();
    }, []);

    return (
        <div className="FB-slider">
            <Slider {...settings}>
            {
                data.map((e , index) => (
                    <div>
                        <img src={e.image} alt="FeedBack" />
                    </div>
                ))
            }
            {
                data.map((e , index) => (
                    <div>
                        <img src={e.image} alt="FeedBack" />
                    </div>
                ))
            }
            {
                data.map((e , index) => (
                    <div>
                        <img src={e.image} alt="FeedBack" />
                    </div>
                ))
            }
            </Slider>
        </div>
    );
}

