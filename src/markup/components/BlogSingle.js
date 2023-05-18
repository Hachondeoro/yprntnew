import React from 'react';
import { Link } from 'react-router-dom';

const BlogSingle = ({ element, type = 1 }) => {
  return (
    <div className={`blog-single ${type === 1 ? 'blog-single-1' : ''}`}>
      <div className="blog-single-wrapper">
        <div className="blog-single-content">
          <Link to={element.url} className="figure">
            <img src={element.thumbnail} alt="blog-thumbnail" />
            {type === 2 ? (
              <div className="img-hover">
                <div className="icon">
                  <i className="las la-link"></i>
                </div>
              </div>
            ) : (
              ''
            )}
          </Link>
          <Link to={element.url}>
            <h3>{element.title}</h3>
          </Link>
          <div className="blog-single-details">
            <div className="comments">
              <i className="las la-comment-alt"></i>
              {element.commentCount}
            </div>
            <div className="separator"></div>
            <div className="date">
              <i className="las la-calendar"></i>
              {element.date}
            </div>
          </div>
          <p>{element.excerpt}</p>
        </div>
        <Link to={element.url} className="circle">
          <i className="las la-plus"></i>
          <i className="las la-angle-right hover"></i>
        </Link>
      </div>
    </div>
  );
};

export default BlogSingle;
