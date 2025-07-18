import React from "react";

const cards = [
  {
    title: "VBITR Chandigarh",
    desc: "VBITR Chandigarh is the Vidya Bharti Institute of Training & Research located in Chandigarh, also known as the Institute of Training & Research.",
    img: "/src/assets/img/logos/logo1.jpg",
    link:"https://www.itrchandigarh.org/",
  },
  {
    title: "Viksit India",
    desc: "The name refers to a quarterly open‑access academic journal published by DHE under its Publications wing. It evolved from the “Echoes of Shiksha Mahakumbh” series and complements its sister journal Viksit Bharat",
    img: "/src/assets/img/logos/logo2.jpg",
    link:"https://vi.rase.co.in/",
  },
  {
    title: "Viksit Bharat",
    desc: "“Viksit Bharat” is a quarterly open-access journal launched in 2024, as a continuation and evolution of the “Echoes of Shiksha Mahakumbh” series. Published by the Department of Holistic Education (DHE)",
    img: "/src/assets/img/logos/logo3.jpg",
    link:"https://iipe.ac.in/iipeviksitbharat@2047/",
  },
  {
    title: "Sarvatr",
    desc: "This is the description for card 4.",
    img: "/src/assets/img/logos/logo4.jpg",
    link:"https://www.sarvatr.co.in/",
  },
  {
    title: "Shiksha Kumbh",
    desc: "**Shiksha Kumbh** is a national educational conclave organized by DHE to promote holistic learning, NEP-2020 implementation, and innovation through collaboration among educators, researchers, and institutions.",
    img: "/src/assets/img/logos/logo5.jpg",
    link:"https://www.rase.co.in/",
  },
  {
    title: "Holistic Harbour",
    desc: "Holistic Harbour is a flagship initiative by DHE under Vidya Bharti, designed as a comprehensive platform promoting holistic wellness and educational innovation across mind, body, spirit, and community.",
    img: "/src/assets/img/logos/logo6.jpg",
    link:"https://www.alltemples.org.in/",
  },

  {
    title: "Pooja Wala",
    desc: "**Pooja Wala** is a MERN-stack platform by DHE for seamless online booking of pandits across India, enabling users to schedule ceremonies, choose rituals in multiple languages, and complete payments securely.&#x20;",
    img: "/src/assets/img/logos/logo8.jpg",
    link:"https://poojawala.in/",
  },
  {
    title: "Swadeshi Bazar",
    desc: "It promotes indigenous products and sustainable practices, encouraging local entrepreneurship and cultural pride through marketplace-style exhibitions.",
    img: "/src/assets/img/logos/logo9.jpg",
    link:"https://www.swadeshibazaar.co.in/"
  },
  {
    title: "Tredul",
    desc: "Tredul is an innovative DHE initiative under Vidya Bharti, established to support education-centered startups and socio-economic ventures, guided by Dr. Thakur SKR.",
    img: "/src/assets/img/logos/logo10.jpg",
    link:"https://www.tredul.in/"
  },
  {
    title: "Tudu",
    desc: "TuDu is a core initiative of DHE under Vidya Bharti, aimed at empowering educational entrepreneurship and innovation, supporting skill-building and sustainable development through mentorship and resource networks.",
    img: "/src/assets/img/logos/logo11.jpg",
    link:"https://www.tudu.co.in/"
  },
   {
    title: "DHE",
    desc: "*Department of Holistic Education (DHE)**, founded in 2021 by Dr Thakur SKR under Vidya Bharti, is a think‑tank advancing holistic education through 25+ initiatives, journals, and national Shiksha Kumbh events .",
    img: "/src/assets/img/logos/logo12.jpg",
    link:"https://www.dhe.org.in/"
  }
];

export const Logo = () => {
  return (
    <>
    <h2 className="mt-3" style={{textAlign:"center"}}>Logos</h2>
    <div className="card-grid">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="card-image">
            <img src={card.img} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.desc}</p>
            <div className="card-button">
              <a href={card.link} className="btn btn-danger m-3" target="_blank" rel="noopener noreferrer">Read more</a></div>
          </div>
        </div>
  
      ))}

      <style>{`
  .card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    padding: 2rem;
  }

  .card {
    width: 100%;
    max-width: 360px;
    background: #fff;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 12px 30px rgba(137, 12, 37, 0.4);
  }

  .card-image {
    height: 300px;
    overflow: hidden;
    background-color: #f9f9f9;
    padding: 2rem;
  }

  .card-image img {
    width: 100%;
    height: 100%;
    object-fit: conatin;
    transition: transform 0.4s ease;
    display: block;
  }

  .card:hover .card-image img {
    transform: scale(1.06);
  }

  .card-content {
    padding: 1.2rem 1rem;
  }

  .card-content h2 {
    margin: 0 0 0.5rem;
    font-size: 1.4rem;
    font-weight: 600;
    color: #1a1a1a;
  }

  .card-content p {
    margin: 0;
    font-size: 1rem;
    color: #555;
    line-height: 1.5;
  }

  /* Responsiveness */
  @media (max-width: 1024px) {
    .card-grid {
      gap: 20px;
    }

    .card {
      max-width: 45%;
    }
  }

  @media (max-width: 768px) {
    .card {
      max-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .card-content h2 {
      font-size: 1.2rem;
    }

    .card-content p {
      font-size: 0.9rem;
    }
  }
`}</style>

     
    </div>
    </>
  );
};


