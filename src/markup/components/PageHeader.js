import React from 'react';

// images
import background_image_2 from '../../assets/images/patterns/pattern-2.jpg';
import { Link } from 'react-router-dom';
import BackgroundAnimation from './BackgroundAnimation';

const PageHeader = ({ title, pages }) => {
  return (
    <div className="page-header">
      <div className="page-header-wrapper">
        <div className="page-header-inner">
          <div className="container">
            <div className="row d-lg-flex align-items-lg-end">
              <div className="col-lg-6">
                <div className="page-header-content c-white">
                  <h1>{title}</h1>
                  <ul>
                    {pages.map((page, key) => {
                      return (
                        <li key={key}>
                          {key !== 0 ? <i className="las la-angle-right"></i> : ''}
                          <Link to={page.to} className="link-underline">
                            <span>{page.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
              {/*<div className="col-lg-6">*/}
              {/*  <div className="page-header-search">*/}
              {/*    <form>*/}
              {/*      <input type="text" placeholder="Search" />*/}
              {/*      <button type="submit">*/}
              {/*        <i className="fas fa-search"></i>*/}
              {/*      </button>*/}
              {/*    </form>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </div>
        </div>
        <div className="background-pattern background-pattern-2">
          {/* <div ref={box} className="background-pattern-img background-loop" style={{backgroundImage: `url(${background_pattern})`}}></div> */}
          <BackgroundAnimation />
          <div className="background-pattern-gradient"></div>
          <div className="background-pattern-bottom">
            <div className="image" style={{ backgroundImage: `url(${background_image_2})` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
