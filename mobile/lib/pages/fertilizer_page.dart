import 'package:flutter/material.dart';
import '../data/mock_data.dart';
import '../widgets/fertilizer_card.dart';

class FertilizerPage extends StatefulWidget {
  const FertilizerPage({super.key});

  @override
  State<FertilizerPage> createState() => _FertilizerPageState();
}

class _FertilizerPageState extends State<FertilizerPage> {
  String selectedCrop = cropProfiles.first.name;

  @override
  Widget build(BuildContext context) {
    final suggestions = fertilizerAdvice[selectedCrop] ?? [];

    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'उर्वरक सुझाव',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          const Text(
            'अपनी फसल चुनें और सबसे उपयुक्त सुझाव देखें।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          const SizedBox(height: 20),
          Wrap(
            spacing: 10,
            runSpacing: 10,
            children: cropProfiles.map((crop) {
              final isSelected = crop.name == selectedCrop;
              return ChoiceChip(
                label: Text(crop.hindi),
                selected: isSelected,
                selectedColor: Colors.green.shade700,
                onSelected: (_) => setState(() {
                  selectedCrop = crop.name;
                }),
              );
            }).toList(),
          ),
          const SizedBox(height: 20),
          Expanded(
            child: ListView.builder(
              itemCount: suggestions.length,
              itemBuilder: (context, index) {
                final item = suggestions[index];
                return Padding(
                  padding: const EdgeInsets.only(bottom: 16),
                  child: FertilizerCard(item: item),
                );
              },
            ),
          ),
        ],
      ),
    );
  }
}
