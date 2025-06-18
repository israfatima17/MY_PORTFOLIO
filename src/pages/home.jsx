// src/pages/Home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  const faqs = [
    {
      question: "DO YOU WORK WITH PEOPLE FROM ALL COUNTRIES?",
      answer: "Yes, we work with people from all the countries, according to their timezone.",
    },
    {
      question: "HOW MUCH WILL IT COST?",
      answer: "The price depends on your need or project. Contact us to know more.",
    },
    {
      question: "HOW CAN I CONTACT YOU?",
      answer: "You can either mail us or DM us.",
    },
    {
      question: "HOW CAN WE FIND THAT WE ARE PERFECT FIT?",
      answer: "We do a 30-minute discovery session before starting.",
    },
    {
      question: "IS THERE ANY AGREEMENT?",
      answer: "Yes, we always make an agreement for transparency.",
    },
  ];

  return (
    <div>

      {/* Navbar */}
      <header className="header-section" id="home">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><a href="contact">Contact</a></li>

          </ul>
        </nav>
      </header>

      {/* About */}
      <section className="about-section" id="about">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
           Hello! I’m Isra a passionate and creative girl, proudly graduated from Shaikh Ayaz University in 2024.
With a strong interest in technology and design, I’ve explored different professional fields and gained real-world experience along the way.
I work across various domains. My journey includes building real projects and helping clients with their digital needs and I’m always open for freelance opportunities.
Currently, I’m focused on refining my skills further and growing in the world of tech and digital design. Every project I take on is a step toward making my passion stronger and my work even better.
          </p>
        </div>
        <div className="about-image">
          <img src="/aboutimage.jpeg" alt="Isra Fatima" />
        </div>
      </section>

      {/* Services */}
      <section className="services-section" id="services">
        <h2 className="services-title">What I Offer</h2>
        <div className="service-cards">
          <div className="service-card"><h3>Python Code Projects</h3><p>I create simple and functional Python code for assignments and beginner-level projects. Whether it's automation or logic-based tasks, I can help you build it smoothly.</p></div>
          <div className="service-card"><h3>Web Scraping</h3><p>I can extract data from websites and public social media pages, and organize it into JSON, Excel, or Word formats. I’ve also worked on data mining tasks after scraping for meaningful insights.</p></div>
          <div className="service-card"><h3>Social Media Management</h3><p>I offer creative post designs and social media management services. I’ve completed 8+ design orders in just one month, managing content with consistency and aesthetic appeal.</p></div>
          <div className="service-card"><h3>Website Design</h3><p>I design beautiful and responsive frontend layouts using modern tools like HTML, CSS, and React. From landing pages to full website UIs, I help bring your brand to life with clean design.</p></div>
        </div>
      </section>

      {/* Feedback */}
      <section className="feedback-section">
        <h2 className="section-title">Client Feedback</h2>
        <div className="feedback-cards">
          {[1,2,3,4].map(i => (
            <div key={i} className="feedback-card">
              <img src={`/feedback/feedback${i}.png`} alt={`Client feedback ${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="image-gallery">
        <div className="card-container">
          {[...Array(10)].map((_, i) => (
            <div className="image-card" key={i}>
              <img src={`/stories/image${i+1}.jpeg`} alt={`Story ${i+1}`} />
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="faq-section bg-gray-100 py-12 px-6 text-center">
        <h2 className="section-title text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item bg-white p-5 rounded-lg shadow-md cursor-pointer" onClick={() => toggleFAQ(index)}>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <span className="text-xl font-bold text-blue-600">{openIndex === index ? '-' : '+'}</span>
              </div>
              {openIndex === index && <p className="mt-3 text-sm text-gray-600">{faq.answer}</p>}
            </div>
          ))}
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
    </div>
  );
}

export default Home;
