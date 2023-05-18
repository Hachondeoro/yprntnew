import React, { useState } from 'react';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');

  return (
    <div className="comments-form">
      <div className="comments-form-wrapper">
        {/* comments form heading - start */}
        <div className="comments-form-heading">
          <h3>Write a reply</h3>
        </div>
        {/* comments form heading - end */}
        {/* comments form - start */}
        <form>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-floating">
                <input
                  className="input form-control"
                  id="name-field"
                  type="text"
                  placeholder="Name *"
                  onChange={e => {
                    setName(e.target.value);
                  }}
                />
                <label htmlFor="name-field">Name *</label>
              </div>
              <div className="form-floating">
                <input
                  className="input form-control"
                  id="email-field"
                  type="email"
                  placeholder="Email *"
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                />
                <label htmlFor="email-field">Email *</label>
              </div>
              <div className="form-floating">
                <input
                  className="input form-control"
                  id="website-field"
                  type="text"
                  placeholder="Website"
                  onChange={e => {
                    setWebsite(e.target.value);
                  }}
                />
                <label htmlFor="website-field">Website</label>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-floating textarea-form">
                <textarea
                  className="input textarea form-control"
                  id="comment-field"
                  placeholder="Write reply *"
                  onChange={e => {
                    setComment(e.target.value);
                  }}
                ></textarea>
                <label htmlFor="comment-field">Write reply *</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button type="submit" className="button button-3">
                <span className="button-inner">
                  <span className="button-content">
                    <span className="text">Submit Reply</span>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </form>
        {/* comments form - end */}
      </div>
    </div>
  );
};

export default CommentForm;
