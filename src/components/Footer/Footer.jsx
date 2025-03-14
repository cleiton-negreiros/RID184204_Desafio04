import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="social-links">
        <a href="https://www.facebook.com/cleiton.d.negreiros/" target="_blank" rel="Facebbok" className="social-link">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/cnegreirosh/" target="_blank" rel="Instagram" className="social-link">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-link">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/in/cleiton-negreiros1708/" target="_blank" rel="Linkedin" className="social-link">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
      <p className="copyright">Copyright ©2025 All rights reserved</p>
    </footer>
  );
}

export default Footer;