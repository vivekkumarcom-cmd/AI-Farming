import 'package:flutter/material.dart';
import '../data/mock_data.dart';

class DiseaseResultCard extends StatelessWidget {
  final DiseaseResult result;

  const DiseaseResultCard({super.key, required this.result});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.green.shade100),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              const Icon(Icons.health_and_safety, color: Colors.green),
                  const SizedBox(width: 12),
                  Text(result.name, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
            ],
          ),
          const SizedBox(height: 10),
          Text('${result.confidence}% विश्वास', style: const TextStyle(fontSize: 16, color: Colors.green)),
          const SizedBox(height: 12),
          Text(result.explanation, style: const TextStyle(fontSize: 14, color: Colors.black87)),
          const SizedBox(height: 12),
          const Text('उपचार', style: TextStyle(fontWeight: FontWeight.bold)),
          Text(result.treatment, style: const TextStyle(fontSize: 14, color: Colors.black87)),
        ],
      ),
    );
  }
}
