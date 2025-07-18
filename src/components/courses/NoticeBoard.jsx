import React, { useState } from "react";

const dummyImage = "https://via.placeholder.com/600x180?text=Notice+Board";

const noticeTabs = [
  { label: "Current Notices", key: "current" },
  { label: "Past Notices", key: "past" },
  { label: "Upcoming Notices", key: "upcoming" },
];

const noticesData = {
  current: [
    {
      title: "3rd Edition of RASE Conferences Concluded",
      description: "The 3rd Edition of RASE Conferences was successfully held at NIT Srinagar on June 29-30, 2024. Congratulations to all participants and organizers for making it a grand success.",
      link: "https://www.dhe.org.in/",
      date: "June 30, 2024",
      image: dummyImage,
    },
    {
      title: "Upcoming RASE Conference at IIT Jammu",
      description: "The next RASE Conference for J&K will be held at IIT Jammu. Stay tuned for more updates and registration details.",
      link: "https://www.dhe.org.in/",
      date: "July 2025",
      image: dummyImage,
    },
    {
      title: "शिक्षा महाकुंभ 2.0 Successfully Concluded",
      description: "शिक्षा महाकुंभ 2.0 was successfully concluded at Kurukshetra University from December 16-17, 2024. To download photographs, click the link below.",
      link: "https://drive.google.com/drive/folders/1XnauGu1-dQ2KCpTzvIMHhUwlBF-6GDEN",
      date: "December 17, 2024",
      image: dummyImage,
    },
    {
      title: "Residential Camps Announced",
      description: "DHE announces two residential camps: प्रथम आवासीय आवास वर्ग at IIT Ropar (September 7-8, 2024) and द्वितीय आवासीय आवास वर्ग at Gita Niketan, Kurukshetra (November 23-24, 2024).",
      link: "https://www.dhe.org.in/residentialcamps",
      date: "July 2025",
      image: dummyImage,
    },
  ],
  past: [
    {
      title: "MoU Signed with INST Mohali",
      description: "DHE की HEI को-ऑर्डिनेशन सेल ने 11 मार्च 2024 को INST मोहाली के साथ शिक्षा के क्षेत्र में एक MoU साइन किया.",
      link: "https://www.dhe.org.in/",
      date: "March 11, 2024",
      image: dummyImage,
    },
    {
      title: "Shiksha Mahakumbh Team Invites Hon’ble Chief Minister, UP",
      description: "Shiksha Mahakumbh team invited the Hon’ble Chief Minister of Uttar Pradesh to the 2nd Edition event.",
      link: "https://www.dhe.org.in/",
      date: "2024",
      image: dummyImage,
    },
    {
      title: "Invitation to Hon’ble President of Bharat",
      description: "Prof. Rajeev Ahuja and Dr. Thakur SKR invited Smt. Droupadi Murmu, the Hon’ble President of Bharat, for the Shiksha Mahakumbh 2024.",
      link: "https://www.dhe.org.in/",
      date: "2024",
      image: dummyImage,
    },
    {
      title: "Shiksha Mahakumbh 2.0 at Kurukshetra University",
      description: "शिक्षा महाकुंभ 2.0 was successfully concluded at Kurukshetra University from December 16-17, 2024.",
      link: "https://www.dhe.org.in/",
      date: "December 17, 2024",
      image: dummyImage,
    },
  ],
  upcoming: [
    {
      title: "Next RASE Conference at IIT Jammu",
      description: "The next RASE Conference for J&K will be held at IIT Jammu. Stay tuned for more updates.",
      link: "https://www.dhe.org.in/",
      date: "Upcoming 2025",
      image: dummyImage,
    },
    {
      title: "Residential Camp: IIT Ropar",
      description: "DHE प्रथम आवासीय आवास वर्ग will be held at IIT Ropar on September 7-8, 2024.",
      link: "https://www.dhe.org.in/residentialcamps",
      date: "September 7-8, 2024",
      image: dummyImage,
    },
    {
      title: "Residential Camp: Gita Niketan, Kurukshetra",
      description: "DHE द्वितीय आवासीय आवास वर्ग will be held at Gita Niketan, Kurukshetra on November 23-24, 2024.",
      link: "https://www.dhe.org.in/residentialcamps",
      date: "November 23-24, 2024",
      image: dummyImage,
    },
  ],
};

export const NoticeBoard = () => {
  const [activeTab, setActiveTab] = useState("current");
  return (
    <section className="td_gray_bg_3" >
      <div className="td_height_112 td_height_lg_75" />
      <div className="container" id="notice-board">
        <div
          className="td_section_heading td_style_1 text-center wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay="0.15s"
        >
          <h2 className="td_section_title td_fs_48 mb-0" >Notice Board</h2>
        </div>
        <div className="td_height_30 td_height_lg_30" />
        {/* Tabs */}
        <div className="td_tabs">
          <ul
            className="td_tab_links td_style_1 td_mp_0 td_fs_20 td_medium td_heading_color wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
          >
            {noticeTabs.map((tab) => (
              <li
                key={tab.key}
                className={activeTab === tab.key ? "active" : ""}
                onClick={() => setActiveTab(tab.key)}
                style={{ cursor: "pointer" }}
              >
                <a href={`#tab_${tab.key}`}>{tab.label}</a>
              </li>
            ))}
          </ul>
          <div className="td_height_50 td_height_lg_50" />
          <div className="td_tab_body">
            {noticeTabs.map((tab) => (
              <div
                key={tab.key}
                className={`td_tab${activeTab === tab.key ? " active" : ""}`}
                id={`tab_${tab.key}`}
              >
                <div className="row td_gap_y_24 justify-center">
                  {noticesData[tab.key].map((notice, idx) => (
                    <div key={idx} className="col-lg-6 col-md-8 mx-auto">
                      <div className="bg-white rounded-xl shadow p-4 mb-4 border border-primary/10 wow fadeInUp" data-wow-duration="1s" data-wow-delay={`0.${idx + 2}s`}>
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-lg  mb-0" style={{color:"#890c25"}}>{notice.title}</h4>
                          <span className="text-xs text-gray-500">{notice.date}</span>
                        </div>
                        {notice.image && (
                          <img src={notice.image} alt={notice.title} className="w-full h-40 object-cover rounded mb-2" />
                        )}
                        {/* Vertical Marquee/Scrolling Description (Bottom to Top) */}
                        <div style={{
                          position: 'relative',
                          height: 180,
                          overflow: 'hidden',
                          background: 'rgba(137,12,37,0.04)',
                          borderRadius: 6,
                          marginBottom: 8,
                        }}>
                          <div style={{
                            position: 'absolute',
                            width: '100%',
                            willChange: 'transform',
                            animation: `marquee-vertical-desc-${idx} 20s linear infinite`,
                            color: '#333',
                            fontSize: 16,
                            lineHeight: '28px',
                            fontWeight: 400,
                            padding: '0 8px',
                            textAlign: 'justify',
                          }}>
                            {notice.description} — This is a long description for the notice. Please read all the details carefully. The notice board now supports much longer content and will automatically scroll from bottom to top, allowing you to see all important updates and information in a modern, visually appealing format. Stay tuned for more updates and announcements! For further details, visit the official website or contact the administration. All notices are updated regularly to keep you informed about the latest events, deadlines, and opportunities. Make sure to check this board frequently for the most recent updates and announcements. Thank you for staying connected with us!
                          </div>
                          <style>{`
                            @keyframes marquee-vertical-desc-${idx} {
                              0% { top: 100%; }
                              100% { top: -100%; }
                            }
                          `}</style>
                        </div>
                        {notice.link && (
                          <a href={notice.link} className=" hover:underline text-sm font-semibold" style={{color:"#890c25"}}>Read more</a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="td_height_120 td_height_lg_80" />
    </section>
  );
};
