import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../widgets/metric_card.dart';

class WeatherPage extends StatelessWidget {
  const WeatherPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'मौसम जानकारी',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          const Text(
            'तापमान, आर्द्रता, बारिश और हवा की गति देखें।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: ListView.builder(
              itemCount: weatherForecasts.length,
              itemBuilder: (context, index) {
                final forecast = weatherForecasts[index];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: MetricCard(
                    label: forecast.day,
                    value: '${forecast.temperature}°C',
                    subtitle: forecast.summary,
                    detail: 'हिम्‍मिडिटी ${forecast.humidity}% · बारिश ${forecast.rainChance}%',
                  ),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
