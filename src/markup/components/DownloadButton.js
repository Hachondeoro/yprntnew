import React from 'react';
import { Link } from "react-router-dom";

const DownloadButton = ({ groupType, buttonType, color }) => {
  return (
    <div className={`download-button-group ${groupType}`}>
      <Link className={`download-button download-button-google ${buttonType}`} to="membership" >
        <div className={`download-button-inner ${color}`}>
          <div className={`download-button-icon c-green ${color}`}>
            <i className="fas fa-user"></i>
          </div>
          <div className="download-button-content">
            <h5 className={`c-grey upper ls-1 ${color}`}>Join</h5>
            <h3 className={`c-dark ls-2 ${color}`}>ROTARACT</h3>
          </div>
        </div>
      </Link>
      <a href="#" className={`download-button download-button-apple ${buttonType}`}>
        <div className={`download-button-inner ${color}`}>
          <div className={`download-button-icon c-blue ${color}`}>
            <i className="fas fa-download"></i>
          </div>
          <div className="download-button-content">
            <h5 className={`c-grey upper ls-1 ${color}`}>Download our</h5>
            <h3 className={`c-dark ls-2 ${color}`}>HANDBOOK</h3>
          </div>
        </div>
      </a>
    </div>
  );
};

export default DownloadButton;
