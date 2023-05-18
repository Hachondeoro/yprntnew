import React from 'react';

import { Link } from 'react-router-dom';

const AppFeatureSingle = ({ icon, heading, excerpt, link = '/', containerClass }) => {
  return (
    <div className={`app-feature-single ${containerClass}`}>
      <div className="app-feature-single-wrapper">
        <div  className="icon">
          <i className={icon}></i>
        </div>
        {/*<Link to={link}>*/}
          <h3 className="c-dark">{heading}</h3>
        {/*</Link>*/}
        <p className="c-grey">{excerpt}</p>
      </div>
      {/*<Link to={link} className="circle">*/}
        <i className="las la-plus"></i>
        <i className="las la-angle-right hover"></i>
      {/*</Link>*/}
    </div>
  );
};

export default AppFeatureSingle;
