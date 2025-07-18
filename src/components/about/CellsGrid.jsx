// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaNetworkWired,
//   FaShoppingCart,
//   FaStarOfDavid,
//   FaLeaf,
//   FaHeartbeat,
//   FaUserAlt,
//   FaBalanceScale,
//   FaLanguage,
//   FaRocket,
//   FaPaintBrush,
//   FaBook,
//   FaEnvira,
//   FaBabyCarriage,
//   FaSchool,
//   FaFutbol,
//   FaPray,
//   FaHandsHelping,
//   FaChevronRight,
//   FaUsers,
//   FaUserTie,
//   FaSearch
// } from "react-icons/fa";

// const CellCard = ({ icon, title, link, isSpecial }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <Link to={link} className="text-decoration-none">
//       <div 
//         className="card h-100 border-0 transition-all"
//         style={{
//           transform: isHovered ? 'translateY(-5px)' : 'none',
//           boxShadow: isHovered ? '0 10px 20px rgba(0,0,0,0.1)' : '0 2px 10px rgba(0,0,0,0.05)',
//           borderLeft: `4px solid ${isSpecial ? 'var(--accent-color)' : 'var(--border-color)'}`
//         }}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         <div className="card-body text-center p-4 d-flex flex-column">
//           <div 
//             className="icon-wrapper mx-auto mb-3 p-3 rounded"
//             style={{
//               backgroundColor: isHovered ? 'var(--accent-color)' : 'var(--gray-color)',
//               color: isHovered ? 'var(--white-color)' : 'var(--accent-color)'
//             }}
//           >
//             <div className="fs-4">{icon}</div>
//           </div>
//           <h6 
//             className="fw-bold mb-2"
//             style={{
//               color: 'var(--heading-color)',
//               fontFamily: 'var(--heading-font)'
//             }}
//           >
//             {title}
//           </h6>
//           <div className="mt-auto">
//             <span 
//               className="small fw-semibold d-flex align-items-center justify-content-center"
//               style={{
//                 color: isHovered ? 'var(--accent-color)' : 'var(--body-color)',
//                 fontFamily: 'var(--body-font)'
//               }}
//             >
//               View details <FaChevronRight className="ms-1" size={10} />
//             </span>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default function CellsGrid() {
//   const [activeTab, setActiveTab] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');

//   const cellGroups = [
//     {
//         name:"All Cells",
//         cells: [
//              { icon: <FaNetworkWired />, title: "IT Cell", link: "/cells/it" },
//         { icon: <FaNetworkWired />, title: "Event Management Cell", link: "/cells/event-management" },
//         { icon: <FaNetworkWired />, title: "Super 100 Cell", link: "/cells/super-100" },
//         { icon: <FaNetworkWired />, title: "ATL Cell", link: "/cells/atl" },
//          { icon: <FaNetworkWired />, title: "IPR Cell", link: "/cells/ipr" },
//         { icon: <FaNetworkWired />, title: "Industry Coordination Cell", link: "/cells/industry-coordination" },
//         { icon: <FaNetworkWired />, title: "HEI Coordination Cell", link: "/cells/hei-coordination" },
//         { icon: <FaShoppingCart />, title: "E-Commerce Cell", link: "/cells/ecommerce" },
//         { icon: <FaShoppingCart />, title: "TMS Cell", link: "/cells/tms" },
//         { icon: <FaShoppingCart />, title: "Udyam Cell", link: "/cells/udyam" },
//         { icon: <FaLanguage />, title: "Foreign Language Cell", link: "/cells/foreign-language" },
//         { icon: <FaBook />, title: "Olympiad Cell", link: "/cells/olympiad" },
//         { icon: <FaBook />, title: "LMS Cell", link: "/cells/lms" },
//         { icon: <FaSchool />, title: "Premium School Cell", link: "/cells/premium-school" },
//         { icon: <FaHandsHelping />, title: "CSR Cell", link: "/cells/csr" },
//         { icon: <FaRocket />, title: "R and D Cell", link: "/cells/rnd" },
//         { icon: <FaPaintBrush />, title: "Art Cell", link: "/cells/art" },
//         { icon: <FaBook />, title: "Publications & Promotions Cell", link: "/cells/publications" },
//         { icon: <FaBabyCarriage />, title: "Parenting Cell", link: "/cells/parenting" },
//         { icon: <FaStarOfDavid />, title: "Astrology Cell", link: "/cells/astrology" },
//         { icon: <FaEnvira />, title: "Environment Cell", link: "/cells/environment" },
//         { icon: <FaHeartbeat />, title: "Health Wisdom Cell", link: "/cells/health-wisdom" },
//         { icon: <FaFutbol />, title: "Sports Cell", link: "/cells/sports" },
//         { icon: <FaPray />, title: "Spiritual Cell", link: "/cells/spiritual" },
//         { icon: <FaBalanceScale />, title: "Grievance Redressal Cell", link: "/cells/grievance" }
//         ]
//     },
//     {
//       name: "Technology Cells",
//       cells: [
//         { icon: <FaNetworkWired />, title: "IT Cell", link: "/cells/it" },
//         { icon: <FaNetworkWired />, title: "Event Management Cell", link: "/cells/event-management" },
//         { icon: <FaNetworkWired />, title: "Super 100 Cell", link: "/cells/super-100" },
//         { icon: <FaNetworkWired />, title: "ATL Cell", link: "/cells/atl" },
//       ]
//     },
//     {
//       name: "Coordination Cells",
//       cells: [
//         { icon: <FaNetworkWired />, title: "IPR Cell", link: "/cells/ipr" },
//         { icon: <FaNetworkWired />, title: "Industry Coordination Cell", link: "/cells/industry-coordination" },
//         { icon: <FaNetworkWired />, title: "HEI Coordination Cell", link: "/cells/hei-coordination" },
//       ]
//     },
//     {
//       name: "Business Cells",
//       cells: [
//         { icon: <FaShoppingCart />, title: "E-Commerce Cell", link: "/cells/ecommerce" },
//         { icon: <FaShoppingCart />, title: "TMS Cell", link: "/cells/tms" },
//         { icon: <FaShoppingCart />, title: "Udyam Cell", link: "/cells/udyam" },
//       ]
//     },
//     {
//       name: "Education Cells",
//       cells: [
//         { icon: <FaLanguage />, title: "Foreign Language Cell", link: "/cells/foreign-language" },
//         { icon: <FaBook />, title: "Olympiad Cell", link: "/cells/olympiad" },
//         { icon: <FaBook />, title: "LMS Cell", link: "/cells/lms" },
//         { icon: <FaSchool />, title: "Premium School Cell", link: "/cells/premium-school" },
//       ]
//     },
//     {
//       name: "Development Cells",
//       cells: [
//         { icon: <FaHandsHelping />, title: "CSR Cell", link: "/cells/csr" },
//         { icon: <FaRocket />, title: "R and D Cell", link: "/cells/rnd" },
//         { icon: <FaPaintBrush />, title: "Art Cell", link: "/cells/art" },
//         { icon: <FaBook />, title: "Publications & Promotions Cell", link: "/cells/publications" },
//       ]
//     },
//     {
//       name: "Special Interest Cells",
//       cells: [
//         { icon: <FaBabyCarriage />, title: "Parenting Cell", link: "/cells/parenting" },
//         { icon: <FaStarOfDavid />, title: "Astrology Cell", link: "/cells/astrology" },
//         { icon: <FaEnvira />, title: "Environment Cell", link: "/cells/environment" },
//         { icon: <FaHeartbeat />, title: "Health Wisdom Cell", link: "/cells/health-wisdom" },
//         { icon: <FaFutbol />, title: "Sports Cell", link: "/cells/sports" },
//         { icon: <FaPray />, title: "Spiritual Cell", link: "/cells/spiritual" },
//         { icon: <FaBalanceScale />, title: "Grievance Redressal Cell", link: "/cells/grievance" },
//       ],
//       isSpecial: true
//     }
//   ];

//   const filteredGroups = cellGroups.map(group => ({
//     ...group,
//     cells: group.cells.filter(cell => 
//       cell.title.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   }));

//   return (
//     <section 
//       className="py-5"
//       style={{ backgroundColor: 'var(--white-color)' }} id="cells"
//     >
//       <div className="container">
//         {/* Header Section */}
//         <div className="text-center mb-5">
//           <span 
//             className="badge mb-3 px-3 py-2 rounded-pill fw-semibold"
//             style={{ 
//               backgroundColor: 'var(--gray-color)',
//               color: 'var(--accent-color)',
//               fontFamily: 'var(--body-font)'
//             }}
//           >
//             Organizational Structure
//           </span>
//           <h2 
//             className="display-5 fw-bold mb-3"
//             style={{
//               color: 'var(--heading-color)',
//               fontFamily: 'var(--heading-font)'
//             }}
//           >
//             Department <span style={{ color: 'var(--accent-color)' }}>Cells</span>
//           </h2>
//           <div 
//             className="mx-auto mb-4"
//             style={{ 
//               width: '80px', 
//               height: '4px', 
//               backgroundColor: 'var(--accent-color)', 
//               borderRadius: '2px' 
//             }} 
//           />
          
//           <p 
//             className="mx-auto mb-4"
//             style={{
//               color: 'var(--body-color)',
//               fontFamily: 'var(--body-font)',
//               maxWidth: '700px'
//             }}
//           >
//             Specialized units working together to achieve holistic educational development
//           </p>
          
//           {/* Search Bar */}
//           <div className="row justify-content-center mb-4">
//             <div className="col-md-8 col-lg-6">
//               <div className="input-group">
//                 <input
//                   type="text"
//                   className="form-control border-end-0"
//                   placeholder="Search cells..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   style={{ 
//                     borderColor: 'var(--border-color)',
//                     fontFamily: 'var(--body-font)'
//                   }}
//                 />
//                 <span 
//                   className="input-group-text bg-white border-start-0"
//                   style={{ borderColor: 'var(--border-color)' }}
//                 >
//                   <FaSearch style={{ color: 'var(--accent-color)' }} />
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//          {/* Action Buttons */}
//         <div className="text-center  pt-4 mb-4">
//           <Link 
//             to="/about#lmc-members" 
//             className="btn btn-lg rounded-pill px-4 py-2 me-3"
//             style={{ 
//               backgroundColor: 'var(--accent-color)', 
//               color: 'var(--white-color)',
//               border: '2px solid var(--accent-color)',
//               transition: 'all 0.3s',
//               fontFamily: 'var(--body-font)'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = 'var(--white-color)';
//               e.target.style.color = 'var(--accent-color)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'var(--accent-color)';
//               e.target.style.color = 'var(--white-color)';
//             }}
//           >
//             <FaUsers className="me-2" />
//             LMC Members
//           </Link>
//           <Link 
//             to="/about#advisory-council" 
//             className="btn btn-lg rounded-pill px-4 py-2"
//             style={{ 
//               backgroundColor: 'var(--white-color)', 
//               color: 'var(--heading-color)',
//               border: '2px solid var(--heading-color)',
//               transition: 'all 0.3s',
//               fontFamily: 'var(--body-font)'
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.backgroundColor = 'var(--heading-color)';
//               e.target.style.color = 'var(--white-color)';
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.backgroundColor = 'var(--white-color)';
//               e.target.style.color = 'var(--heading-color)';
//             }}
//           >
//             <FaUserTie className="me-2" />
//             Advisory Council
//           </Link>
//         </div>

//         {/* Interactive Tabs */}
//         <div className="row justify-content-center mb-4">
//           <div className="col-12">
//             <ul 
//               className="nav nav-pills justify-content-center flex-wrap mb-4"
//               style={{ fontFamily: 'var(--body-font)' }}
//             >
//               {filteredGroups.map((group, index) => (
//                 <li className="nav-item" key={index}>
//                   <button
//                     className={`nav-link rounded-pill px-4 py-2 mx-1 mb-2 ${activeTab === index ? 'active' : ''}`}
//                     onClick={() => setActiveTab(index)}
//                     style={{
//                       backgroundColor: activeTab === index ? 'var(--accent-color)' : 'transparent',
//                       color: activeTab === index ? 'var(--white-color)' : 'var(--heading-color)',
//                       border: activeTab === index ? 'none' : '1px solid var(--border-color)',
//                       fontFamily: 'var(--body-font)'
//                     }}
//                   >
//                     {group.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Cells Grid */}
//         <div className="tab-content">
//           {filteredGroups.map((group, index) => (
//             <div 
//               key={index}
//               className={`tab-pane fade ${activeTab === index ? 'show active' : ''}`}
//             >
//               {group.cells.length > 0 ? (
//                 <div className="row g-4">
//                   {group.cells.map((cell, cellIndex) => (
//                     <div className="col-6 col-md-4 col-lg-3" key={cellIndex}>
//                       <CellCard {...cell} isSpecial={group.isSpecial} />
//                     </div>
//                   ))}
//                 </div>
//               ) : (
//                 <div 
//                   className="text-center py-5"
//                   style={{
//                     color: 'var(--body-color)',
//                     fontFamily: 'var(--body-font)'
//                   }}
//                 >
//                   <h5>No cells found matching your search</h5>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

       
        
//       </div>
//     </section>
//   );
// }










// import React from "react";

// export default function OrgChart() {
//   // Color variables based on provided scheme
//   const colors = {
//     white: '#fff',
//     heading: '#00001b',
//     body: '#555',
//     accent: '#890c25',
//     gray: '#f4f3ef',
//     border: '#d9d9d9'
//   };

//   // Click handler with enhanced feedback
//   const handleClick = (name) => {
//     // Create a temporary element for visual feedback
//     const feedback = document.createElement('div');
//     feedback.className = 'position-fixed rounded-circle bg-accent opacity-75';
//     feedback.style.width = '100px';
//     feedback.style.height = '100px';
//     feedback.style.left = `${event.clientX - 50}px`;
//     feedback.style.top = `${event.clientY - 50}px`;
//     feedback.style.zIndex = '9999';
//     feedback.style.pointerEvents = 'none';
//     feedback.style.transform = 'scale(0)';
//     feedback.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
    
//     document.body.appendChild(feedback);
    
//     // Trigger animation
//     setTimeout(() => {
//       feedback.style.transform = 'scale(1)';
//       feedback.style.opacity = '0';
//     }, 10);
    
//     // Remove element after animation
//     setTimeout(() => {
//       feedback.remove();
//       alert(`You selected: ${name}`);
//     }, 300);
//   };

//   // Enhanced Button component
//   const OrgButton = ({ children, onClick, level = 0 }) => {
//     const [isHovered, setIsHovered] = React.useState(false);

//     const buttonStyles = {
//       base: {
//         fontFamily: 'var(--heading-font)',
//         transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
//         borderRadius: '8px',
//         fontWeight: '600',
//         border: 'none',
//         cursor: 'pointer',
//         whiteSpace: 'nowrap',
//         textAlign: 'center',
//         display: 'flex',
//         flexDirection: 'column',
//         justifyContent: 'center',
//         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
//       },
//       level0: { // Director
//         background: `linear-gradient(135deg, ${colors.accent}, #6e0b1e)`,
//         color: colors.white,
//         fontSize: '18px',
//         padding: '16px 24px',
//         minWidth: '200px'
//       },
//       level1: { // First level (LMC, Cells, Advisory)
//         background: `linear-gradient(135deg, ${colors.accent}, #6e0b1e)`,
//         color: colors.white,
//         fontSize: '15px',
//         padding: '12px 20px',
//         minWidth: '160px'
//       },
//       level2: { // Main cells
//         background: `linear-gradient(135deg, ${colors.accent}, #6e0b1e)`,
//         color: colors.white,
//         fontSize: '14px',
//         padding: '10px 16px',
//         minWidth: '140px'
//       },
//       level3: { // Sub-cells
//         background: `linear-gradient(135deg, ${colors.accent}, #6e0b1e)`,
//         color: colors.white,
//         fontSize: '13px',
//         padding: '8px 14px',
//         minWidth: '120px'
//       },
//       hover: {
//         transform: 'translateY(-4px) scale(1.02)',
//         boxShadow: '0 6px 16px rgba(137, 12, 37, 0.3)'
//       }
//     };

//     const currentStyle = {
//       ...buttonStyles.base,
//       ...buttonStyles[`level${level}`],
//       ...(isHovered ? buttonStyles.hover : {})
//     };

//     return (
//       <button
//         style={currentStyle}
//         onClick={() => onClick()}
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//         className="position-relative overflow-hidden"
//       >
//         {children}
//         {isHovered && (
//           <div 
//             className="position-absolute top-0 left-0 w-100 h-100"
//             style={{
//               background: 'rgba(255, 255, 255, 0.1)',
//               borderRadius: '8px'
//             }}
//           ></div>
//         )}
//       </button>
//     );
//   };

//   // Connecting line components with improved styling
//   const VerticalLine = ({ height = 40, dashed = false }) => (
//     <div 
//       className="mx-auto"
//       style={{ 
//         width: '2px', 
//         height: `${height}px`,
//         background: dashed 
//           ? `repeating-linear-gradient(to bottom, ${colors.accent}, ${colors.accent} 4px, transparent 4px, transparent 8px)`
//           : colors.accent,
//         borderRadius: '2px',
//         position: 'relative'
//       }}
//     >
//       <div 
//         className="position-absolute bottom-0 start-50 translate-middle-x rounded-circle"
//         style={{
//           width: '8px',
//           height: '8px',
//           backgroundColor: colors.accent
//         }}
//       ></div>
//     </div>
//   );

//   const HorizontalConnector = ({ width = '100%' }) => (
//     <div className="position-relative" style={{ width }}>
//       <div 
//         className="position-absolute top-0 start-0"
//         style={{
//           height: '2px',
//           width: '100%',
//           backgroundColor: colors.accent,
//           borderRadius: '2px'
//         }}
//       ></div>
//       <div 
//         className="position-absolute top-0 start-50 translate-middle-x rounded-circle"
//         style={{
//           width: '8px',
//           height: '8px',
//           backgroundColor: colors.accent,
//           transform: 'translateY(-3px)'
//         }}
//       ></div>
//     </div>
//   );

//   // Branch connector for the main cells level
//   const BranchConnector = () => (
//     <div className="position-relative my-4" style={{ height: '60px' }}>
//       <HorizontalConnector />
//       <div className="d-flex justify-content-between position-absolute w-100" style={{ top: '0' }}>
//         {[...Array(8)].map((_, i) => (
//           <VerticalLine key={i} height={60} />
//         ))}
//       </div>
//     </div>
//   );

//   return (
//     <div 
//       className="container-fluid py-5 min-vh-100"
//       style={{
//         backgroundColor: colors.gray,
//         fontFamily: 'var(--body-font)',
//         color: colors.body
//       }}
//     >
//       {/* Header */}
//       <div className="text-center mb-5 px-3">
//         <h1 
//           className="display-5 fw-bold mb-3"
//           style={{ 
//             color: colors.heading,
//             letterSpacing: '-0.5px'
//           }}
//         >
//           Department of Holistic Education
//         </h1>
//         <p 
//           className="lead mb-0"
//           style={{
//             color: colors.body,
//             maxWidth: '700px',
//             margin: '0 auto',
//             lineHeight: '1.6'
//           }}
//         >
//           Organizational Structure and Leadership Hierarchy
//         </p>
//       </div>

//       {/* Organizational Chart */}
//       <div className="position-relative">
//         {/* Director Level */}
//         <div className="d-flex flex-column align-items-center mb-4">
//           <div className="position-relative">
//             <OrgButton 
//               onClick={() => handleClick("Director")} 
//               level={0}
//             >
//               <span style={{ fontSize: '20px' }}>Director</span>
//               <small 
//                 className="fw-normal d-block mt-1"
//                 style={{ 
//                   fontSize: '14px',
//                   opacity: '0.9'
//                 }}
//               >
//                 Department of Holistic Education
//               </small>
//             </OrgButton>
//             <div 
//               className="position-absolute bottom-0 start-50 translate-middle-x"
//               style={{
//                 width: '120%',
//                 height: '20px',
//                 backgroundColor: colors.white,
//                 borderRadius: '50%',
//                 filter: 'blur(10px)',
//                 opacity: '0.3',
//                 zIndex: '-1'
//               }}
//             ></div>
//           </div>
//         </div>

//         <VerticalLine height={60} />

//         {/* First Level - LMC Members, Cells, Advisory Committee */}
//         <div className="d-flex justify-content-center flex-wrap mb-4 gap-4 px-3">
//           <OrgButton 
//             onClick={() => handleClick("LMC Members")} 
//             level={1}
//           >
//             LMC Members
//           </OrgButton>
//           <OrgButton 
//             onClick={() => handleClick("Cells")} 
//             level={1}
//           >
//             Cells Structure
//           </OrgButton>
//           <OrgButton 
//             onClick={() => handleClick("Advisory Committee")} 
//             level={1}
//           >
//             Advisory Committee
//           </OrgButton>
//         </div>

//         <VerticalLine height={60} dashed />

//         {/* Branch Connector */}
//         <BranchConnector />

//         {/* Main Cells Structure */}
//         <div className="row g-4 justify-content-center mt-3 px-3">
//           {/* IT Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("IT Cell")} level={2}>
//               IT Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Event Management Cell")} level={3}>
//               Event Management Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Super 100 Cell")} level={3}>
//               Super 100 Cell
//             </OrgButton>
//           </div>

//           {/* IPR Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("IPR Cell")} level={2}>
//               IPR Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Industry Coordination Cell")} level={3}>
//               Industry Coordination
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("HEI Coordination Cell")} level={3}>
//               HEI Coordination
//             </OrgButton>
//           </div>

//           {/* E Commerce Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("E Commerce Cell")} level={2}>
//               E-Commerce Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("TMS Cell")} level={3}>
//               TMS Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Udyam Cell")} level={3}>
//               Udyam Cell
//             </OrgButton>
//           </div>

//           {/* Foreign Language Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("Foreign Language Cell")} level={2}>
//               Foreign Language
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Olympiad Cell")} level={3}>
//               Olympiad Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("LMS Cell")} level={3}>
//               LMS Cell
//             </OrgButton>
//           </div>

//           {/* CSR Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("CSR Cell")} level={2}>
//               CSR Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("R and D Cell")} level={3}>
//               R&D Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Art Cell")} level={3}>
//               Art Cell
//             </OrgButton>
//           </div>

//           {/* ATL Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("ATL Cell")} level={2}>
//               ATL Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Publications and Promotions Cell")} level={3}>
//               Publications & Promotions
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Environment Cell")} level={3}>
//               Environment Cell
//             </OrgButton>
//           </div>

//           {/* Parenting Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("Parenting Cell")} level={2}>
//               Parenting Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Astrology Cell")} level={3}>
//               Astrology Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Premium School Cell")} level={3}>
//               Premium School
//             </OrgButton>
//           </div>

//           {/* Health Wisdom Cell Column */}
//           <div className="col-xl-3 col-lg-4 col-md-6 d-flex flex-column align-items-center">
//             <OrgButton onClick={() => handleClick("Health Wisdom Cell")} level={2}>
//               Health Wisdom
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Sports Cell")} level={3}>
//               Sports Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Spiritual Cell")} level={3}>
//               Spiritual Cell
//             </OrgButton>
//             <VerticalLine height={40} />
//             <OrgButton onClick={() => handleClick("Grievance Redressal Cell")} level={3}>
//               Grievance Redressal
//             </OrgButton>
//           </div>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="text-center mt-5 pt-4">
//         <p 
//           className="text-muted small"
//           style={{ color: colors.body }}
//         >
//           <i className="fas fa-info-circle me-2"></i>
//           Click on any department to view details
//         </p>
//       </div>
//     </div>
//   );
// }


















// 'use client';
// import React, { useState } from 'react';

// const nodes = [
//   {
//     label: 'Director\nDepartment of Holistic Education',
//     children: [
//       { label: 'LMC Members' },
      
//       { label: 'Advisory Committee' },
//       {
//         label: 'Cells',
//         children: [
//           { label: 'IT Cell', children: [ { label: 'Event Management Cell' }, { label: 'Super 100 Cell' } ] },
//           { label: 'IPR Cell', children: [ { label: 'Industry Coordination Cell' }, { label: 'HEI Coordination Cell' } ] },
//           { label: 'E Commerce Cell', children: [ { label: 'TMS Cell' }, { label: 'Udyam Cell' } ] },
//           { label: 'Foreign Language Cell', children: [ { label: 'Olympiad Cell' }, { label: 'LMS Cell' } ] },
//           { label: 'CSR Cell', children: [ { label: 'R and D Cell' }, { label: 'Art Cell' } ] },
//           { label: 'ATL Cell', children: [ { label: 'Publications and Promotions Cell' }, { label: 'Environment Cell' } ] },
//           { label: 'Parenting Cell', children: [ { label: 'Astrology Cell' }, { label: 'Premium School Cell' } ] },
//           { label: 'Health Wisdom Cell', children: [ { label: 'Sports Cell' }, { label: 'Spiritual Cell' }, { label: 'Grievance Redressal Cell' } ] }
//         ]
//       }
//     ]
//   }
// ];

// const OrgButton = ({ label, onClick, level = 0 }) => {
//   const getButtonStyle = (level) => {
//     const baseStyle = {
//       minWidth: '140px',
//       minHeight: '50px',
//       borderRadius: '8px',
//       fontSize: '12px',
//       fontWeight: '600',
//       textAlign: 'center',
//       cursor: 'pointer',
//       transition: 'all 0.3s ease',
//       boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
//       border: 'none',
//       position: 'relative',
//       overflow: 'hidden',
//       fontFamily: 'var(--heading-font)',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center',
//       alignItems: 'center',
//       padding: '8px 12px',
//       lineHeight: '1.2'
//     };

//     const levelStyles = {
//       0: { // Director level
//         background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)',
//         color: 'white',
//         minWidth: '200px',
//         minHeight: '60px',
//         fontSize: '14px',
//         fontWeight: '700',
//         display: 'flex',
//       },
//       1: { // Department level
//         background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)',
//         color: 'white',
//         minWidth: '120px',
//         minHeight: '50px',
//         fontSize: '12px'
//       },
//       2: { // Cell level
//         background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)',
//         color: 'white',
//         minWidth: '100px',
//         minHeight: '45px',
//         fontSize: '10px'
//       },
//       3: { // Sub-cell level
//         background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)',
//         color: 'white',
//         minWidth: '120px',
//         minHeight: '40px',
//         fontSize: '9px'
//       }
//     };

//     return { ...baseStyle, ...levelStyles[level] };
//   };

//   return (
//     <button
//       onClick={() => onClick(label)}
//       style={getButtonStyle(level)}
//       onMouseEnter={(e) => {
//         e.target.style.transform = 'scale(1.05)';
//         e.target.style.boxShadow = '0 6px 16px rgba(0,0,0,0.2)';
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.transform = 'scale(1)';
//         e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
//       }}
//     >
//       <div style={{ whiteSpace: 'pre-wrap' }}>
//         {label}
//       </div>
//     </button>
//   );
// };

// const Tree = ({ data, onClick, level = 0 }) => {
//   if (!data.children || data.children.length === 0) {
//     return (
//       <div className="d-flex flex-column align-items-center">
//         <OrgButton label={data.label} onClick={onClick} level={level} />
//       </div>
//     );
//   }

//   return (
//     <div className="d-flex flex-column align-items-center position-relative">
//       <OrgButton label={data.label} onClick={onClick} level={level} />
      
//       {/* Vertical line down from parent */}
//       <div 
//         style={{
//           width: '2px',
//           height: '30px',
//           backgroundColor: '#22c55e',
//           margin: '0'
//         }}
//       />
      
//       {/* Children container with proper wrapping */}
//       <div className="position-relative w-100">
//         {/* Children container */}
//         <div 
//           className="d-flex justify-content-center align-items-start position-relative"
//           style={{ 
//             gap: level === 2 ? '15px' : '20px',
//             flexWrap: 'wrap',
//             maxWidth: '100%'
//           }}
//         >
//           {data.children.map((child, idx) => (
//             <div key={idx} className="d-flex flex-column align-items-center position-relative">
//               {/* Vertical line up to horizontal line */}
//               <div 
//                 style={{
//                   width: '2px',
//                   height: '30px',
//                   backgroundColor: '#22c55e',
//                   margin: '0 0 0 0'
//                 }}
//               />
//               <Tree data={child} onClick={onClick} level={level + 1} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function OrgChart() {
//   const [selectedNode, setSelectedNode] = useState(null);

//   const handleClick = (name) => {
//     setSelectedNode(name);
//   };

//   return (
//     <div 
//       style={{
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
//         padding: '40px 20px',
//         fontFamily: 'system-ui, -apple-system, sans-serif'
//       }}
//     >
//       <style jsx global>{`
//         :root {
//           --white-color: #fff;
//           --heading-color: #1e293b;
//           --body-color: #64748b;
//           --accent-color: #b91c1c;
//           --gray-color: #f1f5f9;
//           --border-color: #e2e8f0;
//           --heading-font: system-ui, -apple-system, sans-serif;
//           --body-font: system-ui, -apple-system, sans-serif;
//         }
//       `}</style>

//       <div className="container-fluid">
//         <div className="row justify-content-center mb-4">
//           <div className="col-12 text-center">
//             <h1 
//               style={{
//                 color: 'var(--heading-color)',
//                 fontFamily: 'var(--heading-font)',
//                 fontSize: '2rem',
//                 fontWeight: '700',
//                 marginBottom: '0.5rem'
//               }}
//             >
//               Organizational Structure
//             </h1>
//             <p 
//               style={{
//                 color: 'var(--body-color)',
//                 fontSize: '1.1rem',
//                 margin: '0'
//               }}
//             >
//               Department of Holistic Education
//             </p>
//           </div>
//         </div>

//         <div className="row justify-content-center">
//           <div className="col-12" style={{ maxWidth: '1400px' }}>
//             <div 
//               style={{
//                 background: 'rgba(255,255,255,0.95)',
//                 borderRadius: '16px',
//                 padding: '40px 20px',
//                 boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
//                 border: '1px solid var(--border-color)',
//                 overflowX: 'auto',
//                 width: '100%'
//               }}
//             >
//               <Tree data={nodes[0]} onClick={handleClick} />
//             </div>
//           </div>
//         </div>

//         {selectedNode && (
//           <div className="row justify-content-center mt-4">
//             <div className="col-md-6">
//               <div 
//                 className="text-center p-4"
//                 style={{
//                   background: 'linear-gradient(135deg, #b91c1c, #7f1d1d)',
//                   color: 'white',
//                   borderRadius: '12px',
//                   boxShadow: '0 8px 24px rgba(185, 28, 28, 0.3)'
//                 }}
//               >
//                 <h5 className="mb-2" style={{ fontWeight: '600' }}>Selected Department</h5>
//                 <p className="mb-0" style={{ whiteSpace: 'pre-wrap' }}>{selectedNode}</p>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// import React from 'react';

// const OrgChart = () => {
//   const styles = {
//     container: {
//       padding: '2rem',
//       backgroundColor: '#f8f9fa',
//       minHeight: '100vh',
//       fontFamily: 'Arial, sans-serif',
//       overflowX: 'auto'
//     },
//     chartWrapper: {
//       maxWidth: '1800px',
//       margin: '0 auto',
//       position: 'relative'
//     },
//     nodeBox: {
//       backgroundColor: '#B91C1C',
//       color: 'white',
//       padding: '12px 16px',
//       borderRadius: '8px',
//       textAlign: 'center',
//       fontWeight: '500',
//       fontSize: '12px',
//       boxShadow: '0 3px 10px rgba(0,0,0,0.15)',
//       display: 'inline-block',
//       lineHeight: '1.2',
//       width: '130px',
//       height: '50px',
//       position: 'relative',
//       zIndex: 2,
//       transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//       cursor: 'pointer',
//       border: '1px solid rgba(255,255,255,0.1)',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//       flexDirection: 'column'
//     },
//     directorBox: {
//       backgroundColor: '#B91C1C',
//       color: 'white',
//       padding: '20px 40px',
//       borderRadius: '12px',
//       textAlign: 'center',
//       fontWeight: '600',
//       fontSize: '16px',
//       boxShadow: '0 4px 15px rgba(0,0,0,0.25)',
//       display: 'inline-block',
//       lineHeight: '1.3',
//       marginBottom: '60px',
//       position: 'relative',
//       zIndex: 2,
//       minWidth: '300px',
//       border: '2px solid rgba(255,255,255,0.1)'
//     },
//     topLevelContainer: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       gap: '200px',
//       maxWidth: '1400px',
//       margin: '0 auto 80px',
//       position: 'relative'
//     },
//     topLevelBox: {
//       flex: '0 0 auto',
//       position: 'relative',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center'
//     },
//     cellsMainContainer: {
//       position: 'relative',
//       maxWidth: '1600px',
//       margin: '0 auto'
//     },
//     cellsGrid: {
//       display: 'grid',
//       gridTemplateColumns: 'repeat(8, 1fr)',
//       gap: '40px',
//       marginTop: '90px',
//       position: 'relative',
//       justifyItems: 'center',
//       alignItems: 'start'
//     },
//     cellColumn: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       gap: '30px',
//       position: 'relative',
//       minHeight: '200px'
//     },
//     directorToTopConnector: {
//       position: 'absolute',
//       width: '3px',
//       backgroundColor: '#22C55E',
//       height: '60px',
//       top: '60px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       zIndex: 1
//     },
//     // horizontalMainLine: {
//     //   position: 'absolute',
//     //   height: '3px',
//     //   backgroundColor: '#22C55E',
//     //   top: '50%',
//     //   left: '0',
//     //   right: '0',
//     //   zIndex: 1
//     // },
//     horizontalMainLine: {
//       position: 'absolute',
//       height: '3px',
//       backgroundColor: '#22C55E',
//       top: '50%',
//       left: '210px',
//       right: '210px',
//       zIndex: 1
//     },
//     verticalFromMain: {
//       position: 'absolute',
//       width: '3px',
//       backgroundColor: '#22C55E',
//       height: '60px',
//       top: '-30px',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       zIndex: 1
//     },
//     verticalBetweenNodes: {
//       position: 'absolute',
//       width: '3px',
//       backgroundColor: '#22C55E',
//       height: '29px',
//       top: '100%',
//       left: '50%',
//       transform: 'translateX(-50%)',
//       zIndex: 1
//     },
//     cellsHorizontalLine: {
//       position: 'absolute',
//       height: '3px',
//       backgroundColor: '#22C55E',
//       top: '-65px',
      
//       width: '63.7rem',
//        left: '36rem',
//       right: '0',
//       transform: 'translateX(-50%)',
//       zIndex: 1
//     }
//   };

//   const NodeBox = ({ children, style = {} }) => (
//     <div 
//       style={{ ...styles.nodeBox, ...style }}
//       onMouseEnter={(e) => {
//         e.target.style.transform = 'translateY(-3px)';
//         e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)';
//       }}
//       onMouseLeave={(e) => {
//         e.target.style.transform = 'translateY(0)';
//         e.target.style.boxShadow = '0 3px 10px rgba(0,0,0,0.15)';
//       }}
//     >
//       {children}
//     </div>
//   );

//   const cellsData = [
//     {
//       topLevel: "IT Cell",
//       children: ["Event Management Cell", "Super 100 Cell"]
//     },
//     {
//       topLevel: "IPR Cell",
//       children: ["Industry Coordination Cell", "HEI Coordination Cell"]
//     },
//     {
//       topLevel: "E Commerce Cell",
//       children: ["TMS Cell", "Udyam Cell", "Spiritual Cell"]
//     },
//     {
//       topLevel: "Foreign Language Cell",
//       children: ["Olympiad Cell", "LMS Cell", "Grievance Redressal Cell","Sports Cell"]
//     },
//     {
//       topLevel: "CSR Cell",
//       children: ["R and D Cell", "Art Cell","Health Wisdom Cell"]
//     },
//     {
//       topLevel: "ATL Cell",
//       children: ["Publications and Promotions Cell", "Environment Cell"]
//     },
//     {
//       topLevel: "Parenting Cell",
//       children: ["Astrology Cell", "Premium School Cell"]
//     },
//     // {
//     //   topLevel: "Health Wisdom Cell",
//     //   children: ["Sports Cell", "Spiritual Cell", "Grievance Redressal Cell"]
//     // }
//   ];

//   const formatCellText = (text) => {
//     if (text === "E Commerce Cell") {
//       return ["E Commerce", "Cell"];
//     } else if (text === "Foreign Language Cell") {
//       return ["Foreign", "Language Cell"];
//     } else if (text === "Health Wisdom Cell") {
//       return ["Health", "Wisdom Cell"];
//     } else if (text === "Event Management Cell") {
//       return ["Event", "Management", "Cell"];
//     } else if (text === "Industry Coordination Cell") {
//       return ["Industry", "Coordination", "Cell"];
//     } else if (text === "HEI Coordination Cell") {
//       return ["HEI", "Coordination", "Cell"];
//     } else if (text === "Super 100 Cell") {
//       return ["Super 100", "Cell"];
//     } else if (text === "R and D Cell") {
//       return ["R and D", "Cell"];
//     } else if (text === "Publications and Promotions Cell") {
//       return ["Publications", "Promotions", "Cell"];
//     } else if (text === "Premium School Cell") {
//       return ["Premium", "School Cell"];
//     } else if (text === "Grievance Redressal Cell") {
//       return ["Grievance", "Redressal", "Cell"];
//     } else {
//       return text.split(' ');
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <div style={styles.chartWrapper}>
//         {/* Director */}
//         <div style={{ textAlign: 'center', position: 'relative' }}>
//           <div style={styles.directorBox}>
//             <div>Director</div>
//             <div>Department of Holistic Education</div>
//           </div>
//           <div style={styles.directorToTopConnector}></div>
//         </div>

//         {/* Top Level - LMC Members, Cells, Advisory Committee */}
//         <div style={styles.topLevelContainer}>
//           <div style={styles.horizontalMainLine}></div>
          
//           <div style={styles.topLevelBox}>
//             <NodeBox style={{ backgroundColor: '#B91C1C' }}>
//               <div>LMC</div>
//               <div>Members</div>
//             </NodeBox>
//           </div>
          
//           <div style={styles.topLevelBox}>
//             <div style={styles.verticalFromMain}></div>
//             <NodeBox style={{ backgroundColor: '#9c1c1c' }}>
//               <div>Cells</div>
//             </NodeBox>
//             <div style={styles.verticalBetweenNodes}></div>
//           </div>
          
//           <div style={styles.topLevelBox}>
//             <NodeBox style={{ backgroundColor: '#B91C1C' }}>
//               <div>Advisory</div>
//               <div>Committee</div>
//             </NodeBox>
//           </div>
//         </div>

//         {/* Cells Section */}
//         <div style={styles.cellsMainContainer}>
//           <div style={styles.cellsGrid}>
//             {/* Horizontal connecting line for all cells */}
//             <div style={styles.cellsHorizontalLine}></div>
            
//             {cellsData.map((column, columnIndex) => (
//               <div key={columnIndex} style={styles.cellColumn}>
//                 {/* Vertical line from horizontal line to top-level cell */}
//                 <div style={{
//                   position: 'absolute',
//                   width: '3px',
//                   backgroundColor: '#22C55E',
//                   height: '65px',
//                   top: '-65px',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   zIndex: 1
//                 }}></div>

//                 {/* Top level cell */}
//                 <div style={{ position: 'relative' }}>
//                   <NodeBox>
//                     {formatCellText(column.topLevel).map((line, i) => (
//                       <div key={i}>{line}</div>
//                     ))}
//                   </NodeBox>
                  
//                   {/* Connector to children */}
//                   {column.children.length > 0 && (
//                     <div style={{
//                       position: 'absolute',
//                       width: '3px',
//                       backgroundColor: '#22C55E',
//                       height: '30px',
//                       top: '100%',
//                       left: '50%',
//                       transform: 'translateX(-50%)',
//                       zIndex: 1
//                     }}></div>
//                   )}
//                 </div>

//                 {/* Children cells */}
//                 {column.children.map((child, childIndex) => (
//                   <div key={childIndex} style={{ position: 'relative' }}>
//                     <NodeBox>
//                       {formatCellText(child).map((line, i) => (
//                         <div key={i}>{line}</div>
//                       ))}
//                     </NodeBox>
                    
//                     {/* Connector to next child */}
//                     {childIndex < column.children.length - 1 && (
//                       <div style={{
//                         position: 'absolute',
//                         width: '3px',
//                         backgroundColor: '#22C55E',
//                         height: '30px',
//                         top: '100%',
//                         left: '50%',
//                         transform: 'translateX(-50%)',
//                         zIndex: 1
//                       }}></div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrgChart;



import React, { useState, useCallback, useEffect } from 'react';

const OrgChart = () => {
  const [clickedCell, setClickedCell] = useState(null);
  const [hoveredCell, setHoveredCell] = useState(null);
  const [animationPhase, setAnimationPhase] = useState('idle');
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Enhanced loading animation
  useEffect(() => {
    setAnimationPhase('loading');
    const timer = setTimeout(() => setAnimationPhase('loaded'), 1000);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = windowSize.width < 768;
  const isTablet = windowSize.width >= 768 && windowSize.width < 1024;

  const styles = {
    container: {
      padding: isMobile ? '1rem' : '2rem',
      backgroundColor: '#fafafa',
      minHeight: '100vh',
      fontFamily: '"Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
      overflowX: 'auto',
      position: 'relative',
      background: `
        linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%),
        radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.03) 2px, transparent 0),
        radial-gradient(circle at 75px 75px, rgba(16, 185, 129, 0.03) 2px, transparent 0)
      `,
      backgroundSize: 'cover, 100px 100px, 100px 100px',
      transition: 'all 0.5s ease'
    },
    chartWrapper: {
      maxWidth: '1800px',
      margin: '0 auto',
      position: 'relative',
      zIndex: 1,
      opacity: animationPhase === 'loaded' ? 1 : 0,
      transform: animationPhase === 'loaded' ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
      width: '100%'
    },
    nodeBox: {
      background: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 50%, #991B1B 100%)',
      color: 'white',
      padding: isMobile ? '8px 12px' : '12px 16px',
      borderRadius: '18px',
      textAlign: 'center',
      fontWeight: '600',
      fontSize: isMobile ? '10px' : '12px',
      boxShadow: `
        0 4px 20px rgba(185, 28, 28, 0.25),
        0 2px 8px rgba(0,0,0,0.1),
        inset 0 1px 0 rgba(255,255,255,0.1)
      `,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      lineHeight: '1.2',
      width: isMobile ? '100px' : '130px',
      height: isMobile ? '40px' : '50px',
      position: 'relative',
      zIndex: 2,
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      cursor: 'pointer',
      border: '2px solid transparent',
      overflow: 'hidden',
      userSelect: 'none',
      outline: 'none',
      WebkitTapHighlightColor: 'transparent',
      backdropFilter: 'blur(10px)',
      textShadow: '0 1px 2px rgba(0,0,0,0.3)'
    },
    nodeBoxActive: {
      transform: 'translateY(-3px) scale(1.08)',
      boxShadow: `
        0 12px 40px rgba(185, 28, 28, 0.4),
        0 6px 20px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 0 1px rgba(255,255,255,0.1)
      `,
      borderColor: 'rgba(255, 255, 255, 0.3)',
      filter: 'brightness(1.1)'
    },
    nodeBoxClicked: {
      transform: 'translateY(1px) scale(0.96)',
      boxShadow: `
        0 2px 12px rgba(185, 28, 28, 0.4),
        0 1px 6px rgba(0,0,0,0.2),
        inset 0 2px 4px rgba(0,0,0,0.1)
      `,
      filter: 'brightness(0.95)'
    },
    directorBox: {
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
      color: 'white',
      padding: isMobile ? '20px 30px' : isTablet ? '28px 42px' : '32px 52px',
      borderRadius: '24px',
      textAlign: 'center',
      fontWeight: '700',
      fontSize: isMobile ? '16px' : '18px',
      boxShadow: `
        0 12px 40px rgba(185, 28, 28, 0.4),
        0 6px 20px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 0 1px rgba(255,255,255,0.1)
      `,
      display: 'inline-block',
      lineHeight: '1.4',
      marginBottom: isMobile ? '40px' : '60px',
      position: 'relative',
      zIndex: 2,
      minWidth: isMobile ? '280px' : '340px',
      border: '3px solid rgba(255,255,255,0.1)',
      cursor: 'pointer',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      userSelect: 'none',
      overflow: 'hidden',
      backdropFilter: 'blur(10px)',
      textShadow: '0 2px 4px rgba(0,0,0,0.5)'
    },
    directorBoxActive: {
      transform: 'translateY(-5px) scale(1.03)',
      boxShadow: `
        0 30px 80px rgba(31, 41, 55, 0.4),
        0 12px 40px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.15),
        0 0 0 1px rgba(255,255,255,0.1)
      `,
      borderColor: 'rgba(255,255,255,0.2)',
      filter: 'brightness(1.1)'
    },
    topLevelContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: isMobile ? '40px' : isTablet ? '100px' : '200px',
      maxWidth: '1400px',
      margin: isMobile ? '0 auto 40px' : '0 auto 80px',
      position: 'relative',
      flexDirection: isMobile ? 'column' : 'row'
    },
    topLevelBox: {
      flex: '0 0 auto',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: isMobile ? '20px' : '0'
    },
    cellsMainContainer: {
      position: 'relative',
      maxWidth: '1600px',
      margin: '0 auto',
      overflowX: isMobile ? 'auto' : 'visible',
      padding: isMobile ? '0 10px' : '0'
    },
    cellsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(4, 1fr)' : 'repeat(7, 1fr)',
      gap: isMobile ? '20px' : '40px',
      marginTop: isMobile ? '40px' : '90px',
      position: 'relative',
      justifyItems: 'center',
      alignItems: 'start'
    },
    cellColumn: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: isMobile ? '15px' : '30px',
      position: 'relative',
      minHeight: '200px',
      marginBottom: isMobile ? '30px' : '0'
    },
    connector: {
      position: 'absolute',
      background: 'linear-gradient(135deg, #10B981 0%, #059669 50%, #047857 100%)',
      borderRadius: '3px',
      zIndex: 1,
      boxShadow: `
        0 0 15px rgba(16, 185, 129, 0.4),
        0 0 30px rgba(16, 185, 129, 0.2),
        inset 0 1px 0 rgba(255,255,255,0.2)
      `,
      transition: 'all 0.3s ease'
    },
    connectorGlow: {
      boxShadow: `
        0 0 25px rgba(16, 185, 129, 0.6),
        0 0 50px rgba(16, 185, 129, 0.4),
        inset 0 1px 0 rgba(255,255,255,0.3)
      `
    },
    directorToTopConnector: {
      width: '5px',
      height: isMobile ? '40px' : '60px',
      top: isMobile ? '40px' : '60px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    horizontalMainLine: {
      height: '5px',
      top: isMobile ? '50%' : '50%',
      left: isMobile ? '50%' : '210px',
      right: isMobile ? '50%' : '210px',
      transform: isMobile ? 'translateX(-50%)' : 'none',
      display: isMobile ? 'none' : 'block'
    },
    verticalFromMain: {
      width: '5px',
      height: isMobile ? '40px' : '60px',
      top: isMobile ? '-20px' : '-30px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    verticalBetweenNodes: {
      width: '5px',
      height: isMobile ? '14px' : '29px',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    cellsHorizontalLine: {
      height: '5px',
      top: isMobile ? '-35px' : '-65px',
      width: isMobile ? '100%' : '66.5rem',
      left: isMobile ? '0' : '37.5rem',
      right: '0',
      transform: isMobile ? 'none' : 'translateX(-50%)',
      zIndex: '10',
      display: isMobile ? 'none' : 'block'
    },
    cellConnector: {
      width: '5px',
      height: isMobile ? '15px' : '30px',
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    cellVerticalLine: {
      width: '5px',
      height: isMobile ? '35px' : '65px',
      top: isMobile ? '-35px' : '-65px',
      left: '50%',
      transform: 'translateX(-50%)'
    },
    tooltip: {
      position: 'absolute',
      background: 'rgba(17, 24, 39, 0.95)',
      color: 'white',
      padding: '10px 14px',
      borderRadius: '10px',
      fontSize: '12px',
      fontWeight: '500',
      whiteSpace: 'nowrap',
      zIndex: 1000,
      boxShadow: `
        0 8px 30px rgba(0,0,0,0.3),
        0 4px 15px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.1)
      `,
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(255,255,255,0.1)',
      transform: 'translateX(-50%)',
      bottom: '130%',
      left: '50%',
      opacity: 0,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      pointerEvents: 'none',
      display: isMobile ? 'none' : 'block'
    },
    tooltipVisible: {
      opacity: 1,
      transform: 'translateX(-50%) translateY(-5px)'
    },
    badge: {
      position: 'absolute',
      top: '-10px',
      right: '-10px',
      width: '22px',
      height: '22px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #F59E0B 0%, #D97706 50%, #B45309 100%)',
      color: 'white',
      fontSize: '10px',
      fontWeight: '700',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: `
        0 4px 15px rgba(245, 158, 11, 0.4),
        0 2px 8px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.2)
      `,
      zIndex: 3,
      border: '2px solid rgba(255,255,255,0.2)',
      animation: 'pulse 2s infinite'
    },
    cellSpecial: {
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
      boxShadow: `
        0 4px 20px rgba(124, 58, 237, 0.25),
        0 2px 8px rgba(0,0,0,0.1),
        inset 0 1px 0 rgba(255,255,255,0.1)
      `
    },
    cellSpecialActive: {
      boxShadow: `
        0 12px 40px rgba(124, 58, 237, 0.4),
        0 6px 20px rgba(0,0,0,0.2),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 0 1px rgba(255,255,255,0.1)
      `
    },
    childCell: {
      background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 50%, #B91C1C 100%)',
      fontSize: isMobile ? '9px' : '11px',
      boxShadow: `
        0 3px 15px rgba(239, 68, 68, 0.2),
        0 1px 6px rgba(0,0,0,0.1),
        inset 0 1px 0 rgba(255,255,255,0.1)
      `
    },
    childCellActive: {
      boxShadow: `
        0 8px 30px rgba(239, 68, 68, 0.35),
        0 4px 15px rgba(0,0,0,0.15),
        inset 0 1px 0 rgba(255,255,255,0.2),
        0 0 0 1px rgba(255,255,255,0.1)
      `
    },
    pulseAnimation: {
      animation: 'pulse 2s infinite'
    },
    loadingShimmer: {
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
      backgroundSize: '200% 100%',
      animation: 'shimmer 2s infinite'
    }
  };

  const createRipple = useCallback((event, callback) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%);
      transform: scale(0);
      animation: ripple 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      pointer-events: none;
      z-index: 10;
    `;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
      if (callback) callback();
    }, 800);
  }, []);

  const handleCellClick = useCallback((cellId, event) => {
    createRipple(event, () => {
      setClickedCell(cellId);
      setTimeout(() => setClickedCell(null), 300);
    });
    
    console.log(`Cell clicked: ${cellId}`);
    // Add haptic feedback for mobile
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
  }, [createRipple]);

  const handleMouseEnter = useCallback((cellId) => {
    setHoveredCell(cellId);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoveredCell(null);
  }, []);

  const NodeBox = ({ 
    children, 
    style = {}, 
    cellId, 
    isSpecial = false, 
    isChild = false,
    tooltip = null,
    badgeCount = null
  }) => {
    const isHovered = hoveredCell === cellId;
    const isClicked = clickedCell === cellId;
    
    let nodeStyle = { ...styles.nodeBox, ...style };
    
    if (isSpecial) {
      nodeStyle = { ...nodeStyle, ...styles.cellSpecial };
    }
    if (isChild) {
      nodeStyle = { ...nodeStyle, ...styles.childCell };
    }
    
    if (isHovered) {
      nodeStyle = { ...nodeStyle, ...styles.nodeBoxActive };
      if (isSpecial) {
        nodeStyle = { ...nodeStyle, ...styles.cellSpecialActive };
      }
      if (isChild) {
        nodeStyle = { ...nodeStyle, ...styles.childCellActive };
      }
    }
    
    if (isClicked) {
      nodeStyle = { ...nodeStyle, ...styles.nodeBoxClicked };
    }

    return (
      <div 
        style={nodeStyle}
        onMouseEnter={() => handleMouseEnter(cellId)}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleCellClick(cellId, e)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCellClick(cellId, e);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`${cellId} button`}
        aria-pressed={isClicked}
        className="org-chart-node"
      >
        {children}
        {badgeCount && (
          <div style={styles.badge}>
            {badgeCount}
          </div>
        )}
        {tooltip && (
          <div style={{
            ...styles.tooltip,
            ...(isHovered ? styles.tooltipVisible : {})
          }}>
            {tooltip}
          </div>
        )}
      </div>
    );
  };

  const cellsData = [
    {
      topLevel: "IT Cell",
      children: ["Event Management Cell", "Super 100 Cell"]
    },
    {
      topLevel: "IPR Cell",
      children: ["Industry Coordination Cell", "HEI Coordination Cell"]
    },
    {
      topLevel: "E Commerce Cell",
      children: ["TMS Cell", "Udyam Cell", "Spiritual Cell"]
    },
    {
      topLevel: "Foreign Language Cell",
      children: ["Olympiad Cell", "LMS Cell", "Grievance Redressal Cell","Sports Cell"]
    },
    {
      topLevel: "CSR Cell",
      children: ["R and D Cell", "Art Cell","Health Wisdom Cell"]
    },
    {
      topLevel: "ATL Cell",
      children: ["Publications and Promotions Cell", "Environment Cell"]
    },
    {
      topLevel: "Parenting Cell",
      children: ["Astrology Cell", "Premium School Cell"]
    }
  ];

  const formatCellText = (text) => {
    if (text === "E Commerce Cell") {
      return ["E Commerce", "Cell"];
    } else if (text === "Foreign Language Cell") {
      return ["Foreign", "Language Cell"];
    } else if (text === "Health Wisdom Cell") {
      return ["Health", "Wisdom Cell"];
    } else if (text === "Event Management Cell") {
      return ["Event", "Management", "Cell"];
    } else if (text === "Industry Coordination Cell") {
      return ["Industry", "Coordination", "Cell"];
    } else if (text === "HEI Coordination Cell") {
      return ["HEI", "Coordination", "Cell"];
    } else if (text === "Super 100 Cell") {
      return ["Super 100", "Cell"];
    } else if (text === "R and D Cell") {
      return ["R and D", "Cell"];
    } else if (text === "Publications and Promotions Cell") {
      return ["Publications", "Promotions", "Cell"];
    } else if (text === "Premium School Cell") {
      return ["Premium", "School Cell"];
    } else if (text === "Grievance Redressal Cell") {
      return ["Grievance", "Redressal", "Cell"];
    } else {
      return text.split(' ');
    }
  };

  return (
    <div style={styles.container} id='cells'>
      <style jsx>{`
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        .org-chart-node:focus {
          outline: 3px solid #3B82F6;
          outline-offset: 3px;
          border-radius: 18px;
        }
        
        .org-chart-node:focus-visible {
          outline: 3px solid #3B82F6;
          outline-offset: 3px;
        }
        
        .org-chart-node:active {
          transform: scale(0.95);
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
      
      <div style={styles.chartWrapper}>
        {/* Director */}
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div 
            style={{
              ...styles.directorBox,
              ...(hoveredCell === 'director' ? styles.directorBoxActive : {})
            }}
            onMouseEnter={() => handleMouseEnter('director')}
            onMouseLeave={handleMouseLeave}
            onClick={(e) => handleCellClick('director', e)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleCellClick('director', e);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label="Director button"
            className="org-chart-node"
          >
            <div style={{ fontSize: isMobile ? '18px' : '20px', marginBottom: '8px' }}>Director</div>
            <div style={{ fontSize: isMobile ? '14px' : '16px', opacity: '0.9' }}>Department of Holistic Education</div>
            {hoveredCell === 'director' && (
              <div style={{
                ...styles.tooltip,
                ...styles.tooltipVisible,
                bottom: '110%'
              }}>
                Click to view director details
              </div>
            )}
          </div>
          <div style={{ 
            ...styles.connector, 
            ...styles.directorToTopConnector,
            ...(hoveredCell === 'director' ? styles.connectorGlow : {})
          }}></div>
        </div>

        {/* Top Level */}
        <div style={styles.topLevelContainer}>
          <div style={{ 
            ...styles.connector, 
            ...styles.horizontalMainLine,
            ...(hoveredCell === 'cells-main' ? styles.connectorGlow : {})
          }}></div>
          
          <div style={styles.topLevelBox}>
            <NodeBox 
              cellId="lmc-members"
              tooltip="Local Management Committee"
              badgeCount="5"
            >
              <div>LMC</div>
              <div>Members</div>
            </NodeBox>
          </div>
          
          {!isMobile && (
            <div style={styles.topLevelBox}>
              <div style={{ 
                ...styles.connector, 
                ...styles.verticalFromMain,
                ...(hoveredCell === 'cells-main' ? styles.connectorGlow : {})
              }}></div>
              <NodeBox 
                cellId="cells-main"
                isSpecial={true}
                tooltip="All organizational cells"
                badgeCount={cellsData.length}
              >
                <div>Cells</div>
              </NodeBox>
              <div style={{ 
                ...styles.connector, 
                ...styles.verticalBetweenNodes,
                ...(hoveredCell === 'cells-main' ? styles.connectorGlow : {})
              }}></div>
            </div>
          )}
          
          <div style={styles.topLevelBox}>
            <NodeBox 
              cellId="advisory-committee"
              tooltip="Advisory Committee Members"
              badgeCount="3"
            >
              <div>Advisory</div>
              <div>Committee</div>
            </NodeBox>
          </div>
        </div>

        {/* Cells Section */}
        <div style={styles.cellsMainContainer}>
          <div style={styles.cellsGrid}>
            <div style={{ 
              ...styles.connector, 
              ...styles.cellsHorizontalLine,
              ...(hoveredCell?.startsWith('top-') ? styles.connectorGlow : {})
            }}></div>
            
            {cellsData.map((column, columnIndex) => (
              <div key={columnIndex} style={styles.cellColumn}>
                <div style={{ 
                  ...styles.connector, 
                  ...styles.cellVerticalLine,
                  ...(hoveredCell === `top-${columnIndex}` ? styles.connectorGlow : {})
                }}></div>

                {/* Top level cell */}
                <div style={{ position: 'relative' }}>
                  <NodeBox 
                    cellId={`top-${columnIndex}`}
                    tooltip={`Manage ${column.topLevel}`}
                    badgeCount={column.children.length}
                  >
                    {formatCellText(column.topLevel).map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </NodeBox>
                  
                  {column.children.length > 0 && (
                    <div style={{ 
                      ...styles.connector, 
                      ...styles.cellConnector,
                      ...(hoveredCell === `top-${columnIndex}` ? styles.connectorGlow : {})
                    }}></div>
                  )}
                </div>

                {/* Children cells */}
                {column.children.map((child, childIndex) => (
                  <div key={childIndex} style={{ position: 'relative' }}>
                    <NodeBox 
                      cellId={`child-${columnIndex}-${childIndex}`}
                      isChild={true}
                      tooltip={`Access ${child}`}
                    >
                      {formatCellText(child).map((line, i) => (
                        <div key={i}>{line}</div>
                      ))}
                    </NodeBox>
                    
                    {childIndex < column.children.length - 1 && (
                      <div style={{ 
                        ...styles.connector, 
                        ...styles.cellConnector,
                        ...(hoveredCell === `child-${columnIndex}-${childIndex}` ? styles.connectorGlow : {})
                      }}></div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgChart;