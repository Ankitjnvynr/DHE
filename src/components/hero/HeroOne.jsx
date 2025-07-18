import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Example images for the slider (replace with your own)
import img1 from "../../assets/img/heroslider/k1.jpeg";
import img2 from "../../assets/img/heroslider/k3.jpg";
import img3 from "../../assets/img/heroslider/k6.jpg";
import img4 from "../../assets/img/heroslider/k9.png";
import img5 from "../../assets/img/heroslider/main.jpg";
import img6 from "../../assets/img/heroslider/featurepic.jpg";

export const HeroOne = () => {
  const images = [img1, img2, img3,img4,img5,img6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        className="td_hero td_style_1 td_heading_bg td_center td_bg_filed"
        style={{
          backgroundColor:"#a59069",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          minHeight: 420,
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            minHeight: 420,
            gap: 32,
          }}
        >
          {/* Left: Department Text */}
          <div
            className="td_hero_text wow fadeInRight"
            data-wow-duration="0.9s"
            data-wow-delay="0.35s"
            style={{ flex: 1, minWidth: 280, zIndex: 2 }}
          >
            <h1
              className="td_hero_title td_fs_64 td_white_color td_mb_12"
              style={{ marginBottom: 24 }}
            >
              <span>DHE</span> <br /> Department of Holistic Education
            </h1>
            <div className="td_btn td_style_1 td_radius_10 td_medium">
              <span className="td_btn_in td_white_color td_accent_bg">
                <a href="#notice-board">
                  <span>View Notices</span>
                </a>
              </span>
            </div>
          </div>
          {/* Right: Image Slider */}
          <div
            className="hero-slider"
            style={{
              backgroundColor:"#a59069",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              minWidth: 820,
              maxWidth: 820,
              height: 540,
              
              position: "relative",
              borderRadius: 18,
              overflow: "hidden",
              boxShadow: "0 4px 32px rgba(137,12,37,0.13)",
              background: "#fff",
              
              marginTop: 64,
            }}
          >
            <img
              src={images[current]}
              alt={`slide-${current + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.7s cubic-bezier(.4,2,.6,1)",
                borderRadius: 18,
              }}
            />
            {/* Dots */}
            <div
              style={{
                position: "absolute",
                bottom: 18,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 8,
                zIndex: 2,
              }}
            >
              {images.map((_, idx) => (
                <span
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    background: idx === current ? "#890c25" : "#fff",
                    border: "2px solid #890c25",
                    cursor: "pointer",
                    display: "inline-block",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="td_lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {/* Marquee Announcement Section */}
        <style>{`
          @keyframes marquee-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}</style>
      </section>
      <div
        style={{
          width: "100%",
          background: "rgba(137,12,37,0.92)",
          padding: "0.7rem 0",
          position: "relative",
          overflow: "hidden",
          zIndex: 10,
          boxShadow: "0 2px 16px rgba(137,12,37,0.10)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 24,
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: 1,
            zIndex: 2,
            background: "#890c25",
            padding: "0.3rem 1.2rem",
            borderRadius: 8,
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          }}
        >
          Announcement
        </div>
        <div
          style={{
            width: "100%",
            overflow: "hidden",
            marginLeft: 170,
            minHeight: 32,
          }}
        >
          <div
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              color: "#fff",
              fontSize: 17,
              fontWeight: 500,
              letterSpacing: 0.5,
              animation: "marquee-left 18s linear infinite",
            }}
          >
            🚩 Admissions for the new session are open! | Join our Holistic Education Programs | Upcoming event: National Education Summit 2025 | Stay tuned for more updates from DHE!
          </div>
        </div>
      </div>
    </>
  );
};
