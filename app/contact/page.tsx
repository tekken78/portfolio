'use client';

import SectionTitle from '../../components/SectionTitle';
import styles from '../../styles/Contact.module.css';

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <SectionTitle title="Contact Me" />

      <p className={styles.contactIntro}>
        I’m always open to new opportunities or collaborations! Feel free to reach out using the form below or connect via social links.
      </p>

      <div className={styles.card}>
        <form
          className={styles.contactForm}
          onSubmit={(e) => {
            e.preventDefault();
            alert('Message submitted!');
          }}
        >
          <div className={styles.inputGroup}>
            <input type="text" required />
            <label>Your Name</label>
          </div>
          <div className={styles.inputGroup}>
            <input type="email" required />
            <label>Your Email</label>
          </div>
          <div className={styles.inputGroup}>
            <textarea required rows={5}></textarea>
            <label>Your Message</label>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className={styles.socialLinks}>
        <h3>Connect with me:</h3>
        <div className={styles.links}>
          <a href="https://github.com/tekken78" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sahil-kumar-8a0095113/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:krsahil799@gmail.com">Email</a>
        </div>
      </div>
    </div>
  );
}
