import React, { useState } from 'react';

import PageHeader from '../components/PageHeader';
import { ImageGallery } from "../components/ImageGallery";
import { nwAugImages } from '../data/galleryImages-nw-aug';
import { nwJulImages } from '../data/galleryImages-nw-jul';
import { psImages } from '../data/galleryImages-ps';
import "react-image-lightbox/style.css";

const GalleryPage = () => {
  
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
        <ImageGallery images={nwAugImages} title="August Networking Event" />
        <ImageGallery images={nwJulImages} title="July Networking Event"/>
        <ImageGallery images={psImages} title="Public Speaking Session with Dante & LinkedIn Local"/>
      {/* tab section - start */}
      
    
  </>
  );
};

export default GalleryPage;
