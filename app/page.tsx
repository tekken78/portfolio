'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Card from '../components/Card';
import styles from '../styles/Home.module.css';
import Experience from '@/components/Experience';

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
          return prev; // typing finished
        }
        return prev + nextChar;
      });
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const projects = [
    { title: 'Portfolio Website', description: 'My personal portfolio built with Next.js and CSS Modules.', link: 'https://github.com/tekken78/portfolio' },
    { title: 'Task Manager App', description: 'A full-stack task management app with Node.js backend.', link: '#' },
    { title: 'Blog Platform', description: 'Next.js blog platform with markdown support and SSR.', link: '#' },
  ];

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroHeading}>
            {displayedText}
            {showCursor && <span className={styles.cursor}></span>}
          </h1>
          <p>Senior Member of Technical Staff | Oracle</p>
          <p>Travel enthusiast</p>
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
        <h2>Featured Projects</h2>
        <div className={styles.projectCards}>
          {projects.map((project) => <Card key={project.title} {...project} />)}
        </div>
      </section>
    </main>
  );
}
