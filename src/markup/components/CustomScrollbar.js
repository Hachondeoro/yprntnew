import { useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';

// overlay scrollbars
import 'overlayscrollbars/css/OverlayScrollbars.css';
import OverlayScrollbars from 'overlayscrollbars';

function navigation_scroll(e, scrollbar) {
  if (scrollbar === null || scrollbar === undefined) scrollbar = this;
  const scroll_position = scrollbar.scroll().position.y;
  const navigation = document.querySelector('.navigation');

  if (typeof navigation === 'undefined' || navigation === null) return;

  if (window.innerHeight > 991 && scroll_position > 0) {
    navigation.classList.add('scrolled');
  } else if (window.innerHeight < 991 && scroll_position > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
}

const CustomScrollbar = () => {
  let scrollbar = useRef();

  useEffect(() => {
    scrollbar.current = OverlayScrollbars(document.querySelector('body'), {
      overflowBehavior: {
        x: 'hidden',
        y: 'scroll',
      },
      callbacks: {
        onScroll: navigation_scroll,
      },
    });
    return () => {
      if (scrollbar.current === null) return;
      scrollbar.current.destroy();
    };
  });

  let path = useLocation().pathname;

  useEffect(() => {
    if (scrollbar.current === null) return;
    navigation_scroll(null, scrollbar.current);
  }, [path]);

  return null;
};

export default CustomScrollbar;
