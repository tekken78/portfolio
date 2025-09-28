'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import Experience from '@/components/Experience';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const fullText = "Hi, I'm Sahil Kumar";
  const [displayedText, setDisplayedText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        const nextChar = fullText.charAt(prev.length);
        if (!nextChar) {
          clearInterval(interval);
          setShowCursor(false);
          return prev;
        }
        return prev + nextChar;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

const projects = [
  {
    title: 'Portfolio Website',
    description: 'My personal portfolio built with Next.js, React, and CSS Modules.',
    link: 'https://github.com/tekken78/portfolio',
    tech: ['Next.js', 'React', 'CSS Modules'],
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

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            {displayedText}
            {showCursor && <span className={styles.cursor}></span>}
          </h1>
          <p>Engineering the backend, inspired by the world.</p>
          <div className={styles.ctaButtons}>
            <a href="/contact" className={styles.ctaButton}>Get in Touch</a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeCTA}>Resume</a>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image src="/profile.jpg" alt="Sahil Kumar" width={180} height={180} className={styles.heroAvatar} />
        </div>
      </section>
      <Experience /> 
      <section className={styles.projects}>
  <h2 className={styles.pageTitle}>Featured Projects</h2>
  <div className={styles.projectCards}>
    {projects.map((project) => (
      <ProjectCard key={project.title} {...project} />
    ))}
  </div>
</section>

    </main>
  );
}
