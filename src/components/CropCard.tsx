import type { CropProfile } from '../data/mockData';

type CropCardProps = {
  crop: CropProfile;
  language: 'en' | 'hi';
  labels: {
    growthStages: string;
    waterNeed: string;
    harvestPeriod: string;
  };
};

export default function CropCard({ crop, language, labels }: CropCardProps) {
  return (
    <article className="crop-card">
      <div className="crop-heading">
        <span className="crop-icon">{crop.icon}</span>
        <div>
          <h3>{language === 'hi' ? crop.hindi : crop.name}</h3>
          <p>{crop.note}</p>
        </div>
      </div>

      <div className="crop-details">
        <div>
          <strong>{labels.growthStages}</strong>
          <ul>
            {crop.growthStages.map((stage) => (
              <li key={stage}>{stage}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong>{labels.waterNeed}</strong>
          <p>{crop.water}</p>
        </div>
        <div>
          <strong>{labels.harvestPeriod}</strong>
          <p>{crop.harvest}</p>
        </div>
      </div>
    </article>
  );
}
