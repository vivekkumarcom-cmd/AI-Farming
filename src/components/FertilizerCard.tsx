import type { FertilizerSuggestion } from '../data/mockData';

type FertilizerCardProps = {
  item: FertilizerSuggestion;
};

export default function FertilizerCard({ item }: FertilizerCardProps) {
  return (
    <article className="fertilizer-card">
      <div className="fertilizer-title">
        <h3>{item.name}</h3>
      </div>
      <p>{item.description}</p>
      <p className="fertilizer-why">{item.why}</p>
    </article>
  );
}
