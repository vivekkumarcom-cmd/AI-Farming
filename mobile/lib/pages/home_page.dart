import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../widgets/dashboard_card.dart';
import '../widgets/metric_card.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const Text(
            'Smart Farming Dashboard',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          const Text(
            'कृषि जागरूकता, मौसम और फसल सलाह के साथ आसान UI।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          const SizedBox(height: 20),
          const DashboardCard(
            title: 'मौसम पूर्वानुमान',
            description: 'मौसम को समझें और खेत कार्य योजना बनायें।',
            icon: Icons.wb_sunny,
          ),
          const DashboardCard(
            title: 'फसल ट्रैकिंग',
            description: 'फसल चरण, पानी आवश्यकताएँ और कटाई समय देखें।',
            icon: Icons.grass,
          ),
          const DashboardCard(
            title: 'उर्वरक सुझाव',
            description: 'रूल-आधारित उर्वरक सलाह और फायदे।',
            icon: Icons.eco,
          ),
          const DashboardCard(
            title: 'AI रोग पहचान',
            description: 'रोग पहचान का मॉक डेमो परिणाम।',
            icon: Icons.medical_information,
          ),
          const SizedBox(height: 24),
          const Text(
            'ताज़ा मौसम कार्ड',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w600),
          ),
          const SizedBox(height: 12),
          Column(
            children: weatherForecasts
                .map((forecast) => MetricCard(
                      label: forecast.day,
                      value: '${forecast.temperature}°C',
                      subtitle: forecast.summary,
                      detail: 'बारिश ${forecast.rainChance}% | हवा ${forecast.windSpeed} km/h',
                    ))
                .toList(),
          ),
        ],
      ),
    );
  }
}
