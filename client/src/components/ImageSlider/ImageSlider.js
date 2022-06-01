import React from 'react';

import PropTypes from 'prop-types';

import styles from './ImageSlider.module.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

const ImageSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className={styles.root}>
      <Slider {...settings} className={styles.slick}>
        {images.map(image => (
          <div key={image} >
            <img alt="" src={image}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

ImageSlider.propTypes = {
  images: PropTypes.array,
};

export default ImageSlider;


