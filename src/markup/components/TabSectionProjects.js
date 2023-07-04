import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { gsap } from 'gsap';

const tabFunc = ref => {
  if (ref.current === null) return;
  const tab_el = ref.current.querySelectorAll('button[data-bs-toggle="pill"]');

  if (tab_el.length < 1) return;

  tab_el.forEach(element => {
    element.addEventListener('hide.bs.tab', e => {
      const active_id = e.target.dataset.bsTarget;

      const target_id = e.relatedTarget.dataset.bsTarget;
      const target_parent = document.querySelector(target_id);

      document.querySelector('.tab-content').style.height = target_parent.style.height;

      const tl = gsap.timeline({ defaults: { duration: 0.5 } });

      tl.to(`${active_id} .tab-pane-wrapper > *`, {
        y: 100,
        stagger: 0.1,
      });

      tl.to(
        `${active_id} .tab-pane-wrapper > *`,
        {
          opacity: 0,
          visibility: 'hidden',
          stagger: 0.1,
        },
        0.25,
      );

      tl.to(
        `${target_id} .tab-pane-wrapper > *`,
        {
          y: 0,
          stagger: 0.1,
        },
        0.25,
      );

      tl.to(
        `${target_id} .tab-pane-wrapper > *`,
        {
          opacity: 1,
          visibility: 'visible',
          stagger: 0.1,
        },
        0.25,
      );
    });
  });
};

const TabSection = ({ data, subHeading, className }) => {
  const ref = useRef(null);
  let path = useLocation().pathname;
  console.log('path is: ', path);

  useEffect(() => {
    tabPaneHeight();
    // document.querySelector('.tab-section-wrapper').style.height = '2000px';
  }, [path]);

  useEffect(() => {
    tabFunc(ref);
    window.addEventListener('load', tabPaneHeight);
    window.addEventListener('resize', tabPaneHeight);

    return () => {
      window.removeEventListener('load', tabPaneHeight);
      window.removeEventListener('resize', tabPaneHeight);
    };
  }, []);

  const tabPaneHeight = e => {
    if (ref.current === null) return;
    const elements = ref.current.querySelectorAll('.tab-pane');
    elements.forEach(element => {
      element.style.height = element.querySelector('.tab-pane-wrapper').offsetHeight + 'px';
      if (element.classList.contains('active')) {
        document.querySelector('.tab-content').style.height = element.offsetHeight + 'px';

        gsap.to(`#${element.id} .tab-pane-wrapper > *`, {
          y: 0,
          opacity: 1,
          visibility: 'visible',
        });
      } else {
        gsap.to(`#${element.id} .tab-pane-wrapper > *`, {
          y: 100,
          opacity: 0,
          visibility: 'hidden',
        });
      }
    });
  };

  return (
    <div className={`tab-section ${className} tab-section-projects`} ref={ref}>
      <div className="tab-section-wrapper">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
              <div className="sub-heading c-green upper ls-1">
                <i className="las la-cog"></i>
                <h5>{subHeading}</h5>
              </div>
              <div
                className="nav tab-nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                {data.map((button, key) => {
                  return (
                    <button
                      className={`nav-link ${key === 0 ? 'active' : ''} text-start`}
                      id={`tab-button-${key}`}
                      data-bs-toggle="pill"
                      data-bs-target={`#tab-pane-${key}`}
                      type="button"
                      role="tab"
                      aria-controls={`tab-pane-${key}`}
                      aria-selected={key === 0 ? 'true' : 'false'}
                      key={key}
                    >
                      <span>
                        <i className="las la-calendar-check"></i>
                        <span className="text" style={{ fontSize: '1.5em' }}>
                          {button.title}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-8 offset-lg-0 col-md-8 offset-md-2 col-10 offset-1">
              <div className="tab-content" id="v-pills-tabContent">
                {data.map((tab, key) => {
                  return (
                    <div
                      className={`tab-pane ${key === 0 ? 'active' : ''}`}
                      id={`tab-pane-${key}`}
                      role="tabpanel"
                      aria-labelledby={`tab-button-${key}`}
                      key={key}
                    >
                      <div className="tab-pane-wrapper">
                        <h2 className="c-dark">{tab.titleright}</h2>
                        <img src={tab.image.url} alt={tab.title} className="w-100 w-md" />
                        {parse(tab.description)}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* { setIsLoaded(true) } */}
    </div>
  );
};

export default TabSection;
