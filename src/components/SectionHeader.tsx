type SectionHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <p className="section-subtitle">{subtitle}</p>
      <h2>{title}</h2>
    </div>
  );
}
