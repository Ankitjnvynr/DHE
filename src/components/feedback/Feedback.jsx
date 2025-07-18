import React, { useState } from "react";

 export const Feedback = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    affiliation: "",
    event: "",
    experience: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted form:", form);
    // Add form submission logic here (e.g., API call)
  };

  return (
    <div className="form-wrapper">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
             Name <span>/</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email<span>*</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile<span>*</span>
          <input
            type="tel"
            name="mobile"
            value={form.mobile}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Affiliation<span>*</span>
          <input
            type="text"
            name="affiliation"
            value={form.affiliation}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Select the event you participated in<span>*</span>
          <select
            name="event"
            value={form.event}
            onChange={handleChange}
            required
          >
            <option value="">Select event</option>
            <option value="Shiksha Kumbh">Shiksha Kumbh</option>
            <option value="Shiksha Mahakumbh">Shiksha Mahakumbh</option>
            <option value="Workshop">Workshop</option>
            <option value="Conference">Conference</option>
          </select>
        </label>

        <label>
          Write Your Experience
          <textarea
            name="experience"
            value={form.experience}
            onChange={handleChange}
            rows="5"
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <style>{`
        .form-wrapper {
          max-width: 800px;
          margin: 2rem auto;
          padding: 2rem;
          background-color: #f8fafc;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.05);
        }

        h2 {
          text-align: center;
          color: #941b1b;
          margin-bottom: 1rem;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        label {
          display: flex;
          flex-direction: column;
          font-weight: 500;
          color: #333;
        }

        label span {
          color: red;
          
        }

        input, select, textarea {
          padding: 10px;
          border-radius: 6px;
          border: 1px solid #ccc;
          font-size: 1rem;
          margin-top: 4px;
        }

        button {
          padding: 12px;
          font-size: 1rem;
          background-color: #941b1b;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s;
        }

        button:hover {
          background-color: #7c1515;
        }

        @media (max-width: 500px) {
          .form-wrapper {
            padding: 1.2rem;
          }

          input, select, textarea {
            font-size: 0.95rem;
          }
        }
      `}</style>
    </div>
  );
};


