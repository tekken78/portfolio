'use client';

import Image from 'next/image';
import styles from '../../styles/Projects.module.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Next.js, React, and CSS Modules.',
    link: 'https://github.com/tekken78/portfolio',
    tech: ['Next.js', 'React', 'CSS Modules'],
    featured: true,
  },
  {
    title: 'Task Manager App',
    description: 'Full-stack task management app with Node.js backend and MongoDB.',
    link: '#',
    tech: ['Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Blog Platform',
    description: 'Next.js blog platform with markdown support and server-side rendering.',
    link: '#',
    tech: ['Next.js', 'Markdown', 'SSR'],
  },
  {
    title: 'E-commerce Store',
    description: 'A complete e-commerce solution with shopping cart and payment integration.',
    link: '#',
    tech: ['React', 'Stripe', 'Firebase'],
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <main className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>Featured Projects</h1>

      <div className={styles.featuredGrid}>
        {featuredProjects.map((project) => (
          <div key={project.title} className={styles.featuredCard}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
              View Project
            </a>
          </div>
        ))}
      </div>

      <h1 className={styles.pageTitle}>Other Projects</h1>
      <div className={styles.projectGrid}>
        {regularProjects.map((project) => (
          <div key={project.title} className={styles.projectCard}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.tech.map((tech) => (
                <span key={tech} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
              View Project
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}
