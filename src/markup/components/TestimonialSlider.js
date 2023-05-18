import React from 'react';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import testimonial_image_1 from '../../assets/images/testimonial-slide-img-2.png';
import testimonial_image_2 from '../../assets/images/testimonial-slide-img-1.png';
import testimonial_image_3 from '../../assets/images/testimonial-slide-img-3.png';

const TestimonialSlider = () => {
  const data = [
    {
      image: testimonial_image_1,
      testimony:
        '“This app is wonderful dry male ceepeth good them their in which to days two deep has yielding throw darkness bring likeness fifth by darkness make face saw has under heaven forth saw there without lights app stars for him replenish fowl creature.”',
      name: 'Jack William',
    },
    {
      image: testimonial_image_2,
      testimony:
        '“This app is wonderful dry male ceepeth good them their in which to days two deep has yielding throw darkness bring likeness fifth by darkness make face saw has under heaven forth saw there without lights app stars for him replenish fowl creature.”',
      name: 'Jack William',
    },
    {
      image: testimonial_image_3,
      testimony:
        '“This app is wonderful dry male ceepeth good them their in which to days two deep has yielding throw darkness bring likeness fifth by darkness make face saw has under heaven forth saw there without lights app stars for him replenish fowl creature.”',
      name: 'Jack William',
    },
  ];

  return (
    <div className="testimonial-slider">
      <Swiper
        className="swiper-container"
        resizeObserver={true}
        spaceBetween={0}
        initialSlide={1}
        // init={false}
        speed={250}
        slideToClickedSlide={true}
        slidesPerView={1.7}
        loop={true}
        centeredSlides={true}
        breakpoints={{
          0: {
            direction: 'horizontal',
          },
          992: {
            direction: 'vertical',
          },
        }}
      >
        {data.map((element, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="testimonial-slide">
                <div className="image">
                  <div className="image-wrapper">
                    <div className="image-inner">
                      <img src={element.image} alt="testimony" />
                    </div>
                  </div>
                </div>
                <div className="content">
                  <p>{element.testimony}</p>
                  <h5>— {element.name}</h5>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
