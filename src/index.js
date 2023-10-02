import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import './pass'
import reportWebVitals from './reportWebVitals';
// import Pass from './pass';
import PassWord from './PassWord';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PassWord/>
  </React.StrictMode>
);

reportWebVitals();
