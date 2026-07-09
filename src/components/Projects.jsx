import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/projects.css';

import localview from "../file/localview.png";
import amazon from "../file/amazon.png";
import task from "../file/task.png";
import weather from "../file/weather.png";
import calculator from "../file/calculator.png";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const projectsRef = useRef(null);
  const projectCardsRef = useRef([]);

  const projectsData = [
    {
      title: 'LocalView',
      description:
        'A service-based platform that helps customers book helpers for various tasks. Built with a focus on user experience and seamless booking process.',
      technologies: ['React.js', 'Firebase', 'Realtime Database', 'Authentication'],
      image: localview,
      link: 'https://service-management-ten.vercel.app/',
      repo:'https://github.com/VenuDev05/service-management.git'
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce application with product catalog, shopping cart, and payment integration. Features include user authentication, order management, and admin dashboard.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: amazon,
      link: 'https://amazon-eight-ruby.vercel.app/',
      repo:'https://github.com/VenuDev05/Amazon.git'
    },
    {
      title: 'Task Management',
      description:
        'Collaborative task management tool with real-time updates, team workspaces, and project tracking. Includes Priority and Date/Time.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: task,
      link: 'https://venudev05.github.io/To-Do-list/',
      repo:'https://github.com/VenuDev05/To-Do-list.git'
    },
    {
      title: 'Weather Application',
      description:
        'Real-time weather application with location-based forecasting. Features include interactive maps, weather alerts, and historical data visualization.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: weather,
      link: 'https://venudev05.github.io/weather/',
      repo:'https://github.com/VenuDev05/weather.git'
    },
    {
      title: 'Calculator',
      description:
        'A real time calculator with dynamic functional flow. Implemented beautiful color combinations and designed professionally.',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      image: calculator,
      link: 'https://venudev05.github.io/calculator/',
      repo:'https://github.com/VenuDev05/calculator.git'
    },
  ];

  useEffect(() => {
    projectCardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            once: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid" ref={projectsRef}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-card"
              ref={(el) => (projectCardsRef.current[index] = el)}
            >
              <div className="project-image-container">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />

                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <a href={project.repo} target='#_blank' className="project-btn">
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta">
          <p>Interested in my work? Let&apos;s collaborate!</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              const element = document.querySelector('#contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
