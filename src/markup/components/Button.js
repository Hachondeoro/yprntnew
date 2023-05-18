import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, content, type, icon }) => {
  return (
    <Link to={to} className={`button ${type}`}>
      <div className="button-inner">
        <div className="button-content">
          {icon}
          <h4>{content}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Button;
