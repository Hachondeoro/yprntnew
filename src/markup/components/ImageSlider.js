import React from 'react';

// import Swiper React components
import 'swiper/css';
import 'swiper/css/effect-fade';
import SwiperCore, { Autoplay } from 'swiper';
import {EffectFade} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import instagram_img_1 from '../../assets/images/hero/Hero-1.jpg';
import instagram_img_2 from '../../assets/images/hero/Hero-2.jpg';
import instagram_img_3 from '../../assets/images/hero/Hero-3.jpg';


SwiperCore.use([Autoplay]);

const ImageSlider = () => {
  const data = [
    instagram_img_1,
    instagram_img_2,
    instagram_img_3,

  ];

  return (
    // <div className="instagram-slider" style={{position:"relative",zIndex:"2"}}>
    //   <Swiper
    //     autoplay={{
    //       delay: 1500,
    //     }}
    //     speed={1500}
    //     spaceBetween={4}
    //     centeredSlides={true}
    //     loop={true}
    //     initialSlide={3}
    //     breakpoints={{
    //       0: {
    //         slidesPerView: 2.2,
    //       },
    //       768: {
    //         slidesPerView: 3.2,
    //       },
    //       992: {
    //         slidesPerView: 6,
    //       },
    //     }}
    //   >
    //     {data.map((image, key) => {
    //       return (
    //         <SwiperSlide key={key}>
    //           <div className="instagram-slide" key={key} style={{width:"100%"}}>
    //             <img src={image} alt="instagram-slide" />
    //           </div>
    //         </SwiperSlide>
    //       );
    //     })}
    //   </Swiper>
    // </div>
    <Swiper 
      loop={true}
      autoplay={{delay: 5000, disableOnInteraction: false}}
      speed={1000}
      lazy={true}
      modules={[EffectFade]}
      effect='fade'
      style={{position:"relative",zIndex:"2"}} // how to make it loop infinately? add 
    >
      {data.map((image, key) => {
        return (
          <SwiperSlide key={key}>
            <div className="instagram-slide" key={key}>
              <img src={image} alt="instagram-slide" style={{width:"100%",height:"500px",borderRadius:"0px"}}/>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ImageSlider;
