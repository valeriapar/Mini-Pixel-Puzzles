import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GiocatoreProvider } from './GiocatoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GiocatoreProvider>
      <App />
    </GiocatoreProvider>
  </React.StrictMode>
);

reportWebVitals();
