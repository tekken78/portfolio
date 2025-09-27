'use client';

import { useState } from 'react';
import SectionTitle from '../../components/SectionTitle';
import styles from '../../styles/Contact.module.css';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/contact/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }

    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <div className={styles.contactContainer}>
      <SectionTitle title="Contact Me" />
      <p className={styles.contactIntro}>
        I’m always open to new opportunities or collaborations! Reach out via form or connect on social media.
      </p>

      <div className={styles.card}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
            <label>Your Name</label>
          </div>

          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={status === 'sending'}
            />
            <label>Your Email</label>
          </div>

          <div className={styles.inputGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              disabled={status === 'sending'}
            />
            <label>Your Message</label>
          </div>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status === 'success' && <p className={styles.toastSuccess}>Message sent successfully!</p>}
        {status === 'error' && <p className={styles.toastError}>Failed to send message. Try again.</p>}
      </div>

      <div className={styles.socialLinks}>
        <h3>Connect with me:</h3>
        <div className={styles.links}>
          <a href="https://github.com/tekken78" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/sahil-kumar-8a0095113/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
          <a href="mailto:krsahil799@gmail.com">
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </div>
  );
}
