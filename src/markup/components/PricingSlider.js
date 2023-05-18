import React, { useState, useRef, useEffect } from 'react';

import { Link } from 'react-router-dom';

// import Swiper React components
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const PricingSlider = () => {
  const [checked, setChecked] = useState(true);
  const ref = useRef(null);

  const price_number_height = () => {
    const prices = ref.current.querySelectorAll('.price');

    if (prices.length < 1) return;

    Array.from(prices).forEach(price => {
      const month = price.querySelector('.month');
      const year = price.querySelector('.year');

      price.style.height = Math.max(month.offsetHeight, year.offsetHeight) - 2 + 'px';
      // price.style.width = Math.max(month.offsetWidth, year.offsetWidth) + 'px';
    });
  };

  useEffect(() => {
    price_number_height();
    window.addEventListener('resize', price_number_height);

    return () => {
      window.removeEventListener('resize', price_number_height);
    };
  }, []);

  useEffect(() => {
    const prices = ref.current.querySelectorAll('.price');

    if (prices.length < 1) return;

    if (checked) {
      Array.from(prices).forEach(price => {
        if (price === undefined || price === null) return;
        price.classList.remove('price-month');
      });
    } else {
      Array.from(prices).forEach(price => {
        if (price === undefined || price === null) return;
        price.classList.add('price-month');
      });
    }
  }, [checked]);

  return (
    <div className="pricing">
      <div className="row">
        <div className="col">
          <div className="switch">
            <div className="form-check form-switch">
              <label className="form-check-label" htmlFor="price-switch">
                Monthly
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                id="price-switch"
                onChange={() => {
                  setChecked(!checked);
                }}
                defaultChecked={checked}
              />
              <label className="form-check-label" htmlFor="price-switch">
                Annual
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="pricing-slider" ref={ref}>
            <Swiper
              className="swiper-container"
              resizeObserver={true}
              breakpoints={{
                0: {
                  enabled: true,
                  centeredSlides: true,
                  slidesPerView: 1.2,
                  spaceBetween: 30,
                  initialSlide: 1,
                },
                400: {
                  enabled: true,
                  centeredSlides: true,
                  slidesPerView: 1.4,
                  spaceBetween: 30,
                  initialSlide: 1,
                },
                576: {
                  enabled: true,
                  centeredSlides: true,
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  initialSlide: 1,
                },
                768: {
                  enabled: true,
                  centeredSlides: true,
                  slidesPerView: 1.8,
                  spaceBetween: 30,
                  initialSlide: 1,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  enabled: false,
                  centeredSlides: false,
                },
              }}
              pagination={false}
            >
              <SwiperSlide>
                <div className="pricing-single basic">
                  <h5 className="plan">Basic</h5>
                  <div className="price price-month">
                    <div className="month">
                      $<span className="number">10.00</span>
                      <sup>/mo</sup>
                    </div>
                    <div className="year">
                      $<span className="number">120.00</span>
                      <sup>/yr</sup>
                    </div>
                  </div>
                  <Link to="/contact" className="button button-basic">
                    <div className="button-inner">
                      <div className="button-content">
                        <h4>Get Started</h4>
                      </div>
                    </div>
                  </Link>
                  <ul>
                    <li className="available">Chat with doctors</li>
                    <li className="available">Instant notifications</li>
                    <li className="available">Subscription delivery</li>
                    <li>Nutritional plans</li>
                    <li>Customizeable menus</li>
                    <li>Unlimited storage</li>
                    <li>Weekly reports</li>
                    <li>Fitness guides</li>
                  </ul>
                  <h6>No commitments, cancel anytime.</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pricing-single standard">
                  <h5 className="plan">Standard</h5>
                  <div className="price price-month">
                    <div className="month">
                      $<span className="number">15.00</span>
                      <sup>/mo</sup>
                    </div>
                    <div className="year">
                      $<span className="number">180.00</span>
                      <sup>/yr</sup>
                    </div>
                  </div>
                  <Link to="/contact" className="button button-standard">
                    <div className="button-inner">
                      <div className="button-content">
                        <h4>Get Started</h4>
                      </div>
                    </div>
                  </Link>
                  <ul>
                    <li className="available">Chat with doctors</li>
                    <li className="available">Instant notifications</li>
                    <li className="available">Subscription delivery</li>
                    <li className="available">Nutritional plans</li>
                    <li className="available">Customizeable menus</li>
                    <li>Unlimited storage</li>
                    <li>Weekly reports</li>
                    <li>Fitness guides</li>
                  </ul>
                  <h6>No commitments, cancel anytime.</h6>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="pricing-single premium">
                  <h5 className="plan">Premium</h5>
                  <div className="price price-month">
                    <div className="month">
                      $<span className="number">20.00</span>
                      <sup>/mo</sup>
                    </div>
                    <div className="year">
                      $<span className="number">240.00</span>
                      <sup>/yr</sup>
                    </div>
                  </div>
                  <Link to="/contact" className="button button-premium">
                    <div className="button-inner">
                      <div className="button-content">
                        <h4>Get Started</h4>
                      </div>
                    </div>
                  </Link>
                  <ul>
                    <li className="available">Chat with doctors</li>
                    <li className="available">Instant notifications</li>
                    <li className="available">Subscription delivery</li>
                    <li className="available">Nutritional plans</li>
                    <li className="available">Customizeable menus</li>
                    <li className="available">Unlimited storage</li>
                    <li className="available">Weekly reports</li>
                    <li className="available">Fitness guides</li>
                  </ul>
                  <h6>No commitments, cancel anytime.</h6>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSlider;
