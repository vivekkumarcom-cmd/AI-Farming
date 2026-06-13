import 'package:flutter/material.dart';
import '../data/mock_data.dart';

class CropCard extends StatelessWidget {
  final CropProfile crop;

  const CropCard({super.key, required this.crop});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        border: Border.all(color: Colors.green.shade100),
        boxShadow: [
          BoxShadow(
            color: Colors.black.withOpacity(0.04),
            blurRadius: 12,
            offset: const Offset(0, 6),
          ),
        ],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            children: [
              Container(
                width: 48,
                height: 48,
                decoration: BoxDecoration(
                  color: Colors.green.shade50,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: Center(child: Text(crop.icon, style: const TextStyle(fontSize: 24))),
              ),
              const SizedBox(width: 14),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(crop.hindi, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
                  const SizedBox(height: 4),
                  Text(crop.note, style: const TextStyle(fontSize: 14, color: Colors.black87)),
                ],
              ),
            ],
          ),
          const SizedBox(height: 16),
          Text('विकास चरण:', style: TextStyle(fontWeight: FontWeight.w700, color: Colors.green.shade700)),
          const SizedBox(height: 6),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: crop.growthStages
                .map((stage) => Chip(label: Text(stage), backgroundColor: Colors.green.shade50))
                .toList(),
          ),
          const SizedBox(height: 14),
          Text('पानी आवश्यकता: ${crop.waterNeed}', style: const TextStyle(fontWeight: FontWeight.w600)),
          const SizedBox(height: 8),
          Text('कटाई अवधि: ${crop.harvestTime}', style: const TextStyle(fontWeight: FontWeight.w600)),
        ],
      ),
    );
  }
}
