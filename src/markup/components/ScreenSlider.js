import React from 'react';

import SectionHeading from './SectionHeading';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// images
import screen_1 from '../../assets/images/screens/screen-slider-img-1.png';
import screen_2 from '../../assets/images/screens/screen-slider-img-2.png';
import screen_3 from '../../assets/images/screens/screen-slider-img-3.png';
import screen_4 from '../../assets/images/screens/screen-slider-img-4.png';

const ScreenSlider = () => {
  const data = [
    {
      src: screen_1,
    },
    {
      src: screen_2,
    },
    {
      src: screen_3,
    },
    {
      src: screen_4,
    },
  ];

  return (
    <>
      {/* screen section header - start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-0 col-10 offset-1">
            <div className="screen-section-header">
              <SectionHeading
                icon="las la-tablet"
                heading="orions universal app"
                subHeading="Have a look at what’s inside the app."
              />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-0 col-10 offset-1">
            <div className="screen-slider-navigation slider-navigation">
              <div className="screen-slider-navigation-prev">
                <i className="las la-long-arrow-alt-left"></i>
              </div>
              <div className="screen-slider-navigation-next">
                <i className="las la-long-arrow-alt-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* screen section header - end */}
      {/* screen section slider - start */}
      <div className="screen-slider">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          navigation={{
            nextEl: '.screen-slider-navigation-prev',
            prevEl: '.screen-slider-navigation-next',
          }}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1.8,
            },
            576: {
              slidesPerView: 2.4,
            },
            768: {
              slidesPerView: 2.8,
            },
            992: {
              slidesPerView: 4.8,
            },
          }}
        >
          {data.map((element, key) => {
            return (
              <SwiperSlide key={key}>
                <div className="screen-slide">
                  <figure>
                    <img src={element.src} alt="app-screen" />
                  </figure>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* screen section slider - end */}
    </>
  );
};

export default ScreenSlider;
