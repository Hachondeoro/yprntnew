import React from 'react';

import { Link } from 'react-router-dom';

// images
import logo from '../../assets/images/logo.png';
import aboriginalflag from '../../assets/images/aboriginal flag.png';
import islandersflag from '../../assets/images/torres islanders flag.png';
import australianflag from '../../assets/images/flag australia.jpg';
import background_image_1 from '../../assets/images/patterns/pattern-1.jpg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
              <div className="footer-row row">
                <div className="footer-detail col-12 col-md-7">
                  <Link to="#">
                    <img src={logo} alt="footer-logo" width="100px" />
                  </Link>
                  <img
                    src={australianflag}
                    alt="footer-logo"
                    height="60px"
                    style={{ marginLeft: '20px' }}
                  />
                  <img
                    src={aboriginalflag}
                    alt="footer-logo"
                    height="60px"
                    style={{ marginLeft: '20px' }}
                  />
                  <img
                    src={islandersflag}
                    alt="footer-logo"
                    height="60px"
                    style={{ marginLeft: '20px' }}
                  />
                  <p className="c-grey-1">
                    Rotaract Young Professionals acknowledges the Traditional Owners of country
                    throughout the Northern Territory, and recognises their continuing connection to
                    their lands, waters and communities. We pay our respects to Aboriginal cultures;
                    and to Elders both past and present.
                  </p>
                  <div className="links">
                    <a className="link-underline" href="mailto:info@rotaractnt.com">
                      <span>info@rotaractnt.com</span>
                    </a>
                  </div>
                </div>
                {/*<div className="footer-list footer-social social-gradient">*/}
                {/*  <h6>Follow</h6>*/}
                {/*  <ul>*/}
                {/*    <li className="twitter">*/}
                {/*      <Link to="#" className="link-underline">*/}
                {/*        <i className="fab fa-twitter"></i>*/}
                {/*        <span>Twitter</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li className="facebook">*/}
                {/*      <Link to="#" className="link-underline">*/}
                {/*        <i className="fab fa-facebook"></i>*/}
                {/*        <span>Facebook</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li className="linkedin">*/}
                {/*      <Link to="#" className="link-underline">*/}
                {/*        <i className="fab fa-linkedin-in"></i>*/}
                {/*        <span>Linkedin</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*    <li className="youtube">*/}
                {/*      <Link to="#" className="link-underline">*/}
                {/*        <i className="fab fa-youtube"></i>*/}
                {/*        <span>Youtube</span>*/}
                {/*      </Link>*/}
                {/*    </li>*/}
                {/*  </ul>*/}
                {/*</div>*/}
                <div className="footer-list col-12 col-md-5">
                  <h6>Menu</h6>

                  <ul>
                    <li>
                      <Link to="/" className="link-underline">
                        <span>Home</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="link-underline">
                        <span>About us</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/projects" className="link-underline">
                        <span>Our projects</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/sponsors" className="link-underline">
                        <span>Our partners</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/membership" className="link-underline">
                        <span>Membership</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" className="link-underline">
                        <span>Contact</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="footer-pattern"
          style={{ backgroundImage: `url(${background_image_1})` }}
        ></div>
      </div>
    </footer>
  );
};

export default Footer;
