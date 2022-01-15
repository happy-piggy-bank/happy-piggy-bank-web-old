import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './css/app.css';

import MainScreen from './components/mainScreen';
import LoginScreen from './components/members/loginScreen';
import JoinScreen from './components/members/joinScreen';
import MyPageScreen from './components/members/myPageScreen';
import CreateBankScreen from './components/bank/createBankScreen';
import BankListScreen from './components/bank/bankListScreen';
import BankDetailScreen from './components/bank/bankDetailScreen';

function App() {
  return (
    <div className="mainContainer">
      <Routes>
        <Route index element={<MainScreen/>} />
          <Route path="login" element={<LoginScreen/>} />
          <Route path="join" element={<JoinScreen/>} />
          <Route path="myPage" element={<MyPageScreen/>}/>
          <Route path="create" element={<CreateBankScreen/>} />
          <Route path="bank" element={<BankListScreen/>} />
          <Route path="bank/:bankId" element={<BankDetailScreen/>}/>
      </Routes>
    </div>
  );
}

export default App;
