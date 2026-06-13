type MetricCardProps = {
  label: string;
  value: string;
  unit: string;
  detail: string;
};

export default function MetricCard({ label, value, unit, detail }: MetricCardProps) {
  return (
    <div className="metric-card">
      <div className="metric-top">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
      <p>{detail}</p>
      <span className="metric-unit">{unit}</span>
    </div>
  );
}
