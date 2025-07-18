import React from "react";
import { Link } from "react-router-dom";

import footerLogo from "../../assets/img/logo.png";

export const FooterOne = () => {
  return (
    <footer className="td_footer td_style_1">
      <div className="container">
        <div className="td_footer_row">
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <div className="td_footer_text_widget td_fs_18">
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 20 }}>
                  <img 
                    src={footerLogo} 
                    alt="Logo" 
                    style={{ width: '68px', height: '68px', objectFit: 'contain', background: '#fff', borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
                  />
                  <span style={{ fontWeight: 700, fontSize: 22, letterSpacing: 1 }}><h1 style={{color:"white"}}>DHE</h1></span>
                </span>
                <p>
                DHE(Department of Holistic Education) is a value-driven initiative promoting student-centered, holistic learning 
                </p>
              </div>
              <ul className="td_footer_address_widget td_medium td_mp_0">
                <li>
                  <i className="fa-solid fa-phone-volume"></i>
                  <a href="cal:+23(000)68603">+91 9417050631</a>
                </li>
                <li>
                  <i className="fa-solid fa-location-dot"></i>Plot No. 1, Sector 71, Sahibzada Ajit Singh Nagar, Punjab 160071
                </li>
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Navigate
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                
               
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Notices
              </h2>
              <ul className="td_footer_widget_menu">
                <li>
                  <Link to="/course-details">Past Notice</Link>
                </li>
                <li>
                  <Link to="/course-details">Current Notices</Link>
                </li>
                <li>
                  <Link to="/course-details">Past Events</Link>
                </li>
                <li>
                  <Link to="/course-details">Current Events</Link>
                </li>
                <li>
                  <Link to="/course-details">Upcoming Events</Link>
                </li>
              
              </ul>
            </div>
          </div>
          <div className="td_footer_col">
            <div className="td_footer_widget">
              <h2 className="td_footer_widget_title td_fs_32 td_white_color td_medium td_mb_30">
                Get in Touch
              </h2>
              <div className="td_newsletter td_style_1">
                <p className="td_mb_20 td_opacity_7">
                  Far far away, behind the word mountains, far from the
                  Consonantia.
                </p>
                <form action="#" className="td_newsletter_form">
                  <input
                    type="email"
                    className="td_newsletter_input"
                    placeholder="Email address"
                  />
                  <button
                    type="submit"
                    className="td_btn td_style_1 td_radius_30 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Send</span>
                    </span>
                  </button>
                </form>
              </div>
              <div className="td_footer_social_btns td_fs_20">
                <a href="https://www.facebook.com/people/Department-of-Holistic-Education/100090170940886/?mibextid=ZbWKwL" className="td_center" target="_blank">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://www.youtube.com/@DepartmentofHolisticEducation" className="td_center" target="_blank">
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                <a href="https://www.instagram.com/dhebharat?igsh=MWg4Z2hvOGV3b3I0dA%3D%3D" className="td_center" target="_blank">
                  <i className="fa-brands fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/department-of-holistic-education/?_l=en_US" className="td_center" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_footer_bottom td_fs_18">
        <div className="container">
          <div className="td_footer_bottom_in">
            <p className="td_copyright mb-0">
              Copyright ©educve | All Right Reserved
            </p>
            <ul className="td_footer_widget_menu">
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
