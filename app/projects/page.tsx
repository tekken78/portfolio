import SectionTitle from '../../components/SectionTitle';
import ProjectCard from '../../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Next.js + CSS Modules portfolio website',
      image: '/portfolio.png',
      link: 'https://github.com/tekken78/portfolio',
    },
    {
      title: 'Blog App',
      description: 'React + Node.js blog application',
      image: '/blog.png',
      link: 'https://github.com/tekken78/blog-app',
    },
    {
      title: 'Task Manager',
      description: 'A simple task manager with React and TypeScript',
      image: '/task-manager.png',
      link: 'https://github.com/tekken78/task-manager',
    },
  ];

  return (
    <div style={{ padding: '2rem', maxWidth: '1000px', margin: '0 auto' }}>
      <SectionTitle title="Projects" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
