import 'dart:io';
import 'dart:typed_data';

import 'package:flutter/services.dart';
import 'package:image/image.dart' as img;
import 'package:tflite_flutter/tflite_flutter.dart';
import 'package:tflite_flutter_helper/tflite_flutter_helper.dart';

import '../data/mock_data.dart';

/// TfliteService loads a TFLite model (if present at `assets/models/model.tflite`)
/// and runs inference on picked images. If the model or assets are missing,
/// falls back to the deterministic mock behavior.
class TfliteService {
  Interpreter? _interpreter;
  List<String> _labels = [];
  bool _modelLoaded = false;

  // Model input parameters
  int _inputHeight = 224;
  int _inputWidth = 224;
  TensorImage? _inputImage;
  ImageProcessor? _imageProcessor;

  Future<void> loadModel() async {
    try {
      _interpreter = await Interpreter.fromAsset('assets/models/model.tflite');

      // load labels (labels.txt expected, one label per line)
      final labelsData = await rootBundle.loadString('assets/models/labels.txt');
      _labels = labelsData.split('\n').map((e) => e.trim()).where((e) => e.isNotEmpty).toList();

      // determine input size from model if possible
      final inputTensor = _interpreter!.getInputTensor(0);
      final shape = inputTensor.shape; // e.g. [1, 224, 224, 3]
      if (shape.length >= 3) {
        _inputHeight = shape[1];
        _inputWidth = shape[2];
      }

      _imageProcessor = ImageProcessorBuilder()
          .add(ResizeOp(_inputHeight, _inputWidth, ResizeMethod.BILINEAR))
          .add(NormalizeOp(127.5, 127.5))
          .build();

      _modelLoaded = true;
    } catch (e) {
      // If anything fails (missing model, asset, or package not available), keep mock behavior.
      _modelLoaded = false;
    }
  }

  bool get isModelLoaded => _modelLoaded;

  Future<DiseaseResult> detectDisease(String imagePath) async {
    if (!_modelLoaded || _interpreter == null) {
      // Fallback deterministic mock
      await Future<void>.delayed(const Duration(milliseconds: 400));
      int hash = 0;
      for (int i = 0; i < imagePath.length; i++) {
        hash = (hash * 31 + imagePath.codeUnitAt(i)) & 0x7fffffff;
      }
      return diseaseSamples[hash % diseaseSamples.length];
    }

    try {
      final file = File(imagePath);
      if (!await file.exists()) {
        return diseaseSamples[0];
      }

      final bytes = await file.readAsBytes();
      img.Image? image = img.decodeImage(bytes);
      if (image == null) return diseaseSamples[0];

      // Convert to TensorImage and run preprocessing
      _inputImage = TensorImage.fromImage(image);
      _inputImage = _imageProcessor!.process(_inputImage!);

      // Prepare input tensor buffer
      final inputTensor = _inputImage!.buffer;

      // Prepare output buffer according to label count
      final outputShape = [1, _labels.length];
      final outputBuffer = TensorBuffer.createFixedSize(outputShape, TfLiteType.float32);

      _interpreter!.run(inputTensor.buffer, outputBuffer.buffer);

      final probabilities = outputBuffer.getDoubleList();
      // find top result
      int maxIdx = 0;
      double maxVal = probabilities.isNotEmpty ? probabilities[0] : 0.0;
      for (int i = 1; i < probabilities.length; i++) {
        if (probabilities[i] > maxVal) {
          maxVal = probabilities[i];
          maxIdx = i;
        }
      }

      final label = _labels.isNotEmpty ? _labels[maxIdx] : 'Unknown';
      final confidence = (maxVal * 100).clamp(0, 100).toInt();

      // Try to find a matching sample for additional treatment text, fallback otherwise
      final match = diseaseSamples.firstWhere(
          (d) => d.name.toLowerCase().contains(label.toLowerCase()) || label.toLowerCase().contains(d.name.toLowerCase()),
          orElse: () => DiseaseResult(
                name: label,
                confidence: confidence,
                treatment: 'सुझाव उपलब्ध नहीं — लोकल विशेषज्ञ से सलाह लें।',
                explanation: 'मॉडल द्वारा भविष्यवाणी की गई श्रेणी: $label',
              ));

      return DiseaseResult(
        name: match.name,
        confidence: confidence,
        treatment: match.treatment,
        explanation: 'Model: $label — ${match.explanation}',
      );
    } catch (e) {
      // On error, fallback to mock
      int hash = 0;
      for (int i = 0; i < imagePath.length; i++) {
        hash = (hash * 31 + imagePath.codeUnitAt(i)) & 0x7fffffff;
      }
      return diseaseSamples[hash % diseaseSamples.length];
    }
  }
}
