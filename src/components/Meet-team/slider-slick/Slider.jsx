import Slider from "react-slick";
import Arrow from "./../Training/Arrow1.svg";
import './Slider.css';
import { useState } from "react";
import x from './../Training/greenPoints.png';
import xx from './../../../assets/image/xx.png';
import f1 from './../../../assets/image/Behance1.png';
import f2 from './../../../assets/image/Github1.png';
import f3 from './../../../assets/image/LinkedIn1.png';
import f4 from './../../../assets/image/Dribble1.png';
import f5 from './../../../assets/image/Facebook1.png';
import f6 from './../../../assets/image/X1.png';

export default function CenterMode({ data }) {

  const [index, setindex] = useState(0)
  const [indexdone, setindexdone] = useState(false)

  function handelinfo(index) {
    setindexdone(!indexdone)
    setindex(index)
  }

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
                <a className="MShowMore" onClick={() => handelinfo(index)}>
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
                <a className="MShowMore" onClick={() => handelinfo(index)}>
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
                <a className="MShowMore" onClick={() => handelinfo(index)}>
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
                <a className="MShowMore" onClick={() => handelinfo(index)}>
                  <span>Show More</span>
                  <img src={Arrow} alt="Arrow" />
                </a>
              </div>
            ))
          }
        </Slider>
        <div className={indexdone ? 'pop-up-trenar' : 'pop-up-trenaroff'}>
          {indexdone ?
            // <h2>{ data[index].name}</h2>
            <div className="for-trinar">
              <div className="For-T-Photos">
                <img className="imgx" src={x} alt="" />
                <img className="imgx2" src={data[index].image} alt="" />
              </div>
              <div className="For-T-Descrip">
                <div>
                  <h3>{data[index].name}</h3>
                  <span>{data[index].specialization}</span>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore maxime hic voluptatem at, in, eligendi id, officia repellat distinctio beatae nesciunt aut eius. Ullam vero ipsum nobis modi culpa sapiente!</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab voluptatum aliquid, iure magnam fugit sunt quae hic, doloribus laborum alias blanditiis. Voluptates ratione quos pariatur fugit dignissimos sequi, nihil laudantium.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptates, facere quos non illo, modi quod nihil doloremque nisi aperiam impedit maiores voluptatibus obcaecati animi, minima esse distinctio tenetur dolore.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptates, facere quos non illo, modi quod nihil doloremque nisi aperiam impedit maiores voluptatibus obcaecati animi, minima esse distinctio tenetur dolore.</p>
              </div>
            </div>
            :
            <></>}
          <span className="cloooss" onClick={handelinfo}>
            <img src={xx} alt="" />
          </span>
          <span className="sosheal" onClick={handelinfo}>
            <img src={f1} alt="" />
            <img src={f2} alt="" />
            <img src={f3} alt="" />
            <img src={f4} alt="" />
            <img src={f5} alt="" />
            <img src={f6} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}