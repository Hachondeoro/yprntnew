import React from 'react';

// import Swiper React components
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import instagram_img_1 from '../../assets/images/instagram/instagram-img-1.jpg';
import instagram_img_2 from '../../assets/images/instagram/instagram-img-2.jpg';
import instagram_img_3 from '../../assets/images/instagram/instagram-img-3.jpg';
import instagram_img_4 from '../../assets/images/instagram/instagram-img-4.jpg';
import instagram_img_5 from '../../assets/images/instagram/instagram-img-5.jpg';
import instagram_img_6 from '../../assets/images/instagram/instagram-img-6.jpg';

SwiperCore.use([Autoplay]);

const ImageSlider = () => {
  const data = [
    instagram_img_1,
    instagram_img_2,
    instagram_img_3,
    instagram_img_4,
    instagram_img_5,
    instagram_img_6,
  ];

  return (
    <div className="instagram-slider">
      <Swiper
        autoplay={{
          delay: 1500,
        }}
        speed={1500}
        spaceBetween={4}
        centeredSlides={true}
        loop={true}
        initialSlide={3}
        breakpoints={{
          0: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          992: {
            slidesPerView: 6,
          },
        }}
      >
        {data.map((image, key) => {
          return (
            <SwiperSlide key={key}>
              <div className="instagram-slide" key={key}>
                <img src={image} alt="instagram-slide" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
