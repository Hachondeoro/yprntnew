import React, { useEffect, useState } from 'react';

import PageHeader from '../components/PageHeader';
import TabSection from '../components/TabSection';
import { request } from '../../datoCMS/request';

const Gallery = () => {
  
  const [isLoaded, setIsLoaded] = useState(false);

 
  return (
    <>
      {/* page header - start */}
      <PageHeader
        title="Gallery"
        pages={[
          {
            title: 'Home',
            to: '/',
          },
          {
            title: 'Gallery',
            to: '/Gallery',
          },
        ]}
      />
      {/* page header - end */}

      {/* tab section - start */}
      {isLoaded && (
        <></>
      )}
      {/* tab section - end */}
    </>
  );
};

export default Gallery;
