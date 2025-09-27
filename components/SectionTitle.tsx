interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
  return (
    <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>{title}</h2>
  );
}
