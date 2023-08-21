import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.styles.js';
import App from './App';
import Home from './pages/Home.js';
// Importer les composants de la bibliothèque react-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { GlobalStyle } from './index.styles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <App>
          <Routes>
            <Route path="/" element={<Home />} />
{/*             <Route path="/fiche-logement/:id" element={<FicheLogement />} />
            <Route path="/a-propos" element={<APropops />} />
            <Route path="*" element={<NotFound />} /> */}
          </Routes>
      </App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
