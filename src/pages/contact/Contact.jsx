// import React from "react";
// import { Layout } from "../../layouts/Layout";

// import contactImg from "../../assets/img/others/contact_img.jpg";

// export const Contact = () => {
//   return (
//     <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
//       <section>
//         <div className="td_height_120 td_height_lg_80" />
//         <div className="container">
//           <div className="row">
//             <div className="col-xxl-10 offset-xxl-1">
//               <div className="row align-items-center td_gap_y_40">
//                 <div className="col-lg-7">
//                   <img src={contactImg} alt="Contact" className="w-100" />
//                 </div>
//                 <div className="col-xl-4 offset-xl-1 col-lg-5">
//                   <div className="td_contact_info">
//                     <div className="td_section_heading td_style_2 td_mb_20">
//                       <h2 className="td_contact_info_title td_fs_36 mb-0">
//                         Our Office Address
//                       </h2>
//                     </div>
//                     <div className="td_mb_40">
//                       <h2 className="td_fs_24 td_semibold td_mb_20">
//                         USA Campus
//                       </h2>
//                       <p className="td_fs_18 td_heading_color td_medium td_mb_10">
//                         100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
//                       </p>
//                       <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
//                         <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
//                       </p>
//                       <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
//                         <a href="mailto:info@gmail.com">info@gmail.com</a>
//                       </p>
//                     </div>
//                     <div>
//                       <h2 className="td_fs_24 td_semibold td_mb_20">
//                         Monica Campus
//                       </h2>
//                       <p className="td_fs_18 td_heading_color td_medium td_mb_10">
//                         100 Wilshire Blvd, Suite 700 Santa Monica, CA 90401, USA
//                       </p>
//                       <p className="td_fs_18 td_heading_color td_medium td_mb_10 td_opacity_7">
//                         <a href="tel:+1(310)620-8565">+1 (310) 620-8565</a>
//                       </p>
//                       <p className="td_fs_18 td_heading_color td_medium mb-0 td_opacity_7">
//                         <a href="mailto:info@gmail.com">info@gmail.com</a>
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="td_height_120 td_height_lg_80" />

//         <div className="td_map">
//           <iframe
//             id="map"
//             title="Location Map"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96652.27317354927!2d-74.33557928194516!3d40.79756494697628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3a82f1352d0dd%3A0x81d4f72c4435aab5!2sTroy+Meadows+Wetlands!5e0!3m2!1sen!2sbd!4v1563075599994!5m2!1sen!2sbd"
//             allowFullScreen
//           />
//         </div>
//       </section>
//     </Layout>
//   );
// };

// import React, { useState, useEffect } from "react";
// import { Layout } from "../../layouts/Layout";
// import contactImg from "../../assets/img/others/contact_img.jpg";

// export const Contact = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   useEffect(() => {
//     const timer = setTimeout(() => setIsVisible(true), 100);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert('Thank you for your message! We will get back to you soon.');
//     setFormData({ name: '', email: '', message: '' });
//   };

//   const contactInfo = [
//     {
//       icon: "fas fa-envelope",
//       title: "Email Address",
//       details: ["director@dhe.org.in", "dhe2021vb@gmail.com"],
//       type: "email"
//     },
//     {
//       icon: "fas fa-phone",
//       title: "Phone Numbers",
//       details: ["7903431900", "9417050631"],
//       type: "phone"
//     },
//     {
//       icon: "fas fa-globe",
//       title: "Website",
//       details: ["dhe.org.in"],
//       type: "website"
//     },
//     {
//       icon: "fas fa-map-marker-alt",
//       title: "Our Location",
//       details: ["Vidya Bharti Plot No. 1", "Sector 71, SAS Nagar (Mohali) – 160071"],
//       type: "address"
//     }
//   ];

//   return (
//     <Layout breadcrumbTitle="Contact" breadcrumbSubtitle="Contact">
//       <section className="position-relative overflow-hidden">
//         {/* Hero Section */}
//         <div className="bg-dark text-white py-5 mb-5" style={{ backgroundColor: '#8B2F3C' }}>
//           <div className="container">
//             <div className="row align-items-center">
//               <div className="col-lg-8">
//                 <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
//                   <h6 className="text-uppercase fw-bold mb-3 text-light opacity-75">GET IN TOUCH</h6>
//                   <h1 className="display-4 fw-bold mb-4">
//                     Contact Us - Let's Start a Conversation
//                   </h1>
//                   <p className="lead mb-4 text-light opacity-90">
//                     We're here to help you with your educational journey. Reach out to us and let's discuss how we can support your goals.
//                   </p>
//                   <div className="d-flex gap-3">
//                     <button className="btn btn-light btn-lg px-4 py-2 fw-semibold">
//                       <i className="fas fa-arrow-right me-2"></i>
//                       Get Started
//                     </button>
//                     <button className="btn btn-outline-light btn-lg px-4 py-2 fw-semibold">
//                       Learn More
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-4 d-none d-lg-block">
//                 <div className="text-end">
//                   <div className="display-1 fw-bold opacity-10">
//                     24/7
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-xxl-10 offset-xxl-1">
//               {/* Main Content */}
//               <div className="row g-5 mb-5">
//                 {/* Contact Form */}
//                 <div className="col-lg-6">
//                   <div className={`h-100 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
//                     <div className="bg-white rounded-4 shadow-lg p-4 p-md-5 h-100">
//                       <h2 className="fw-bold mb-4" style={{ color: '#8B2F3C' }}>
//                         Send us a Message
//                       </h2>
                      
//                       <form onSubmit={handleSubmit}>
//                         <div className="row g-3">
//                           <div className="col-12">
//                             <label htmlFor="name" className="form-label fw-semibold text-dark">
//                               Full Name *
//                             </label>
//                             <input
//                               type="text"
//                               className="form-control form-control-lg border-2 rounded-3"
//                               id="name"
//                               name="name"
//                               value={formData.name}
//                               onChange={handleInputChange}
//                               placeholder="Enter your full name"
//                               required
//                               style={{ borderColor: '#dee2e6' }}
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label htmlFor="email" className="form-label fw-semibold text-dark">
//                               Email Address *
//                             </label>
//                             <input
//                               type="email"
//                               className="form-control form-control-lg border-2 rounded-3"
//                               id="email"
//                               name="email"
//                               value={formData.email}
//                               onChange={handleInputChange}
//                               placeholder="Enter your email"
//                               required
//                               style={{ borderColor: '#dee2e6' }}
//                             />
//                           </div>
                          
//                           <div className="col-12">
//                             <label htmlFor="message" className="form-label fw-semibold text-dark">
//                               Message *
//                             </label>
//                             <textarea
//                               className="form-control form-control-lg border-2 rounded-3"
//                               id="message"
//                               name="message"
//                               rows="5"
//                               value={formData.message}
//                               onChange={handleInputChange}
//                               placeholder="Tell us how we can help you..."
//                               required
//                               style={{ borderColor: '#dee2e6' }}
//                             ></textarea>
//                           </div>
                          
//                           <div className="col-12">
//                             <button
//                               type="submit"
//                               className="btn btn-lg w-100 rounded-3 fw-semibold text-white py-3"
//                               style={{ backgroundColor: '#8B2F3C', borderColor: '#8B2F3C' }}
//                             >
//                               Send Message
//                               <i className="fas fa-paper-plane ms-2"></i>
//                             </button>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Contact Image */}
//                 <div className="col-lg-6">
//                   <div className={`h-100 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
//                     <div className="position-relative h-100 rounded-4 overflow-hidden shadow-lg">
//                       <img 
//                         src={contactImg} 
//                         alt="Contact Us" 
//                         className="w-100 h-100 object-fit-cover"
//                         style={{ minHeight: '500px' }}
//                       />
//                       <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(139, 47, 60, 0.8)' }}>
//                         <div className="text-center text-white">
//                           <i className="fas fa-quote-left display-4 mb-4 opacity-75"></i>
//                           <h3 className="fw-bold mb-3">We're Here to Help</h3>
//                           <p className="lead mb-0">Your success is our priority</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Information Cards */}
//               <div className={`row g-4 mb-5 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="col-md-6 col-lg-3">
//                     <div className="card border-0 rounded-4 shadow-sm h-100 text-center overflow-hidden">
//                       <div className="card-body p-4">
//                         <div 
//                           className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 text-white"
//                           style={{ 
//                             width: '60px', 
//                             height: '60px', 
//                             backgroundColor: '#8B2F3C' 
//                           }}
//                         >
//                           <i className={`${info.icon} fs-4`}></i>
//                         </div>
                        
//                         <h5 className="fw-bold mb-3" style={{ color: '#8B2F3C' }}>
//                           {info.title}
//                         </h5>
                        
//                         <div className="text-muted">
//                           {info.details.map((detail, i) => (
//                             <div key={i} className="mb-2">
//                               {info.type === 'email' && detail.includes('@') ? (
//                                 <a 
//                                   href={`mailto:${detail}`} 
//                                   className="text-decoration-none fw-semibold"
//                                   style={{ color: '#8B2F3C' }}
//                                 >
//                                   {detail}
//                                 </a>
//                               ) : info.type === 'phone' ? (
//                                 <a 
//                                   href={`tel:+91${detail}`} 
//                                   className="text-decoration-none fw-semibold"
//                                   style={{ color: '#8B2F3C' }}
//                                 >
//                                   +91 {detail}
//                                 </a>
//                               ) : info.type === 'website' ? (
//                                 <a 
//                                   href={`https://${detail}`} 
//                                   target="_blank" 
//                                   rel="noreferrer" 
//                                   className="text-decoration-none fw-semibold"
//                                   style={{ color: '#8B2F3C' }}
//                                 >
//                                   {detail}
//                                 </a>
//                               ) : (
//                                 <span className="small">{detail}</span>
//                               )}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Project Manager Section */}
//               <div className={`row justify-content-center mb-5 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
//                 <div className="col-lg-8">
//                   <div className="card border-0 rounded-4 shadow-lg overflow-hidden">
//                     <div className="card-body p-0">
//                       <div className="text-white p-5 text-center" style={{ backgroundColor: '#8B2F3C' }}>
//                         <div 
//                           className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3 bg-white"
//                           style={{ 
//                             width: '80px', 
//                             height: '80px',
//                             color: '#8B2F3C'
//                           }}
//                         >
//                           <i className="fas fa-user-tie fs-2"></i>
//                         </div>
                        
//                         <h3 className="fw-bold mb-2">Thakur Ramendra Pratap Singh Rana</h3>
//                         <p className="mb-1 opacity-90">Project Manager</p>
//                         <p className="mb-0 opacity-75">Department of Holistic Education</p>
//                       </div>
                      
//                       <div className="p-4 bg-light">
//                         <div className="row g-3 text-center">
//                           <div className="col-md-4">
//                             <div className="p-3 bg-white rounded-3 shadow-sm">
//                               <i className="fas fa-building mb-2 text-primary"></i>
//                               <h6 className="fw-bold mb-1" style={{ color: '#8B2F3C' }}>Organization</h6>
//                               <p className="mb-0 small text-muted">Vidya Bharti</p>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="p-3 bg-white rounded-3 shadow-sm">
//                               <i className="fas fa-graduation-cap mb-2 text-success"></i>
//                               <h6 className="fw-bold mb-1" style={{ color: '#8B2F3C' }}>Department</h6>
//                               <p className="mb-0 small text-muted">Holistic Education</p>
//                             </div>
//                           </div>
//                           <div className="col-md-4">
//                             <div className="p-3 bg-white rounded-3 shadow-sm">
//                               <i className="fas fa-map-marker-alt mb-2 text-info"></i>
//                               <h6 className="fw-bold mb-1" style={{ color: '#8B2F3C' }}>Location</h6>
//                               <p className="mb-0 small text-muted">Mohali, Punjab</p>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="td_height_120 td_height_lg_80" />

//         {/* Map Section */}
      //   <div className={`position-relative transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      //     <div className="container-fluid px-0">
      //       <div className="position-relative">
      //         <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-start z-3 p-4">
      //           <div className="bg-white rounded-4 shadow-lg p-4 max-width-300">
      //             <h5 className="fw-bold mb-2" style={{ color: '#8B2F3C' }}>
      //               <i className="fas fa-map-marker-alt me-2"></i>
      //               Visit Our Campus
      //             </h5>
      //             <p className="mb-1 text-muted">Vidya Bharti Plot No. 1</p>
      //             <p className="mb-0 text-muted">Sector 71, SAS Nagar (Mohali) – 160071</p>
      //           </div>
      //         </div>
              
      //         <iframe
      //           id="map"
      //           title="Location Map"
      //           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0593312506196!2d76.69862187526902!3d30.679297788393347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed7d937aec1f%3A0x75f22a65ebfc8e7b!2sSector%2071%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1720941600012!5m2!1sen!2sin"
      //           width="100%"
      //           height="450"
      //           allowFullScreen
      //           loading="lazy"
      //           style={{ border: 0 }}
      //           className="w-100"
      //         />
      //       </div>
      //     </div>
      //   </div>
      // </section>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .transition-all {
//           transition: all 0.6s ease-in-out;
//         }
        
//         .duration-1000 {
//           transition-duration: 1s;
//         }
        
//         .delay-300 {
//           transition-delay: 0.3s;
//         }
        
//         .delay-500 {
//           transition-delay: 0.5s;
//         }
        
//         .delay-700 {
//           transition-delay: 0.7s;
//         }
        
//         .delay-900 {
//           transition-delay: 0.9s;
//         }
        
//         .delay-1100 {
//           transition-delay: 1.1s;
//         }
        
//         .opacity-0 {
//           opacity: 0;
//         }
        
//         .opacity-100 {
//           opacity: 1;
//         }
        
//         .translate-x-0 {
//           transform: translateX(0);
//         }
        
//         .-translate-x-10 {
//           transform: translateX(-2.5rem);
//         }
        
//         .translate-x-10 {
//           transform: translateX(2.5rem);
//         }
        
//         .translate-y-0 {
//           transform: translateY(0);
//         }
        
//         .translate-y-10 {
//           transform: translateY(2.5rem);
//         }
        
//         .card:hover {
//           transform: translateY(-5px);
//           box-shadow: 0 10px 30px rgba(0,0,0,0.15) !important;
//           transition: all 0.3s ease;
//         }
        
//         .btn:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 5px 15px rgba(0,0,0,0.2);
//           transition: all 0.3s ease;
//         }
        
//         .form-control:focus {
//           border-color: #8B2F3C;
//           box-shadow: 0 0 0 0.2rem rgba(139, 47, 60, 0.25);
//         }
        
//         .object-fit-cover {
//           object-fit: cover;
//         }
        
//         .max-width-300 {
//           max-width: 300px;
//         }
        
//         @media (max-width: 768px) {
//           .display-4 {
//             font-size: 2.5rem;
//           }
          
//           .lead {
//             font-size: 1.1rem;
//           }
//         }
//       `}</style>
//     </Layout>
//   );
// };

























import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, User, Building, Globe, MessageSquare, Send, Clock, Award, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Layout } from "../../layouts/Layout";
import contactImg from "../../assets/img/others/contactpic3.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 2000);
  };



  const contactInfo = [
    {
      icon: <User className="w-5 h-5" />,
      title: "Project Manager",
      content: "Thakur Ramendra Pratap Singh Rana",
      link: null
    },
    {
      icon: <Building className="w-5 h-5" />,
      title: "Department",
      content: "Department of Holistic Education",
      link: null
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Address",
      content: "Vidya Bharti Plot No. 1, Sector 71, SAS Nagar (Mohali) - 160071",
      link: null
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      content: "director@dhe.org.in",
      link: "mailto:director@dhe.org.in"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone/WhatsApp",
      content: "7903431900 | 9417050631",
      link: "tel:+917903431900"
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Website",
      content: "dhe.org.in",
      link: "https://dhe.org.in"
    }
  ];

  const styles = `
    :root {
      --brand-red: #9b2c2c;
      --brand-red-light: #c53030;
      --brand-red-lighter: #f8e8e8;
    }
    
    .brand-red { background-color: var(--brand-red); }
    .brand-red-light { background-color: var(--brand-red-light); }
    .text-brand-red { color: var(--brand-red); }
    .border-brand-red { border-color: var(--brand-red); }
    .hover-brand-red:hover { background-color: var(--brand-red); color: white; }
    
    .contact-card {
      transition: all 0.3s ease;
      border: 1px solid #e2e8f0;
      background: white;
      border-radius: 15px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.05);
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    
    .contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(155, 44, 44, 0.1);
      border-color: var(--brand-red);
    }
    
    .contact-card::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--brand-red), var(--brand-red-light));
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease;
    }
    
    .contact-card:hover::after {
      transform: scaleX(1);
    }
    
    .form-control:focus {
      border-color: var(--brand-red);
      box-shadow: 0 0 0 0.2rem rgba(155, 44, 44, 0.15);
    }
    
    .btn-brand {
      background: linear-gradient(135deg, var(--brand-red) 0%, var(--brand-red-light) 100%);
      border: none;
      transition: all 0.3s ease;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    
    .btn-brand:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(155, 44, 44, 0.2);
    }
    
    .btn-brand::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: 0.5s;
    }
    
    .btn-brand:hover::after {
      left: 100%;
    }
    
    .hero-section {
      background: linear-gradient(135deg, var(--brand-red) 0%, var(--brand-red-light) 100%);
      position: relative;
      overflow: hidden;
      padding: 100px 0;
      color: white;
    }
    
    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="1" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
      opacity: 0.3;
    }
    
    .hero-content {
      position: relative;
      z-index: 2;
    }
    
    .hero-title {
      font-size: 3.5rem;
      font-weight: 800;
      margin-bottom: 1.5rem;
      line-height: 1.2;
    }
    
    .hero-subtitle {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: 2rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .social-links {
      display: flex;
      gap: 15px;
      justify-content: center;
      margin-top: 2rem;
    }
    
    .social-link {
      width: 45px;
      height: 45px;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(255,255,255,0.2);
    }
    
    .social-link:hover {
      background: white;
      color: var(--brand-red);
      transform: translateY(-3px);
    }
    
    .section-title {
      position: relative;
      display: inline-block;
      margin-bottom: 2rem;
    }
    
    .section-title::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: linear-gradient(90deg, var(--brand-red), var(--brand-red-light));
      border-radius: 2px;
    }
    
    .info-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, var(--brand-red), var(--brand-red-light));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-bottom: 20px;
      transition: all 0.3s ease;
      margin-left: auto;
      margin-right: auto;
    }
    
    .contact-card:hover .info-icon {
      transform: scale(1.1) rotate(5deg);
    }
    
    .contact-form {
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      padding: 2.5rem;
      height: 100%;
    }
    
    .contact-info-box {
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      padding: 2rem;
      height: 100%;
    }
    
    .info-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.5rem;
    }
    
    .info-icon-sm {
      width: 40px;
      height: 40px;
      background: var(--brand-red-lighter);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--brand-red);
      margin-right: 1rem;
      flex-shrink: 0;
    }
    
    .info-content h6 {
      font-weight: 600;
      margin-bottom: 0.25rem;
    }
    
    .info-content p {
      margin-bottom: 0;
      color: #6c757d;
    }
    
    .td_map {
      height: 450px;
      border-radius: 15px;
      overflow: hidden;
      box-shadow: 0 15px 40px rgba(0,0,0,0.1);
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .contact-image {
      border-radius: 15px;
      box-shadow: 0 15px 40px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    
    .contact-image:hover {
      transform: scale(1.02);
    }
    
    @media (max-width: 992px) {
      .hero-title {
        font-size: 2.5rem;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
    }
    
    @media (max-width: 768px) {
      .hero-section {
        padding: 80px 0;
      }
      
      .hero-title {
        font-size: 2rem;
      }
      
      .contact-form,
      .contact-info-box {
        padding: 1.5rem;
      }
    }
  `;
  const heroStyles = `
    .hero-section {
      background: linear-gradient(135deg, #8B2F3C 0%, #A13D4A 50%, #B84A5A 100%);
      min-height: 100vh;
      position: relative;
      overflow: hidden;
      display: flex;
      align-items: center;
      color: white;
      padding: 120px 0 80px;
    }

    .hero-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: 
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(255,255,255,0.08) 0%, transparent 50%);
      pointer-events: none;
    }

    .floating-shape {
      position: absolute;
      background: rgba(255,255,255,0.1);
      border-radius: 50%;
      animation: float 6s ease-in-out infinite;
    }

    .floating-shape-1 {
      width: 80px;
      height: 80px;
      top: 20%;
      left: 10%;
      animation-delay: 0s;
    }

    .floating-shape-2 {
      width: 120px;
      height: 120px;
      top: 60%;
      right: 15%;
      animation-delay: 2s;
    }

    .floating-shape-3 {
      width: 60px;
      height: 60px;
      top: 80%;
      left: 20%;
      animation-delay: 4s;
    }

    .floating-shape-4 {
      width: 100px;
      height: 100px;
      top: 30%;
      right: 25%;
      animation-delay: 1s;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-20px) rotate(180deg); }
    }

    .hero-badge {
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
      border-radius: 50px;
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      animation: slideDown 0.8s ease-out;
    }

    .hero-title {
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.2;
      margin-bottom: 2rem;
      animation: slideUp 0.8s ease-out 0.2s both;
    }

    .title-highlight {
      color: #FFE5E5;
      font-weight: 600;
      font-size: 0.7em;
      display: block;
      margin-bottom: 0.5rem;
    }

    .title-main {
      background: linear-gradient(135deg, #FFFFFF 0%, #FFE5E5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-subtitle {
      font-size: 1.2rem;
      line-height: 1.6;
      opacity: 0.9;
      animation: slideUp 0.8s ease-out 0.4s both;
    }

    .hero-actions {
      animation: slideUp 0.8s ease-out 0.6s both;
    }

    .btn-hero-primary {
      background: linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%);
      color: #8B2F3C;
      border: none;
      padding: 15px 30px;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
      position: relative;
      overflow: hidden;
    }

    .btn-hero-primary:hover {
      transform: translateY(-3px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.2);
      color: #8B2F3C;
    }

    .btn-hero-primary::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(139,47,60,0.1), transparent);
      transition: 0.5s;
    }

    .btn-hero-primary:hover::before {
      left: 100%;
    }

    .btn-hero-secondary {
      background: transparent;
      color: white;
      border: 2px solid rgba(255,255,255,0.3);
      padding: 13px 28px;
      border-radius: 50px;
      font-weight: 600;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
    }

    .btn-hero-secondary:hover {
      background: rgba(255,255,255,0.1);
      border-color: rgba(255,255,255,0.5);
      transform: translateY(-2px);
      color: white;
    }

    .btn-arrow {
      font-size: 14px;
      transition: transform 0.3s ease;
    }

    .btn-hero-primary:hover .btn-arrow {
      transform: translateX(3px);
    }

    .hero-stats {
      animation: slideUp 0.8s ease-out 0.8s both;
      margin-top: 4rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 800;
      color: #FFE5E5;
      margin-bottom: 0.5rem;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .stat-label {
      font-size: 0.9rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      animation: bounce 2s infinite;
    }

    .scroll-arrow {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255,255,255,0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255,255,255,0.2);
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes bounce {
      0%, 20%, 53%, 80%, 100% {
        transform: translateY(0);
      }
      40%, 43% {
        transform: translateY(-10px);
      }
      70% {
        transform: translateY(-5px);
      }
      90% {
        transform: translateY(-3px);
      }
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 100px 0 60px;
        min-height: 90vh;
      }
      
      .hero-subtitle {
        font-size: 1.1rem;
      }
      
      .btn-hero-primary,
      .btn-hero-secondary {
        width: 100%;
        max-width: 280px;
        justify-content: center;
      }
      
      .hero-stats {
        margin-top: 2rem;
      }
      
      .stat-number {
        font-size: 1.5rem;
      }
      
      .floating-shape {
        display: none;
      }
    }

    @media (max-width: 576px) {
      .hero-badge {
        padding: 10px 20px;
        font-size: 12px;
      }
    }
  `;
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const timeout = setTimeout(() => {
    setIsVisible(true);
  }, 100); // delay before fade-in

  return () => clearTimeout(timeout);
}, []);


  return (
    <>
      <style>{styles}</style>
      
      <Layout breadcrumbTitle={"Contact"} breadcrumbSubtitle={"Contact"}>
        {/* Hero Section */}
        

        <div className="container">
          <div className="row align-items-center my-5 py-4">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <div className="contact-image">
                <img src={contactImg} alt="Department of Holistic Education" className="w-100" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="ps-lg-4">
                <h2 className="text-brand-red fw-bold mb-4">Our Office</h2>
                <h3 className="h4 mb-4">Department of Holistic Education</h3>
                <p className="mb-4">
                  Vidya Bharti Plot No. 1, Sector 71, SAS Nagar (Mohali) - 160071
                </p>
                
                <div className="mb-4">
                  <a href="tel:+917903431900" className="d-block text-decoration-none text-dark hover-brand-red p-2 rounded mb-2">
                    <Phone className="me-2 text-brand-red" size={18} /> 7903431900
                  </a>
                  <a href="tel:+919417050631" className="d-block text-decoration-none text-dark hover-brand-red p-2 rounded">
                    <Phone className="me-2 text-brand-red" size={18} /> 9417050631
                  </a>
                </div>
                
                <div className="mb-4">
                  <a href="mailto:director@dhe.org.in" className="d-block text-decoration-none text-dark hover-brand-red p-2 rounded mb-2">
                    <Mail className="me-2 text-brand-red" size={18} /> director@dhe.org.in
                  </a>
                  <a href="mailto:dhe2021vb@gmail.com" className="d-block text-decoration-none text-dark hover-brand-red p-2 rounded">
                    <Mail className="me-2 text-brand-red" size={18} /> dhe2021vb@gmail.com
                  </a>
                </div>
                
                <div>
                  <h4 className="h5 text-brand-red mb-3">Project Manager</h4>
                  <p className="mb-2">
                    <User className="me-2 text-brand-red" size={18} /> Thakur Ramendra Pratap Singh Rana
                  </p>
                  <a href="https://dhe.org.in" className="text-decoration-none text-dark hover-brand-red p-2 rounded">
                    <Globe className="me-2 text-brand-red" size={18} /> dhe.org.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Cards */}
        
        {/* Map Section */}
        <section className="py-5 mb-5">
  <div className="container">
    <div className="text-center mb-5">
      <h2 className="section-title h2 fw-bold text-brand-red">Our Location</h2>
      <p className="text-muted">Find us easily with the map below</p>
    </div>
  </div>

  <div className={`position-relative transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'} container-fluid px-0`}>
    <div className="position-relative">
      
      {/* Info Box Overlay */}
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-start justify-content-start z-3 p-4">
        <div className="bg-white rounded-4 shadow-lg p-4 max-width-300">
          <h5 className="fw-bold mb-2" style={{ color: '#8B2F3C' }}>
            <i className="fas fa-map-marker-alt me-2"></i>
            Visit Our Campus
          </h5>
          <p className="mb-1 text-muted">Vidya Bharti Plot No. 1</p>
          <p className="mb-0 text-muted" >Sector 71, SAS Nagar (Mohali) – 160071</p>
        </div>
      </div>

      {/* Embedded Google Map */}
      <iframe
        id="map"
        title="Location Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.0593312506196!2d76.69862187526902!3d30.679297788393347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed7d937aec1f%3A0x75f22a65ebfc8e7b!2sSector%2071%2C%20Sahibzada%20Ajit%20Singh%20Nagar%2C%20Punjab%20160071!5e0!3m2!1sen!2sin!4v1720941600012!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen
        loading="lazy"
        style={{ border: 0 }}
        className="w-100 td_map"
      />
    </div>
  </div>
</section>

        
      </Layout>
    </>
  );
};

export { Contact };