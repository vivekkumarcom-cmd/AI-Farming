import 'package:flutter/material.dart';
import '../data/mock_data.dart';

class FertilizerCard extends StatelessWidget {
  final FertilizerSuggestion item;

  const FertilizerCard({super.key, required this.item});

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
          Text(item.title, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.green)),
          const SizedBox(height: 10),
          Text(item.description, style: const TextStyle(fontSize: 14, color: Colors.black87)),
          const SizedBox(height: 10),
          Text('क्यों: ${item.benefit}', style: const TextStyle(fontSize: 14, color: Colors.black54)),
        ],
      ),
    );
  }
}
