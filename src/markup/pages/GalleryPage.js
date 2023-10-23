import React, { useState, useEffect } from 'react';

import PageHeader from '../components/PageHeader';
import { ImageGallery } from "../components/ImageGallery";
// import { nwAugImages } from '../data/galleryImages-nw-aug';
// import { nwJulImages } from '../data/galleryImages-nw-jul';
// import { psImages } from '../data/galleryImages-ps';
import { request } from '../../datoCMS/request';

import "react-image-lightbox/style.css";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    request(`
      gallery { 
        images {
          alt
          url
          width
          height
        }
      }
    `)
    .then(data => {
      // Transform the data into the desired format
      const transformedData = data.gallery.images.map(image => ({
        src: image.url,
        original: image.url,
        width: image.width,
        height: image.height,
        caption: image.alt
      }));
  
      // Update state with the transformed data
      setImages(transformedData);
      setIsLoaded(true);
    })
    .catch(error => {
      // Handle errors here
      console.error('Error fetching data:', error);
    });
  }, []);
   console.log(images);
  
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
        {/* <ImageGallery images={nwAugImages} title="August Networking Event" />
        <ImageGallery images={nwJulImages} title="July Networking Event"/>
        <ImageGallery images={psImages} title="Public Speaking Session with Dante & LinkedIn Local"/> */}
        <ImageGallery images={images}/>
      {/* tab section - start */}
      
    
  </>
  );
};

export default GalleryPage;
