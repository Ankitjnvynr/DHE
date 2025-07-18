// import React from "react";

// export default function LmcMembers() {
//   const members = [
//     ["Shri Ashok Pal", "Patron", "9810296355"],
//     ["Dr. Thakur Sudesh Kumar Raunija", "Patron", "7627888222"],
//     ["Smt. Pratibha Gupta", "President", "9814738016"],
//     ["Mr. Praveen Saini", "Vice President", "9855260099"],
//     ["Ms. Maninder Kakkar", "Secretary", "9419248487"],
//     ["Shri Chander Has Gupta", "Treasurer", "9417050631"],
//     ["Shri Desh Raj Sharma", "General Secretary, Vidya Bharti (North Region)", "9478000698"],
//     ["Shri. Aurag Biala", "Member", "9814808323"],
//     ["Shri Vikash Kalsyān", "Member", "9411644142"],
//     ["Shri Vipul Gupta", "Member", "9888701601"],
//     ["Smt. Sonu Sharma", "Member", "9988690588"],
//     ["Shri Anshul Bansal", "Member", "9058000045"],
//     ["Shri Saurav Kumar", "Member", "9023519487"],
//   ];

//   return (
//     <section className="td_about td_style_1 td_bg_dark py-5" id="lmc-members">
//       <div className="container">
//         <div className="td_section_heading td_style_1 td_mb_30 text-center">
//           <h2 className="td_section_title td_fs_48 mb-3 text-black">LMC Members</h2>
//           <p className="td_section_subtitle td_fs_20 text-black">
//             List of LMC Members with their designations and contact numbers
//           </p>
//         </div>

//         <div className="card bg-secondary text-white shadow">
//           <div className="card-body p-0">
//             <div className="table-responsive">
//               <table className="table table-hover table-bordered text-white mb-0">
//                 <thead className="bg-dark">
//                   <tr className="text-center bg-dark">
//                     <th className="text-white bg-dark">Name</th>
//                     <th className="text-white bg-dark">Designation</th>
//                     <th className="text-white bg-dark">Contact</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {members.map(([name, role, contact], idx) => (
//                     <tr key={idx}>
//                       <td>{name}</td>
//                       <td>{role}</td>
//                       <td>{contact}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Phone } from "lucide-react";

export default function LmcMembers() {
  const members = [
    ["Shri Ashok Pal", "Patron", "9810296355"],
    ["Dr. Thakur Sudesh Kumar Raunija", "Patron", "7627888222"],
    // ... rest of your members data
    ["Smt. Pratibha Gupta", "President", "9814738016"],
    ["Mr. Praveen Saini", "Vice President", "9855260099"],
    ["Ms. Maninder Kakkar", "Secretary", "9419248487"],
    ["Shri Chander Has Gupta", "Treasurer", "9417050631"],
    ["Shri Desh Raj Sharma", "General Secretary, Vidya Bharti (North Region)", "9478000698"],
    ["Shri. Aurag Biala", "Member", "9814808323"],
    ["Shri Vikash Kalsyān", "Member", "9411644142"],
    ["Shri Vipul Gupta", "Member", "9888701601"],
    ["Smt. Sonu Sharma", "Member", "9988690588"],
    ["Shri Anshul Bansal", "Member", "9058000045"],
    ["Shri Saurav Kumar", "Member", "9023519487"],
  ];

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-5 bg-white" id="lmc-members">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: '#00001b', fontSize: '2rem' }}>
            LMC Members
          </h2>
          <p className="mb-4" style={{ color: '#555', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            List of LMC Members with their designations and contact numbers
          </p>
          <div style={{ 
            background: 'linear-gradient(90deg, #890c25 0%, #a51d3a 100%)', 
            height: '4px', 
            width: '80px', 
            margin: '0 auto',
            borderRadius: '2px'
          }}></div>
        </div>

        {/* Members Table */}
        <div className="card border-0 shadow-sm">
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead style={{ backgroundColor: '#890c25', color: 'white' }}>
                  <tr>
                    <th className="ps-4 py-3" style={{ width: '10%' }}></th>
                    <th className="py-3">Name</th>
                    <th className="py-3">Designation</th>
                    <th className="text-center py-3">Contact Information</th>
                    <th className="text-center pe-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {members.map(([name, role, contact,Action], idx) => (
                    <tr key={idx}>
                      <td className="ps-4">
                        <div 
                          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                          style={{ 
                            width: '50px', 
                            height: '50px', 
                            fontSize: '14px',
                            background: 'linear-gradient(135deg, #890c25 0%, #a51d3a 100%)'
                          }}
                        >
                          {getInitials(name)}
                        </div>
                      </td>
                      <td>
                        <h6 className="mb-0 fw-semibold" style={{ color: '#00001b' }}>{name}</h6>
                      </td>
                      <td style={{ color: '#555' }}>{role}</td>
                      <td className="pe-4 text-end">
                                              <div className="d-inline-flex align-items-center px-3 py-2 rounded-pill" style={{ backgroundColor: '#f4f3ef' }}>
                                                  <Phone size={16} className="me-2" style={{ color: '#890c25' }} />
                                                  <span className="fw-medium" style={{ color: '#00001b' }}>
                                                  <a 
                                                      href={`tel:${contact}`} 
                                                      className="text-decoration-none me-3" 
                                                      style={{ color: '#00001b' }}
                                                  >
                                                  {contact}
                                                  </a></span>
                                              </div>
                                            </td>
                                            <td className="text-center pe-4"><button
                                                  className="btn btn-sm text-white fw-semibold"
                                                  onClick={() => handleCall(contact)}
                                                  style={{ 
                                                    backgroundColor: '#890c25', 
                                                    borderColor: '#890c25',
                                                    padding: '0.25rem 0.75rem',
                                                    maxHeight:'30px',
                                                    display: 'flex',
                                                  }}
                                                >
                                                  <Phone size={16} className="me-1" />
                                                  Call
                                                </button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}