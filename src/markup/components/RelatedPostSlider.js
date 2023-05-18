import React from 'react';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import blog from '../data/blog';
import BlogSingle from './BlogSingle';
import SectionHeading from './SectionHeading';

const RelatedPostSlider = () => {
  return (
    <>
      {/* related posts header - start */}
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
            <SectionHeading
              subHeading="Posts you may like"
              heading="Posts you may like"
              icon="las la-file-alt"
              additionalClasses="section-heading-1 c-white"
              subHeadingClass="c-white"
            />
          </div>
          <div className="col-lg-6 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
            <div className="related-posts-slider-navigation slider-navigation">
              <div className="related-posts-slider-navigation-prev">
                <i className="las la-long-arrow-alt-left"></i>
              </div>
              <div className="related-posts-slider-navigation-next">
                <i className="las la-long-arrow-alt-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* related posts header - end */}
      <div className="container related-posts-slider-container">
        {/* related posts slider - start */}
        <div className="row">
          <div className="col-lg-12">
            <div className="related-posts-slider">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                centeredSlides={true}
                initialSlide={1}
                loop={true}
                navigation={{
                  nextEl: '.related-posts-slider-navigation-next',
                  prevEl: '.related-posts-slider-navigation-prev',
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2.2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                }}
              >
                {blog.slice(0, 6).map((post, key) => {
                  return (
                    <SwiperSlide key={key}>
                      <div className="related-posts-slide">
                        <BlogSingle element={post} type={2} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
        {/* related posts slider - end */}
      </div>
    </>
  );
};

export default RelatedPostSlider;
