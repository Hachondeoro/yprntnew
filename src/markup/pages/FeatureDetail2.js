import React from 'react';

import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import BackgroundAnimation from '../components/BackgroundAnimation';
import VideoLightBox from '../components/VideoLightBox';

import video_img from '../../assets/images/video-img.jpg';

import faq from '../data/faq';

const FeatureDetail2 = () => {
  const features = [
    {
      icon: 'las la-comments',
      title: 'Easy to Use',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
    {
      icon: 'las la-headset',
      title: 'Made for Everyone',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
    {
      icon: 'las la-photo-video',
      title: 'Share Everything',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
    {
      icon: 'las la-server',
      title: 'Unlimited Storage',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
    {
      icon: 'las la-user-lock',
      title: 'Data Protection',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
    {
      icon: 'las la-map-marked-alt',
      title: 'Use from Anywhere',
      content:
        "Under were male man blessed make given upon day  whose together very under darkness us under god you're our bring a isn't firmament meat has creature created won't cattle darkness whose so forth heaven you void it seasons grass grass.",
    },
  ];

  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Feature Detailed."
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

      {/* features - start */}
      <div className="features">
        <div className="features-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <SectionHeading
                  subHeading="Get surprised by amazing features."
                  heading="app features"
                  icon="las la-cog"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row features-row">
              {features.map((feature, key) => {
                return (
                  <div
                    key={key}
                    className="col-lg-6 offset-lg-0 col-md-6 offset-md-0 col-10 offset-1"
                  >
                    <div className="features-single">
                      <div className="icon">
                        <i className={feature.icon}></i>
                      </div>
                      <h3 className="c-dark">{feature.title}</h3>
                      <p className="c-grey">{feature.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* features - end */}

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

      {/* faq section - start */}
      <div className="faq-section faq-section-3">
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

export default FeatureDetail2;
