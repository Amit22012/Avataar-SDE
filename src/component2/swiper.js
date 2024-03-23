// swiper.js
import React, { useState } from 'react';
import './swiper.css';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import image1 from './images/image1.jpeg';
import image2 from './images/image2.jpeg';
import image3 from './images/image3.jpeg';
import image4 from './images/image4.jpeg';
import image5 from './images/image5.jpeg';
import image6 from './images/image6.jpeg';


const images = [image1, image2, image3,image4,image5,image6];

const Swiper = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className='arrow next' onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className='arrow prev' onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0, 
    nextArrow: <NextArrow />,
    beforeChange: (current,next) => setImageIndex(next),
    prevArrow: <PrevArrow />
  };
  

  return (
    <div className='sliderx'>
       <Slider {...settings} >
          {images.map((img, idx) => (
            <div className={idx === imageIndex ?"slide activeSlide":"slide"}>
              <img src={img} alt={img} />
            </div>
          ))}
        </Slider>
    </div>
  );
}

export default Swiper;
