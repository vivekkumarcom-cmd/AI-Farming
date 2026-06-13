# Smart Farming Demo

A demo project containing a single web application built with React + Vite.
The web app is responsive and compatible with mobile browsers for easy presentation on phones and tablets.

## Web App

### Run

1. Open a terminal in `smart-farming-demo/web`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Open the local URL shown in the terminal to view the Smart Farming dashboard.

### Build

```bash
npm run build
```

### Vercel Deployment Note
If you encounter a `Permission denied` error for `tsc` or `vite` during build:
1. Ensure `node_modules` is **not** committed to your repository.
2. Use `npx` in your `package.json` build scripts:
   `"build": "npx tsc && npx vite build"`
```

### Production

The React app is built with Vite and TypeScript using local mock data only. There is no database or backend dependency.

## Features

- मौसम जानकारी
- फसल ट्रैकिंग
- उर्वरक सुझाव
- AI रोग पहचान
- हिंदी लेबल और टैक्स्ट
- Responsive modern UI
- Offline-friendly static mock data
- No authentication or database required

### Android SDK / APK notes (Windows)

- Building an APK requires the Android SDK and platform tools installed and `ANDROID_HOME`/`ANDROID_SDK_ROOT` set in your environment.
- If you don't have the Android SDK, install Android Studio (recommended) and create an emulator or connect a physical device.
- Example quick checks (PowerShell):

```powershell
# Verify flutter can find Android SDK
flutter doctor --android-licenses
flutter doctor -v
``` 

If `flutter build apk` fails with an Android SDK error, follow the Flutter setup guide: https://flutter.dev/docs/get-started/install/windows

### Quick run commands

Web dev server (from `web/`):
```bash
cd web
npm install
npm run dev
```

Flutter mobile (from `mobile/`):
```bash
cd mobile
flutter pub get
# run on connected device/emulator
flutter run
```

### What I changed

- Finished Flutter analyzer cleanup so `flutter analyze` reports no issues.
- Finalized a few UI widgets and the `About` page content.

If you'd like, I can commit these changes to git, prepare a zip archive, or attempt an APK build (requires Android SDK). Tell me which you'd prefer next.

## Android & iOS Permission Notes

If you use `permission_handler` and `image_picker` (added to the Flutter app), make sure your platform manifests include the required usage descriptions and permissions.

- Android manifest (add to `mobile/android/app/src/main/AndroidManifest.xml`):

```xml
<!-- permissions for camera and gallery access -->
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
<!-- Android 13+ media images permission -->
<uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />
```

- iOS Info.plist (add to `mobile/ios/Runner/Info.plist`):

```xml
<key>NSCameraUsageDescription</key>
<string>App needs access to the camera to take crop photos for analysis.</string>
<key>NSPhotoLibraryUsageDescription</key>
<string>App needs access to your photo library to select crop images for analysis.</string>
<key>NSPhotoLibraryAddUsageDescription</key>
<string>App needs access to save photos (if enabled).</string>
```

Notes and tips:

- After changing `pubspec.yaml` to add `permission_handler` or `image_picker`, run:

```bash
cd mobile
flutter pub get
```

- For iOS, open the iOS workspace and run `pod install` or build from Xcode to update CocoaPods:

```bash
cd mobile/ios
pod install
```

- If a permission is permanently denied on the device, we recommend opening app settings and enabling the permission manually — the app's permission UI will prompt the user and can link to app settings.

- Android target SDK 33+ should include the `READ_MEDIA_IMAGES` permission for image-only access on Android 13 and above.

If you want, I can add these notes to a dedicated `mobile/README.md` as well, or automatically insert more granular permission-request UI flows.
