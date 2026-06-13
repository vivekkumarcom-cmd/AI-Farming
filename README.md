# Smart Farming Demo

A standalone React + Vite web application designed for farm awareness and management.
Optimized for desktop and mobile browsers.

## Getting Started

### Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Run the Dashboard

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

### Build for Production

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
