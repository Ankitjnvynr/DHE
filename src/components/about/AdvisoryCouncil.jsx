// import React from "react";

// export default function AdvisoryCouncil() {
//   const councilMembers = [
//     ["Mr. Vijay Kumar Nadda", "Organising Secretary, Vidya Bharti (North Region)", "Member, Advisory Council", "9417257310"],
//     ["Prof. Rajeev Ahuja", "Director, (IIT) Ropar", "Member, Advisory Council", "1881231006"],
//     ["Prof. Binod Kumar Kanaujia", "Director, (NIT) Jalandhar", "Member, Advisory Council", "9868795834"],
//     ["Mr. Manoj Singhal", "Scientific Advisor", "Member, Advisory Council", "9872994017"],
//   ];

//   return (
//     <section className="td_about td_style_1 td_bg_dark py-5" id="advisory-council">
//       <div className="container">
//         <div className="td_section_heading td_style_1 td_mb_30 text-center">
//           <h2 className="td_section_title td_fs_48 mb-3 text-black">Advisory Council</h2>
//         </div>

//         <div className="card bg-secondary text-white shadow">
//           <div className="card-body p-0">
//             <div className="table-responsive">
//               <table className="table table-hover table-bordered text-white mb-0">
//                 <thead className="bg-dark">
//                   <tr className="text-center bg-dark">
//                     <th className="text-white bg-dark">Name</th>
//                     <th className="text-white bg-dark">Position</th>
//                     <th className="text-white bg-dark">Designation</th>
//                     <th className="text-white bg-dark">Contact</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {councilMembers.map(([name, position, designation, contact], idx) => (
//                     <tr key={idx}>
//                       <td>{name}</td>
//                       <td>{position}</td>
//                       <td>{designation}</td>
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

export default function AdvisoryCouncil() {
  const councilMembers = [
    ["Mr. Vijay Kumar Nadda", "Organising Secretary, Vidya Bharti (North Region)", "Member, Advisory Council", "9417257310"],
    ["Prof. Rajeev Ahuja", "Director, (IIT) Ropar", "Member, Advisory Council", "1881231006"],
    ["Prof. Binod Kumar Kanaujia", "Director, (NIT) Jalandhar", "Member, Advisory Council", "9868795834"],
    ["Mr. Manoj Singhal", "Scientific Advisor", "Member, Advisory Council", "9872994017"],
  ];

  const handleCall = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  };

  return (
    <section className="py-5 bg-white" id="advisory-council">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold mb-3" style={{ color: '#00001b', fontSize: '2rem' }}>
            Advisory Council
          </h2>
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
                    <th className="py-3">Position</th>
                    <th className="py-3">Designation</th>
                    <th className="text-center py-3">Contact Information</th>
                    <th className="text-center pe-4 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {councilMembers.map(([name, position, designation, contact], idx) => (
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
                      <td style={{ color: '#555' }}>{position}</td>
                      <td style={{ color: '#555' }}>{designation}</td>
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