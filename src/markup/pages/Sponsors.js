import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import TeamSlider from '../components/TeamSlider';

// images
import { request } from '../../datoCMS/request';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    request(
      `
        allSponsors {
          title
          image {
            url
          }
        }
        `,
    ).then(data => {
      console.log(data);
      setSponsors(data.allSponsors);
    });
  }, []);

  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Sponsors"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Sponsors',
            to: '/sponsors',
          },
        ]}
      />
      {/* page header - end */}

      {/* team section - start */}
      <div className="team">
        <div className="team-wrapper">
          <div className="team-inner">
            <div className="container">
              {/* team section heading - start */}
              <div className="row">
                <div className="col">
                  <div className="section-heading center c-white">
                    <div className="main-heading">
                      <h1 style={{ color: '#123769' }}>Our sponsors</h1>
                    </div>
                  </div>
                </div>
              </div>
              {/* team section heading - end */}
            </div>
            <div className="container">
              {/* team slider - start */}
              <div className="row">
                <div className="col">
                  <TeamSlider sponsors={sponsors} />
                </div>
              </div>
              {/* team slider - end */}
            </div>
          </div>
        </div>
      </div>
      {/* team section - end */}

      {/* instagram - start */}

      {/* instagram - end */}
    </>
  );
};

export default Sponsors;
