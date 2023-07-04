import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import TeamSlider from '../components/TeamSlider';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TestimonialSlider from '../components/TestimonialSlider';
import BackgroundAnimation from '../components/BackgroundAnimation';
import faq from '../data/faq';

// images
import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';
import about_image from '../../assets/images/Paws And Gelato.jpg';
import organisation_image from '../../assets/images/organisation structure.png';
import AppFeatureSingle from '../components/AppFeatureSingle';
import { request } from '../../datoCMS/request';
import parse from 'html-react-parser';

const About = () => {
  const [FAQ, setFAQ] = useState([]);

  useEffect(() => {
    request(
      `allFaqs {
          answer
          question
          }
        `,
    ).then(data => {
      console.log(data);
      setFAQ(data.allFaqs);
      // this.setState({
      //   data: data,
      // });
    });
  }, []);

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
            {/* first half - start */}
            <div className="row">
              <div className="col-lg-6 offset-lg-0 order-lg-1 col-md-8 offset-md-2 col-10 offset-1 order-2">
                <div className="about-section-content c-grey">
                  <div className="section-heading">
                    <div className="sub-heading c-blue upper ls-1">
                      <i className="las la-user-circle"></i>
                      <h5>introduction</h5>
                    </div>
                    <div className="main-heading c-dark">
                      <h1>A little about us</h1>
                    </div>
                  </div>
                  <p className="paragraph-big">
                    In October 2022, a group of compassionate and service-minded
                    young leaders came together with a shared vision. They were determined to
                    establish an organization that would bring together young professionals
                    dedicated to serving their community. Thus, the Rotaract Young Professionals
                    Northern Territory was born.
                  </p>
                  <p>
                    Driven by their passion for making a difference, the members of Rotaract created
                    a close-knit community of like-minded individuals. They united under a common
                    goal: to create positive change in the community through their collective
                    efforts. Together, they became a force for good, working tirelessly to make a
                    lasting impact.
                  </p>
                  <p>
                    Rotaract Young Professionals Northern Territory is not just an ordinary
                    community service organization; it is a volunteer-based powerhouse of dedicated
                    individuals. Their primary focus is to support and empower young professional
                    leaders, as well as emerging young leaders in the Territory. They believe that
                    by utilizing their skills, knowledge, and experiences, they can make a tangible
                    difference in the lives of others.
                  </p>
                  <p>
                    Since its humble beginnings, Rotaract has successfully implemented numerous
                    projects that have brought about positive change. They have not only transformed
                    communities but also empowered young leaders through professional development
                    opportunities and meaningful volunteering experiences.
                  </p>
                  <p>
                    As time goes on, Rotaract remains committed to its mission of serving the
                    community. Led by a team of dedicated young professionals, they continue to
                    initiate and execute various community service projects. Their unwavering
                    dedication ensures that they make a lasting impact on the lives of those they
                    serve.
                  </p>
                  <p>
                    The story of Rotaract Young Professionals Northern Territory is one of
                    collaboration, passion, and a relentless commitment to service. It is a tale
                    that showcases the power of young leaders coming together to create a better and
                    brighter future for their community.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-0 order-lg-2 col-md-8 offset-md-2 col-10 offset-1 order-1">
                <div className="about-section-image">
                  <div className="pattern-image pattern-image-1">
                    <div className="pattern-image-wrapper">
                      <img className="drop-shadow-1" src={about_image} height="450" alt="pattern" />
                      <div className="background-pattern background-pattern-radius drop-shadow-1">
                        <BackgroundAnimation />
                        <div className="background-pattern-gradient"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* first half - end */}
            {/* second half - start */}
            <div className="row">
              <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1 text-center">
                <h3 className="c-dark second-half-heading mb-2">Why we are different</h3>
                <h4 className="c-dark second-half-heading mb-2">Our Motto, Vision & Mission</h4>
                <p className="my-4">
                  Rotaract values the importance of connecting young professionals, fostering their
                  personal and professional growth, and inspiring them to give back to the
                  community.
                </p>
              </div>
            </div>
            <div className="row gx-5 about-row">
              <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <AppFeatureSingle
                  icon="las la-award"
                  heading="Our Motto"
                  excerpt="Service above Self"
                  link="/#"
                  containerClass="app-feature-single-1"
                />
              </div>
              <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <AppFeatureSingle
                  icon="las la-eye"
                  heading="Our Vision"
                  excerpt="Empowering the next generation of leaders, our vision to cultivate a community of young professionals united by service, leadership, and fellowship."
                  link="/#"
                  containerClass="app-feature-single-1"
                />
              </div>
              <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
                <AppFeatureSingle
                  icon="las la-bullseye"
                  heading="Our Mission"
                  excerpt="At Rotaract, our mission is to empower Northern Territory's young professionals and recent graduates by creating a vibrant community where they can forge valuable connections, thrive in personal and professional growth, and emerge as inspiring leaders. We achieve this through a dynamic blend of fellowship and service, fostering an environment where young professionals lead with integrity, serve with passion, and make a lasting impact in their communities and beyond."
                  link="/#"
                  containerClass="app-feature-single-1"
                />
              </div>
            </div>
            {/* second half - end */}
          </div>
        </div>
      </div>
      {/* about section - end */}

      {/* team section - start */}
      <div className="team">
        <div className="team-wrapper">
          <div className="team-inner">
            <div className="container">
              {/* team section heading - start */}
              <div className="row">
                <div className="col">
                  <div className="section-heading center c-white">
                    <div className="sub-heading upper ls-1">
                      <i className="las la-tags"></i>
                      <h5>our team</h5>
                    </div>
                    <div className="main-heading">
                      <h1>Our organisation structure</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* team section heading - end */}
            </div>
            <div className="container team-slider-container">
              {/* team slider - start */}
              <div className="">
                <div className="about-section-image">
                  <div className="pattern-image pattern-image-1">
                    <div className="pattern-image-wrapper">
                      <img
                        className="drop-shadow-1"
                        src={organisation_image}
                        height="850"
                        width="1250"
                        alt="pattern"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* team slider - end */}
            </div>
            {/*<div className="container team-slider-container">*/}
            {/*  /!* team slider - start *!/*/}
            {/*  <div className="row">*/}
            {/*    <div className="col">*/}
            {/*      <TeamSlider />*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*  /!* team slider - end *!/*/}
            {/*</div>*/}
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
      {/* team section - end */}

      {/* testimonial section - start */}
      {/*<div className="testimonial-section">*/}
      {/*  <div className="testimonial-section-wrapper">*/}
      {/*    <div className="container">*/}
      {/*      <div className="row">*/}
      {/*        <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">*/}
      {/*          <SectionHeading*/}
      {/*            icon="las la-comments"*/}
      {/*            heading="feedbacks"*/}
      {/*            subHeading="What people are talking about."*/}
      {/*            additionalClasses="center width-55"*/}
      {/*          />*/}
      {/*        </div>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*    <div className="container">*/}
      {/*      <div className="row">*/}
      {/*        <TestimonialSlider />*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      {/* testimonial section - end */}

      {/* faq section - start */}
      <div className="faq-section faq-section-1">
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
                    {FAQ.map((element, key) => {
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
                              <p>{parse(element.answer)}</p>
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
    </>
  );
};

export default About;
