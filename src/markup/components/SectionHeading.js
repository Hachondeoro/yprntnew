import React from 'react';

const SectionHeading = ({
  heading,
  subHeading,
  icon,
  additionalClasses,
  mainHeadingClass = 'c_dark',
  subHeadingClass = 'c-green',
}) => {
  return (
    <div className={`section-heading ${additionalClasses}`}>
      <div className={`sub-heading upper ls-1 ${subHeadingClass}`}>
        <i className={icon}></i>
        <h5>{heading}</h5>
      </div>
      <div className={`main-heading ${mainHeadingClass}`}>
        <h1>{subHeading}</h1>
      </div>
    </div>
  );
};

export default SectionHeading;
