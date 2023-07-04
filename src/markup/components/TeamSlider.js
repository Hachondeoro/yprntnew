import React from 'react';

// import Swiper React components
import 'swiper/css';
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper';

// images

const TeamSlider = ({ sponsors }) => {
  console.log(sponsors);

  return (
    <div className="row">
      {sponsors.map((sponsor, key) => {
        return (
          <div className="col-12 col-md-6 col-lg-4">
            <div className="team-single drop-shadow-team-1">
              <div className="team-single-wrapper">
                <div className="image">
                  <div className="image-wrapper">
                    <div className="">
                      <img src={sponsor.image.url} alt="team-sponsor" width="100%" height="90px"/>
                    </div>
                  </div>
                </div>
                <h3 style={{textAlign:"center"}}>{sponsor.title}</h3>
                {/*<p>{sponsor.designation}</p>*/}
                {/*<div className="social social-1">*/}
                {/*  <ul>*/}
                {/*    {sponsor.social.map((single, innerkey) => {*/}
                {/*      return (*/}
                {/*        <li key={innerkey}>*/}
                {/*          <Link to={single.to}>*/}
                {/*            <i className={single.icon}></i>*/}
                {/*          </Link>*/}
                {/*        </li>*/}
                {/*      );*/}
                {/*    })}*/}
                {/*  </ul>*/}
                {/*</div>*/}
              </div>
            </div>
          </div>
          // <SwiperSlide key={key}>
          //
          // </SwiperSlide>
        );
      })}
    </div>
  );
};

export default TeamSlider;
