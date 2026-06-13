type InfoCardProps = {
  heading: string;
  description: string;
};

export default function InfoCard({ heading, description }: InfoCardProps) {
  return (
    <div className="info-card">
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}
