import React from "react";

const accountData = [
  {
    title: "Shiksha Kumbh",
    accountName: "Shiksha Kumbh",
    accountNumber: "42563561350",
    ifsc: "SBIN0000628",
    bank: "State Bank of India",
    branch:"Chandigarh Main Branch",
    upi: "shikshakhumb@sbi",
    qr: "/src/assets/img/Account/sk.jpg",
  },
  {
    title: "Shiksha Mahakumbh",
    accountName: "Shiksha Mahakumbh",
    accountNumber: "42563560855",
    ifsc: "SBIN0000628",
    bank: "State Bank of India",
    branch:"Chandigarh Main Branch",
    upi: "shikshamahakumbhkhumb@sbi",
    qr: "/src/assets/img/Account/sm.jpg",
  },
  {
    title: "VBITR Chandigarh",
    accountName: "Institute of Training & Research",
    accountNumber: "42536226777",
    ifsc: "SBIN0010440",
    bank: "State Bank of India",
    branch:"Chandigarh Main Branch",
    upi: "7627888222@sbi",
    qr: "/src/assets/img/Account/vbitr.jpg",
  },
  {
    title: "Holistic Education",
    accountName: "Department of Holistic Education",
    accountNumber: "42529022841",
    ifsc: "SBIN0000628",
    bank: "State Bank of India",
    upi: "holisticeducation@sbi",
    qr: "/src/assets/img/Account/dhe.jpg",
  },
];

export const Account = () => {
  return (
  

      <div className="account-grid">
      {accountData.map((acc, idx) => (
        <div className="account-card" key={idx}>
          <div className="account-image">
            <img src={acc.qr} alt={`${acc.title} QR Code`} />
          </div>
          <div className="account-info">
            <h3>{acc.title}</h3>
            <p><strong>Account Name:</strong> {acc.accountName}</p>
            <p><strong>Account Number:</strong> {acc.accountNumber}</p>
            <p><strong>IFSC Code:</strong> {acc.ifsc}</p>
            <p><strong>Bank:</strong> {acc.bank}</p>
            <p><strong>Branch:</strong> {acc.branch}</p>
            <p><strong>UPI ID:</strong> {acc.upi}</p>
          </div>
        </div>
      ))}

      <style>{`
        .account-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 200px;
          padding: 2rem;
        }

        .account-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          width: 100%;
          max-width: 360px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .account-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 30px rgba(204, 29, 29, 0.15);
        }

        .account-image {
          height: 240px;
          background-color: #f9f9f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .account-image img {
          max-width: 90%;
          max-height: 90%;
          object-fit: contain;
        }

        .account-info {
          padding: 1rem 1.2rem;
        }

        .account-info h3 {
          margin-bottom: 0.5rem;
          font-size: 1.2rem;
          color: #890c25;
        }

        .account-info p {
          margin: 0.3rem 0;
          font-size: 1.15rem;
          color: #555;
        }

        @media (max-width: 768px) {
          .account-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};


