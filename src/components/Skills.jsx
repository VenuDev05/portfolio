import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/skills.css';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  const skillsRef = useRef(null);
  const skillItemsRef = useRef([]);

  const skillsData = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 92 },
    { name: 'JavaScript', level: 94 },
    { name: 'React.js', level: 93 },
    { name: 'Node.js', level: 91 },
    { name: 'Express.js', level: 90 },
    { name: 'MongoDB', level: 89 },
    { name: 'PHP', level: 85 },
    { name: 'WordPress', level: 86 },
    { name: 'SQL', level: 88 },
    {name:'Firebase', level:80}
  ];

  useEffect(() => {
    const skillItems = skillItemsRef.current;

    skillItems.forEach((item, index) => {
      const progressBar = item.querySelector('.skill-progress-fill');

      gsap.registerEffect({
        name: 'animateSkillBar',
        effect: (targets) => {
          return gsap.to(targets, {
            width: skillsData[index].level + '%',
            duration: 1.5,
            ease: 'power2.out',
          });
        },
        defaults: { y: 0 },
      });

      ScrollTrigger.create({
        trigger: item,
        onEnter: () => {
          gsap.effects.animateSkillBar(progressBar);
        },
        once: true,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid" ref={skillsRef}>
          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              ref={(el) => (skillItemsRef.current[index] = el)}
            >
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.level}%</span>
              </div>
              <div className="skill-progress">
                <div className="skill-progress-fill"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <div className="highlight-box">
            <h3>Frontend</h3>
            <p>React.js, HTML5, CSS3, JavaScript - Creating responsive and interactive UIs</p>
          </div>
          <div className="highlight-box">
            <h3>Backend</h3>
            <p>Node.js, Express.js, MongoDB, SQL - Building scalable server applications</p>
          </div>
          <div className="highlight-box">
            <h3>CMS & Tools</h3>
            <p>WordPress, PHP - Content management and website development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
