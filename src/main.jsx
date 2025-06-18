import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // 👈 Using App that already includes all routes
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />  {/* 👈 This will handle routing internally */}
  </React.StrictMode>
);
