import React from "react";
import part1 from "../../assets/img/partners/partner1.png";
import part2 from "../../assets/img/partners/partner2.png";
import part3 from "../../assets/img/partners/partner3.png";
import part4 from "../../assets/img/partners/partner4.png";
import part5 from "../../assets/img/partners/partner5.png";
import part6 from "../../assets/img/partners/partner6.png";
import part7 from "../../assets/img/partners/partner7.png";
import part8 from "../../assets/img/partners/partner8.png";
import part9 from "../../assets/img/partners/partner9.png";
import part10 from "../../assets/img/partners/partner10.png";
// import part11 from "../../assets/img/partners/partner2.png";
export const PartnerOne = () => {
  return (
    <section>
      <div className="td_height_112 td_height_lg_75" />
      <div className="container">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.2s"
        >
          <p className="td_section_subtitle_up td_fs_18 td_semibold td_spacing_1 td_mb_10 text-uppercase td_accent_color">
            Partners
          </p>
          <h2 className="td_section_title td_fs_48 mb-0">
            All Partners
          </h2>
          <p className="td_section_subtitle td_fs_18 mb-0" style={{ fontWeight: 500, color: '#666', letterSpacing: 0.2 }}>
            Together, we empower education and innovation—our partners are the bridges to a brighter, more holistic future. Through collaboration, shared vision, and mutual growth, we create opportunities that inspire change and drive progress for generations to come.
          </p>
        </div>
        <div className="td_height_50 td_height_lg_50" />
        {/* Marquee section for partner logos */}
        <div style={{
          width: '100%',
          alignContent: 'center',
          height: 120,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(137,12,37,0.06)',
          margin: '0 auto 32px auto',
          padding: '12px 0',
          position: 'relative',
        }}>
          <div style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            animation: 'marquee-partners 18s linear infinite',
            willChange: 'transform',
            minWidth: '100%',
          }}>
            {/* Duplicate the logos for seamless looping */}
            {[
              part1, part2, part3, part4, part5, part6, part7, part8, part9, part10,
              part1, part2, part3, part4, part5, part6, part7, part8, part9, part10
            ].map((imgSrc, idx) => (
              <a
                key={idx}
                href="#"
                style={{
                  display: 'inline-block',
                  margin: '0 36px',
                  verticalAlign: 'middle',
                  borderRadius: 8,
                  background: '#fff',
                  boxShadow: '0 1px 6px rgba(137,12,37,0.07)',
                  width: 90,
                  height: 80,
                  overflow: 'hidden',
                  border: '1px solid #e0e0e0',
                }}
              >
                <img
                  src={imgSrc}
                  alt={`Partner ${(idx % 10) + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </a>
            ))}
          </div>
          <style>{`
            @keyframes marquee-partners {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
