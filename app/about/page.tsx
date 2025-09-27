import styles from '../../styles/About.module.css';

const skills = [
  { name: 'Java', percentage: 90 },
  { name: 'AWS', percentage: 80 },
  { name: 'Kafka', percentage: 75 },
  { name: 'Terraform', percentage: 70 },
  { name: 'SQL', percentage: 85 },
  { name: 'Micronaut', percentage: 80 },
  { name: 'Kubernetes', percentage: 75 },
];

export default function About() {
  return (
    <section className={styles.aboutSection}>
      <h2>About Me</h2>

      <div className={styles.aboutCard}>
        <ul className={styles.aboutList}>
          <li>
            Passionate backend developer with experience in building scalable and efficient applications.
          </li>
          <li>
            Enjoy designing robust systems, optimizing performance, and learning new technologies.
          </li>
          <li>
            Love traveling and exploring different cultures, which inspires creative problem-solving.
          </li>
        </ul>
      </div>

      <h3>My Skills</h3>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className={styles.skillPill}
            data-percentage={skill.percentage}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}
