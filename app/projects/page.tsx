'use client';

import ProjectCard from '../../components/ProjectCard';
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
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <main className={styles.projectsContainer}>
      <h1 className={styles.pageTitle}>Featured Projects</h1>
      <div className={styles.featuredGrid}>
        {featuredProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>

      <h1 className={styles.pageTitle}>Other Projects</h1>
      <div className={styles.projectGrid}>
        {regularProjects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </main>
  );
}
