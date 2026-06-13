class WeatherForecast {
  final String day;
  final String summary;
  final int temperature;
  final int humidity;
  final int rainChance;
  final int windSpeed;

  WeatherForecast({
    required this.day,
    required this.summary,
    required this.temperature,
    required this.humidity,
    required this.rainChance,
    required this.windSpeed,
  });
}

class CropProfile {
  final String name;
  final String hindi;
  final String icon;
  final List<String> growthStages;
  final String waterNeed;
  final String harvestTime;
  final String note;

  CropProfile({
    required this.name,
    required this.hindi,
    required this.icon,
    required this.growthStages,
    required this.waterNeed,
    required this.harvestTime,
    required this.note,
  });
}

class FertilizerSuggestion {
  final String title;
  final String description;
  final String benefit;

  FertilizerSuggestion({
    required this.title,
    required this.description,
    required this.benefit,
  });
}

class DiseaseResult {
  final String name;
  final int confidence;
  final String treatment;
  final String explanation;

  DiseaseResult({
    required this.name,
    required this.confidence,
    required this.treatment,
    required this.explanation,
  });
}

final weatherForecasts = <WeatherForecast>[
  WeatherForecast(
    day: 'आज',
    summary: 'हल्की धूप, खेत के काम के लिए अच्छा।',
    temperature: 32,
    humidity: 54,
    rainChance: 18,
    windSpeed: 12,
  ),
  WeatherForecast(
    day: 'कल',
    summary: 'बादल छाए रह सकते हैं, सिंचाई को संतुलित रखें।',
    temperature: 28,
    humidity: 68,
    rainChance: 42,
    windSpeed: 9,
  ),
  WeatherForecast(
    day: 'परसों',
    summary: 'बारिश की संभावना, खेत की तैयारी रखें।',
    temperature: 24,
    humidity: 80,
    rainChance: 75,
    windSpeed: 15,
  ),
];

final cropProfiles = <CropProfile>[
  CropProfile(
    name: 'Wheat',
    hindi: 'गेहूं',
    icon: '🌾',
    growthStages: ['बुवाई', 'निकाल', 'हरियाली', 'कटाई'],
    waterNeed: 'हर 7-10 दिन में 5-6 लीटर प्रति वर्गमीटर',
    harvestTime: '120-130 दिन',
    note: 'ठंडी फसल, समय पर गहरी जुताई जरूरी।',
  ),
  CropProfile(
    name: 'Rice',
    hindi: 'धान',
    icon: '🌾',
    growthStages: ['पानी भरा खेत', 'कली फूटना', 'भावन', 'कटाई'],
    waterNeed: '8-10 लीटर नियमित पानी',
    harvestTime: '110-140 दिन',
    note: 'मिट्टी को संतुलित पानी रखें।',
  ),
  CropProfile(
    name: 'Tomato',
    hindi: 'टमाटर',
    icon: '🍅',
    growthStages: ['रोपण', 'फलन', 'रंग बदलना', 'फसल संग्रह'],
    waterNeed: 'हर 3-4 दिन में 3-4 लीटर',
    harvestTime: '70-90 दिन',
    note: 'फल पर पानी न डालें, पत्ती सुखी रखें।',
  ),
  CropProfile(
    name: 'Potato',
    hindi: 'आलू',
    icon: '🥔',
    growthStages: ['कटाई', 'उद्भव', 'पत्तियाँ फैलना', 'फूस लगना'],
    waterNeed: 'हर 5-7 दिन में 4-5 लीटर',
    harvestTime: '90-110 दिन',
    note: 'मृदा का नमी संतुलन बनाए रखें।',
  ),
  CropProfile(
    name: 'Sugarcane',
    hindi: 'गन्ना',
    icon: '🍃',
    growthStages: ['नर्सरी', 'रोपण', 'हरियाली', 'कटाई तैयार'],
    waterNeed: '10-12 लीटर प्रत्येक सप्ताह',
    harvestTime: '10-12 महीने',
    note: 'धीमी वृद्धि वाली बड़ी फसल, निरंतर देखभाल चाहिए।',
  ),
];

final fertilizerAdvice = <String, List<FertilizerSuggestion>>{
  'Wheat': [
    FertilizerSuggestion(
      title: 'UREA',
      description: 'चक्रीय नाइट्रोजन प्रदान करता है और पत्तियों को हरा बनाता है।',
      benefit: 'तेजी से विकास और मजबूत पत्ती संरचना।',
    ),
    FertilizerSuggestion(
      title: 'NPK',
      description: 'समग्र पोषण के लिए संतुलित मिश्रण।',
      benefit: 'बेहतर कटाई और खेत की उपज।',
    ),
    FertilizerSuggestion(
      title: 'Organic Compost',
      description: 'मिट्टी की गुणवत्ता लंबे समय तक बढ़ाता है।',
      benefit: 'स्वस्थ मिट्टी और पर्यावरण समर्थित खेती।',
    ),
  ],
  'Rice': [
    FertilizerSuggestion(
      title: 'NPK',
      description: 'धान की अनुकूल वृद्धि के लिए पुरक।',
      benefit: 'बेहतर दाना और मजबूत जड़ प्रणाली।',
    ),
    FertilizerSuggestion(
      title: 'UREA',
      description: 'पत्तियों को पोषण देता है।',
      benefit: 'हराभरा तना और उत्पादन बढ़ाता है।',
    ),
    FertilizerSuggestion(
      title: 'Organic Compost',
      description: 'जल धारण क्षमता और मिट्टी संरचना सुधारता है।',
      benefit: 'लंबी अवधि तक उपज बनाए रखता है।',
    ),
  ],
  'Tomato': [
    FertilizerSuggestion(
      title: 'NPK',
      description: 'फल और फूल विकास के लिए।',
      benefit: 'टमाटर बड़े और रसदार बनते हैं।',
    ),
    FertilizerSuggestion(
      title: 'Organic Compost',
      description: 'मृदा स्वास्थ्य को प्राकृतिक रूप से बढ़ाता है।',
      benefit: 'बीमारियों की प्रतिरोधक क्षमता।',
    ),
  ],
  'Potato': [
    FertilizerSuggestion(
      title: 'UREA',
      description: 'तने और पत्तियों के विकास में सहायक।',
      benefit: 'उत्पादकता में बढ़ोतरी।',
    ),
    FertilizerSuggestion(
      title: 'NPK',
      description: 'आलू के गांठों को पोषण देता है।',
      benefit: 'गांठे बड़े और भरपूर बनती हैं।',
    ),
    FertilizerSuggestion(
      title: 'Organic Compost',
      description: 'मिट्टी में जैविक पदार्थ जोड़ता है।',
      benefit: 'स्वस्थ उपज और स्वाद।',
    ),
  ],
  'Sugarcane': [
    FertilizerSuggestion(
      title: 'UREA',
      description: 'लंबी उम्र की फसल को नाइट्रोजन देता है।',
      benefit: 'लंबाई और हरियाली बढ़ती है।',
    ),
    FertilizerSuggestion(
      title: 'NPK',
      description: 'मिठास और जड़ विकास में मदद।',
      benefit: 'बेहतर उपज और मजबूत पौधा।',
    ),
    FertilizerSuggestion(
      title: 'Organic Compost',
      description: 'मिट्टी की सतह को समृद्ध करता है।',
      benefit: 'दीर्घकालिक मिट्टी स्वास्थ्य।',
    ),
  ],
};

final diseaseSamples = <DiseaseResult>[
  DiseaseResult(
    name: 'ब्लाइट रोग',
    confidence: 93,
    treatment: 'संक्रमित पत्तियों को हटाएं और फफूंदनाशक का उपयोग करें।',
    explanation: 'आर्द्रता में यह रोग तेजी से फैलता है।',
  ),
  DiseaseResult(
    name: 'पीला पत्ती रोग',
    confidence: 87,
    treatment: 'संतुलित उर्वरक और समय पर सिंचाई करें।',
    explanation: 'पत्ती पीली और कमजोर हो जाती है।',
  ),
  DiseaseResult(
    name: 'धब्बेदार रोग',
    confidence: 79,
    treatment: 'रोगग्रस्त हिस्सों को काटें और खेत को सूखा रखें।',
    explanation: 'गंदगी और नमी से यह रोग बढ़ता है।',
  ),
];

final awarenessTips = <String>[
  'बारिश का पानी एकत्रित करके सिंचाई बचाएं।',
  'जैविक खाद से मिट्टी को स्वस्थ बनाएं।',
  'सरकारी योजनाओं की जानकारी अपने किसान केंद्र से प्राप्त करें।',
  'किसान समूह बनाकर लागत साझा करें।',
];
