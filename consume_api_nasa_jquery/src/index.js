import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
import NasaApiConsuming from './components/NasaApiConsuming';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NasaApiConsuming />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
