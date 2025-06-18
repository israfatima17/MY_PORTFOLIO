import React from 'react';
import '../App.css';

function Contact() {
  const navStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '16px'
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


      {/* Contact Section */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4",
        minHeight: "70vh"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "30px", color: "#1f2937" }}>Get in Touch</h2>
        <p style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
          📞 <strong>Phone:</strong> +92 335 7678869
        </p>
        <p style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
          📧 <strong>Email:</strong> <a href="mailto:fatimaisra464@gmail.com" style={{ color: "#1f2937" }}>fatimaisra464@gmail.com</a>
        </p>
        <p style={{ fontSize: "20px", marginBottom: "20px", color: "#333" }}>
          🔗 <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/isra-fatima-a5b361361/" target="_blank" rel="noopener noreferrer" style={{ color: "#1f2937" }}>
            View Profile
          </a>
        </p>
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

export default Contact;
