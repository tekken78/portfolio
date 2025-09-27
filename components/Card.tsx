import styles from '../styles/Card.module.css';

interface CardProps {
  title: string;
  description: string;
  link: string;
}

export default function Card({ title, description, link }: CardProps) {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Demo
        </a>
      )}
    </div>
  );
}
