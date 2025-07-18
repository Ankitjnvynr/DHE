
// import React, { useState } from "react";

// import { Link } from 'react-router-dom';


// import aboutImg1 from "../../assets/img/home_1/about_img_1.jpg";
// import circleText from "../../assets/img/home_1/about_circle_text.svg";
// import { VideoPlayer } from "../videos/VideoPlayer";
// import ScrollToHash from "../ScrollToHash/ScrollToHash";
// import CellsGrid from "./CellsGrid";  // adjust the path as per your project
// import CellCoordinators from "./CellCoordinators";
// import LmcMembers from "./LmcMembers";
// import AdvisoryCouncil from "./AdvisoryCouncil";


// export const AboutOne = () => {
   
//   return (
//     <>
//       <ScrollToHash />
//       {/* About Section */}
//       <section id="director-message" className="td_about td_style_1 td_bg_dark td_pt_120 td_pb_120">
//         <div className="td_height_120 td_height_lg_80 z-[10]" />
//         <div className="td_about td_style_1">
//           <div className="container">
//             <div className="row align-items-center td_gap_y_40">
//               <div className="col-lg-6 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.25s">
//                 <div className="td_about_thumb_wrap">
//                   <div className="td_about_year text-uppercase td_fs_40 td_bold">
//                     Dr. Thakur SKR
//                   </div>
//                   <div className="td_about_thumb_1">
//                     <img src={aboutImg1} alt="About" className="img-fluid rounded" />
//                   </div>

//                   <VideoPlayer
//                     trigger={
//                       <a href="#vid" className="td_circle_text td_center td_video_open">
//                         <svg width="15" height="19" viewBox="0 0 15 19" fill="none">
//                           <path
//                             d="M14.086 8.63792C14.6603 9.03557 14.6603 9.88459 14.086 10.2822L2.54766 18.2711C1.88444 18.7303 0.978418 18.2557 0.978418 17.449L0.978418 1.47118C0.978418 0.664496 1.88444 0.189811 2.54767 0.649016L14.086 8.63792Z"
//                             fill="white"
//                           />
//                         </svg>
//                         <img src={circleText} alt="Circle text" />
//                       </a>
//                     }
//                   />

//                   <div className="td_circle_shape" />
//                 </div>
//               </div>

//               <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s">
//                 <div className="td_section_heading td_style_1 td_mb_30">
//                   <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
//                     About us
//                   </p>
//                   <h2 className="td_section_title td_fs_48 mb-0">Director Message</h2>
//                   <p className="td_section_subtitle td_fs_18 mb-0">
//                     We believe that the best way to serve the nation is to empower the society by means of education. In this regard, the quality of education which is being imparted is pivotal. In today’s era, on one hand, with increasing number of educational institutes, the literacy rate has been increasing steadfastly. However, on the other hand, there is a huge increase in unemployment, a huge gap in the requirement of skilled manpower, physical and mental illnesses, disturbed families, violence and unrest, etc.
//                     <br /><br />
//                     The Department of Holistic Education at Vidya Bharti was conceptualized to effectively bridge this gap in society by overhauling the education system. We at DHE are committed to making the education system more comprehensive by focusing not only on skill development but also aiming at the holistic development of students ranging from physical fitness to emotional well-being.
//                     <br /><br />
//                     Our vision is to impart this holistic education to children right from their young age so that we can mold these green cakes into not only skilled adults but also responsible humans who are an asset to the nation. I feel honored to be leading this Department and hope to revolutionize our system of education for the betterment of society.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="td_height_120 td_height_lg_80" />
//       </section>
//       {/* Advisory Council Section */}
//       <AdvisoryCouncil />
//       {/* Uncomment the section below if you want to include the Advisory Council table */}
//       {/* <section className="td_about td_style_1 td_bg_dark py-5" id="advisory-council">
//         <div className="container">
//           <div className="td_section_heading td_style_1 td_mb_30 text-center">
//             <h2 className="td_section_title td_fs_48 mb-3 text-black">Advisory Council</h2>
//           </div>

//           <div className="card bg-secondary text-white shadow">
//             <div className="card-body p-0">
//               <div className="table-responsive">
//                 <table className="table table-hover table-bordered text-white mb-0">
//                   <thead className="bg-dark">
//                     <tr className="text-center bg-dark">
//                       <th className="text-white bg-dark">Name</th>
//                       <th className="text-white bg-dark">Position</th>
//                       <th className="text-white bg-dark">Designation</th>
//                       <th className="text-white bg-dark">Contact</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       ["Mr. Vijay Kumar Nadda", "Organising Secretary, Vidya Bharti (North Region)", "Member, Advisory Council", "9417257310"],
//                       ["Prof. Rajeev Ahuja", "Director, (IIT) Ropar", "Member, Advisory Council", "1881231006"],
//                       ["Prof. Binod Kumar Kanaujia", "Director, (NIT) Jalandhar", "Member, Advisory Council", "9868795834"],
//                       ["Mr. Manoj Singhal", "Scientific Advisor", "Member, Advisory Council", "9872994017"],
//                     ].map(([name, position, designation, contact], idx) => (
//                       <tr key={idx}>
//                         <td>{name}</td>
//                         <td>{position}</td>
//                         <td>{designation}</td>
//                         <td>{contact}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       {/* LMC Members Section */}
//       <LmcMembers />
//       {/* Cell Coordinators Section */}
//       <CellCoordinators />
//       {/* Cells & Sub-Cells Section */}
//       <CellsGrid />

//       {/* Contact Section */}

//     </>
//   );
// };


import React from "react";
import { Link } from 'react-router-dom';
import aboutImg1 from "../../assets/img/Director.webp";
import circleText from "../../assets/img/home_1/about_circle_text.svg";
import { VideoPlayer } from "../videos/VideoPlayer";
import ScrollToHash from "../ScrollToHash/ScrollToHash";
import CellsGrid from "./CellsGrid";
import CellCoordinators from "./CellCoordinators";
import LmcMembers from "./LmcMembers";
import AdvisoryCouncil from "./AdvisoryCouncil";

export const AboutOne = () => {
  return (
    <div className="mt-5">
      <ScrollToHash />
      
      {/* Director's Message Section */}
      <section id="director-message" className="py-5" style={{ backgroundColor: 'var(--gray-color)' }}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
        {/* Left Column - Image and Video */}
        <div className="col-lg-6">
          <div className="position-relative">
          {/* Year Badge */}
          <div className="position-absolute top-0 start-0 translate-middle-y z-1 bg-accent text-white px-4 py-2 rounded-pill fw-bold fs-5"
            style={{ backgroundColor: 'var(--accent-color)' }}>
            Dr. Thakur SKR
          </div>
          
          {/* Main Image */}
          <div className="td_about_thumb_1 overflow-hidden rounded-4 shadow-lg">
            <img src={aboutImg1} alt="About" className="img-fluid w-100" style={{ minHeight: '500px', objectFit: 'cover' }} />
          </div>
          
          {/* Rotating Video Element */}
          <div className="td_circle_text position-absolute bottom-0 end-0 translate-middle">
            <VideoPlayer
            trigger={
              <a href="#vid" className="td_video_open d-flex align-items-center justify-content-center rounded-circle bg-accent text-white shadow-lg"
              style={{ 
                width: '80px', 
                height: '80px',
                backgroundColor: 'var(--accent-color)'
              }}>
              <svg width="24" height="24" viewBox="0 0 15 19" fill="currentColor">
                <path
                d="M14.086 8.63792C14.6603 9.03557 14.6603 9.88459 14.086 10.2822L2.54766 18.2711C1.88444 18.7303 0.978418 18.2557 0.978418 17.449L0.978418 1.47118C0.978418 0.664496 1.88444 0.189811 2.54767 0.649016L14.086 8.63792Z"
                />
              </svg>
              </a>
            }
            />
          </div>
          </div>
        </div>

        {/* Right Column - Message */}
        <div className="col-lg-6">
          <div className="ps-lg-4">
          {/* Section Header */}
          <div className="mb-4">
            <span className="d-block text-uppercase mb-2" style={{ 
            color: 'var(--accent-color)',
            letterSpacing: '1px',
            fontWeight: '600',
            fontSize: '18px'
            }}>
            About us
            </span>
            <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--heading-color)' }}>
            Director Message
            </h2>
          </div>
          
          {/* Message Content */}
          <div className="pe-lg-4" style={{ color: 'var(--body-color)' }}>
            <p className="mb-4">
            We believe that the best way to serve the nation is to empower the society by means of education. In this regard, the quality of education which is being imparted is pivotal. In today's era, on one hand, with increasing number of educational institutes, the literacy rate has been increasing steadfastly.
            </p>
            
            <p className="mb-4">
            However, on the other hand, there is a huge increase in unemployment, a huge gap in the requirement of skilled manpower, physical and mental illnesses, disturbed families, violence and unrest, etc.
            </p>
            
            <div className="bg-white p-4 rounded-3 border-start border-4 mb-4" 
            style={{ 
              borderLeftColor: 'var(--accent-color)',
              boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}>
            <p className="mb-0">
              The Department of Holistic Education at Vidya Bharti was conceptualized to effectively bridge this gap in society by overhauling the education system. We at DHE are committed to making the education system more comprehensive by focusing not only on skill development but also aiming at the holistic development of students ranging from physical fitness to emotional well-being.
            </p>
            </div>
            
            <p className="mb-0">
            Our vision is to impart this holistic education to children right from their young age so that we can mold these green cakes into not only skilled adults but also responsible humans who are an asset to the nation. I feel honored to be leading this Department and hope to revolutionize our system of education for the betterment of society.
            </p>
          </div>
          </div>
        </div>
        </div>
      </div>
      </section>

      {/* Advisory Council Section */}
      <AdvisoryCouncil />
      
      {/* LMC Members Section */}
      <LmcMembers />
      
      {/* Cell Coordinators Section */}
      <CellCoordinators />
      
      {/* Cells & Sub-Cells Section */}
      <CellsGrid />
    </div>
    );
};