import React from 'react';

interface LandingPageProps {
  onStart: () => void;
  language: 'en' | 'hi';
  t: any;
}

export default function LandingPage({ onStart, language, t }: LandingPageProps) {
  return (
    <div className="landing-wrapper" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🌿</div>
      <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
        {t.appName}
      </h1>
      <p style={{ fontSize: '1.5rem', opacity: 0.9, marginBottom: '2.5rem' }}>
        {t.appSubtitle}
      </p>
      
      <div style={{ maxWidth: '600px', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
        {language === 'en' ? (
          "Empowering farmers with real-time weather insights, intelligent crop tracking, and AI-powered disease detection. Join us in building a sustainable future for agriculture."
        ) : (
          "किसानों को वास्तविक समय के मौसम की जानकारी, बुद्धिमान फसल ट्रैकिंग और AI-संचालित रोग पहचान के साथ सशक्त बनाना। कृषि के लिए एक सतत भविष्य बनाने में हमारे साथ जुड़ें।"
        )}
      </div>

      <button 
        onClick={onStart}
        className="primary-button"
        style={{ 
          padding: '15px 40px', 
          fontSize: '1.25rem', 
          backgroundColor: '#ffc107', 
          color: '#333',
          border: 'none'
        }}
      >
        {language === 'en' ? 'Get Started' : 'शुरू करें'}
      </button>
    </div>
  );
}