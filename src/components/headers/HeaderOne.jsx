import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HeaderSearch } from "./HeaderSearch";
import { HeaderLanguage } from "./HeaderLanguage";
import { HeaderSidebar } from "./HeaderSidebar";
import { useMobilemenu } from "../../lib/hooks/useMobilemenu";
import { useStickyHeader } from "../../lib/hooks/useStickyHeader";

import Logo from "../../assets/img/logo.png";
// Correct CSS-in-JS style object for logo
const logoStyle = {
  width: "60px",
  height: "60px",
  objectFit: "contain"
};

export const HeaderOne = () => {
  useMobilemenu();  
  useStickyHeader();

  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => setShowSidebar((v) => !v);

  return (
    <>
      <header className="td_site_header td_style_1 td_type_3 td_sticky_header td_medium td_heading_color">
        <div className="td_main_header">
          <div className="container-fluid">
            <div className="td_main_header_in">
              {/* left */}
              <div className="td_main_header_left">
                <Link className="td_site_branding" to="/">
                  <img src={Logo} alt="Logo" style={logoStyle} />
                </Link>
                <div className="td_header_social_btns">
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

              <div className="td_main_header_center">
                <nav className="td_nav">
                  <div className="td_nav_list_wrap">
                    <div className="td_nav_list_wrap_in">
                      {/* first three */}
                      <ul className="td_nav_list">
                        <li className="menu-item-has-childrens">
                          <Link to="/">Home</Link>
                        
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/about">About us</Link>
                          <ul>
                            <li>
                              <Link to="/messages">
                                Director Message
                              </Link>
                            </li>
                            <li>
                              <Link to="/courses-list-view">
                                Cells
                              </Link>
                            </li>
                            <li>
                              <Link to="/courses-grid-with-sidebar">
                               Advisory Council
                              </Link>
                            </li>
                            <li>
                              <Link to="/course-details">LMC Members</Link>
                            </li>
                             <li>
                              <Link to="/course-details">Cell Co-ordinators</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/about">Publication</Link>
                        </li>
                      </ul>

                      <Link className="td_site_branding" to="/">
                        <img src={Logo} alt="Logo" style={logoStyle} />
                      </Link>

                      {/* last three */}
                      <ul className="td_nav_list">
                        <li className="menu-item-has-children td_mega_menu">
                          <Link to="#">Pages</Link>
                          <ul className="td_mega_wrapper">
                            <li className="menu-item-has-children">
                              <h4>Events</h4>
                              <ul>
                                <li>
                                  <Link to="/event">Upcoming Event</Link>
                                </li>
                                <li>
                                  <Link to="/event-details">Event Details</Link>
                                </li>
                                <li>
                                  <Link to="/team-members">Past Event</Link>
                                </li>
                               
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>DHE's Chapter</h4>
                              <ul>
                                <li>
                                  <Link to="/students-registrations">
                                    NIT Srinagar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor-registrations">
                                    IIT Ropar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor-registrations">
                                    NIT Jalandhar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/instructor-registrations">
                                    NIT Kurukshetra
                                  </Link>
                                </li>
                                
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>Carrers</h4>
                              <ul>
                                <li>
                                  <Link to="/carrers">Carrers</Link>
                                </li>
                                
                                <li>
                                  <Link to="/checkout">Recruitment-Policy</Link>
                                </li>
                               
                              </ul>
                            </li>
                            <li className="menu-item-has-children">
                              <h4>More</h4>
                              <ul>
                                <li>
                                  <Link to="/logos">Logos</Link>
                                </li>
                                
                                <li>
                                  <Link to="/accounts">Accounts</Link>
                                </li>
                                <li>
                                  <Link to="/checkout">Residential Camps</Link>
                                </li>
                                <li>
                                  <Link to="/feedback">Feedback Form</Link>
                                </li>
                               
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="#">Membership</Link>
                          <ul>
                            
                            <li>
                              <Link to="/contribute">
                                Join DHE
                              </Link>
                            </li>
                            
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>

              {/* right */}
              <div className="td_main_header_right">
                {/* lang dropdown */}
                <div className="position-relative td_language_wrap">
                  <HeaderLanguage />
                </div>

                <div className="position-relative">
                  <HeaderSearch />
                </div>

                <button className="td_hamburger_btn" onClick={toggleSidebar} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <HeaderSidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
    </>
  );
};
