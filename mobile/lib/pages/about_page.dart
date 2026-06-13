import 'package:flutter/material.dart';

class AboutPage extends StatelessWidget {
  const AboutPage({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'जानकारी और जागरूकता',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          SizedBox(height: 12),
          Text(
            'सतत खेती, पानी संरक्षण और सरकारी योजनाओं के बारे में सरल जानकारी।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          SizedBox(height: 20),
          _InfoCard(
            title: 'जल संरक्षण',
            description: 'बारिश का पानी इकट्ठा करें, ड्रिप सिंचाई अपनाएँ, और सिंचाई को योजनाबद्ध करें।',
          ),
          _InfoCard(
            title: 'जैविक खेती',
            description: 'रासायनिक उर्वरक की जगह प्राकृतिक खाद का उपयोग करें और मिट्टी को स्वस्थ रखें।',
          ),
          _InfoCard(
            title: 'सरकारी योजना',
            description: 'किसान क्रेडिट कार्ड, बीमा और सब्सिडी योजनाओं के बारे में अपने नजदीकी केंद्र से जानकारी लें।',
          ),
          _InfoCard(
            title: 'समूह समर्थन',
            description: 'छोटे किसान समूह बनाएं, लागत साझा करें और बेहतर बाज़ार पहुँच प्राप्त करें।',
          ),
        ],
      ),
    );
  }
}

class _InfoCard extends StatelessWidget {
  final String title;
  final String description;

  const _InfoCard({required this.title, required this.description});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 16),
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
          Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
          const SizedBox(height: 8),
          Text(description, style: const TextStyle(fontSize: 15, color: Colors.black87)),
        ],
      ),
    );
  }
}
