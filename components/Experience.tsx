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
    description: '',
  },
  {
    title: 'Lead Software Engineer',
    company: 'Fidelity Investments',
    duration: 'Oct 2023 - Sept 2024',
    description: 'Built a high-throughput Kafka system with Spring Boot 3, processing 20M+ real-time events daily with zero data loss.',
  },
  {
    title: 'Software Engineer',
    company: 'Fidelity Investments',
    duration: 'Sept 2020 - Sept 2023',
    description: 'Developed Spring Boot APIs and microservices on APIGEE, powering cloud-based trade processing for 10M+ rows securely.',
  },
  {
    title: 'Associate Software Engineer',
    company: 'Fidelity Investments',
    duration: 'Aug 2019 - Aug 2020',
    description: 'Built high-performance batch processing applications with Spring Batch, optimized databases, and automated CI/CD with Jenkins.',
  },
  {
    title: 'Summer Intern',
    company: 'Deloitte',
    duration: 'May 2018 - July 2018',
    description: 'Created insightful Power BI reports using SQL and Oracle Cloud tools to drive data-driven decisions.',
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
