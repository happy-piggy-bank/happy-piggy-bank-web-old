import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';

import MainScreen from './components/mainScreen';
import LoginScreen from './components/members/loginScreen';
import JoinScreen from './components/members/joinScreen';
import CreateBankScreen from './components/bank/createBankScreen';

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route index element={<MainScreen/>} />
          <Route path="login" element={<LoginScreen/>} />
          <Route path="join" element={<JoinScreen/>} />
          <Route path="create" element={<CreateBankScreen/>} />
      </Routes>
    </div>
  );
}

export default App;
