import React from 'react';
import piggyBankImg from '../images/piggy_bank.png';
import '../css/mainScreen.css';

import MainHeader from './common/mainHeader';
import MainFooter from './common/mainFooter';
import PrimaryButton from './common/primaryButton';

const MainScreen = () => {
    return (
        <div className='mainScreenContainer'>
            <MainHeader/>
            <div className='bodyArea'>
                <img src={piggyBankImg} width="60%" alt='돼지 저금통' />
                <p>&nbsp;</p>
                <p>0명의 사람들이</p>
                <p>0개의 행복했던 순간과 함께</p>
                <p>0원을 저금하고 있어요</p>
                <p>&nbsp;</p>
                <PrimaryButton buttonText="시작하기" onClick={() => alert('아직 오픈 전이에요!')} />
            </div>
            <MainFooter/>
        </div>
    );
}

export default MainScreen;