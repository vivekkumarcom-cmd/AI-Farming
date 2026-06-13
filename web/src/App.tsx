import { ChangeEvent, useState } from 'react';
import FeatureCard from './components/FeatureCard';
import SectionHeader from './components/SectionHeader';
import MetricCard from './components/MetricCard';
import CropCard from './components/CropCard';
import FertilizerCard from './components/FertilizerCard';
import DiseaseCard from './components/DiseaseCard';
import InfoCard from './components/InfoCard';
import {
  awarenessTips,
  cropProfiles,
  diseaseSamples,
  fertilizerAdvice,
  homeFeatures,
  weatherForecasts,
} from './data/mockData';
import './index.css';

type PageKey = 'home' | 'weather' | 'crops' | 'fertilizer' | 'disease' | 'about';
type Language = 'en' | 'hi';

const text = {
  en: {
    appName: 'Smart Farming',
    appSubtitle: 'Farm Awareness Platform',
    language: 'Language',
    remember: 'Remember',
    rememberText: 'Local weather insights and sustainable farming improve farmer decisions.',
    nav: {
      home: { label: 'Dashboard', subtitle: 'Simple overview page' },
      weather: { label: 'Weather', subtitle: 'Farm weather forecast' },
      crops: { label: 'Crop Tracking', subtitle: 'Crop-wise information' },
      fertilizer: { label: 'Fertilizer', subtitle: 'Right fertilizer suggestions' },
      disease: { label: 'AI Disease Detection', subtitle: 'Disease analysis demo' },
      about: { label: 'Awareness', subtitle: 'Farm awareness tips' },
    },
    disease: {
      title: 'AI Disease Detection',
      subtitle: 'Demo disease prediction',
      uploadHint: 'Upload any crop image and view the result.',
      chooseImage: 'Choose Image',
      detect: 'Detect Disease',
      loading: 'Analyzing image...',
      modelHint: 'API-based detection with safe local mock fallback is enabled.',
      apiError: 'API unavailable. Showing fallback demo result.',
      confidence: 'confidence',
      treatment: 'Treatment',
      aiStructure: 'AI Architecture',
      aiStructureDesc: 'Prediction uses API / free-tier model with local fallback for demo reliability.',
      confidenceDesc: 'Model confidence is shown in percentage.',
    },
    labels: {
      growthStages: 'Growth Stages',
      waterNeed: 'Water Need',
      harvestPeriod: 'Harvest Period',
      temperature: 'Temperature',
      humidity: 'Humidity',
      rainfall: 'Rain Chance',
      wind: 'Wind',
      estimated: 'Estimated',
      moisture: 'Air moisture',
      rainChance: 'Chance of rain',
      windSpeed: 'Wind speed',
    },
    sections: {
      homeTitle: 'Official Dashboard',
      homeSubtitle: 'Quick overview of each module',
      farmerFriendly: 'Farmer-friendly',
      farmerFriendlyDesc: 'Simple wording and easy-to-read cards.',
      offlineDemo: 'Offline Demo',
      offlineDemoDesc: 'Runs with local data for reliable presentations.',
      schoolUse: 'School & Workshops',
      schoolUseDesc: 'Useful for awareness sessions and training demos.',
      awarenessTitle: 'Farm Awareness',
      awarenessSubtitle: 'Sustainable farming and water saving',
      weatherTitle: 'Weather Forecast',
      weatherSubtitle: 'Weather cards for farm decisions',
      cropTitle: 'Crop Tracking',
      cropSubtitle: 'View crop-wise status',
      fertilizerTitle: 'Fertilizer Advice',
      fertilizerSubtitle: 'Rule-based recommendations',
      aboutTitle: 'Farm Awareness',
      aboutSubtitle: 'Education, safety, and sustainable farming',
    },
  },
  hi: {
    appName: 'Smart Farming',
    appSubtitle: 'कृषि जागरूकता मंच',
    language: 'भाषा',
    remember: 'ध्यान रखें',
    rememberText: 'स्थानीय मौसम और जैविक खेती से किसान निर्णय बेहतर होते हैं।',
    nav: {
      home: { label: 'डैशबोर्ड', subtitle: 'सरल मुख्य पृष्ठ' },
      weather: { label: 'मौसम', subtitle: 'कृषि मौसम पूर्वानुमान' },
      crops: { label: 'फसल ट्रैकिंग', subtitle: 'प्रत्येक फसल की जानकारी' },
      fertilizer: { label: 'उर्वरक', subtitle: 'सही उर्वरक सुझाव' },
      disease: { label: 'AI रोग पहचान', subtitle: 'रोग का डेमो निरीक्षण' },
      about: { label: 'जानकारी', subtitle: 'खेती जागरूकता टिप्स' },
    },
    disease: {
      title: 'AI रोग पहचान',
      subtitle: 'रोग का अनुमान लगाने का डेमो',
      uploadHint: 'किसी भी फसल की तस्वीर अपलोड करें और परिणाम देखें।',
      chooseImage: 'चित्र चुनें',
      detect: 'रोग पहचानें',
      loading: 'चित्र का विश्लेषण हो रहा है...',
      modelHint: 'API आधारित पहचान उपलब्ध है, और असफल होने पर लोकल डेमो परिणाम दिखेगा।',
      apiError: 'API उपलब्ध नहीं है। डेमो परिणाम दिखाया गया है।',
      confidence: 'विश्वास',
      treatment: 'उपचार',
      aiStructure: 'AI संरचना',
      aiStructureDesc: 'डेमो विश्वसनीयता हेतु API / free-tier मॉडल और स्थानीय fallback का उपयोग होता है।',
      confidenceDesc: 'मॉडल की विश्वस्तता प्रतिशत में दिखती है।',
    },
    labels: {
      growthStages: 'विकास चरण',
      waterNeed: 'पानी आवश्यकता',
      harvestPeriod: 'कटाई अवधि',
      temperature: 'तापमान',
      humidity: 'आर्द्रता',
      rainfall: 'बारिश',
      wind: 'हवा',
      estimated: 'अनुमानित',
      moisture: 'वायु में नमी',
      rainChance: 'बारिश की संभावना',
      windSpeed: 'हवा की गति',
    },
    sections: {
      homeTitle: 'आधिकारिक डैशबोर्ड',
      homeSubtitle: 'हर मॉड्यूल का त्वरित अवलोकन',
      farmerFriendly: 'किसान-अनुकूल',
      farmerFriendlyDesc: 'सरल शब्दों में जानकारी और बड़े टैक्स्ट कार्ड।',
      offlineDemo: 'ऑफ़लाइन डेमो',
      offlineDemoDesc: 'स्थानीय डेटा से चलने वाली पूरी डेमो।',
      schoolUse: 'स्कूल और गोष्ठी',
      schoolUseDesc: 'प्रस्तुति के लिए उपयुक्त, दृश्य और शिक्षाप्रद।',
      awarenessTitle: 'कृषि जागरूकता',
      awarenessSubtitle: 'सतत खेती और पानी बचत',
      weatherTitle: 'मौसम पूर्वानुमान',
      weatherSubtitle: 'कृषि के अनुकूल मौसम कार्ड',
      cropTitle: 'फसल ट्रैकिंग',
      cropSubtitle: 'प्रत्येक फसल की स्थिति देखें',
      fertilizerTitle: 'उर्वरक सलाह',
      fertilizerSubtitle: 'रूल-आधारित सुझाव',
      aboutTitle: 'कृषि जागरूकता',
      aboutSubtitle: 'शिक्षा, सुरक्षा, और स्थिर खेती',
    },
  },
} as const;

const navItems: { key: PageKey; icon: string }[] = [
  { key: 'home', icon: '🏡' },
  { key: 'weather', icon: '☁️' },
  { key: 'crops', icon: '🌾' },
  { key: 'fertilizer', icon: '🌱' },
  { key: 'disease', icon: '🧪' },
  { key: 'about', icon: '📘' },
];

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [page, setPage] = useState<PageKey>('home');
  const [selectedCrop, setSelectedCrop] = useState<string>(cropProfiles[0].name);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [result, setResult] = useState(diseaseSamples[0]);
  const [detecting, setDetecting] = useState(false);
  const [detectError, setDetectError] = useState<string>('');

  const t = text[language];

  const advice = fertilizerAdvice[selectedCrop] || fertilizerAdvice.Wheat;

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setImageUrl(URL.createObjectURL(file));
  };

  const hashBytes = (bytes: Uint8Array) => {
    let h = 5381;
    for (let i = 0; i < bytes.length; i++) {
      h = ((h << 5) + h) + bytes[i];
      h = h >>> 0;
    }
    return h;
  };

  const handleDetect = async () => {
    setDetectError('');
    setDetecting(true);
    if (!selectedFile) {
      // fallback random if no file
      const next = diseaseSamples[Math.floor(Math.random() * diseaseSamples.length)];
      setResult(next);
      setDetecting(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_DISEASE_API_URL;
      const hfToken = import.meta.env.VITE_HF_API_TOKEN;
      const hfModel = import.meta.env.VITE_HF_MODEL ?? 'DunnBC22/vit-base-patch16-224-in21k_Hard_Split_80_10_10';

      if (apiUrl) {
        const formData = new FormData();
        formData.append('image', selectedFile);
        const response = await fetch(apiUrl, { method: 'POST', body: formData });

        if (!response.ok) {
          throw new Error(`API error: ${response.status}`);
        }

        const data = await response.json();
        setResult({
          disease: data.disease ?? diseaseSamples[0].disease,
          confidence: Number(data.confidence ?? diseaseSamples[0].confidence),
          treatment: data.treatment ?? diseaseSamples[0].treatment,
          explanation: data.explanation ?? diseaseSamples[0].explanation,
        });
      } else if (hfToken) {
        const response = await fetch(`https://api-inference.huggingface.co/models/${hfModel}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${hfToken}`,
            'Content-Type': selectedFile.type || 'application/octet-stream',
          },
          body: selectedFile,
        });

        if (!response.ok) {
          throw new Error(`HF API error: ${response.status}`);
        }

        const data = await response.json();
        const top = Array.isArray(data) ? data[0] : null;
        if (!top || !top.label) {
          throw new Error('HF response format unsupported');
        }

        const confidence = Math.round(Number(top.score ?? 0) * 100);
        setResult({
          disease: String(top.label),
          confidence: Number.isFinite(confidence) ? confidence : 70,
          treatment: language === 'hi'
            ? 'कृपया स्थानीय कृषि विशेषज्ञ से पुष्टि करें और उपयुक्त फफूंदनाशक/कीटनाशक सलाह लें।'
            : 'Please confirm with a local agronomist and apply the suitable fungicide/pesticide guidance.',
          explanation: language === 'hi'
            ? 'यह परिणाम Hugging Face free-tier मॉडल से प्राप्त है; वास्तविक स्थिति के लिए विशेषज्ञ जांच आवश्यक है।'
            : 'This result is generated using a Hugging Face free-tier model; expert verification is recommended.',
        });
      } else {
        const ab = await selectedFile.arrayBuffer();
        const bytes = new Uint8Array(ab);
        const h = hashBytes(bytes);
        const idx = h % diseaseSamples.length;
        setResult(diseaseSamples[idx]);
      }
    } catch (e) {
      const next = diseaseSamples[Math.floor(Math.random() * diseaseSamples.length)];
      setResult(next);
      setDetectError(t.disease.apiError);
    } finally {
      setDetecting(false);
    }
  };

  const activeNav = navItems.find((item) => item.key === page) ?? navItems[0];
  const activeText = t.nav[activeNav.key];
  const homeFeatureText = language === 'hi'
    ? homeFeatures
    : [
      { title: 'Weather Forecast', description: 'View farm weather data in simple cards.' },
      { title: 'Crop Tracking', description: 'Track crop growth and irrigation insights.' },
      { title: 'Fertilizer Advice', description: 'Simple crop-specific fertilizer suggestions.' },
      { title: 'AI Disease Detection', description: 'Demo disease prediction with recommendations.' },
    ];
  const awarenessText = language === 'hi'
    ? awarenessTips
    : [
      { heading: 'Water Conservation', text: 'Store rainwater and adopt drip irrigation for efficient water use.' },
      { heading: 'Organic Farming', text: 'Use natural compost and reduce chemical dependency to improve soil health.' },
      { heading: 'Government Schemes', text: 'Contact local agriculture centers to learn about latest farmer schemes.' },
      { heading: 'Farmer Groups', text: 'Form local groups to share costs, tools, and better farm decisions.' },
    ];
  const weatherText = language === 'hi'
    ? weatherForecasts
    : weatherForecasts.map((f, i) => ({
      ...f,
      day: ['Today', 'Tomorrow', 'Day After'][i] ?? f.day,
      summary: [
        'Mild sunshine, suitable for most farm activities.',
        'Cloud cover expected, plan irrigation timing carefully.',
        'Rain likely, keep field drainage ready.',
      ][i] ?? f.summary,
    }));

  // Translate crop profiles for the Crop Tracking page
  const cropProfilesText = language === 'hi'
    ? cropProfiles
    : cropProfiles.map((c) => ({
      ...c,
      // Swap Hindi values for English counterparts for the tracking cards
      name: c.name, 
      stage: c.name === 'Wheat' ? 'Vegetative' : c.name === 'Rice' ? 'Flowering' : 'Growth',
      waterNeed: c.name === 'Wheat' ? 'Medium' : 'High',
    }));

  // Ensure the current disease detection result translates when language changes
  const translatedResult = language === 'hi'
    ? result
    : (diseaseSamples.find(s => s.disease === result.disease) || result);

  // Translate fertilizer suggestions based on language
  const translatedSuggestions = language === 'hi'
    ? advice.suggestions
    : advice.suggestions.map((s: any) => ({
        ...s,
        name: s.name.includes('यूरिया') ? 'Urea' : s.name.includes('डीएपी') ? 'DAP' : 'Potash',
        time: s.time.includes('बुवाई') ? 'At Sowing' : 'Top Dressing',
      }));

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-scroll">
          <div className="brand-logo">🌿</div>
          <div>
            <h1>{t.appName}</h1>
            <p>{t.appSubtitle}</p>
          </div>
        </div>
        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item.key}
              className={page === item.key ? 'nav-button active' : 'nav-button'}
              onClick={() => setPage(item.key)}
              type="button"
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{t.nav[item.key].label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="page-content">
        <header className="page-topbar">
          <div>
            <p className="page-tag">{activeText.subtitle}</p>
            <h1>{activeText.label}</h1>
          </div>
          <div className="hero-card">
            <label style={{ display: 'block', marginBottom: 8 }}>
              <strong>{t.language}: </strong>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
                style={{ marginLeft: 8 }}
              >
                <option value="en">English</option>
                <option value="hi">हिंदी</option>
              </select>
            </label>
            <strong>{t.remember}</strong>
            <p>{t.rememberText}</p>
          </div>
        </header>

        {page === 'home' && (
          <section className="home-grid">
            <div className="panel-card">
              <SectionHeader title={t.sections.homeTitle} subtitle={t.sections.homeSubtitle} />
              <div className="feature-grid">
                {homeFeatures.map((item, idx) => (
                  <FeatureCard
                    key={item.title}
                    title={homeFeatureText[idx]?.title ?? item.title}
                    description={homeFeatureText[idx]?.description ?? item.description}
                    icon={item.icon}
                  />
                ))}
              </div>
              <div className="info-grid">
                <InfoCard heading={t.sections.farmerFriendly} description={t.sections.farmerFriendlyDesc} />
                <InfoCard heading={t.sections.offlineDemo} description={t.sections.offlineDemoDesc} />
                <InfoCard heading={t.sections.schoolUse} description={t.sections.schoolUseDesc} />
              </div>
            </div>
            <div className="summary-card">
              <SectionHeader title={t.sections.awarenessTitle} subtitle={t.sections.awarenessSubtitle} />
              <ul className="tip-list">
                {awarenessText.map((tip) => (
                  <li key={tip.heading}>
                    <strong>{tip.heading}</strong>
                    <p>{tip.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {page === 'weather' && (
          <section className="weather-page">
            <SectionHeader title={t.sections.weatherTitle} subtitle={t.sections.weatherSubtitle} />
            <div className="weather-grid">
              {weatherText.map((forecast) => (
                <article key={forecast.day} className="weather-card">
                  <div className="weather-top">
                    <span className="weather-icon">{forecast.icon}</span>
                    <div>
                      <h3>{forecast.day}</h3>
                      <p>{forecast.summary}</p>
                    </div>
                  </div>
                  <div className="metric-grid">
                    <MetricCard label={t.labels.temperature} value={`${forecast.temp}`} unit="°C" detail={t.labels.estimated} />
                    <MetricCard label={t.labels.humidity} value={`${forecast.humidity}`} unit="%" detail={t.labels.moisture} />
                    <MetricCard label={t.labels.rainfall} value={`${forecast.rainChance}`} unit="%" detail={t.labels.rainChance} />
                    <MetricCard label={t.labels.wind} value={`${forecast.wind}`} unit="km/h" detail={t.labels.windSpeed} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {page === 'crops' && (
          <section className="crop-page">
            <SectionHeader title={t.sections.cropTitle} subtitle={t.sections.cropSubtitle} />
            <div className="crop-grid">
              {cropProfilesText.map((crop) => (
                <CropCard
                  key={crop.name}
                  crop={crop}
                  language={language}
                  labels={{
                    growthStages: t.labels.growthStages,
                    waterNeed: t.labels.waterNeed,
                    harvestPeriod: t.labels.harvestPeriod,
                  }}
                />
              ))}
            </div>
          </section>
        )}

        {page === 'fertilizer' && (
          <section className="fertilizer-page">
            <SectionHeader title={t.sections.fertilizerTitle} subtitle={t.sections.fertilizerSubtitle} />
            <div className="selector-row">
              {cropProfiles.map((crop) => (
                <button
                  key={crop.name}
                  className={crop.name === selectedCrop ? 'pill selected' : 'pill'}
                  type="button"
                  onClick={() => setSelectedCrop(crop.name)}
                >
                  {language === 'hi' ? crop.hindi : crop.name}
                </button>
              ))}
            </div>
            <div className="fertilizer-grid">
              {translatedSuggestions.map((suggestion: any) => (
                <FertilizerCard key={suggestion.name} item={suggestion} />
              ))}
            </div>
          </section>
        )}

        {page === 'disease' && (
          <section className="disease-page">
            <SectionHeader title={t.disease.title} subtitle={t.disease.subtitle} />
            <div className="disease-layout">
              <div className="disease-panel">
                <p className="small-text">{t.disease.uploadHint}</p>
                <label className="upload-box">
                  <input type="file" accept="image/*" onChange={handleImageUpload} />
                  <span>{t.disease.chooseImage}</span>
                </label>
                {imageUrl && <img src={imageUrl} alt={language === 'hi' ? 'कृषि preview' : 'Crop preview'} className="image-preview" />}
                <button className="primary-button" type="button" onClick={handleDetect} disabled={detecting}>
                  {detecting ? t.disease.loading : t.disease.detect}
                </button>
                <p className="small-text">{t.disease.modelHint}</p>
                {detectError && <p className="small-text">{detectError}</p>}
              </div>
              <div className="result-panel">
                <DiseaseCard result={translatedResult} confidenceLabel={t.disease.confidence} treatmentLabel={t.disease.treatment} />
                <div className="info-grid">
                  <InfoCard heading={t.disease.aiStructure} description={t.disease.aiStructureDesc} />
                  <InfoCard heading={language === 'hi' ? 'विश्वास स्तर' : 'Confidence'} description={t.disease.confidenceDesc} />
                </div>
              </div>
            </div>
          </section>
        )}

        {page === 'about' && (
          <section className="about-page">
            <SectionHeader title={t.sections.aboutTitle} subtitle={t.sections.aboutSubtitle} />
            <div className="about-grid">
              <article className="about-card">
                <h3>{language === 'hi' ? 'जल संरक्षण' : 'Water Conservation'}</h3>
                <p>{language === 'hi' ? 'बारिश का पानी संग्रहित करें, मल्चिंग अपनाएँ और ड्रिप सिंचाई से जल उपयोग घटाएँ।' : 'Store rainwater, use mulching, and adopt drip irrigation to reduce water usage.'}</p>
              </article>
              <article className="about-card">
                <h3>{language === 'hi' ? 'जैविक खेती' : 'Organic Farming'}</h3>
                <p>{language === 'hi' ? 'रासायनिक सीमित करें, कम्पोस्ट बढ़ाएँ और मिट्टी के स्वास्थ्य को प्राथमिकता दें।' : 'Limit chemicals, increase compost use, and prioritize soil health.'}</p>
              </article>
              <article className="about-card">
                <h3>{language === 'hi' ? 'सरकारी योजना' : 'Government Schemes'}</h3>
                <p>{language === 'hi' ? 'किसान क्रेडिट कार्ड, बीमा और सब्सिडी का लाभ लेने के लिए स्थानीय कार्यालय से संपर्क करें।' : 'Contact local offices to access credit, insurance, and subsidy schemes.'}</p>
              </article>
              <article className="about-card">
                <h3>{language === 'hi' ? 'समूह समर्थन' : 'Group Support'}</h3>
                <p>{language === 'hi' ? 'छोटे किसान समूह बनाकर सामूहिक प्रशिक्षण, खर्च और बाज़ार विकास करें।' : 'Build farmer groups for shared training, costs, and market development.'}</p>
              </article>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
