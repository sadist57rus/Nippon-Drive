import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { PreferencesProvider } from './context/PreferencesContext';
import './index.css';
import { Capacitor } from '@capacitor/core';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </ThemeProvider>
);


// Warn Android users when the embedded WebView lacks CSS features used by the app.
// CSS fallbacks keep the interface usable; updating Android System WebView/Chrome
// restores the intended accent blending on older devices.
if (typeof window !== 'undefined' && /Android/i.test(navigator.userAgent)) {
  const supportsColorMix =
    typeof CSS !== 'undefined' &&
    CSS.supports('color', 'color-mix(in srgb, red, blue)');

  if (!supportsColorMix) {
    window.addEventListener(
      'load',
      () => {
        window.alert(
          'Ваш Android WebView устарел и может отображать некоторые цвета иначе. Обновите Android System WebView и Google Chrome через Google Play, затем перезапустите Nippon-Drive.'
        );
      },
      { once: true }
    );
  }
}

// Register the local offline cache. The first visit needs a connection; later visits can use cached assets.
if (typeof window !== 'undefined' && !Capacitor.isNativePlatform() && 'serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((error) => {
      console.warn('Offline cache registration failed:', error);
    });
  });
}
