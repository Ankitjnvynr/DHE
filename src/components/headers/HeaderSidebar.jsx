import React from "react";
import { Link } from "react-router-dom";

import logoBlack from "../../assets/img/logo.png";

export const HeaderSidebar = ({ showSidebar, toggleSidebar }) => {
  return (
    <div className={`td_side_header ${showSidebar && "active"}`}>
      <button className="td_close" onClick={toggleSidebar} />

      <div className="td_side_header_overlay" onClick={toggleSidebar} />

      <div className="td_side_header_in">
        <div className="td_side_header_shape" />
        <Link className="td_site_branding" href="index.html">
          <img src={logoBlack} alt="Logo" style={{ height: "60px", width: "60px" }} />
          <h1 style={{ display: "inline-block" }}> &nbsp; DHE</h1>
        </Link>

        <div className="td_side_header_box">
          <h2 className="td_side_header_heading">
            Do you have a project in your <br />
            mind? Keep connect us.
          </h2>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Contact Us</h3>
          <ul className="td_side_header_contact_info td_mp_0">
            <li>
              <i className="fa-solid fa-phone"></i>
              <span>
                <a href="tel:+444547800112">+91 9417050631</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <span>
                <a href="mailto:example@gmail.com"> director@dhe.org.in</a>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <span>
                Plot No. 1, Sector 71
                SAS Nagar (Mohali) – 160071
                Punjab, India
              </span>
            </li>
          </ul>
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Subscribe</h3>
          <div className="td_newsletter td_style_1">
            <form className="td_newsletter_form">
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
        </div>
        <div className="td_side_header_box">
          <h3 className="td_side_header_title td_heading_color">Follow Us</h3>
          <div className="td_social_btns td_style_1 td_heading_color">
            <a href="https://www.linkedin.com/company/department-of-holistic-education/?_l=en_US" className="td_center" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/dhebharat?igsh=MWg4Z2hvOGV3b3I0dA%3D%3D" className="td_center" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.youtube.com/@DepartmentofHolisticEducation" className="td_center" target="_blank">
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a href="https://www.facebook.com/people/Department-of-Holistic-Education/100090170940886/?mibextid=ZbWKwL" className="td_center" target="_blank">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
