import styles from '../styles/ProjectCard.module.css';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
}

export default function ProjectCard({ title, description, tech, link }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>

        <div className={styles.techStack}>
          {tech.map((item) => (
            <span key={item} className={styles.techBadge}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <a href={link} target="_blank" rel="noopener noreferrer" className={styles.viewButton}>
        View Project
      </a>
    </div>
  );
}
