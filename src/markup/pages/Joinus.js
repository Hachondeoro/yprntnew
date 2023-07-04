import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';

// images
import { request } from '../../datoCMS/request';
import parse from 'html-react-parser';

const JoinUs = () => {
  const [committee, setCommittee] = useState([]);
  const [subcommittee, setSubcommittee] = useState([]);

  useEffect(() => {
    request(
      `allCommittees {
              title
              description
            }
            allSubcommittees {
              title
              description
            }
        `,
    ).then(data => {
      setCommittee(data.allCommittees);
      setSubcommittee(data.allSubcommittees);
    });
  }, []);

  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Join Us"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Join us',
            to: '/joinus',
          },
        ]}
      />
      <div className="faq-section faq-section-1">
        <div className="faq-section-wrapper">
          <div className="container">
            <div>
              <div className="row">
                <h4 className="c-dark second-half-heading mb-4 text-center">
                  Make a difference that truly matters
                </h4>
                <h3 className="c-dark second-half-heading mb-2 text-center">VOLUNTEER WITH US</h3>
                <div className="col-xxl-8 offset-xxl-2 col-lg-12 offset-lg-0 col-8 offset-2">
                  <p className="my-4">
                    Are you a passionate and driven young leader looking to make a real impact in
                    the community? Rotaract Young Professionals warmly welcomes you to step up and
                    take on leadership roles within our organization.
                  </p>
                  <p className="my-4">
                    Whether you're interested in our Executive Board, Management Committee, or
                    Sub-Committee positions, we keep our expression of interest open year-round,
                    providing you with the perfect opportunity to join our vibrant community
                    whenever you're ready.
                  </p>
                  <p className="my-4">
                    What sets us apart is that we don't require previous experience. What truly
                    matters to us is your passion, enthusiasm, commitment, and willingness to make a
                    meaningful contribution to the community.
                  </p>
                  <p className="my-4">
                    Worried about not having the right skills? Don't be! When you join our ranks,
                    you'll receive comprehensive training and continuous development, empowering you
                    to excel as a leader and create a lasting positive impact in the world around
                    you.
                  </p>
                  <p className="my-4">
                    Let's take the first step and express your interest today. Join Rotaract Young
                    Professionals today, and together, let's make a difference that truly matters
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  icon="las la-file-alt"
                  heading="Open positions"
                  subHeading="Management Committee"
                  additionalClasses="center width-64"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9 col-md-8 col-10">
                <div className="faq-wrapper">
                  <div className="faq" id="committee-accordion">
                    {committee.map((element, key) => {
                      return (
                        <div className="accordion-item" key={key}>
                          <div className="accordion-header" id={`committee-${key}`}>
                            <button
                              className={`accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#committee-collapse-${key}`}
                              aria-expanded="false"
                              aria-controls={`committee-collapse-${key}`}
                            >
                              <span>{element.title}</span>
                            </button>
                          </div>
                          <div
                            id={`committee-collapse-${key}`}
                            className={`accordion-collapse collapse`}
                            aria-labelledby={`committee-${key}`}
                            data-bs-parent="#committee-accordion"
                          >
                            <div className="accordion-body">
                              <p>{parse(element.description)}</p>
                            </div>
                            <div className={`download-button-group`}>
                              <a
                                href="https://forms.office.com/r/WHXyYZ2Zui"
                                className={`download-button download-button-rotaractButton download-button-white`}
                                data-interception="off"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className={`download-button-inner`}>
                                  <div className={`download-button-icon c-blue`}>
                                    <i className="fas fa-sign-in-alt c-pinkRotaract"></i>
                                  </div>
                                  <div className="download-button-content">
                                    <h3 className={`c-dark ls-2 c-pinkRotaract`}>APPLY HERE</h3>
                                  </div>
                                </div>
                              </a>
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
          <div className="container">
            <div className="row">
              <div className="col-xxl-10 offset-xxl-1 col-lg-12 offset-lg-0 col-10 offset-1">
                <SectionHeading
                  icon=""
                  heading=""
                  subHeading="Management Sub-committee"
                  additionalClasses="center width-55"
                />
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <div className="col-lg-9 col-md-8 col-10">
                <div className="faq-wrapper">
                  <div className="faq" id="subcommittee-accordion">
                    {subcommittee.map((element, key) => {
                      return (
                        <div className="accordion-item" key={key}>
                          <div className="accordion-header" id={`subcommittee-${key}`}>
                            <button
                              className={`accordion-button collapsed`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#subcommittee-collapse-${key}`}
                              aria-expanded="false"
                              aria-controls={`subcommittee-collapse-${key}`}
                            >
                              <span>{element.title}</span>
                            </button>
                          </div>
                          <div
                            id={`subcommittee-collapse-${key}`}
                            className={`accordion-collapse collapse`}
                            aria-labelledby={`subcommittee-${key}`}
                            data-bs-parent="#subcommittee-accordion"
                          >
                            <div className="accordion-body">
                              <p>{parse(element.description)}</p>
                            </div>
                            <div className={`download-button-group`}>
                              <a
                                href="https://forms.office.com/r/WHXyYZ2Zui"
                                className={`download-button download-button-rotaractButton download-button-white`}
                                data-interception="off"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <div className={`download-button-inner`}>
                                  <div className={`download-button-icon c-blue`}>
                                    <i className="fas fa-sign-in-alt c-pinkRotaract"></i>
                                  </div>
                                  <div className="download-button-content">
                                    <h3 className={`c-dark ls-2 c-pinkRotaract`}>APPLY HERE</h3>
                                  </div>
                                </div>
                              </a>
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

export default JoinUs;
