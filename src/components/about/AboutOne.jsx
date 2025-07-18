import React from "react";
import { Link } from "react-router-dom";
import aboutImg2 from "../../assets/img/k2 copy.jpeg";
import aboutImg1 from "../../assets/img/6.jpeg";

import { VideoPlayer } from "../videos/VideoPlayer";

export const AboutOne = () => {
  return (
    <section>
      <div className="td_height_120 td_height_lg_80" />
      <div className="td_about td_style_1">
        <div className="container">
          <div className="row align-items-center td_gap_y_40">
            <div
              className="col-lg-6 wow fadeInLeft"
              data-wow-duration="1s"
              data-wow-delay="0.25s"
            >
              <div className="td_about_thumb_wrap">
                <div className="td_about_year text-uppercase td_fs_64 td_bold">
                  EST 2021
                </div>
                <div className="td_about_thumb_1">
                  <img src={aboutImg1} alt="About" />
                </div>
                <div className="td_about_thumb_2">
                  <img src={aboutImg2} alt="About" />
                </div>

                
              </div>
            </div>
            <div
              className="col-lg-6 wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.3s"
            >
              <div className="td_section_heading td_style_1 td_mb_30">
                <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
                 
                </p>
                <h2 className="td_section_title td_fs_48 mb-0">
                  Holistic Learning That Shapes Confident and Compassionate Individuals
                </h2>
                <p className="td_section_subtitle td_fs_18 mb-0">
                 "DHE promotes holistic growth through value-based, student-centered education.DHE promotes holistic growth through value-based, student-centered education by integrating academic excellence with moral, emotional, physical, and social development. It fosters critical thinking, creativity, and community responsibility among learners, while respecting individual differences and encouraging experiential learning.Through its interdisciplinary approach, DHE empowers students to become well-rounded, ethical, and socially conscious citizens who can contribute meaningfully to nation-building."
                </p>
              </div>
              <div className="td_mb_40">
                <ul className="td_list td_style_5 td_mp_0">
                  
                </ul>
              </div>
              {/* <Link
                to="/courses-grid-view"
                className="td_btn td_style_1 td_radius_10 td_medium"
              >
                <span className="td_btn_in td_white_color td_accent_bg">
                  <span>More About</span>
                  <svg
                    width="19"
                    height="20"
                    viewBox="0 0 19 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1575 4.34302L3.84375 15.6567"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15.157 11.4142C15.157 11.4142 16.0887 5.2748 15.157 4.34311C14.2253 3.41142 8.08594 4.34314 8.08594 4.34314"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
