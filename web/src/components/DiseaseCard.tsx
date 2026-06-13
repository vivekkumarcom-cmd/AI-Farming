import type { DiseaseResult } from '../data/mockData';

type DiseaseCardProps = {
  result: DiseaseResult;
  confidenceLabel: string;
  treatmentLabel: string;
};

export default function DiseaseCard({ result, confidenceLabel, treatmentLabel }: DiseaseCardProps) {
  return (
    <article className="disease-card">
      <div className="disease-summary">
        <h3>{result.disease}</h3>
        <span>{result.confidence}% {confidenceLabel}</span>
      </div>
      <p>{result.explanation}</p>
      <strong>{treatmentLabel}</strong>
      <p>{result.treatment}</p>
    </article>
  );
}
