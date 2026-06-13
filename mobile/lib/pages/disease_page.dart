import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:permission_handler/permission_handler.dart';
import '../data/mock_data.dart';
import '../services/tflite_service.dart';
import '../widgets/disease_result_card.dart';

class DiseasePage extends StatefulWidget {
  const DiseasePage({super.key});

  @override
  State<DiseasePage> createState() => _DiseasePageState();
}

class _DiseasePageState extends State<DiseasePage> {
  final TfliteService _service = TfliteService();
  DiseaseResult? _result;
  bool _isLoading = false;
  bool _imageSelected = false;
  String? _selectedImageId;
  String? _selectedImagePath;
  final ImagePicker _picker = ImagePicker();

  Future<void> _runDetection() async {
    setState(() {
      _isLoading = true;
    });

    if (!_service.isModelLoaded) {
      await _service.loadModel();
    }

    final disease = await _service.detectDisease(_selectedImagePath ?? _selectedImageId ?? 'demo_image');

    setState(() {
      _result = disease;
      _isLoading = false;
    });
  }

  Future<void> _pickImage(ImageSource source) async {
    final ok = await _ensurePermissions(source);
    if (!ok) return;

    final XFile? picked = await _picker.pickImage(source: source);
    if (picked == null) return;
    setState(() {
      _selectedImagePath = picked.path;
      _imageSelected = true;
      _result = null;
      _selectedImageId = 'image_${DateTime.now().millisecondsSinceEpoch}';
    });
  }

  Future<bool> _ensurePermissions(ImageSource source) async {
    final List<Permission> toRequest = [];
    if (source == ImageSource.camera) {
      toRequest.add(Permission.camera);
    }

    if (Platform.isAndroid) {
      toRequest.add(Permission.storage);
    } else if (Platform.isIOS) {
      toRequest.add(Permission.photos);
    }

    if (toRequest.isEmpty) return true;

    final statuses = await toRequest.request();
    final allGranted = statuses.values.every((s) => s.isGranted);
    if (!allGranted) {
      final anyPermanentlyDenied = statuses.values.any((s) => s.isPermanentlyDenied || s.isRestricted);
      final message = anyPermanentlyDenied
          ? 'Permissions permanently denied. Please enable them in app settings.'
          : 'Permissions are required to select or capture images.';
      await _showPermissionDeniedDialog(message, anyPermanentlyDenied);
    }
    return allGranted;
  }

  Future<void> _showPermissionDeniedDialog(String message, bool showSettings) async {
    await showDialog<void>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('अनुमति आवश्यक है'),
        content: Text(message),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('रद्द करें'),
          ),
          if (showSettings)
            TextButton(
              onPressed: () async {
                Navigator.of(context).pop();
                await openAppSettings();
              },
              child: const Text('सेटिंग्स खोलें'),
            ),
        ],
      ),
    );
  }

  Future<void> _showImageSourceActionSheet() async {
    showModalBottomSheet<void>(
      context: context,
      builder: (BuildContext bc) {
        return SafeArea(
          child: Wrap(
            children: <Widget>[
              ListTile(
                leading: const Icon(Icons.photo_library),
                title: const Text('गैलरी से चुनें'),
                onTap: () {
                  Navigator.of(context).pop();
                  _pickImage(ImageSource.gallery);
                },
              ),
              ListTile(
                leading: const Icon(Icons.camera_alt),
                title: const Text('कैमरा से लें'),
                onTap: () {
                  Navigator.of(context).pop();
                  _pickImage(ImageSource.camera);
                },
              ),
            ],
          ),
        );
      },
    );
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text(
            'AI रोग पहचान',
            style: TextStyle(fontSize: 28, fontWeight: FontWeight.bold),
          ),
          const SizedBox(height: 12),
          const Text(
            'कृपया फसल की तस्वीर चुनें और मॉक रोग पहचान परिणाम देखें।',
            style: TextStyle(fontSize: 16, color: Colors.black87),
          ),
          const SizedBox(height: 20),
          ElevatedButton.icon(
            icon: const Icon(Icons.upload_file),
            label: const Text('चित्र अपलोड करें'),
            onPressed: _showImageSourceActionSheet,
          ),
          const SizedBox(height: 16),
          if (_imageSelected)
            Container(
              width: double.infinity,
              height: 180,
              decoration: BoxDecoration(
                color: Colors.green.shade50,
                borderRadius: BorderRadius.circular(18),
                border: Border.all(color: Colors.green.shade200),
              ),
              child: _selectedImagePath != null
                  ? ClipRRect(
                      borderRadius: BorderRadius.circular(18),
                      child: Image.file(
                        File(_selectedImagePath!),
                        fit: BoxFit.cover,
                        width: double.infinity,
                        height: 180,
                      ),
                    )
                  : const Center(
                      child: Text(
                        'कृषि चित्र लोड किया गया',
                        style: TextStyle(fontSize: 16, color: Colors.black54),
                      ),
                    ),
            ),
          const SizedBox(height: 20),
          ElevatedButton.icon(
            icon: const Icon(Icons.analytics),
            label: const Text('रोग पहचानें'),
            onPressed: _imageSelected && !_isLoading ? _runDetection : null,
          ),
          const SizedBox(height: 20),
          if (_isLoading) const Center(child: CircularProgressIndicator()),
          if (_result != null) DiseaseResultCard(result: _result!),
        ],
      ),
    );
  }
}
