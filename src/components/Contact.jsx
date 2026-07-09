import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../styles/contact.css';
import emailjs from "@emailjs/browser";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const contactRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: contactRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_03z10rm",
        "template_12fwvah",
        formRef.current,
        "1bA-u34Rl7UeQWW8N"
      )
      .then(() => {
        gsap.to(formRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          onComplete: () => {
            setIsSubmitted(true);

            gsap.fromTo(
              ".submission-message",
              {
                opacity: 0,
                scale: 0.8,
              },
              {
                opacity: 1,
                scale: 1,
                duration: 0.5,
              }
            );
          },
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };

  const handleReset = () => {
    gsap.to('.submission-message', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      onComplete: () => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        gsap.fromTo(
          formRef.current,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.5 }
        );
      },
    });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container" ref={contactRef}>
        <h2 className="section-title">Get In Touch</h2>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Let&apos;s Connect</h3>
            <p>
              I&apos;m always interested in hearing about new projects and opportunities.
              Feel free to reach out if you&apos;d like to collaborate or just have a chat!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <p className="contact-label">Email</p>
                  <a href="mailto:venu.dev63@gmail.com">venu.dev63@gmail.com</a>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Phone</p>
                  <p>+91 63815 67863</p>
                </div>
              </div>

              <div className="contact-item">
                <span className="contact-icon">🔗</span>
                <div>
                  <p className="contact-label">Social Links</p>
                  <div className="social-links">
                    <a href="https://github.com/VenuDev05" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/venu03/" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} ref={formRef}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    rows="6"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            ) : (
              <div className="submission-message">
                <div className="success-icon">✓</div>
                <h4>Message Sent Successfully!</h4>
                <p>Thank you for reaching out. I&apos;ll get back to you as soon as possible.</p>
                <button onClick={handleReset} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
