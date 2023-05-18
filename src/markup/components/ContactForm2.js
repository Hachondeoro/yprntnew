import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

const ContactForm1 = () => {
  const [email, setEmail] = useState('');

  return (
    <div className="contact-form contact-form-1 drop-shadow-2">
      <div className="contact-form-wrapper">
        <SectionHeading
          icon="las la-envelope"
          heading="subscribe"
          subHeading="Our newsletter"
          additionalClasses="section-heading-2 center"
        />
        <div className="contact-form-icon">
          <i className="las la-envelope-open-text"></i>
        </div>
        <form>
          <div className="form-floating">
            <input
              className="input form-control"
              id="email-field-1"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email-field-1">Email address</label>
          </div>
          <button type="submit" className="button button-2">
            <span className="button-inner">
              <span className="button-content">
                <span className="text">Subscribe</span>
              </span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm1;
