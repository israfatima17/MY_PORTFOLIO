import React from 'react';

function Resume() {
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


      {/* Resume PDF Viewer */}
      <section style={{ padding: '50px 20px', maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '28px', textAlign: 'center', marginBottom: '30px' }}>My Resume</h2>
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
        >
          <p>
            This browser doesn't support PDF viewing.
            <a href="/resume.pdf" download>Click to Download</a>
          </p>
        </object>
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

export default Resume;
