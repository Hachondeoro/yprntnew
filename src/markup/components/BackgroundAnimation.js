import { useEffect, useRef } from 'react';

import { gsap } from 'gsap';

import background_pattern from '../../assets/images/patterns/pattern.jpg';

const BackgroundAnimation = () => {
  const box = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1 });
    tl.current.to(box.current, {
      duration: 20,
      backgroundPosition: `-1850px center`,
      ease: gsap.parseEase().Linear.easeNone,
    });

    return () => {
      tl.current.kill();
    };
  });

  return (
    <div
      ref={box}
      className="background-pattern-img background-loop"
      style={{ backgroundImage: `url(${background_pattern})` }}
    ></div>
  );
};

export default BackgroundAnimation;
