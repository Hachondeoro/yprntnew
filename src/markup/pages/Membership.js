import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import TabSection from '../components/TabSection';
import ImageSlider from '../components/ImageSlider';
import Button from '../components/Button';
import { request } from '../../datoCMS/request';

const Membership = () => {
  const [membershipFAQ, setMembershipFAQ] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    request(
      `
          allMembershipfaqs {
            title
            description
          }
        `,
    ).then(data => {
      console.log(data);
      setMembershipFAQ(data.allMembershipfaqs);
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Membership"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Membership',
            to: '/membership',
          },
        ]}
      />
      {/* page header - end */}

      {/* tab section - start */}
      {isLoaded && (
        <TabSection data={membershipFAQ} subHeading="Explore" className="tab-section-1" />
      )}
      {/* tab section - end */}

      {/* instagram - start */}
      <div className="instagram">
        <div className="instagram-wrapper">
          <div className="button-wrapper">
            <Button
              to="/"
              content="Follow us on Instagram"
              type="button-premium"
              icon={<i className="fab fa-instagram"></i>}
            />
          </div>
        </div>
      </div>
      <div style={{ height: '400px' }} />
      {/* instagram - end */}
    </>
  );
};

export default Membership;
