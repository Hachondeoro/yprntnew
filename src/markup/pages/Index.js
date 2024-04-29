import React from 'react';

// components
import DownloadButton from '../components/DownloadButton';
import SectionHeading from '../components/SectionHeading';
import AppFeatureSingle from '../components/AppFeatureSingle';
import Button from '../components/Button';
import BackgroundAnimation from '../components/BackgroundAnimation';
import VideoLightBox from '../components/VideoLightBox';
import ImageSlider from '../components/ImageSlider';

// images
import hero_phone from '../../assets/images/home-slider.png';
import video_img from '../../assets/images/service before self.png';
import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';

// data
import features from '../data/features';

const Index = () => {
  return (
    <>
      {/* hero - start */}
      <div className="hero hero-1">
        <div className="hero-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-0 order-lg-1 col-10 offset-1 order-2">
                <div className="hero-content c-white">
                  <h1>Young Professionals Rotaract</h1>
                  <p className="large-subtitle">
                    Rotaract values the importance of connecting young professionals, fostering
                    their personal and professional growth, and inspiring them to give back to the
                    community.
                  </p>
                  <p className="large">Connect, Grow, Give</p>
                  <DownloadButton buttonType="download-button-2" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-0 order-lg-2 col-10 offset-1 order-1">
                <ImageSlider />
              </div>
            </div>
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
      {/* hero - end */}

      {/* app feature - start */}
      <div className="app-feature app-feature-1">
        <div className="app-feature-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  heading="ABOUT US"
                  subHeading="Our Objectives"
                  icon="las la-cog"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row gx-5 gy-5">
              {features.map((element, key) => {
                return (
                  <div
                    className="col-lg-4 offset-lg-0 col-md-6 offset-md-0 col-10 offset-1"
                    key={key}
                  >
                    <AppFeatureSingle
                      icon={element.icon}
                      heading={element.heading}
                      excerpt={element.excerpt}
                      containerClass="app-feature-single-2"
                      link={element.to}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* app feature - end */}

      {/* video - start */}
      <div className="video-section">
        <div className="video-section-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 offset-lg-1 order-lg-1 col-10 offset-1 order-2">
                <div className="video-section-content">
                  <div className="section-heading section-heading-1 center-responsive c-white">
                    <div className="sub-heading upper ls-1">
                      <i className="las la-video"></i>
                      <h5>our video</h5>
                    </div>
                    <div className="main-heading">
                      <h1>Connect, Grow, Give</h1>
                    </div>
                  </div>
                  <Button to="/contact" content="Get Started" type="button-1" />
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 order-lg-2 order-1">
                <div className="video-section-video">
                  <figure>
                    <img
                      className="drop-shadow-1"
                      src={video_img}
                      width="471"
                      height="472"
                      alt="drop-shadow"
                    />

                    <div className="play">
                      <VideoLightBox URL="https://www.youtube.com/watch?v=WIl5F5rM5wQ" />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
            <div className="background-pattern background-pattern-radius drop-shadow-1">
              <BackgroundAnimation />
              <div className="background-pattern-gradient"></div>
            </div>
          </div>
        </div>
      </div>
      {/* video - end */}

      {/* pricing section - start */}
      {/*<div className="pricing-section">*/}
      {/*  <div className="pricing-section-wrapper">*/}
      {/*    <div className="container">*/}
      {/*      <div className="row">*/}
      {/*        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">*/}
      {/*          <SectionHeading*/}
      {/*            icon="las la-tags"*/}
      {/*            heading="our app rates"*/}
      {/*            subHeading="Pricing plans for you."*/}
      {/*            additionalClasses="center c-white"*/}
      {/*            mainHeadingClass="c-white"*/}
      {/*            subHeadingClass="c-white"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*      <PricingSlider />*/}
      {/*    </div>*/}
      {/*    <div className="background-pattern background-pattern-1">*/}
      {/*      <BackgroundAnimation />
      {/*      <div className="background-pattern-gradient"></div>*/}
      {/*      <div className="background-pattern-bottom">*/}
      {/*        <div*/}
      {/*          className="image"*/}
      {/*          style={{ backgroundImage: `url(${background_image_1})` }}*/}
      {/*        ></div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* pricing section - end */}

      {/* faq section - start */}
      {/* faq section - end */}

      {/* screen section - start */}
      {/*<div className="screen-section">*/}
      {/*  <div className="screen-section-wrapper">*/}``
      {/*    <ScreenSlider />*/}
      {/*    /!* screen section bottom - start *!/*/}
      {/*    <div className="screen-section-bottom">*/}
      {/*      <div className="screen-section-bottom-wrapper">*/}
      {/*        <div className="container">*/}
      {/*          <div className="row">*/}
      {/*            <div className="col-lg-8 offset-lg-0 col-10 offset-1">*/}
      {/*              <h1 className="c-white">Download from both Android and iOS</h1>*/}
      {/*              <h4 className="c-white">*/}
      {/*                <i className="fas fa-smile" style={{ marginRight: '1rem' }}></i>3 Million*/}
      {/*                users and counting!*/}
      {/*              </h4>*/}
      {/*            </div>*/}
      {/*            <div className="col-lg-4 offset-lg-0 col-10 offset-1">*/}
      {/*              <DownloadButton*/}
      {/*                groupType="download-button-1-group"*/}
      {/*                buttonType="download-button-1"*/}
      {/*              />*/}
      {/*            </div>*/}
      {/*          </div>*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    /!* screen section bottom - end *!/*/}
      {/*  </div>*/}
      {/*  <div className="background-pattern background-pattern-2">*/}
      {/*    <BackgroundAnimation />
      {/*    <div className="background-pattern-gradient"></div>*/}
      {/*    <div className="background-pattern-bottom">*/}
      {/*      <div className="image" style={{ backgroundImage: `url(${background_image_2})` }}></div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* screem section - end */}
    </>
  );
};

export default Index;
