import React, { useState } from 'react';
import SectionHeading from './SectionHeading';

const ContactForm1 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="contact-form drop-shadow-2">
      <div className="contact-form-wrapper">
        <SectionHeading
          icon="las la-envelope"
          heading="contact"
          subHeading="Write message"
          additionalClasses="section-heading-2 center"
        />
        <form>
          <div className="form-floating">
            <input
              className="input form-control"
              id="name-field"
              type="text"
              placeholder="Full name"
              value={name}
              onChange={e => {
                setName(e.target.value);
              }}
            />
            <label htmlFor="name-field">Full name</label>
          </div>
          <div className="form-floating">
            <input
              className="input form-control"
              id="email-field"
              type="text"
              placeholder="Email address"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="email-field">Email address</label>
          </div>
          <div className="form-floating">
            <input
              className="input form-control"
              id="message-field"
              type="text"
              placeholder="Message"
              value={message}
              onChange={e => {
                setMessage(e.target.value);
              }}
            />
            <label htmlFor="message-field">Message</label>
          </div>
          <button type="submit" className="button button-3">
            <span className="button-inner">
              <span className="button-content">
                <span className="text">Submit Reply</span>
              </span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm1;
