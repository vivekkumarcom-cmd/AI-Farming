import 'package:flutter/material.dart';
import 'pages/about_page.dart';
import 'pages/crop_page.dart';
import 'pages/disease_page.dart';
import 'pages/fertilizer_page.dart';
import 'pages/home_page.dart';
import 'pages/weather_page.dart';

void main() {
  runApp(const SmartFarmingApp());
}

class SmartFarmingApp extends StatelessWidget {
  const SmartFarmingApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Smart Farming App',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.green.shade700),
        useMaterial3: true,
      ),
      home: const RootShell(),
    );
  }
}

class RootShell extends StatefulWidget {
  const RootShell({super.key});

  @override
  State<RootShell> createState() => _RootShellState();
}

class _RootShellState extends State<RootShell> {
  int _selectedIndex = 0;

  static const List<String> _titles = [
    'डैशबोर्ड',
    'मौसम',
    'फसल',
    'उर्वरक',
    'AI रोग',
    'जानकारी',
  ];

  static final List<Widget> _pages = [
    const HomePage(),
    const WeatherPage(),
    const CropPage(),
    const FertilizerPage(),
    const DiseasePage(),
    const AboutPage(),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(_titles[_selectedIndex]),
        centerTitle: true,
      ),
      body: _pages[_selectedIndex],
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.green.shade700,
        unselectedItemColor: Colors.black54,
        onTap: _onItemTapped,
        type: BottomNavigationBarType.fixed,
        items: const [
          BottomNavigationBarItem(icon: Icon(Icons.dashboard), label: 'होम'),
          BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'मौसम'),
          BottomNavigationBarItem(icon: Icon(Icons.grass), label: 'फसल'),
          BottomNavigationBarItem(icon: Icon(Icons.eco), label: 'उर्वरक'),
          BottomNavigationBarItem(icon: Icon(Icons.bug_report), label: 'रोग'),
          BottomNavigationBarItem(icon: Icon(Icons.info), label: 'जानकारी'),
        ],
      ),
    );
  }
}
