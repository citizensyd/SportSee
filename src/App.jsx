import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './app.styles';
import Home from './pages/Home';

const App = () => {
  console.log('appel de app');
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="user/:userId" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;