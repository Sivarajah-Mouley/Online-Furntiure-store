import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../../assets/images/ava-1.jpg';
import '../../../styles/slider.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoPlay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
        "Supellex Design is a fantastic website for all your furniture needs. They offer a wide range of sofa options that you won't find anywhere else. However, sometimes the delivery drivers are unable to understand delivery instructions due to language barriers. It would be great to see improved communication methods to ensure smooth deliveries."
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' className=' rounded' />
          <h6>Sivarajah Mouley</h6>
        </div>
      </div>
      
    </Slider>
  );
};

export default TestimonialSlider;
