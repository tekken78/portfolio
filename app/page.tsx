import Card from '../components/Card';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.innerContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
  <h1>Hi, I'm Sahil Kumar</h1>
  <p>Full-stack developer | React, Next.js, Node.js</p>
  <div className={styles.ctaButtons}>
    <a href="/contact" className={styles.ctaButton}>
      Get in Touch
    </a>
    <a href="/resume.pdf" className={styles.resumeCTA} target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  </div>
</section>


      {/* Skills Section */}
      <section className={styles.skills}>
        <h2>My Skills</h2>
        <div className={styles.skillBadges}>
          {['React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'CSS Modules'].map(skill => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className={styles.projects}>
        <h2>Featured Projects</h2>
        <div className={styles.projectCards}>
          <Card
            title="Portfolio Website"
            description="My personal portfolio built with Next.js and CSS Modules."
            link="https://github.com/tekken78/portfolio"
          />
          <Card
            title="Task Manager App"
            description="A full-stack task management app with Node.js backend."
            link="#"
          />
          <Card
            title="Blog Platform"
            description="Next.js blog platform with markdown support and SSR."
            link="#"
          />
        </div>
      </section>
      </div>
    </main>
  );
}
