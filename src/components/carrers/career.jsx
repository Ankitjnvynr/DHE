import React from "react";


export const Career = () => {
    
            const jobOpenings = [
    {
      title: "Frontend Developer",
      type: "Full-time",
      location: "Remote",
      description: "We're looking for an experienced React developer to join our team and help build amazing user interfaces.",
      skills: ["React", "JavaScript", "HTML/CSS", "Redux"]
    },
    {
      title: "Backend Engineer",
      type: "Full-time",
      location: "San Francisco, CA",
      description: "Join our backend team to develop scalable APIs and services that power our platform.",
      skills: ["Node.js", "Python", "SQL", "AWS"]
    },
    {
      title: "UX Designer",
      type: "Contract",
      location: "Remote",
      description: "Help us create beautiful, intuitive user experiences for our products.",
      skills: ["Figma", "UI/UX", "Prototyping", "User Research"]
    },
    {
      title: "DevOps Engineer",
      type: "Full-time",
      location: "New York, NY",
      description: "Implement and maintain our CI/CD pipelines and cloud infrastructure.",
      skills: ["Docker", "Kubernetes", "AWS", "Terraform"]
    },
    {
      title: "Product Manager",
      type: "Full-time",
      location: "Remote",
      description: "Lead product development and work with cross-functional teams to deliver great products.",
      skills: ["Product Strategy", "Agile", "Roadmapping", "User Stories"]
    },
    {
      title: "Data Scientist",
      type: "Full-time",
      location: "Boston, MA",
      description: "Analyze complex data sets and build machine learning models to drive business decisions.",
      skills: ["Python", "Pandas", "TensorFlow", "SQL"]
    },
    {
      title: "QA Engineer",
      type: "Part-time",
      location: "Remote",
      description: "Ensure the quality of our products through rigorous testing and automation.",
      skills: ["Selenium", "Jest", "Test Automation", "Bug Tracking"]
    },
    {
      title: "Technical Writer",
      type: "Contract",
      location: "Remote",
      description: "Create clear, comprehensive documentation for our products and APIs.",
      skills: ["Technical Writing", "Markdown", "API Documentation", "Git"]
    },
    {
      title: "Marketing Specialist",
      type: "Full-time",
      location: "Chicago, IL",
      description: "Develop and execute marketing campaigns to grow our user base.",
      skills: ["Digital Marketing", "SEO", "Content Creation", "Analytics"]
    },
    {
      title: "Customer Support",
      type: "Full-time",
      location: "Remote",
      description: "Provide excellent support to our customers and help them succeed with our products.",
      skills: ["Customer Service", "Problem Solving", "Communication", "Patience"]
    }
  ];

  return (
    <div className="td_shape_section_1">
      {/* Shapes from the CSS file */}
      <div className="td_shape td_shape_position_1">
        <img src="/path-to-shape-image.svg" alt="shape" />
      </div>
      <div className="td_shape td_shape_position_2"></div>
      <div className="td_shape td_shape_position_3"></div>
      <div className="td_shape td_shape_position_4">
       
      </div>

      {/* Main content */}
      <div className="container-fluid">
       

        {/* Job openings section */}
        <section id="openings" className="td_section_1 td_pt_100 td_pb_100">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <div className="td_section_heading td_style_1 td_mb_60">
                  <div className="td_section_heading_left">
                    <h2 className="td_mb_15">Current Openings</h2>
                    <p className="td_section_subtitle">
                      We're always looking for talented people to join our growing team.
                    </p>
                  </div>
                </div>

                <div className="row td_row_gap_40">
                  {jobOpenings.map((job, index) => (
                    <div key={index} className="col-lg-6">
                      <div className="td_card td_style_1 td_hover_layer_1 td_mb_30">
                        <div className="td_card_body">
                          <div className="td_card_top">
                            <span className="td_card_badge td_accent_bg td_white_color">{job.type}</span>
                            <h3 className="td_card_title">
                              <a href="#">{job.title}</a>
                            </h3>
                            <div className="td_card_meta td_mb_20">
                              <span>
                                <i className="fas fa-map-marker-alt"></i> {job.location}
                              </span>
                            </div>
                          </div>
                          <p className="td_card_text td_mb_20">{job.description}</p>
                          <div className="td_card_bottom">
                            <div className="td_card_skills">
                              {job.skills.map((skill, skillIndex) => (
                                <span key={skillIndex} className="td_skill_tag">{skill}</span>
                              ))}
                            </div>
                            <a href="#" className="td_btn td_style_2 td_type_2">
                              <span>Apply Now</span>
                              <i>
                                {/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M8 1L15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg> */}
                              </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center td_mt_50">
                  <p className="td_fs_18 td_mb_20">
                    Don't see a role that fits? We'd still love to hear from you!
                  </p>
                  <a href="#" className="td_btn td_style_1 td_radius_30 td_accent_bg td_white_color">
                    <span className="td_btn_in">Contact Us</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .td_section_1 {
          padding: 100px 0;
        }
        
        .td_card.td_style_1 {
          background: #fff;
          border-radius: 15px;
          box-shadow: 0 5px 30px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          height: 100%;
          border: 1px solid #f4f3ef;
        }
        
        .td_card.td_style_1:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
        }
        
        .td_card_body {
          padding: 30px;
        }
        
        .td_card_badge {
          display: inline-block;
          padding: 5px 15px;
          border-radius: 30px;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 15px;
        }
        
        .td_card_title {
          font-size: 22px;
          margin-bottom: 10px;
        }
        
        .td_card_title a {
          color: var(--heading-color);
        }
        
        .td_card_title a:hover {
          color: var(--accent-color);
        }
        
        .td_card_meta {
          color: var(--body-color);
          font-size: 14px;
        }
        
        .td_card_meta i {
          margin-right: 5px;
        }
        
        .td_card_text {
          color: var(--body-color);
          margin-bottom: 20px;
        }
        
        .td_card_bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .td_card_skills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .td_skill_tag {
          display: inline-block;
          padding: 5px 12px;
          background-color: rgba(137, 12, 37, 0.1);
          color: var(--accent-color);
          border-radius: 30px;
          font-size: 12px;
          font-weight: 500;
        }
        
        .td_pt_100 {
          padding-top: 100px;
        }
        
        .td_pb_100 {
          padding-bottom: 100px;
        }
        
        .td_mt_50 {
          margin-top: 50px;
        }
        
        @media (max-width: 991px) {
          .td_section_1 {
            padding: 70px 0;
          }
          
          .td_pt_100 {
            padding-top: 70px;
          }
          
          .td_pb_100 {
            padding-bottom: 70px;
          }
        }
        
        @media (max-width: 767px) {
          .td_card_body {
            padding: 25px;
          }
          
          .td_card_title {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
       
    )
}