import React from 'react';

import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import AppFeatureSingle from '../components/AppFeatureSingle';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import BackgroundAnimation from '../components/BackgroundAnimation';
import VideoLightBox from '../components/VideoLightBox';
import ScreenSlider from '../components/ScreenSlider';
import DownloadButton from '../components/DownloadButton';

import feature_phone_2 from '../../assets/images/feature-section-2-phone.png';
import feature_image_2 from '../../assets/images/feature-section-2-img.jpg';
import background_image_2 from '../../assets/images/patterns/pattern-2.jpg';
import video_img from '../../assets/images/video-img.jpg';

import features from '../data/features';

const Features1 = () => {
  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Features."
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Features',
            to: '/features1',
          },
        ]}
      />
      {/* page header - end */}

      {/* app feature - start */}
      <div className="app-feature app-feature-2">
        <div className="app-feature-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  heading="app features"
                  subHeading="Get surprised by amazing features."
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
                      containerClass="app-feature-single-1"
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
                      <h1>
                        Orions is a fast and secure app that was built for both Android and iOS
                        platforms.
                      </h1>
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

      {/* screen section - start */}
      <div className="screen-section">
        <div className="screen-section-wrapper">
          <ScreenSlider />
          {/* screen section bottom - start */}
          <div className="screen-section-bottom">
            <div className="screen-section-bottom-wrapper">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 offset-lg-0 col-10 offset-1">
                    <h1 className="c-white">Download from both Android and iOS</h1>
                    <h4 className="c-white">
                      <i className="fas fa-smile" style={{ marginRight: '1rem' }}></i>3 Million
                      users and counting!
                    </h4>
                  </div>
                  <div className="col-lg-4 offset-lg-0 col-10 offset-1">
                    <DownloadButton
                      groupType="download-button-1-group"
                      buttonType="download-button-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* screen section bottom - end */}
        </div>
        <div className="background-pattern background-pattern-2">
          <BackgroundAnimation />
          <div className="background-pattern-gradient"></div>
          <div className="background-pattern-bottom">
            <div className="image" style={{ backgroundImage: `url(${background_image_2})` }}></div>
          </div>
        </div>
      </div>
      {/* screem section - end */}

      {/* feature section - start */}
      <div className="feature-section feature-section-1 feature-section-spacing-3">
        <div className="feature-section-wrapper">
          <div className="container">
            <div className="row gx-5">
              <div className="col-lg-5 offset-lg-0 col-10 offset-1">
                <div className="feature-section-image">
                  <img src={feature_image_2} className="image" alt="feature-fore" />
                  <img src={feature_phone_2} className="phone" alt="phone" />
                  <div className="background-pattern background-pattern-radius-reverse">
                    <BackgroundAnimation />
                    <div className="background-pattern-gradient"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1 col-md-8 offset-md-2 col-10 offset-1">
                <div className="feature-section-content">
                  <SectionHeading
                    icon="las la-cog"
                    heading="app features"
                    subHeading="Rich and full of features."
                  />
                  <div className="icon-text-1-group">
                    <div className="icon-text-1">
                      <i className="las la-comments"></i>
                      <div>
                        <h4 className="c-dark">Video calls</h4>
                        <p className="c-grey">
                          He saw lesser whales man air. Seasons void fly replenish man divided open
                          fifth own fruitful.
                        </p>
                      </div>
                    </div>
                    <div className="icon-text-1">
                      <i className="las la-headset"></i>
                      <div>
                        <h4 className="c-dark">Private groups</h4>
                        <p className="c-grey">
                          Give whales creeping sixth. Blessed itself created dry they're firmament
                          face whose face lesser spirit day dry.
                        </p>
                      </div>
                    </div>
                    <div className="icon-text-1">
                      <i className="las la-photo-video"></i>
                      <div>
                        <h4 className="c-dark">Cloud storage</h4>
                        <p className="c-grey">
                          Waters seasons of place likeness good day let they're evening replenish
                          years of over that.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Button to="/contact" content="Get Started" type="button-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* feature section - end */}

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

export default Features1;
