interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '0.5rem',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          overflow: 'hidden',
          transition: 'transform 0.3s, box-shadow 0.3s',
          cursor: 'pointer',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '160px', objectFit: 'cover' }}
        />
        <div style={{ padding: '1rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem' }}>{title}</h3>
          <p style={{ fontSize: '0.95rem', color: '#555' }}>{description}</p>
        </div>
      </div>
    </a>
  );
}
