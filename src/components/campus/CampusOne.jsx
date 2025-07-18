import React from "react";
import { Link } from "react-router-dom";

import campusLife1 from "../../assets/img/sLogo.png";
import campusLife2 from "../../assets/img/sarvatra.png";
import campusLife3 from "../../assets/img/vidyabharti.png";
import campusLife4 from "../../assets/img/holistic.jpeg";
import campusLife5 from "../../assets/img/pooja.png";
import campusLife6 from "../../assets/img/sb.png";
import campusLife7 from "../../assets/img/tre-dul.png";
import campusLife8 from "../../assets/img/vi.png";
import campusLife9 from "../../assets/img/tudu.png";

export const CampusOne = () => {
  return (
    <section className="td_accent_bg td_shape_section_1">
      <div className="td_shape_position_4 td_accent_color position-absolute">
        <svg
          width="37"
          height="40"
          viewBox="0 0 37 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <rect
              y="12.3906"
              width="23.6182"
              height="31.0709"
              rx="1"
              transform="rotate(-30.4551 0 12.3906)"
              fill="white"
            />
            <rect
              x="4"
              y="14.8125"
              width="18.5361"
              height="2.62207"
              rx="1.31104"
              transform="rotate(-30.4551 4 14.8125)"
              fill="currentColor"
            />
            <rect
              x="7"
              y="19.8125"
              width="18.5361"
              height="2.62207"
              rx="1.31104"
              transform="rotate(-30.4551 7 19.8125)"
              fill="currentColor"
            />
          </g>
        </svg>
      </div>
      <div className="td_height_120 td_height_lg_80" />
      <div className="container">
        <div className="row td_gap_y_40">
          <div
            className="col-lg-5 wow fadeInLeft"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            <div className="td_height_57 td_height_lg_0" />
            <div className="td_section_heading td_style_1">
              <h2 className="td_section_title td_fs_48 mb-0 td_white_color">
                Explore More
              </h2>
              <p className="td_section_subtitle td_fs_18 mb-0 td_white_color td_opacity_7">
                DHE offers a diverse range of services including holistic education, digital learning platforms, career guidance, research initiatives, and community outreach programs to empower every learner.
              </p>
            </div>
            <div className="td_btn_box">
              <svg
                width="299"
                height="315"
                viewBox="0 0 299 315"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.75" clipPath="url(#clip0_34_2222)">
                  <path
                    d="M242.757 275.771C242.505 275.771 242.253 275.75 242.005 275.707C32.3684 239.98 0.342741 8.13005 0.0437414 5.79468C-0.108609 4.51176 0.22739 3.21754 0.9787 2.19335C1.73001 1.16916 2.8359 0.497795 4.05598 0.32519C5.27606 0.152585 6.5117 0.492693 7.4943 1.27158C8.4769 2.05047 9.12704 3.20518 9.3034 4.48471C9.59772 6.7514 40.7872 231.477 243.5 266.022C244.658 266.22 245.702 266.868 246.426 267.838C247.15 268.808 247.5 270.028 247.406 271.256C247.312 272.484 246.782 273.63 245.921 274.467C245.06 275.303 243.93 275.769 242.757 275.771Z"
                    fill="white"
                  />
                  <path
                    d="M299.002 275.455C271.709 283.305 237.446 297.872 215.562 314.617L235.465 269.602L223.318 221.648C242.099 242.137 273.428 262.728 299.002 275.455Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_2222">
                    <rect
                      width="299"
                      height="314"
                      fill="white"
                      transform="translate(0 0.421875)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="td_btn_box_in">
                <Link
                  to="/logos"
                  className="td_btn td_style_1 td_radius_10 td_medium td_fs_18"
                >
                  <span className="td_btn_in td_heading_color td_white_bg">
                    <span>View All Program</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            {/* Flex grid for campus images and future links: 3 cards per row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'flex-start' }}>
              {[
                { img: campusLife1, alt: 'Shiksha MahaKumbh' },
                { img: campusLife2, alt: 'Sarvatr' },
                { img: campusLife3, alt: 'Vidya Bharati' },
                { img: campusLife4, alt: 'Holistic Harbor' },
                {img: campusLife5, alt: 'Holistic Harbor'}, 
                {img: campusLife6, alt: 'Holistic Harbor'}, {img: campusLife7, alt: 'Holistic Harbor'}, {img: campusLife8, alt: 'Holistic Harbor'}, {img: campusLife9, alt: 'Holistic Harbor'}, 
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    flex: '1 1 calc(33.333% - 16px)',
                    maxWidth: 'calc(33.333% - 16px)',
                    minWidth: 180,
                    minHeight: 180,
                    height: 110,
                    background: '#fff',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    boxShadow: item.img ? '0 2px 12px rgba(137,12,37,0.08)' : 'none',
                    border: item.img ? '1.5px solid #e5e7eb' : '1.5px dashed #e5e7eb',
                  }}
                >
                  {item.img && (
                    <img
                      src={item.img}
                      alt={item.alt}
                      style={{
                        width: 'auto',
                        height: "auto",
                        maxWidth: '90%',
                        maxHeight: '90%',
                        objectFit: 'auto',
                        display: 'block',
                        margin: '0 auto',
                        filter: 'drop-shadow(0 2px 8px rgba(137,12,37,0.10))',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_112 td_height_lg_75" />
    </section>
  );
};
