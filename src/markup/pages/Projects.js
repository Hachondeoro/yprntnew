import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import TabSection from '../components/TabSectionProjects';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import BackgroundAnimation from '../components/BackgroundAnimation';
import ImageSlider from '../components/ImageSlider';

import feature_phone_1 from '../../assets/images/feature-section-1-phone.png';
import feature_image_1 from '../../assets/images/feature-section-1-img.jpg';
import { request } from '../../datoCMS/request';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    request(
      `
          allProjects {
            title
            titleright
            image {
              url
            }
            description
          }
        `,
    ).then(data => {
      console.log(data);
      setProjects(data.allProjects.reverse());
      setIsLoaded(true);
    });
  }, []);

  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Our Projects"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Our Projects',
            to: '/projects',
          },
        ]}
      />
      {/* page header - end */}

      {/* tab section - start */}
      {isLoaded ? (
        <TabSection data={projects} subHeading="Projects" className="tab-section-1" />
      ) : null}
      {/* tab section - end */}
      {/*<div style={{height:"400px"}}/>*/}

      {/* feature section - start */}

      {/* feature section - end */}
      {/* instagram - start */}
      {/* instagram - end */}
    </>
  );
};

export default Projects;
