import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../widgets/crop_card.dart';

class CropPage extends StatelessWidget {
  const CropPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'फसल ट्रैकिंग',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          const Text(
            'उपलब्ध फसलों के विकास चरण और सिंचाई सलाह देखें।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: ListView.builder(
              itemCount: cropProfiles.length,
              itemBuilder: (context, index) {
                final crop = cropProfiles[index];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: CropCard(crop: crop),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
