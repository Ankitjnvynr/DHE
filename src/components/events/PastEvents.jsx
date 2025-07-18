// // PastEvents.jsx
// import React from "react";

// export const PastEvents = () => {
//   const events = [
//     {
//       title: "Role of Academic-driven Startups in Developing Economy of J&K",
//       date: "June 29–30, 2024",
//       venue: "National Institute of Technology Srinagar",
//       link: "#",
//     },
//     {
//       title:
//         "Innovation and Entrepreneurship for School Students, Teachers and Atal Tinkering Labs Coordinators",
//       date: "May 10, 2024",
//       venue: "CSIO Chandigarh",
//       link: "#",
//     },
//     {
//       title: "Teacher Development Program in Collaboration with NITTTER",
//       date: "March 12–17, 2024",
//       venue: "NITTTER Chandigarh",
//       link: "#",
//     },
//     {
//       title: "Spoken English Workshop",
//       date: "January 25–31, 2024",
//       venue: "Gita Niketan, Kurukshetra",
//       link: "#",
//     },
//     {
//       title: "Role of Academic-driven Startups in Economy",
//       date: "December 20, 2023",
//       venue: "National Institute of Technology Kurukshetra",
//       link: "#",
//     },
//     {
//       title: "Recent Advances in School Education",
//       date: "June 09–11, 2023",
//       venue: "National Institute of Technology Jalandhar",
//       link: "#",
//     },
//   ];

//   return (
//     <div>
//       <h3 className="text-center mb-4">Our Past Events</h3>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>Title</th>
//               <th>Date</th>
//               <th>Venue</th>
//               <th>More Information</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event, idx) => (
//               <tr key={idx}>
//                 <td>{event.title}</td>
//                 <td>{event.date}</td>
//                 <td>{event.venue}</td>
//                 <td>
//                   <a href={event.link} className="text-danger fw-bold">
//                     Click here
//                   </a>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };










// import React, { useState } from "react";

// export const PastEvents = () => {
//   const [hoveredRow, setHoveredRow] = useState(null);
//   const [expandedEvent, setExpandedEvent] = useState(null);

//   const events = [
//     {
//       title: "Role of Academic-driven Startups in Developing Economy of J&K",
//       date: "June 29–30, 2024",
//       venue: "National Institute of Technology Srinagar",
//       link: "#",
//       description: "A comprehensive discussion on how academic startups can boost the economy of Jammu & Kashmir region."
//     },
//     {
//       title: "Innovation and Entrepreneurship for School Students, Teachers and Atal Tinkering Labs Coordinators",
//       date: "May 10, 2024",
//       venue: "CSIO Chandigarh",
//       link: "#",
//       description: "Workshop focused on fostering innovation mindset among school students and educators."
//     },
//     {
//       title: "Teacher Development Program in Collaboration with NITTTER",
//       date: "March 12–17, 2024",
//       venue: "NITTTER Chandigarh",
//       link: "#",
//       description: "Six-day intensive program for teacher skill enhancement and modern pedagogical techniques."
//     },
//     {
//       title: "Spoken English Workshop",
//       date: "January 25–31, 2024",
//       venue: "Gita Niketan, Kurukshetra",
//       link: "#",
//       description: "Week-long workshop to improve English communication skills for students and professionals."
//     },
//     {
//       title: "Role of Academic-driven Startups in Economy",
//       date: "December 20, 2023",
//       venue: "National Institute of Technology Kurukshetra",
//       link: "#",
//       description: "Exploring the impact of university-born startups on regional economic development."
//     },
//     {
//       title: "Recent Advances in School Education",
//       date: "June 09–11, 2023",
//       venue: "National Institute of Technology Jalandhar",
//       link: "#",
//       description: "Conference showcasing cutting-edge methodologies in primary and secondary education."
//     },
//   ];

//   const toggleExpand = (index) => {
//     setExpandedEvent(expandedEvent === index ? null : index);
//   };

//   return (
//     <div className="past-events-container" style={{
//       padding: '2rem',
//       maxWidth: '1200px',
//       margin: '0 auto',
//       fontFamily: 'var(--body-font)'
//     }}>
//       <h3 className="text-center mb-4" style={{
//         color: 'var(--heading-color)',
//         fontFamily: 'var(--heading-font)',
//         fontSize: '1.8rem',
//         fontWeight: '700',
//         position: 'relative',
//         paddingBottom: '1rem'
//       }}>
//         Our Past Events
//         <span style={{
//           position: 'absolute',
//           bottom: '0',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           width: '80px',
//           height: '4px',
//           background: 'var(--accent-color)',
//           borderRadius: '2px'
//         }}></span>
//       </h3>
      
//       <div className="table-responsive" style={{
//         borderRadius: '12px',
//         overflow: 'hidden',
//         boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
//         border: '1px solid var(--border-color)'
//       }}>
//         <table className="table" style={{
//           marginBottom: '0',
//           borderCollapse: 'collapse'
//         }}>
//           <thead style={{
//             background: 'var(--accent-color)',
//             color: 'var(--white-color)'
//           }}>
//             <tr>
//               <th style={{ padding: '1rem', fontWeight: '600' }}>Event Title</th>
//               <th style={{ padding: '1rem', fontWeight: '600', width: '15%' }}>Date</th>
//               <th style={{ padding: '1rem', fontWeight: '600', width: '20%' }}>Venue</th>
//               <th style={{ padding: '1rem', fontWeight: '600', width: '15%' }}>Details</th>
//             </tr>
//           </thead>
//           <tbody>
//             {events.map((event, idx) => (
//               <React.Fragment key={idx}>
//                 <tr 
//                   style={{
//                     background: hoveredRow === idx ? 'var(--gray-color)' : 'var(--white-color)',
//                     transition: 'background 0.2s ease',
//                     cursor: 'pointer',
//                     borderBottom: expandedEvent === idx ? 'none' : '1px solid var(--border-color)'
//                   }}
//                   onMouseEnter={() => setHoveredRow(idx)}
//                   onMouseLeave={() => setHoveredRow(null)}
//                   onClick={() => toggleExpand(idx)}
//                 >
//                   <td style={{ 
//                     padding: '1rem',
//                     color: 'var(--heading-color)',
//                     fontWeight: '500'
//                   }}>
//                     {event.title}
//                   </td>
//                   <td style={{ 
//                     padding: '1rem',
//                     color: 'var(--body-color)'
//                   }}>
//                     {event.date}
//                   </td>
//                   <td style={{ 
//                     padding: '1rem',
//                     color: 'var(--body-color)'
//                   }}>
//                     {event.venue}
//                   </td>
//                   <td style={{ padding: '1rem' }}>
//                     <button 
//                       style={{
//                         background: 'transparent',
//                         border: '2px solid var(--accent-color)',
//                         color: 'var(--accent-color)',
//                         padding: '0.4rem 1rem',
//                         borderRadius: '6px',
//                         fontWeight: '600',
//                         transition: 'all 0.2s ease',
//                         cursor: 'pointer'
//                       }}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.background = 'var(--accent-color)';
//                         e.currentTarget.style.color = 'var(--white-color)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.background = 'transparent';
//                         e.currentTarget.style.color = 'var(--accent-color)';
//                       }}
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         window.open(event.link, '_blank');
//                       }}
//                     >
//                       View More
//                     </button>
//                   </td>
//                 </tr>
//                 {expandedEvent === idx && (
//                   <tr style={{
//                     background: 'var(--gray-color)',
//                     borderBottom: '1px solid var(--border-color)'
//                   }}>
//                     <td colSpan="4" style={{ 
//                       padding: '1rem',
//                       color: 'var(--body-color)',
//                       lineHeight: '1.6'
//                     }}>
//                       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                         <div style={{ flex: 1 }}>
//                           <h4 style={{ 
//                             color: 'var(--heading-color)',
//                             marginBottom: '0.5rem',
//                             fontSize: '1rem'
//                           }}>
//                             Event Description:
//                           </h4>
//                           <p>{event.description}</p>
//                         </div>
//                         <button 
//                           style={{
//                             alignSelf: 'flex-start',
//                             background: 'var(--accent-color)',
//                             color: 'var(--white-color)',
//                             border: 'none',
//                             borderRadius: '50%',
//                             width: '30px',
//                             height: '30px',
//                             display: 'flex',
//                             alignItems: 'center',
//                             justifyContent: 'center',
//                             cursor: 'pointer',
//                             marginLeft: '1rem'
//                           }}
//                           onClick={() => setExpandedEvent(null)}
//                         >
//                           ×
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 )}
//               </React.Fragment>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       <style jsx>{`
//         .table-responsive {
//           scrollbar-width: thin;
//           scrollbar-color: var(--accent-color) var(--gray-color);
//         }
        
//         .table-responsive::-webkit-scrollbar {
//           height: 8px;
//         }
        
//         .table-responsive::-webkit-scrollbar-track {
//           background: var(--gray-color);
//         }
        
//         .table-responsive::-webkit-scrollbar-thumb {
//           background-color: var(--accent-color);
//           border-radius: 20px;
//         }
        
//         @media (max-width: 768px) {
//           .past-events-container {
//             padding: 1rem;
//           }
          
//           th, td {
//             padding: 0.75rem !important;
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };











import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const PastEvents = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      title: "Role of Academic-driven Startups in Developing Economy of J&K",
      date: "June 29–30, 2024",
      venue: "National Institute of Technology Srinagar",
      link: "#",
      description: "A comprehensive discussion on how academic startups can boost the economy of Jammu & Kashmir region.",
      category: "Conference",
    },
    {
      title: "Innovation and Entrepreneurship for School Students, Teachers and Atal Tinkering Labs Coordinators",
      date: "May 10, 2024",
      venue: "CSIO Chandigarh",
      link: "#",
      description: "Workshop focused on fostering innovation mindset among school students and educators.",
      category: "Workshop",
    },
    {
      title: "Teacher Development Program in Collaboration with NITTTER",
      date: "March 12–17, 2024",
      venue: "NITTTER Chandigarh",
      link: "#",
      description: "Six-day intensive program for teacher skill enhancement and modern pedagogical techniques.",
      category: "Training",
    },
    {
      title: "Spoken English Workshop",
      date: "January 25–31, 2024",
      venue: "Gita Niketan, Kurukshetra",
      link: "#",
      description: "Week-long workshop to improve English communication skills for students and professionals.",
      category: "Workshop",
    },
    {
      title: "Role of Academic-driven Startups in Economy",
      date: "December 20, 2023",
      venue: "National Institute of Technology Kurukshetra",
      link: "#",
      description: "Exploring the impact of university-born startups on regional economic development.",
      category: "Seminar",
    },
    {
      title: "Recent Advances in School Education",
      date: "June 09–11, 2023",
      venue: "National Institute of Technology Jalandhar",
      link: "#",
      description: "Conference showcasing cutting-edge methodologies in primary and secondary education.",
      category: "Conference",
    },
  ];

  const displayedEvents = showAll ? events : events.slice(0, 3);

  const toggleExpand = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  const getCategoryBadge = (category) => {
    const categoryColors = {
      Conference: "bg-primary",
      Workshop: "bg-secondary",
      Training: "bg-info text-dark",
      Seminar: "bg-success",
      Summit: "bg-dark",
    };
    return <span className={`badge ${categoryColors[category] || "bg-secondary"}`}>{category}</span>;
  };

  return (
    <div className="py-5" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif", backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold text-danger mb-2" style={{ letterSpacing: "2px" }}>
            Our Journey
          </p>
          <h2 className="display-5 fw-bold text-dark">Past Events</h2>
          <div className="mx-auto mb-3" style={{ width: "80px", height: "4px", backgroundColor: "#8B2635" }}></div>
          <p className="lead text-muted">Relive our successful events and conferences</p>
        </div>

        <div className="row g-4">
          {displayedEvents.map((event, idx) => (
            <div key={idx} className="col-lg-4 col-md-6 col-12">
              <div
                className="card h-100 shadow border-0"
                style={{ borderRadius: "12px", transition: "all 0.3s ease" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div
                  className="card-header text-white d-flex justify-content-between align-items-center"
                  style={{
                    background: "linear-gradient(135deg, #8B2635 0%, #8B2635 100%)",
                    borderRadius: "12px 12px 0 0",
                    border: "none",
                  }}
                >
                  <span>Completed</span>
                  {getCategoryBadge(event.category)}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <div className="mb-2 text-muted d-flex align-items-center">
                    <FaCalendarAlt className="me-2" style={{ color: '#8B2635' }} />
                    <small>{event.date}</small>
                  </div>
                  <div className="mb-3 text-muted d-flex align-items-center">
                    <FaMapMarkerAlt className="me-2" style={{ color: '#8B2635' }} />
                    <small>{event.venue}</small>
                  </div>

                  <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                    {expandedEvent === idx
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                  </p>

                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-outline-danger btn-sm w-100"
                      onClick={() => toggleExpand(idx)}
                    >
                      {expandedEvent === idx ? (
                        <>
                          <FaChevronUp className="me-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <FaChevronDown className="me-1" />
                          Read More
                        </>
                      )}
                    </button>
                    <button
                      className="btn btn-danger btn-sm w-100"
                      style={{ backgroundColor: '#8B2635' }}
                      onClick={() => window.open(event.link, "_blank")}
                    >
                      <FaExternalLinkAlt className="me-1" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {events.length > 3 && (
          <div className="text-center mt-5">
            <button
              className="btn px-5 py-3 text-white"
              onClick={() => setShowAll(!showAll)}
              style={{
                backgroundColor: '#8B2635',
                borderRadius: '50px',
                boxShadow: '0 4px 15px rgba(139, 38, 53, 0.5)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#A73744';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 38, 53, 0.7)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#8B2635';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(139, 38, 53, 0.5)';
              }}
            >
              {showAll ? (
                <>
                  <FaChevronUp className="me-2" />
                  Show Less Events
                </>
              ) : (
                <>
                  <FaChevronDown className="me-2" />
                  View More Events ({events.length - 3} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};