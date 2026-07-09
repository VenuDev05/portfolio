import React, { useEffect } from 'react';
import gsap from 'gsap';
import '../styles/footer.css';

function Footer() {
  useEffect(() => {
    // Scroll to top button animation
    const handleScroll = () => {
      const scrollBtn = document.querySelector('.scroll-to-top');
      if (scrollBtn) {
        if (window.scrollY > 300) {
          gsap.to(scrollBtn, { opacity: 1, pointerEvents: 'auto', duration: 0.3 });
        } else {
          gsap.to(scrollBtn, { opacity: 0, pointerEvents: 'none', duration: 0.3 });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: 0, duration: 0.8 });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-section">
          <h4>Venu K</h4>
          <p>MERN Stack Developer | Building scalable web applications</p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li>
              <a href="mailto:venu.dev63@gmail.com">Email</a>
            </li>
            <li>
              <a href="#">LinkedIn</a>
            </li>
            <li>
              <a href="#">GitHub</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} Venu K. All rights reserved. | Crafted with passion for web
          development.
        </p>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
        ↑
      </button>
    </footer>
  );
}

export default Footer;
