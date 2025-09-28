import styles from '../../styles/About.module.css';

const techSkills = [
  { name: 'Java', percentage: 90 },
  { name: 'AWS', percentage: 80 },
  { name: 'Kafka', percentage: 75 },
  { name: 'Terraform', percentage: 70 },
  { name: 'SQL', percentage: 85 },
  { name: 'Micronaut', percentage: 80 },
  { name: 'Kubernetes', percentage: 75 },
];

const nonTechSkills = [
  { name: 'Problem Solving', percentage: 90 },
  { name: 'Team Collaboration', percentage: 85 },
  { name: 'Adaptability', percentage: 80 },
  { name: 'Creative Writing', percentage: 70 },
  { name: 'Communication', percentage: 85 },
];

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.aboutCard}>
        <ul className={styles.aboutList}>
          <li>Backend developer who loves building fast, reliable, and scalable systems.</li>
          <li>Enjoys optimizing performance and experimenting with new tech.</li>
          <li>Finds inspiration in traveling and exploring different cultures.</li>
          <li>Writes occasionally when the mood strikes.</li>
        </ul>
      </div>

      <div className={styles.skillsCards}>
        {/* Tech Skills */}
        <div className={`${styles.skillCard} ${styles.techCard}`}>
          <h3>Tech Skills</h3>
          <div className={styles.skillsContainer}>
            {techSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={styles.skillPill}
                data-percentage={skill.percentage}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                💻 {skill.name}
              </div>
            ))}
          </div>
        </div>

        {/* Non-Tech Skills */}
        <div className={`${styles.skillCard} ${styles.nonTechCard}`}>
          <h3>Non-Tech Skills</h3>
          <div className={styles.skillsContainer}>
            {nonTechSkills.map((skill, index) => (
              <div
                key={skill.name}
                className={styles.skillPill}
                data-percentage={skill.percentage}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                🤝 {skill.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
