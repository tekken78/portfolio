'use client';

import SectionTitle from '../../components/SectionTitle';
import styles from '../../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <SectionTitle title="About Me" />

      <div className={styles.bioCard}>
        <h2>Hello, I’m Sahil Kumar!</h2>
        <p>
          I’m a passionate Full-Stack Developer specializing in web development
          with React, Next.js, and Node.js. I love building clean, modern,
          and user-friendly interfaces.
        </p>
      </div>

      <div className={styles.skillsCard}>
        <h3>Skills & Technologies</h3>
        <ul className={styles.skillsList}>
          <li>Next.js / React / JavaScript / TypeScript</li>
          <li>Node.js / Express / REST APIs</li>
          <li>MongoDB / PostgreSQL / SQL</li>
          <li>CSS Modules / Material Design / Responsive UI</li>
          <li>Git / GitHub / CI/CD / Deployment</li>
        </ul>
      </div>

      <div className={styles.highlightsCard}>
        <h3>Fun Facts & Highlights</h3>
        <ul className={styles.highlightsList}>
          <li>Built multiple web apps and deployed them on GitHub Pages & Vercel</li>
          <li>Enjoys learning new frameworks and tools every weekend</li>
          <li>Loves solving algorithm problems and contributing to open source</li>
        </ul>
      </div>
    </div>
  );
}
