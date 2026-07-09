import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import '../styles/hero.css';

gsap.registerPlugin(TextPlugin);

function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate title
    tl.from(titleRef.current, {
      opacity: 0.5,
      y: 30,
      duration: 0.8,
    })
      .from(
        subtitleRef.current,
        {
          opacity: 0.5,
          y: 20,
          duration: 0.6,
        },
        '-=0.4'
      )
      .from(
        descriptionRef.current,
        {
          opacity: 0.5,
          y: 20,
          duration: 0.6,
        },
        '-=0.4'
      )
      .from(
        ctaRef.current,
        {
          opacity: 0.5,
          y: 20,
          duration: 0.6,
        },
        '-=0.4'
      );

    // Floating animation for the hero section
    gsap.to(heroRef.current, {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  const handleScrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero section">
      <div className="container hero-content" ref={heroRef}>
        <div className="hero-text">
          <h1 ref={titleRef} className="hero-title">
            Venu K
          </h1>
          <p ref={subtitleRef} className="hero-subtitle">
            MERN Stack Developer
          </p>
          <p ref={descriptionRef} className="hero-description">
            Passionate about building dynamic, scalable web applications with modern
            technologies. Specialized in full-stack development with React, Node.js, and
            MongoDB.
          </p>
          <div ref={ctaRef} className="hero-cta">
            <button
              className="btn btn-primary"
              onClick={() => handleScrollToSection('#projects')}
            >
              View My Work
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleScrollToSection('#contact')}
            >
              <a href="src/file/venu resume.pdf" target='#_blank'>
              Hire me
              </a>
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-1">
            <span>React.js</span>
          </div>
          <div className="floating-card card-2">
            <span>Node.js</span>
          </div>
          <div className="floating-card card-3">
            <span>MongoDB</span>
          </div>
          <div className="animated-shape"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
