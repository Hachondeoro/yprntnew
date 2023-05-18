import React from 'react';

import PageHeader from '../components/PageHeader';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import PricingSlider from '../components/PricingSlider';

import faq from '../data/faq';

import pricing_image from '../../assets/images/pricing-image-1.jpg';
import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';

const Pricing = () => {
  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="About Us"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'About',
            to: '/about',
          },
        ]}
      />
      {/* page header - end */}

      {/* about section - start */}
      <div className="about-section">
        <div className="about-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                <div className="about-section-content c-grey">
                  <div className="section-heading">
                    <div className="sub-heading c-blue upper ls-1">
                      <i className="las la-user-circle"></i>
                      <h5>pricing</h5>
                    </div>
                    <div className="main-heading c-dark">
                      <h1>Transparent pricing for you.</h1>
                    </div>
                  </div>
                  <p className="paragraph-big">
                    Bring all creature seas blessed whales were earth wherein evening dry one.
                    Morning unto fly midst living so shall fish multiply meat day.
                  </p>
                  <p>
                    There grass said shall won't thing moved shall sea all male two is. Fowl man
                    sixth gathering heaven was brought air fill dry further abundantly them be from
                    won't every have cattle darkness moveth every the darkness may which evening
                    she'd thing own man is there said gathering be the in lesser called.
                  </p>
                  <p>
                    Our, that subdue open above creature i forth make and third beast bring had
                    creeping stars brought together. Creepeth creature by open us our appear
                    creeping bring they're days.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-0 order-lg-2 col-md-8 offset-md-2 col-10 offset-1 order-1">
                <div className="about-section-image">
                  <div className="pattern-image pattern-image-1">
                    <div className="pattern-image-wrapper">
                      <img
                        className="drop-shadow-1"
                        src={pricing_image}
                        height="450"
                        alt="pattern"
                      />
                      <div className="background-pattern background-pattern-radius drop-shadow-1">
                        <BackgroundAnimation />
                        <div className="background-pattern-gradient"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about section - end */}

      {/* pricing section - start */}
      <div className="pricing-section">
        <div className="pricing-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <SectionHeading
                  icon="las la-tags"
                  heading="our app rates"
                  subHeading="Pricing plans for you."
                  additionalClasses="center c-white"
                  mainHeadingClass="c-white"
                  subHeadingClass="c-white"
                />
              </div>
            </div>
            <PricingSlider />
          </div>
          <div className="background-pattern background-pattern-1">
            <BackgroundAnimation />
            <div className="background-pattern-gradient"></div>
            <div className="background-pattern-bottom">
              <div
                className="image"
                style={{ backgroundImage: `url(${background_image_1})` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* pricing section - end */}

      {/* faq section - start */}
      <div className="faq-section faq-section-2">
        <div className="faq-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  icon="las la-file-alt"
                  heading="discover"
                  subHeading="Some frequently asked questions"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9 col-md-8 col-10">
                <div className="faq-wrapper">
                  <div className="faq" id="faq-accordion">
                    {faq.map((element, key) => {
                      return (
                        <div className="accordion-item" key={key}>
                          <div className="accordion-header" id={`faq-${key}`}>
                            <button
                              className={`accordion-button ${key !== 1 ? 'collapsed' : ''}`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#faq-collapse-${key}`}
                              aria-expanded={key === 1 ? 'true' : 'false'}
                              aria-controls={`faq-collapse-${key}`}
                            >
                              <span>{element.question}</span>
                            </button>
                          </div>
                          <div
                            id={`faq-collapse-${key}`}
                            className={`accordion-collapse collapse ${key === 1 ? 'show' : ''}`}
                            aria-labelledby={`faq-${key}`}
                            data-bs-parent="#faq-accordion"
                          >
                            <div className="accordion-body">
                              <p>{element.answer}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq section - end */}

      {/* instagram - start */}
      <div className="instagram">
        <div className="instagram-wrapper">
          <ImageSlider />
          <div className="button-wrapper">
            <Button
              to="/"
              content="Follow us on Instagram"
              type="button-premium"
              icon={<i className="fab fa-instagram"></i>}
            />
          </div>
        </div>
      </div>
      {/* instagram - end */}
    </>
  );
};

export default Pricing;
