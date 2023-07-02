import React from 'react'
import './ImgSlider.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import slider1 from '../../assets/images/slider-badag.jpg'
import slider2 from '../../assets/images/slider-badging.jpg'
import slider3 from '../../assets/images/slider-scale.jpg'
import slider4 from '../../assets/images/slider-scales.jpg'
import Slider from 'react-slick'

const ImgSlider = () => {

    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: true,
        slidesToScroll: true,
        speed: 500,
        autoplay: true,
    }

  return (
    <Slider {...settings} className='slider'>
        <div className='sliderWrap'>
            <a><img src={slider1} alt=''></img></a>
        </div>

        <div className='sliderWrap'>
            <a><img src={slider2} alt=''></img></a>
        </div>

        <div className='sliderWrap'>
            <a><img src={slider3} alt=''></img></a>
        </div>

        <div className='sliderWrap'>
            <a><img src={slider4} alt=''></img></a>
        </div>
    </Slider>
  )
}

export default ImgSlider