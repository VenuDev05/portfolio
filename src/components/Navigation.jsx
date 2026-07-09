import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import '../styles/navigation.css';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e) => {
    const target = e.target.getAttribute('href');
    if (target && target.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      const element = document.querySelector(target);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (isOpen) {
      gsap.to('.nav-menu', { opacity: 1, visibility: 'visible', duration: 0.3 });
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to('.nav-menu', { opacity: 0, visibility: 'hidden', duration: 0.3 });
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    const hamburger = document.querySelector('.hamburger');
    if (isOpen) {
      hamburger?.classList.add('active');
    } else {
      hamburger?.classList.remove('active');
    }
  }, [isOpen]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <a href="#home" onClick={handleNavClick}>
            <span className="logo-text">VK</span>
            <span className="logo-label">Developer</span>
          </a>
        </div>

        <div className="nav-menu">
          <a href="#home" onClick={handleNavClick} className="nav-link">
            Home
          </a>
          <a href="#skills" onClick={handleNavClick} className="nav-link">
            Skills
          </a>
          <a href="#projects" onClick={handleNavClick} className="nav-link">
            Projects
          </a>
          <a href="#contact" onClick={handleNavClick} className="nav-link">
            Contact
          </a>
          <a href="mailto:venu.dev63@gmail.com" className="nav-link nav-cta">
            Get In Touch
          </a>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
