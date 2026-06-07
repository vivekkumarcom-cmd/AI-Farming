type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <div className="feature-card">
      <div className="feature-icon">{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
