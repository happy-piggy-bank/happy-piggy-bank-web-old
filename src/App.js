import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';

import MainScreen from './components/mainScreen'

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route path="/" element={<MainScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
