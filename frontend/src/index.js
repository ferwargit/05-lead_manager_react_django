import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';

window.onload = function() {
  const rootElement = document.getElementById('root');
  if(rootElement) {
    createRoot(rootElement).render(<App />);
  } else {
    console.error('Element with id "root" not found');
  }
}