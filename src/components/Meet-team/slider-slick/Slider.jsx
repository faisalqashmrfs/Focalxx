import { Component } from "react";
import Slider from "react-slick";
import Arrow from "./../Training/Arrow1.svg";
import './Slider.css';
import TriningIMG from './../Training/Ali-saleh.png';


export default function CenterMode({ data }) {

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
      }
    ]
  }
  return (
    <>
      <div className="MaSlider">
        <Slider {...settings}>
          {
            data.map((e, index) => (
          <div className="MaCard">
            <div className="M-backGreen"></div>
            <div className="MTrainingImg">
              <img src={e.image} alt="Trining-IMG" />
            </div>
            <h2>{e.name}</h2>
            <p>{e.specialization}</p>
            <a className="MShowMore">
              <span>Show More</span>
              <img src={Arrow} alt="Arrow" />
            </a>
          </div>
          ))
          }
          {
            data.map((e, index) => (
          <div className="MaCard">
            <div className="M-backGreen"></div>
            <div className="MTrainingImg">
              <img src={e.image} alt="Trining-IMG" />
            </div>
            <h2>{e.name}</h2>
            <p>{e.specialization}</p>
            <a className="MShowMore">
              <span>Show More</span>
              <img src={Arrow} alt="Arrow" />
            </a>
          </div>
          ))
          }
        </Slider>
      </div>
    </>
  );
}