import React, { useState } from 'react';

import { Gallery } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

export const ImageGallery = ({images, title}) => {
    const [index, setIndex] = useState(-1);
    

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index, item) => setIndex(index);
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <div className='gallery-wrapper'>
        <h3 style={{"marginTop":"64px"}}>{title}</h3>
        <Gallery
          images={images}
          onClick={handleClick}
          enableImageSelection={false}
      
        />
      {!!currentImage && (
          /* @ts-ignore */
          <Lightbox
          mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
        )}
      </div>

     
  )
}
