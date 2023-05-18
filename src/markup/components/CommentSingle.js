import React from 'react';

const CommentSingle = ({ image, name, date, comment, children, isReply }) => {
  return (
    <div className={`comments-single ${isReply ? 'has-reply' : ''}`}>
      <div className="comments-single-wrapper">
        <div className="comments-single-image">
          <img src={image} alt="comment" />
        </div>
        <div className="comments-single-content">
          <h5>{name}</h5>
          <p className="date">{date}</p>
          <p className="comment">{comment}</p>
          <a href="#!" className="reply-button link-underline">
            <span>Reply</span>
          </a>
        </div>
      </div>
      {children}
    </div>
  );
};

export default CommentSingle;
