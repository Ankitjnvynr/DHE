// // UpcomingEvents.jsx
// import React from "react";

// export const UpcomingEvents = () => {
//   const events = [
//     {
//       title: "Indian Education System for Global Developement",
//       date: "December 16–17, 2024",
//       venue: "Kurukshetra University",
//       link: "#",
//     },
//     {
//       title: "Shiksha Kumbh 2025",
//       date: "To be announced soon",
//       venue: "Indian Institute of Technology Jammu",
//       link: "#",
//     },
//     {
//       title: "Shiksha Mahakumbh 2025",
//       date: "To be announced soon",
//       venue: "Jawaharlal Nehru University",
//       link: "#",
//     },
//   ];

//   return (
//     <div>
//       <h3 className="text-center mb-4">Our Upcoming Events</h3>
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










import React, { useState } from "react";
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaInfoCircle,
  FaExternalLinkAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const UpcomingEvents = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedEvent, setExpandedEvent] = useState(null);

  const events = [
    {
      title: "Indian Education System for Global Development",
      date: "December 16–17, 2024",
      venue: "Kurukshetra University",
      link: "#",
      description: "Exploring how India's education system can contribute to global development goals and international collaboration.",
      status: "confirmed",
      category: "Conference",
    },
    {
      title: "Shiksha Kumbh 2025",
      date: "To be announced soon",
      venue: "Indian Institute of Technology Jammu",
      link: "#",
      description: "A grand gathering of educators, policymakers, and thought leaders to shape the future of education in India.",
      status: "pending",
      category: "Summit",
    },
    {
      title: "Shiksha Mahakumbh 2025",
      date: "To be announced soon",
      venue: "Jawaharlal Nehru University",
      link: "#",
      description: "The largest education summit in India featuring international speakers and innovative learning methodologies.",
      status: "pending",
      category: "Summit",
    },
    {
      title: "Digital Learning Conference 2025",
      date: "March 15-16, 2025",
      venue: "Indian Institute of Science, Bangalore",
      link: "#",
      description: "Exploring the latest trends in digital education and e-learning technologies.",
      status: "confirmed",
      category: "Conference",
    },
    {
      title: "Teacher Training Workshop",
      date: "April 20-22, 2025",
      venue: "Delhi University",
      link: "#",
      description: "Comprehensive training program for educators on modern teaching methodologies.",
      status: "confirmed",
      category: "Workshop",
    },
    {
      title: "EdTech Innovation Summit",
      date: "May 10-12, 2025",
      venue: "Indian Institute of Technology Delhi",
      link: "#",
      description: "Showcasing cutting-edge educational technologies and innovative learning solutions.",
      status: "confirmed",
      category: "Summit",
    },
    {
      title: "Research Symposium on Education",
      date: "June 5-7, 2025",
      venue: "Banaras Hindu University",
      link: "#",
      description: "Academic research presentations on contemporary educational challenges and solutions.",
      status: "pending",
      category: "Symposium",
    },
    {
      title: "International Education Forum",
      date: "July 15-17, 2025",
      venue: "Jadavpur University",
      link: "#",
      description: "Global perspectives on education reform and international collaboration.",
      status: "confirmed",
      category: "Forum",
    },
  ];

  const displayedEvents = showAll ? events : events.slice(0, 3);

  const toggleExpand = (index) => {
    setExpandedEvent(expandedEvent === index ? null : index);
  };

  const getStatusBadge = (status) => {
    return (
      <span className={`badge ${status === "confirmed" ? "bg-success" : "bg-warning text-dark"} ms-2`}>
        {status === "confirmed" ? "Confirmed" : "Coming Soon"}
      </span>
    );
  };

  const getCategoryBadge = (category) => {
    const categoryColors = {
      Conference: "bg-danger",
      Summit: "bg-primary",
      Workshop: "bg-secondary",
      Symposium: "bg-dark",
      Forum: "bg-success",
    };
    return <span className={`badge ${categoryColors[category] || "bg-secondary"} me-2`}>{category}</span>;
  };

  return (
    <div className="py-5 bg-light" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-uppercase fw-bold text-danger mb-2" style={{ letterSpacing: "2px" }}>
            Knowledge is Power
          </p>
          <h2 className="display-5 fw-bold text-dark">Our Upcoming Events</h2>
          <div className="mx-auto mb-3" style={{ width: "80px", height: "4px", backgroundColor: "#8B2635" }}></div>
          <p className="lead text-muted">Join us for these exciting educational events and conferences</p>
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
                  className="card-header text-white"
                  style={{
                    background: "linear-gradient(135deg, #8B2635 0%, #8B2635 100%)",
                    borderRadius: "12px 12px 0 0",
                    border: "none",
                  }}
                >
                  {getCategoryBadge(event.category)}
                  {getStatusBadge(event.status)}
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold">{event.title}</h5>
                  <div className="mb-2 text-muted d-flex align-items-center">
                    <FaCalendarAlt className="me-2" style={{ color: '#8B2635' }} />
                    <small className={event.status === "pending" ? "fst-italic" : ""}>{event.date}</small>
                  </div>
                  <div className="mb-3 text-muted d-flex align-items-center">
                    <FaMapMarkerAlt className="me-2 " style={{ color: '#8B2635' }} />
                    <small>{event.venue}</small>
                  </div>

                  <p className="card-text text-muted" style={{ fontSize: "0.95rem" }}>
                    {expandedEvent === idx
                      ? event.description
                      : `${event.description.slice(0, 100)}...`}
                  </p>

                  {event.status === "pending" && (
                    <div className="alert alert-warning py-2 px-3" style={{ fontSize: "0.85rem" }}>
                      <FaInfoCircle className="me-2" />
                      <strong>Note:</strong> Details will be confirmed soon!
                    </div>
                  )}

                  <div className="mt-auto d-flex gap-2">
                    <button
                      className="btn btn-outline btn-sm w-100" style={{ backgroundColor: '#8B2635', color: '#fff' }}
                      onClick={() => toggleExpand(idx)}
                    >
                      {expandedEvent === idx ? "Show Less" : "Read More"}
                    </button>
                    <button
                      className="btn btn-danger btn-sm w-100" style={{ backgroundColor: '#8B2635' }}
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

        {events.length > 6 && (
          <div className="text-center mt-5">
  <button
    className="btn px-5 py-3 text-white"
    onClick={() => setShowAll(!showAll)}
    style={{
      backgroundColor: '#8B2635',
      borderRadius: '50px',
      boxShadow: '0 4px 15px #8B2635',
      transition: 'all 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#A73744';
      e.currentTarget.style.boxShadow = '0 6px 20px #8B2635';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#8B2635';
      e.currentTarget.style.boxShadow = '0 4px 15px #8B2635';
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
