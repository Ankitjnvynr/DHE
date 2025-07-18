// import React, { useState, useMemo } from "react";
// import { Search, Phone, User, Filter, X, Grid, List, ChevronDown } from "lucide-react";

// // Data for coordinators
// const coordinators = [
//   ["Dr. Neeraj Nathani", "Coordinator, IT Cell", "9995678372"],
//   ["Col. K. K. Kakkar", "Coordinator, Event Management Cell", "8697730085"],
//   ["Ms. Maninder Kakkar", "Coordinator, Punjab Super 100", "9419248487"],
//   ["Dr. Neelesh Kumar", "Coordinator, IPR Cell", "9478515278"],
//   ["Dr. Karan Goel", "Coordinator, Industry Co-ordination Cell", "9915087986"],
//   ["Dr. Htet Ne Oo", "Coordinator, HEI Co-ordination Cell", "9041120510"],
//   ["Mr. Sachin Tiwari", "Coordinator, E-commerce Cell", "8729012133"],
//   ["Dr. Mohit Verma", "Coordinator, TMS Cell", "9870203823"],
//   ["Mr. Arsh Agarwal", "Coordinator, Udyam Cell", "7986327876"],
//   ["Shri Saurav Kumar", "Coordinator, Foreign Language Cell", "9023591487"],
//   ["Ms. Sonu Sharma", "Coordinator, Olympiad Cell", "9988805698"],
//   ["Ms. Neeru", "Coordinator, LMS Cell", "9467733337"],
//   ["Dr. Girish Bali", "Coordinator, CSR Cell", "9530703711"],
//   ["Dr. Neeraj Pant", "Co-coordinator, RSR Cell", "8158298446"],
//   ["Dr. Praveen Sharma", "Coordinator, R & D Cell", "9988254485"],
//   ["Dr. Ramit Vasudev", "Coordinator, Art Cell", "9463310838"],
//   ["Mr. Krishan Kumar", "Coordinator, ATL Cell", "9995568058"],
//   ["Dr. Chaman Chandel", "Coordinator, Astrology Cell", "8146000152"],
//   ["Mr. Krishan Kumar", "Coordinator, Publication and Promotion Cell", "9995585850"],
//   ["Mr. Om Parkash", "Coordinator, Environment Cell", "7862977109"],
//   ["Adv. Ruchita Garg", "Coordinator, Parenting Cell", "9463588899"],
//   ["Adv. Vikram Verma", "Coordinator, Premium School Cell", "9854400094"],
//   ["Adv. Shivam Priya", "Coordinator, Health Wisdom Cell", "9318440221"],
//   ["Dr. Gurbachan Singh", "Coordinator, Sports Cell", "9719892212"],
//   ["Adv. Niharika Kamal", "Coordinator, Spiritual Cell", "7508638699"],
//   ["Mr. Anuj Verma", "Co-coordinator, Spiritual Cell", "7508638699"],
//   ["Adv. Poonam Thakur", "Coordinator, Grievance Redressal Cell", "7508337539"],
// ];

// export default function CellCoordinators() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCell, setSelectedCell] = useState("");
//   const [viewMode, setViewMode] = useState("table");

//   // Extract unique cell types for filter
//   const cellTypes = useMemo(() => {
//     const cells = coordinators.map(([, role]) => {
//       const cellMatch = role.match(/([^,]+Cell)/);
//       return cellMatch ? cellMatch[1] : role;
//     });
//     return [...new Set(cells)].sort();
//   }, []);

//   // Filter coordinators
//   const filteredCoordinators = useMemo(() => {
//     return coordinators.filter(([name, role, contact]) => {
//       const matchesSearch = 
//         name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         role.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         contact.includes(searchTerm);
      
//       const matchesCell = selectedCell === "" || role.includes(selectedCell);
      
//       return matchesSearch && matchesCell;
//     });
//   }, [searchTerm, selectedCell]);

//   const handleCall = (phoneNumber) => {
//     window.open(`tel:${phoneNumber}`, '_self');
//   };

//   const clearFilters = () => {
//     setSearchTerm("");
//     setSelectedCell("");
//   };

//   const getInitials = (name) => {
//     return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
//   };

//   const customStyles = `
//     <style>
//       .custom-bg {
//         background-color: #f4f3ef;
//       }
//       .custom-text-primary {
//         color: #00001b;
//       }
//       .custom-text-secondary {
//         color: #555;
//       }
//       .custom-accent {
//         background-color: #890c25;
//         border-color: #890c25;
//       }
//       .custom-accent:hover {
//         background-color: #a51d3a;
//         border-color: #a51d3a;
//       }
//       .custom-border {
//         border-color: #d9d9d9;
//       }
//       .custom-font {
//         font-family: "Euclid Circular A", sans-serif;
//       }
//       .custom-card {
//         background-color: #fff;
//         border: 1px solid #d9d9d9;
//         transition: all 0.3s ease;
//       }
//       .custom-card:hover {
//         transform: translateY(-5px);
//         box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//       }
//       .custom-avatar {
//         background: linear-gradient(135deg, #890c25 0%, #a51d3a 100%);
//       }
//       .custom-btn-outline {
//         border: 2px solid #890c25;
//         color: #890c25;
//         background-color: transparent;
//       }
//       .custom-btn-outline:hover {
//         background-color: #890c25;
//         color: white;
//       }
//       .custom-btn-outline.active {
//         background-color: #890c25;
//         color: white;
//       }
//       .custom-form-control:focus {
//         border-color: #890c25;
//         box-shadow: 0 0 0 0.2rem rgba(137, 12, 37, 0.25);
//       }
//       .custom-select {
//         background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23555' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
//         background-repeat: no-repeat;
//         background-position: right 0.75rem center;
//         background-size: 16px 12px;
//         padding-right: 2.5rem;
//       }
//       .table-custom thead th {
//         background-color: #890c25;
//         color: white;
//         border: none;
//         font-weight: 600;
//         text-transform: uppercase;
//         font-size: 0.875rem;
//         letter-spacing: 0.05em;
//       }
//       .table-custom tbody tr {
//         transition: background-color 0.2s ease;
//       }
//       .table-custom tbody tr:hover {
//         background-color: #f8f9fa;
//       }
//       .gradient-line {
//         background: linear-gradient(90deg, #890c25 0%, #a51d3a 100%);
//         height: 4px;
//         width: 80px;
//         border-radius: 2px;
//       }
//       .icon-bg {
//         background-color: #f4f3ef;
//         color: #890c25;
//       }
//     </style>
//   `;

//   return (
//     <>
//       <div dangerouslySetInnerHTML={{ __html: customStyles }} />
      
//       <section className="py-5 custom-bg" id="cell-coordinators">
//         <div className="container">
//           {/* Header */}
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="display-4 fw-bold custom-text-primary custom-font mb-4">
//                 Cell Coordinators
//               </h2>
//               <p className="lead custom-text-secondary custom-font mb-4">
//                 Connect with our dedicated team of cell coordinators who provide specialized expertise 
//                 and personalized support across various domains to ensure your success.
//               </p>
//               <div className="gradient-line mx-auto"></div>
//             </div>
//           </div>

//           {/* Search and Filter Controls */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="card custom-card shadow-sm">
//                 <div className="card-body p-4">
//                   <div className="row g-3">
//                     {/* Search Input */}
//                     <div className="col-md-6">
//                       <label className="form-label fw-semibold custom-text-primary custom-font">
//                         Search Coordinators
//                       </label>
//                       <div className="position-relative">
//                         <input
//                           type="text"
//                           className="form-control form-control-lg custom-form-control custom-font"
//                           placeholder="Search by name, designation, or contact..."
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           style={{ paddingLeft: '2.5rem' }}
//                         />
//                         <Search className="position-absolute top-50 start-0 translate-middle-y ms-3" size={20} color="#555" />
//                       </div>
//                     </div>

//                     {/* Cell Filter */}
//                     <div className="col-md-3">
//                       <label className="form-label fw-semibold custom-text-primary custom-font">
//                         Filter by Cell
//                       </label>
//                       <div className="position-relative">
//                         <select
//                           className="form-select form-select-lg custom-form-control custom-select custom-font"
//                           value={selectedCell}
//                           onChange={(e) => setSelectedCell(e.target.value)}
//                           style={{ paddingLeft: '2.5rem' }}
//                         >
//                           <option value="">All Cells</option>
//                           {cellTypes.map((cell) => (
//                             <option key={cell} value={cell}>{cell}</option>
//                           ))}
//                         </select>
//                         <Filter className="position-absolute top-50 start-0 translate-middle-y ms-3" size={20} color="#555" />
//                       </div>
//                     </div>

//                     {/* View Mode Toggle */}
//                     <div className="col-md-3">
//                       <label className="form-label fw-semibold custom-text-primary custom-font">
//                         View Mode
//                       </label>
//                       <div className="btn-group w-100" role="group">
//                         <button
//                           type="button"
//                           className={`btn custom-btn-outline custom-font ${viewMode === "table" ? "active" : ""}`}
//                           onClick={() => setViewMode("table")}
//                         >
//                           <List size={16} className="me-2" />
//                           Table
//                         </button>
//                         <button
//                           type="button"
//                           className={`btn custom-btn-outline custom-font ${viewMode === "cards" ? "active" : ""}`}
//                           onClick={() => setViewMode("cards")}
//                         >
//                           <Grid size={16} className="me-2" />
//                           Cards
//                         </button>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Results Info and Clear Filters */}
//                   <div className="row mt-3 pt-3 border-top custom-border">
//                     <div className="col-md-8">
//                       <p className="mb-0 custom-text-secondary custom-font">
//                         Showing <span className="fw-bold" style={{ color: '#890c25' }}>
//                           {filteredCoordinators.length}
//                         </span> of {coordinators.length} coordinators
//                       </p>
//                     </div>
//                     <div className="col-md-4 text-end">
//                       {(searchTerm || selectedCell) && (
//                         <button
//                           className="btn btn-sm btn-outline-secondary custom-font"
//                           onClick={clearFilters}
//                         >
//                           <X size={16} className="me-2" />
//                           Clear Filters
//                         </button>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Content Display */}
//           {viewMode === "table" ? (
//             /* Table View */
//             <div className="row">
//               <div className="col-12">
//                 <div className="card custom-card shadow">
//                   <div className="card-body p-0">
//                     <div className="table-responsive">
//                       <table className="table table-hover table-custom mb-0">
//                         <thead>
//                           <tr>
//                             <th className="px-4 py-3 custom-font">Coordinator Details</th>
//                             <th className="px-4 py-3 custom-font">Designation</th>
//                             <th className="px-4 py-3 text-center custom-font">Contact Information</th>
//                             <th className="px-4 py-3 text-center custom-font">Actions</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {filteredCoordinators.map(([name, role, contact], idx) => (
//                             <tr key={idx}>
//                               <td className="px-4 py-3">
//                                 <div className="d-flex align-items-center">
//                                   <div className="custom-avatar rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
//                                        style={{ width: '50px', height: '50px', fontSize: '14px' }}>
//                                     {getInitials(name)}
//                                   </div>
//                                   <div>
//                                     <h6 className="mb-0 custom-text-primary custom-font fw-semibold">{name}</h6>
//                                   </div>
//                                 </div>
//                               </td>
//                               <td className="px-4 py-3">
//                                 <span className="custom-text-secondary custom-font">{role}</span>
//                               </td>
//                               <td className="px-4 py-3 text-center">
//                                 <div className="d-inline-flex align-items-center bg-light px-3 py-2 rounded-pill">
//                                   <Phone size={16} className="me-2" style={{ color: '#890c25' }} />
//                                   <span className="custom-text-primary custom-font fw-medium">{contact}</span>
//                                 </div>
//                               </td>
//                               <td className="px-4 py-3 text-center">
//                                 <button
//                                   className="btn custom-accent text-white custom-font fw-semibold"
//                                   onClick={() => handleCall(contact)}
//                                 >
//                                   <Phone size={16} className="me-2" />
//                                   Call Now
//                                 </button>
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             /* Cards View */
//             <div className="row g-4">
//               {filteredCoordinators.map(([name, role, contact], idx) => (
//                 <div key={idx} className="col-md-6 col-lg-4">
//                   <div className="card custom-card shadow-sm h-100">
//                     <div className="card-body p-4">
//                       <div className="d-flex align-items-start mb-4">
//                         <div className="custom-avatar rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
//                              style={{ width: '60px', height: '60px', fontSize: '16px' }}>
//                           {getInitials(name)}
//                         </div>
//                         <div className="flex-grow-1">
//                           <h5 className="card-title custom-text-primary custom-font fw-bold mb-2">{name}</h5>
//                           <p className="card-text custom-text-secondary custom-font small mb-0">{role}</p>
//                         </div>
//                       </div>
                      
//                       <div className="d-flex align-items-center justify-content-between">
//                         <div className="d-flex align-items-center">
//                           <div className="icon-bg rounded-circle d-flex align-items-center justify-content-center me-3"
//                                style={{ width: '40px', height: '40px' }}>
//                             <Phone size={16} />
//                           </div>
//                           <span className="custom-text-primary custom-font fw-medium">{contact}</span>
//                         </div>
//                         <button
//                           className="btn custom-accent text-white custom-font fw-semibold"
//                           onClick={() => handleCall(contact)}
//                         >
//                           <Phone size={16} className="me-2" />
//                           Call
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* No Results State */}
//           {filteredCoordinators.length === 0 && (
//             <div className="row">
//               <div className="col-12 text-center py-5">
//                 <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
//                      style={{ width: '100px', height: '100px' }}>
//                   <Search size={40} style={{ color: '#890c25' }} />
//                 </div>
//                 <h3 className="custom-text-primary custom-font fw-bold mb-3">No coordinators found</h3>
//                 <p className="custom-text-secondary custom-font mb-4">
//                   We couldn't find any coordinators matching your search criteria. Please try adjusting your filters.
//                 </p>
//                 <button
//                   className="btn custom-accent text-white custom-font fw-semibold"
//                   onClick={clearFilters}
//                 >
//                   <X size={16} className="me-2" />
//                   Clear All Filters
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// }







import React, { useState, useMemo } from "react";
import { Search, Phone, Filter, X, Grid, List } from "lucide-react";

// Data for coordinators
const coordinators = [
  ["Dr. Neeraj Nathani", "Coordinator, IT Cell", "9995678372"],
  ["Col. K. K. Kakkar", "Coordinator, Event Management Cell", "8697730085"],
  // ... (rest of your coordinator data)
  ["Ms. Maninder Kakkar", "Coordinator, Punjab Super 100", "9419248487"],
  ["Dr. Neelesh Kumar", "Coordinator, IPR Cell", "9478515278"],
  ["Dr. Karan Goel", "Coordinator, Industry Co-ordination Cell", "9915087986"],
  ["Dr. Htet Ne Oo", "Coordinator, HEI Co-ordination Cell", "9041120510"],
  ["Mr. Sachin Tiwari", "Coordinator, E-commerce Cell", "8729012133"],
  ["Dr. Mohit Verma", "Coordinator, TMS Cell", "9870203823"],
  ["Mr. Arsh Agarwal", "Coordinator, Udyam Cell", "7986327876"],
  ["Shri Saurav Kumar", "Coordinator, Foreign Language Cell", "9023591487"],
  ["Ms. Sonu Sharma", "Coordinator, Olympiad Cell", "9988805698"],
  ["Ms. Neeru", "Coordinator, LMS Cell", "9467733337"],
  ["Dr. Girish Bali", "Coordinator, CSR Cell", "9530703711"],
  ["Dr. Neeraj Pant", "Co-coordinator, RSR Cell", "8158298446"],
  ["Dr. Praveen Sharma", "Coordinator, R & D Cell", "9988254485"],
  ["Dr. Ramit Vasudev", "Coordinator, Art Cell", "9463310838"],
  ["Mr. Krishan Kumar", "Coordinator, ATL Cell", "9995568058"],
  ["Dr. Chaman Chandel", "Coordinator, Astrology Cell", "8146000152"],
  ["Mr. Krishan Kumar", "Coordinator, Publication and Promotion Cell", "9995585850"],
  ["Mr. Om Parkash", "Coordinator, Environment Cell", "7862977109"],
  ["Adv. Ruchita Garg", "Coordinator, Parenting Cell", "9463588899"],
  ["Adv. Vikram Verma", "Coordinator, Premium School Cell", "9854400094"],
  ["Adv. Shivam Priya", "Coordinator, Health Wisdom Cell", "9318440221"],
  ["Dr. Gurbachan Singh", "Coordinator, Sports Cell", "9719892212"],
  ["Adv. Niharika Kamal", "Coordinator, Spiritual Cell", "7508638699"],
  ["Mr. Anuj Verma", "Co-coordinator, Spiritual Cell", "7508638699"],
  ["Adv. Poonam Thakur", "Coordinator, Grievance Redressal Cell", "7508337539"],
];

export default function CellCoordinators() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCell, setSelectedCell] = useState("");
  const [viewMode, setViewMode] = useState("table");

  // Extract unique cell types for filter
  const cellTypes = useMemo(() => {
    const cells = coordinators.map(([, role]) => {
      const cellMatch = role.match(/([^,]+Cell)/);
      return cellMatch ? cellMatch[1] : role;
    });
    return [...new Set(cells)].sort();
  }, []);

  // Filter coordinators
  const filteredCoordinators = useMemo(() => {
    return coordinators.filter(([name, role, contact]) => {
      const matchesSearch = 
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.includes(searchTerm);
      
      const matchesCell = selectedCell === "" || role.includes(selectedCell);
      
      return matchesSearch && matchesCell;
    });
  }, [searchTerm, selectedCell]);

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCell("");
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-5 bg-white" style={{ fontFamily: "'Euclid Circular A', sans-serif" }} id="cell-co-ordinators">
      <div className="container">
        {/* Header */}
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="fw-bold mb-3" style={{ color: '#00001b', fontSize: '2rem' }}>
              Cell Coordinators
            </h2>
            <p className="mb-4" style={{ color: '#555', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              Connect with our dedicated team of cell coordinators who provide specialized expertise 
              and personalized support across various domains.
            </p>
            <div style={{ 
              background: 'linear-gradient(90deg, #890c25 0%, #a51d3a 100%)', 
              height: '4px', 
              width: '80px', 
              margin: '0 auto',
              borderRadius: '2px'
            }}></div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm mb-3">
              <div className="card-body p-4">
                <div className="row g-3">
                  {/* Search Input */}
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: '#00001b' }}>
                      Search Coordinators
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <Search size={18} color="#555" />
                      </span>
                      <input
                        type="text"
                        className="form-control border-start-0"
                        placeholder="Search by name, designation, or contact..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ borderColor: '#d9d9d9' }}
                      />
                    </div>
                  </div>

                  {/* Cell Filter */}
                  <div className="col-md-3">
                    <label className="form-label fw-semibold" style={{ color: '#00001b' }}>
                      Filter by Cell
                    </label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0">
                        <Filter size={18} color="#555" />
                      </span>
                      <select
                        className="form-select border-start-0"
                        value={selectedCell}
                        onChange={(e) => setSelectedCell(e.target.value)}
                        style={{ borderColor: '#d9d9d9' }}
                      >
                        <option value="">All Cells</option>
                        {cellTypes.map((cell) => (
                          <option key={cell} value={cell}>{cell}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* View Mode Toggle */}
                  <div className="col-md-3">
                    <label className="form-label fw-semibold" style={{ color: '#00001b' }}>
                      View Mode
                    </label>
                    <div className="btn-group w-100" role="group">
                      <button
                        type="button"
                        className={`btn ${viewMode === "table" ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode("table")}
                        style={viewMode === "table" ? {} : { borderColor: '#d9d9d9', color: '#555' }}
                      >
                        <List size={16} className="me-2" />
                        Table
                      </button>
                      <button
                        type="button"
                        className={`btn ${viewMode === "cards" ? 'btn-danger' : 'btn-outline-secondary'}`}
                        onClick={() => setViewMode("cards")}
                        style={viewMode === "cards" ? {} : { borderColor: '#d9d9d9', color: '#555' }}
                      >
                        <Grid size={16} className="me-2" />
                        Cards
                      </button>
                    </div>
                  </div>
                </div>

                {/* Results Info and Clear Filters */}
                <div className="row mt-3 pt-3" style={{ borderTop: '1px solid #d9d9d9' }}>
                  <div className="col-md-8">
                    <p className="mb-0" style={{ color: '#555' }}>
                      Showing <span className="fw-bold" style={{ color: '#890c25' }}>
                        {filteredCoordinators.length}
                      </span> of {coordinators.length} coordinators
                    </p>
                  </div>
                  <div className="col-md-4 text-end">
                    {(searchTerm || selectedCell) && (
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={clearFilters}
                        style={{ borderColor: '#d9d9d9', color: '#555' }}
                      >
                        <X size={16} className="me-2" />
                        Clear Filters
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Display */}
        {filteredCoordinators.length === 0 ? (
          /* No Results State */
          <div className="row">
            <div className="col-12 text-center py-5">
              <div className="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4 p-3">
                <Search size={40} style={{ color: '#890c25' }} />
              </div>
              <h3 className="fw-bold mb-3" style={{ color: '#00001b' }}>No coordinators found</h3>
              <p className="mb-4" style={{ color: '#555', maxWidth: '500px', margin: '0 auto' }}>
                We couldn't find any coordinators matching your search criteria.
              </p>
              <button
                className="btn btn-danger"
                onClick={clearFilters}
                style={{ backgroundColor: '#890c25', borderColor: '#890c25' }}
              >
                Clear All Filters
              </button>
            </div>
          </div>
        ) : viewMode === "table" ? (
          /* Table View */
          <div className="row">
            <div className="col-12">
              <div className="card border-0 shadow-sm">
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-hover mb-0">
                      <thead style={{ backgroundColor: '#890c25', color: 'white' }}>
                        <tr>
                          <th className="ps-4 py-3">Coordinator Details</th>
                          <th className="py-3">Designation</th>
                          <th className="text-center py-3">Contact Information</th>
                          <th className="text-center pe-4 py-3">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredCoordinators.map(([name, role, contact], idx) => (
                          <tr key={idx}>
                            <td className="ps-4 py-3">
                              <div className="d-flex align-items-center">
                                <div 
                                  className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
                                  style={{ 
                                    width: '50px', 
                                    height: '50px', 
                                    fontSize: '14px',
                                    background: 'linear-gradient(135deg, #890c25 0%, #a51d3a 100%)'
                                  }}
                                >
                                  {getInitials(name)}
                                </div>
                                <div>
                                  <h6 className="mb-0 fw-semibold" style={{ color: '#00001b' }}>{name}</h6>
                                </div>
                              </div>
                            </td>
                            <td className="py-3">
                              <span style={{ color: '#555' }}>{role}</span>
                            </td>
                            <td className="text-center py-3">
                              <div className="d-inline-flex align-items-center px-3 py-2 rounded-pill" style={{ backgroundColor: '#f4f3ef' }}>
                                <Phone size={16} className="me-2" style={{ color: '#890c25' }} />
                                <span className="fw-medium" style={{ color: '#00001b' }}>{contact}</span>
                              </div>
                            </td>
                            <td className="text-center pe-4 py-3">
                              <button
                                className="btn btn-sm text-white fw-semibold"
                                onClick={() => handleCall(contact)}
                                style={{ backgroundColor: '#890c25', borderColor: '#890c25' }}
                              >
                                <Phone size={16} className="me-2" />
                                Call Now
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Cards View */
          <div className="row g-4">
            {filteredCoordinators.map(([name, role, contact], idx) => (
              <div key={idx} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-start mb-4">
                      <div 
                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold me-3"
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          fontSize: '16px',
                          background: 'linear-gradient(135deg, #890c25 0%, #a51d3a 100%)'
                        }}
                      >
                        {getInitials(name)}
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title fw-bold mb-2" style={{ color: '#00001b' }}>{name}</h5>
                        <p className="card-text small mb-0" style={{ color: '#555' }}>{role}</p>
                      </div>
                    </div>
                    
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center me-3"
                          style={{ 
                            width: '40px', 
                            height: '40px',
                            backgroundColor: '#f4f3ef'
                          }}
                        >
                          <Phone size={16} style={{ color: '#890c25' }} />
                        </div>
                        <span className="fw-medium" style={{ color: '#00001b' }}>{contact}</span>
                      </div>
                      <button
                        className="btn btn-sm text-white fw-semibold"
                        onClick={() => handleCall(contact)}
                        style={{ backgroundColor: '#890c25', borderColor: '#890c25' }}
                      >
                        <Phone size={16} className="me-2" />
                        Call
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}