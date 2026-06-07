export type WeatherForecast = {
  day: string;
  label: string;
  temp: number;
  humidity: number;
  rainChance: number;
  wind: number;
  summary: string;
  icon: string;
};

export type CropProfile = {
  name: string;
  hindi: string;
  growthStages: string[];
  water: string;
  harvest: string;
  note: string;
  icon: string;
};

export type FertilizerSuggestion = {
  name: string;
  description: string;
  why: string;
};

export type FertilizerAdvice = {
  crop: string;
  suggestions: FertilizerSuggestion[];
};

export type DiseaseResult = {
  disease: string;
  confidence: number;
  treatment: string;
  explanation: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

export type AwarenessTip = {
  heading: string;
  text: string;
};

export const homeFeatures: FeatureItem[] = [
  {
    title: 'मौसम पूर्वानुमान',
    description: 'कृषि मौसम डेटा को सरल कार्ड में देखें।',
    icon: '☁️',
  },
  {
    title: 'फसल ट्रैकिंग',
    description: 'फसल की वृद्धि और सिंचाई की जानकारी।',
    icon: '🌾',
  },
  {
    title: 'उर्वरक सलाह',
    description: 'फसल के अनुरूप सरल उर्वरक सुझाव।',
    icon: '🌱',
  },
  {
    title: 'AI रोग पहचान',
    description: 'रोग पहचान का डेमो और उपचार सुझाव।',
    icon: '📷',
  },
];

export const weatherForecasts: WeatherForecast[] = [
  {
    day: 'आज',
    label: 'Sunny',
    temp: 32,
    humidity: 54,
    rainChance: 18,
    wind: 12,
    summary: 'हल्की धूप, किसान कार्यों के लिए अनुकूल।',
    icon: '☀️',
  },
  {
    day: 'कल',
    label: 'Cloudy',
    temp: 28,
    humidity: 68,
    rainChance: 42,
    wind: 9,
    summary: 'बादल छाने की संभावना, उचित सिंचाई समय चुनें।',
    icon: '⛅',
  },
  {
    day: 'परसों',
    label: 'Rain',
    temp: 24,
    humidity: 80,
    rainChance: 75,
    wind: 15,
    summary: 'बारिश के आसार, खेत साफ और तैयार रखें।',
    icon: '🌧️',
  },
];

export const cropProfiles: CropProfile[] = [
  {
    name: 'Wheat',
    hindi: 'गेहूं',
    icon: '🌾',
    growthStages: ['बुवाई', 'निकाली', 'हल्की हरियाली', 'कटाई तैयार'],
    water: 'हर 7-10 दिनों में 5-6 लीटर प्रति वर्गमीटर',
    harvest: '120-130 दिन',
    note: 'सर्दियों में सिंचाई योजना पर विशेष ध्यान दें।',
  },
  {
    name: 'Rice',
    hindi: 'धान',
    icon: '🌾',
    growthStages: ['पानी भरा खेत', 'कली फूटना', 'भावन', 'कटाई'],
    water: 'नियमित जल स्तर बनाए रखें, लगभग 8-10 लीटर',
    harvest: '110-140 दिन',
    note: 'गर्मी से पहले सही समय पर जल निकासी करें।',
  },
  {
    name: 'Tomato',
    hindi: 'टमाटर',
    icon: '🍅',
    growthStages: ['रोपण', 'फलन', 'रंग बदलना', 'फसल संग्रह'],
    water: 'हर 3-4 दिन में 3-4 लीटर',
    harvest: '70-90 दिन',
    note: 'फलों पर पानी सीधे न डालें, पत्ती सूखने पर सिंचाई करें।',
  },
  {
    name: 'Potato',
    hindi: 'आलू',
    icon: '🥔',
    growthStages: ['कटाई', 'उद्पत्ति', 'पत्तियाँ फैलना', 'फूस लगना'],
    water: 'हर 5-7 दिन में 4-5 लीटर',
    harvest: '90-110 दिन',
    note: 'पानी अधिक मात्रा में न दें, हल्की नमी पर्याप्त होती है।',
  },
  {
    name: 'Sugarcane',
    hindi: 'गन्ना',
    icon: '🍃',
    growthStages: ['नर्सरी', 'रोपण', 'हरियाली', 'गठना'],
    water: 'सात से दस दिनों में 10-12 लीटर',
    harvest: '10-12 महीने',
    note: 'मिट्टी को नम रखें और खरपतवार मुक्त रखें।',
  },
];

export const fertilizerAdvice: Record<string, FertilizerAdvice> = {
  Wheat: {
    crop: 'Wheat',
    suggestions: [
      {
        name: 'UREA',
        description: 'नाइट्रोजन की आवश्यकता को पूरा करता है, पत्तियों को हरा और स्वस्थ बनाता है।',
        why: 'गेहूं की साइट पर तेजी से विकास और बल बढ़ाने में मदद करता है।',
      },
      {
        name: 'NPK',
        description: 'समग्र पोषण के लिए समतुल्य नाइट्रोजन, फॉस्फोरस और पोटैशियम।',
        why: 'पनपती मजबूत और आहार संतुलन बनाए रखता है।',
      },
      {
        name: 'Organic Compost',
        description: 'मिट्टी की संरचना सुधारता है और दीर्घकालिक पोषण देता है।',
        why: 'रासायनिक उर्वरक पर निर्भरता घटाकर स्वास्थ्य फसलों को बढ़ावा देता है।',
      },
    ],
  },
  Rice: {
    crop: 'Rice',
    suggestions: [
      {
        name: 'NPK',
        description: 'धान की जड़ों के लिए जरूरी पोषक तत्व देता है।',
        why: 'फलन और दाने में वृद्धि में मदद करता है।',
      },
      {
        name: 'UREA',
        description: 'पत्तियों को हरा और लम्बी रखने में मदद करता है।',
        why: 'बोन्साई चरण में लक्षित नाइट्रोजन प्रदान करता है।',
      },
      {
        name: 'Organic Compost',
        description: 'जल धारण क्षमता बढ़ाने और मिट्टी की ताजगी के लिए।',
        why: 'नमी की अवधि के साथ कार्बनिक तत्व डालता है।',
      },
    ],
  },
  Tomato: {
    crop: 'Tomato',
    suggestions: [
      {
        name: 'NPK',
        description: 'फल और फूल विकास के लिए संतुलित पोषण।',
        why: 'मीठे और बड़े टमाटर उत्पादन में मदद करता है।',
      },
      {
        name: 'Organic Compost',
        description: 'मृदा स्वास्थ्य बनाए रखता है और संरचना सुधारता है।',
        why: 'कीट और रोग प्रतिरोधक क्षमता बढ़ाता है।',
      },
    ],
  },
  Potato: {
    crop: 'Potato',
    suggestions: [
      {
        name: 'UREA',
        description: 'तने और पत्तियां मजबूत बनाने के लिए नाइट्रोजन।',
        why: 'उत्पादकता बढ़ाने में मदद करता है।',
      },
      {
        name: 'NPK',
        description: 'आलू बटुए को भरपूर पोषक तत्व देता है।',
        why: 'मानव उपयुक्त मिट्टी और गांठ विकास के लिए।',
      },
      {
        name: 'Organic Compost',
        description: 'मिट्टी में कार्बनिक तत्व और नमी जोड़ता है।',
        why: 'स्वस्थ और स्वादिष्ट फसल बनाता है।',
      },
    ],
  },
  Sugarcane: {
    crop: 'Sugarcane',
    suggestions: [
      {
        name: 'UREA',
        description: 'लंबी अवधि के विकास के लिए नाइट्रोजन समर्थन।',
        why: 'पत्तियों को मजबूत और ऊंचाई बढ़ाने में सहायक।',
      },
      {
        name: 'NPK',
        description: 'कैन क्रॉप में उर्जा और बढ़ती जड़ों के लिए।',
        why: 'काटने योग्य द्रव्यमान और मिठास में सुधार।',
      },
      {
        name: 'Organic Compost',
        description: 'समृद्ध मिट्टी के लिए प्राकृतिक पोषक तत्व।',
        why: 'लोकेशन पर मिट्टी की हालत को स्थिर बनाता है।',
      },
    ],
  },
};

export const diseaseSamples: DiseaseResult[] = [
  {
    disease: 'ब्लाइट रोग',
    confidence: 93,
    treatment: 'संक्रमित पत्तियों को हटाएं, फफूंदनाशक का उपयोग करें।',
    explanation: 'भरी नमी और कमजोर पत्ती होने पर यह रोग जल्दी फैलता है।',
  },
  {
    disease: 'पीला पत्ती रोग',
    confidence: 87,
    treatment: 'ठीक समय पर पानी दें और संतुलित उर्वरक इस्तेमाल करें।',
    explanation: 'जीवाणु जनित रोग होने पर पत्तियों का रंग पीला हो जाता है।',
  },
  {
    disease: 'पत्ती का धब्बेदार रोग',
    confidence: 79,
    treatment: 'रोगग्रस्त भागों को काटें, सूखा मौसम बनाएं।',
    explanation: 'यह रोग आद्रता और असंतुलित पोषण से बढ़ता है।',
  },
];

export const awarenessTips: AwarenessTip[] = [
  {
    heading: 'जल संरक्षण',
    text: 'बारिश का पानी एकत्रित करें और ड्रिप सिंचाई जैसे आधुनिक तरीके अपनाएँ।',
  },
  {
    heading: 'जैविक खेती',
    text: 'रासायनिक उर्वरक के बजाय प्राकृतिक खाद का उपयोग कर मिट्टी की उपज बढ़ाएँ।',
  },
  {
    heading: 'सरकारी योजनाएं',
    text: 'कृषि विभाग की नई योजनाओं के लिए नजदीकी किसान केंद्र से जानकारी लें।',
  },
  {
    heading: 'सदस्यता समूह',
    text: 'छोटे किसान समूह बनाकर लागत साझा करें और अच्छे प्रबंधन निर्णय लें।',
  },
];
