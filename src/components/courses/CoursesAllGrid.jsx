import React from "react";
import director from "../../assets/img/home_1/director.jpg";

export const CoursesAllGrid = () => {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(90deg, #f8fafc 60%, #f3e8ff 100%)",
        padding: "64px 0 64px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "stretch",
          justifyContent: "center",
          gap: 56,
          width: "100%",
          maxWidth: 1200,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 24,
          boxShadow: "0 8px 32px 0 rgba(137,12,37,0.08)",
          padding: 0,
        }}
      >
        <div style={{ flex: 1, minWidth: 320, padding: "48px 40px 48px 48px", display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h2 style={{
            fontSize: 38,
            fontWeight: 900,
            color: "#890c25",
            marginBottom: 20,
            lineHeight: 1.1,
            letterSpacing: 1,
            textShadow: '0 2px 8px rgba(137,12,37,0.08)'
          }}>
            Dr. Thakur SKR
          </h2>
          <p style={{
            fontSize: 15,
            color: "#22223b",
            marginBottom: 32,
            opacity: 0.92,
            maxWidth: 520,
            lineHeight: 1.7,
          }}>
            We believe that the best way to serve the nation is to empower the society by means of education. In this regard, the quality of education which is being imparted is pivotal. In today’s era, on one hand, with increasing number of educational institutes, the literacy rate has been increasing steadfastly. However, on the other hand, there is a huge increase in unemployment, a huge gap in the requirement of skilled manpower, physical and mental illnesses, disturbed families, violence and unrest, etc.<br /><br />
            The Department of Holistic Education at Vidya Bharti was conceptualized to effectively bridge this gap in society by overhauling the education system. We at DHE are committed to making the education system more comprehensive by focusing not only on skill development but also aiming at the holistic development of students ranging from physical fitness to emotional well-being. Our vision is to impart this holistic education to children right from their young age so that we can mold these green cakes into not only skilled adults but also responsible humans who are an asset to the nation.<br /><br />
            I feel honored to be leading this Department and hope to revolutionize our system of education for the betterment of society.
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 320, display: "flex", alignItems: "center", justifyContent: "center", background: 'linear-gradient(120deg, #f3e8ff 60%, #fff 100%)', borderTopRightRadius: 24, borderBottomRightRadius: 24 }}>
          <img
            src={director}
            alt="Director"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: 420,
              maxHeight: 520,
              minHeight: 340,
              borderRadius: 18,
              boxShadow: "0 8px 32px 0 rgba(137,12,37,0.13)",
              objectFit: "cover",
              border: "2px solid #e5e7eb",
              background: '#fff',
              margin: 0,
              display: 'block',
            }}
          />
        </div>
      </div>
    </section>
  );
};
