import React, { useEffect } from 'react';

import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';

const VideoLightBox = ({ URL }) => {
  useEffect(() => {
    const lightbox = GLightbox({
      skin: 'clean video-lightbox',
    });
    return () => lightbox.destroy();
  }, []);

  return (
    <a href={URL} className="glightbox">
      <i className="la la-play"></i>
    </a>
  );
};

export default VideoLightBox;
