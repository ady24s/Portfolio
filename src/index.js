import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'; // Correct import path
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
