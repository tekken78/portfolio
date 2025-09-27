'use client';
import styles from '../styles/Experience.module.css';

type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  description: string;
};

const experiences = [
  {
    title: 'Senior Member of Technical Staff',
    company: 'Oracle',
    duration: 'Oct 2024 - Present',
    description: 'Built microservices using Java and Micronaut on AWS.',
  },
  {
    title: 'Lead Software Engineer',
    company: 'Fidelity Investments',
    duration: 'Oct 2023 - Sept 2024',
    description: 'Worked on Kafka pipelines and SQL optimization.',
  },
  {
    title: 'Software Engineer',
    company: 'Fidelity Investments',
    duration: 'Aug 2019 - Sept 2024',
    description: 'Worked on Kafka pipelines and SQL optimization.',
  },
  {
    title: 'Summer Intern',
    company: 'Deloitte',
    duration: 'May 2018 - July 2018',
    description: 'Contributed to Terraform automation and cloud setup.',
  },
];

export default function Timeline() {
  return (
    <section className={styles.timelineSection}>
      <h2 className={styles.timelineTitle}>Journey</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={exp.title}
              className={`${styles.timelineItem} ${isLeft ? styles.left : styles.right}`}
            >
              <div className={styles.content}>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
              <div className={styles.dot}></div>
            </div>
          );
        })}
        <div className={styles.timelineBar}></div>
      </div>
    </section>
  );
}
