import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Set the document title
document.title = "IBR Automotive Refrigeration";

// Create and set the favicon
const link = document.createElement('link');
link.rel = 'icon';
link.href = `${process.env.PUBLIC_URL}/images/Excavator.webp`; // assuming images are in public/images
document.head.appendChild(link);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
