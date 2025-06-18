import React, { useState } from 'react';
import '../App.css';
import trender from './trender.png';
import tender2 from './tender2.png';
import tender3 from './tender3.png';
import document_scrape from './document_scrape.png';
import document_scrape_2 from './document_scrape_2.png';
import scrape from './scrape.png';
import scrape2 from './scrape2.png';
import figma from './images/figma.png';
import figma2 from './images/figma2.png';
import figma3 from './images/figma3.png';
import portfolio1 from './images/portfolio.jpg';
import portfolio2 from './images/portfolio (2).jpg';
import portfolioVideo from './images/portfolio.mp4';


const projects = [
  { name: "Recipe Sharing Platform", link: "https://github.com/israfatima17/Recipe-Sharing-Platform" },
  { name: "Final Year Project (FYP)", link: "https://github.com/israfatima17/FYP" },
  { name: "Calculator App", link: "https://github.com/israfatima17/calculator-app" },
  { name: "Python Code Collection", link: "https://github.com/israfatima17/python-codes" },
  { name: "Smart Calculator in Python", link: "https://github.com/israfatima17/Smart-Calculator-Python" },
];

function Projects() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px'
  };

  const [modalImage, setModalImage] = useState(null);

  const handleImageClick = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      {/* Header/Nav */}
   <header style={{ backgroundColor: "#1f2937", padding: "15px 30px" }}>
  <nav style={{ display: "flex", justifyContent: "flex-end" }}>
    <ul style={{
      display: "flex",
      gap: "30px",
      listStyle: "none",
      margin: 0,
      padding: 0
    }}>
      {['Home', 'Projects', 'Resume', 'Contact'].map((item, index) => {
        const href = item === 'Home' ? '/' : `/${item.toLowerCase()}`;
        return (
          <li key={index}>
            <a
              href={href}
              style={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: '500',
                fontSize: '16px',
                transition: 'color 0.3s',
                padding: '5px',
              }}
              onMouseEnter={(e) => e.target.style.color = '#FFD700'}
              onMouseLeave={(e) => e.target.style.color = 'white'}
            >
              {item}
            </a>
          </li>
        );
      })}
    </ul>
  </nav>
</header>




      {/* GitHub Projects Section */}
      <section style={{ padding: "50px 20px", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>My GitHub Projects</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              padding: "20px",
              backgroundColor: "#ffffff",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}>
              <span style={{ fontWeight: "600", color: "#333" }}>{project.name}</span>
              <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "#1f2937" }}>
                🔗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* My Office Work Section */}
      <section style={{
        padding: "50px 20px",
        maxWidth: "1000px",
        margin: "0 auto"
      }}>
        <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>Scraping Task</h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}>
          {[trender, tender2, tender3].map((img, index) => (
            <div key={index} style={{ overflow: "hidden", borderRadius: "8px", cursor: "pointer" }}>
              <img
                src={img}
                alt={`Tender ${index + 1}`}
                onClick={() => handleImageClick(img)}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s"
                }}
              />
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "#f9f9f9",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#333",
            margin: 0
          }}>
            During my office work, I was assigned the task to scrape tenders data from specific websites.
            My responsibility was to extract tenders daily based on specific dates, save the results in Excel/Word format,
            and send a summary report to my supervisor showing how many tenders appeared each day.
          </p>
        </div>
      </section>

      {/* Document Scraping Work Section */}
      <section style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}>
          {[document_scrape, document_scrape_2].map((img, index) => (
            <div
              key={index}
              style={{ overflow: "hidden", borderRadius: "8px", cursor: "pointer" }}
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Document ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s"
                }}
              />
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "#f9f9f9",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#333",
            margin: 0
          }}>
            I was assigned to scrape documentation data from a website. This included large volumes of text, tables, and images.
            I extracted the content and compiled it into editable Word files. It required careful formatting and content editing.
          </p>
        </div>
      </section>

      {/* Social Media Scraping Task Section */}
      <section style={{ padding: "50px 20px", maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px"
        }}>
          {[scrape, scrape2].map((img, index) => (
            <div
              key={index}
              style={{ overflow: "hidden", borderRadius: "8px", cursor: "pointer" }}
              onClick={() => handleImageClick(img)}
            >
              <img
                src={img}
                alt={`Social Media Scrape ${index + 1}`}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  transition: "transform 0.3s"
                }}
              />
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: "#f9f9f9",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}>
          <p style={{
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#333",
            margin: 0
          }}>
            This was also one of my major tasks. I had to scrape data from the homepage of Instagram, Twitter, and TikTok 
            and display the extracted content on my frontend interface. It involved working with dynamic content and required
            precision to extract and present data accurately.
          </p>
        </div>
      </section>

      

   {/* Figma and Web Design Projects Section */}
<section style={{ padding: "50px 20px", maxWidth: "1200px", margin: "0 auto" }}>
  <h2 style={{ fontSize: "28px", textAlign: "center", marginBottom: "30px" }}>
    Figma and Web Design Projects
  </h2>
  <div style={{
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center"
  }}>
    {/* Left Side - Video */}
    <div style={{ flex: "1 1 45%", maxWidth: "500px" }}>
      <video
        src={portfolioVideo}
        autoPlay
        loop
        muted
        playsInline
        style={{
          width: "100%",
          height: "auto",
          borderRadius: "12px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)"
        }}
      />
    </div>
    

    {/* Right Side - Image Grid */}
    <div style={{
      flex: "1 1 50%",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px"
    }}>
      {[figma, figma2, figma3, portfolio1, portfolio2].map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Design ${index + 1}`}
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 3px 15px rgba(0, 0, 0, 0.15)"
          }}
        />
      ))}
    </div>
    
    {/* Back to Top Button */}
<button
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  style={{
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#1f2937',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '22px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: 1000
  }}
  title="Back to Top"
>
  ↑
</button>

  </div>
</section>

{/* Footer */}
      <footer className="footer" style={{ backgroundColor: '#0d1b2a', color: 'white', padding: '30px 0' }}>
        <div className="footer-container" style={{ textAlign: 'center' }}>
          <div className="footer-socials" style={{ marginBottom: '20px' }}>
            <a href="https://www.instagram.com/ia_digital_world/" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.png" alt="Instagram" style={{ width: '30px', margin: '0 10px' }} />
            </a>
            <a href="https://github.com/israfatima17" target="_blank" rel="noopener noreferrer">
              <img src="/github-sign.png" alt="GitHub" style={{ width: '30px', margin: '0 10px' }} />
            </a>
            <a href="https://www.linkedin.com/in/isra-fatima-64b734286" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.png" alt="LinkedIn" style={{ width: '30px', margin: '0 10px' }} />
            </a>
            <a href="mailto:fatimaisra464@gmail.com">
              <img src="/email.png" alt="Email" style={{ width: '30px', margin: '0 10px' }} />
            </a>
          </div>
          <p>📧 Contact: <a href="mailto:fatimaisra464@gmail.com" style={{ color: '#aad8ff' }}>fatimaisra464@gmail.com</a></p>
          <p style={{ fontSize: '14px', opacity: 0.8 }}>© 2025 Isra Fatima. All rights reserved.</p>
        </div>
      </footer>




      {/* Image Modal Preview */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <img src={modalImage} alt="Zoom Preview" className="modal-img" />
        </div>
      )}
    </div>
  );
}

export default Projects;
