'use client';

import styles from '../styles/SectionTitle.module.css';

interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className={styles.sectionTitle}>{title}</h2>;
}
